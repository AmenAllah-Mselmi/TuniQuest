import  { useState, useEffect } from 'react'; 
import image1 from "../assets/places/carthage-1.webp";
import image2 from "../assets/places/Carthage-2.jpg";
import image3 from "../assets/places/carthage_romaine.jpg";
import image4 from "../assets/places/dogga3.jpg";
import image5 from "../assets/places/dougga.webp";
import image6 from "../assets/places/kairouan1.jfif";
import image7 from "../assets/places/kairouan2.jpg";
import image8 from "../assets/places/images.jfif";
const AccueilCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { img: image1, alt: "Carousel Image 1" },
    { img: image2, alt: "Carousel Image 2" },
    { img: image3, alt: "Carousel Image 3" },
    { img: image4, alt: "Carousel Image 4" },
    { img: image5, alt: "Carousel Image 5" },
    { img: image6, alt: "Carousel Image 6" },
    { img: image7, alt: "Carousel Image 7" },
    { img: image8, alt: "Carousel Image 8" },
  ];

  // Automatic slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-screen overflow-hidden mt-16 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-blue-700 mb-3 ">Places to discover</h1>
      <div id="default-carousel" className="relative w-7/12 h-64 md:h-96 " data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${
                currentSlide === index ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <img
                src={slide.img}
                className="w-full h-full object-cove bg-containr"
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-current={currentSlide === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default AccueilCarousel;

