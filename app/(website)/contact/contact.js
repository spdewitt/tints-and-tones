"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Tints & Tones Painting",
      subject: "Tints & Tones Painting Contact Form"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <Container>
      <div
        id="contact-form"
        className="mt-4 rounded-lg border border-gray-200 p-6 shadow-sm">
        <h1 className="mb-4 text-xl font-semibold text-gray-800">
          Get in Touch with Rich
        </h1>
        <p className="mb-6 text-gray-700">
          Have a question, want a free quote, or ready to start your
          next project? Fill out the form below and Rich will get back
          to you soon.
        </p>
        <form
          action="/api/contact"
          method="POST"
          className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Preferred Method of Contact */}
          <div>
            <span className="mb-2 block font-medium text-gray-700">
              Preferred Method of Contact
            </span>
            <div className="mb-2 flex items-center">
              <input
                type="radio"
                id="contactEmail"
                name="preferredContact"
                value="Email"
                required
                className="mr-2"
              />
              <label htmlFor="contactEmail">Email</label>
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="radio"
                id="contactCall"
                name="preferredContact"
                value="Call"
                className="mr-2"
              />
              <label htmlFor="contactCall">Call</label>
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="radio"
                id="contactText"
                name="preferredContact"
                value="Text"
                className="mr-2"
              />
              <label htmlFor="contactText">Text</label>
            </div>
          </div>

          {/* Services Interested In */}
          <div>
            <span className="mb-2 block font-medium text-gray-700">
              Which services are you interested in?
            </span>
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                id="interior"
                name="services"
                value="Interior Painting & Cabinet Staining"
                className="mr-2"
              />
              <label htmlFor="interior">
                Interior Painting & Cabinet Staining
              </label>
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                id="exterior"
                name="services"
                value="Exterior Painting & Fence Staining"
                className="mr-2"
              />
              <label htmlFor="exterior">
                Exterior Painting & Fence Staining
              </label>
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                id="murals"
                name="services"
                value="Custom Murals & Artistic Finishes"
                className="mr-2"
              />
              <label htmlFor="murals">
                Custom Murals & Artistic Finishes
              </label>
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                id="fineArt"
                name="services"
                value="Fine Art Commissions"
                className="mr-2"
              />
              <label htmlFor="fineArt">Fine Art Commissions</label>
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                id="other"
                name="services"
                value="Other"
                className="mr-2"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-gray-700">
              Describe Your Project or Ask a Question
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"></textarea>
          </div>

          <button
            type="submit"
            className="rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </Container>
  );
}
