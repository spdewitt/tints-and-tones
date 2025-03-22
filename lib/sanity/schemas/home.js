export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // SEO Fields
    {
      name: "heroSlider",
      title: "Hero Slider",
      type: "object",
      fields: [
        {
          name: "slides",
          title: "Slides",
          type: "array",
          description: "Add 1-5 images for the hero slider",
          validation: Rule => Rule.min(1).max(5).required(),
          of: [
            {
              type: "object",
              title: "Slide",
              fields: [
                {
                  name: "image",
                  title: "Slide Image",
                  type: "image",
                  options: {
                    hotspot: true
                  }
                },
                {
                  name: "altText",
                  title: "Alt Text",
                  type: "string",
                  description:
                    "Describes the image for screen readers and SEO."
                }
              ],
              preview: {
                select: {
                  title: "altText",
                  media: "image"
                }
              }
            }
          ]
        }
      ]
    },
    // Hero Section
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description: "Main heading in the hero section."
    },

    {
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      description: "Subheading/description under the main heading."
    },
    {
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
      description: "Text for the call-to-action button."
    },
    {
      name: "heroButtonLink",
      title: "Hero Button Link",
      type: "string",
      description:
        "URL or anchor link for the hero button (e.g. '#contact-form')."
    },
    {
      name: "authorImage",
      title: "Author Image",
      type: "image",
      description: "A portrait or headshot of Rich Bennett.",
      options: {
        hotspot: true
      }
    },
    // Service Cards
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          title: "Service",
          fields: [
            {
              name: "image",
              title: "Service Image",
              type: "image",
              description: "Image for the service card."
            },
            {
              name: "title",
              title: "Service Title",
              type: "string",
              description:
                "Title of the service (e.g., Interior Painting)."
            },
            {
              name: "description",
              title: "Service Description",
              type: "text",
              description: "Short description of the service."
            },
            {
              name: "link",
              title: "Service Link",
              type: "string",
              description: "URL path to the service page."
            }
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              media: "image"
            }
          }
        }
      ],
      description: "Three service cards displayed on the homepage."
    },

    // About Rich Section
    {
      name: "aboutTitle",
      title: "About Section Title",
      type: "string",
      description: "Title for the about section."
    },
    {
      name: "aboutDescription",
      title: "About Description",
      type: "text",
      description:
        "A paragraph describing Rich's background and approach."
    },
    {
      name: "aboutQuote",
      title: "About Quote",
      type: "text",
      description: "Quote from Rich Bennett."
    },

    // Contact Form Section Intro
    {
      name: "contactTitle",
      title: "Contact Form Title",
      type: "string",
      description: "Heading for the contact form section."
    },
    {
      name: "contactDescription",
      title: "Contact Form Description",
      type: "text",
      description: "Introductory text before the contact form."
    },

    // Work Directly Section
    {
      name: "workDirectlyTitle",
      title: "Work Directly Section Title",
      type: "string",
      description: "Title for the 'Work Directly with Rich' section."
    },
    {
      name: "workDirectlyDescription",
      title: "Work Directly Section Description",
      type: "text",
      description:
        "Paragraph for the 'Work Directly with Rich' section."
    },

    // Serving Communities Section
    {
      name: "servingTitle",
      title: "Serving Communities Title",
      type: "string",
      description: "Title for the serving communities section."
    },
    {
      name: "servingDescription",
      title: "Serving Communities Description",
      type: "text",
      description: "Paragraph describing the service areas."
    },
    {
      name: "servingButtonText",
      title: "Serving Communities Button Text",
      type: "string",
      description: "Text for the button linking to the contact form."
    },
    {
      name: "servingButtonLink",
      title: "Serving Communities Button Link",
      type: "string",
      description: "Anchor link for the serving communities button."
    },

    // Partnering with Property Managers Section
    {
      name: "propertyManagersTitle",
      title: "Property Managers Title",
      type: "string",
      description: "Title for the property managers section."
    },
    {
      name: "propertyManagersDescription",
      title: "Property Managers Description",
      type: "text",
      description:
        "Paragraph explaining how Rich partners with property managers."
    }
  ],
  preview: {
    select: {
      title: "heroTitle"
    }
  }
};
