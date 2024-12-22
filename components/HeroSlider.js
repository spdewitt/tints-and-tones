"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider({ sliderData }) {
  console.log(sliderData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  // If there's no sliderData or no slides, render nothing or fallback
  if (!sliderData?.slides?.length) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {sliderData.slides.map((slide, i) => (
          <div key={i}>
            {slide.image?.asset?.url && (
              <Image
                src={slide.image.asset.url}
                alt={slide.altText || `Slide ${i + 1}`}
                className="h-auto w-full object-cover"
                width={1200}
                height={800}
                priority={i === 0} // Prioritize first slide
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
