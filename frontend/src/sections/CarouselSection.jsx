import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "../icons/lucide_icons";

const images = [
    { path: "/img/carousel/two.webp", alt: "Second slide" },
    { path: "/img/carousel/one.webp", alt: "First slide" },
    { path: "/img/carousel/three.webp", alt: "Third slide" },
];

images.forEach((img) => {
    const preload = new Image();
    preload.src = img.path;
});

const CarouselSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const startAutoSlide = () => {
        if (intervalRef.current === null) {
            intervalRef.current = setInterval(goToNext, 3500);
        }
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (!isHovered) {
            startAutoSlide();
        } else {
            stopAutoSlide();
        }

        return () => stopAutoSlide();
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsButtonVisible(true);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsButtonVisible(false);
        setIsHovered(false);
    };

    const showValue = (img, index) => {
        console.log(`Path: ${img} Index: ${index}`)
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-h-[200px] md:max-h-[400px] lg:max-h-[500px] overflow-hidden shadow-xl"
            role="region"
            aria-label="Image Carousel"
        >
            <figure className="relative w-full min-h-[200px] md:min-h-[400px] lg:min-h-[500px]">
                {images.map((img, index) => (
                    <img
                        key={img.path}
                        src={img.path}
                        alt={img.alt}
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out
                            ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        aria-hidden={index !== currentIndex}
                    />
                ))}
                <figcaption className="sr-only">{images[currentIndex].alt}</figcaption>

                <div className="absolute inset-0 bg-gray-500/50 z-20 pointer-events-none" aria-hidden="true" >
                    {/**Child Carousel content here */}
                    
                </div>

            </figure>

            <button
                onClick={goToPrev}
                className={`absolute top-1/2 left-4 transform -translate-y-1/2 
                    bg-opacity-70 hover:bg-opacity-90 text-white px-3 py-2 rounded 
                    z-20 cursor-pointer transition-opacity duration-300 ${isButtonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Previous Slide"
            >
                <ChevronLeft className="h-4 md:h-6 lg:h-10 w-4 md:w-6 lg:w-10" />
            </button>

            <button
                onClick={goToNext}
                className={`absolute top-1/2 right-4 transform -translate-y-1/2 
                    bg-opacity-70 hover:bg-opacity-90 text-white px-3 py-2 rounded 
                    z-20 cursor-pointer transition-opacity duration-300 ${isButtonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Next Slide"
            >
                <ChevronRight className="h-4 md:h-6 lg:h-10 w-4 md:w-6 lg:w-10" />
            </button>
        </div>
    );
};

export default CarouselSection;
