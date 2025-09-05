import { lazy, useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "../icons/lucide_icons";

const CarouselChildSection = lazy(() => import('./CarouselChildSection'))

const images = [
    { path: "/img/carousel/two.webp", alt: "One Solano, Love Solano" },
    { path: "/img/carousel/one.webp", alt: "Solano" },
    { path: "/img/carousel/three.webp", alt: "Municipal Hall" },
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
            className="relative w-full max-h-[200px] md:max-h-[400px] lg:max-h-[500px] overflow-hidden drop-shadow-2xl"
            role="region"
            aria-label="Image Carousel"
        >
            <figure className="relative w-full min-h-[200px] md:min-h-[400px] lg:min-h-[450px]">
                {images.map((img, index) => (
                    <img
                        key={img.path}
                        src={img.path}
                        alt={img.alt}
                        className={`w-full min-h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out
                            ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        aria-hidden={index !== currentIndex}
                    />
                ))}
                <figcaption className="sr-only">{images[currentIndex].alt}</figcaption>

                <div className="absolute inset-0 z-20 pointer-events-none" aria-hidden="true" >
                    <CarouselChildSection currentIndex={images[currentIndex]} />
                </div>

            </figure>

            <button
                onClick={goToPrev}
                className={`bg-gray-900/50 absolute top-1/2 left-4 transform -translate-y-1/2 
                    bg-opacity-70 hover:bg-opacity-90 text-white px-3 py-2 rounded-md 
                    z-20 cursor-pointer transition-opacity duration-300 ${isButtonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Previous Slide"
            >
                <ChevronLeft className="h-4 md:h-6 lg:h-10 w-4 md:w-6 lg:w-10" />
            </button>

            <button
                onClick={goToNext}
                className={`bg-gray-900/50 absolute top-1/2 right-4 transform -translate-y-1/2 
                    bg-opacity-70 hover:bg-opacity-90 text-white px-3 py-2 rounded-md 
                    z-20 cursor-pointer transition-opacity duration-300 ${isButtonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Next Slide"
            >
                <ChevronRight className="h-4 md:h-6 lg:h-10 w-4 md:w-6 lg:w-10" />
            </button>
        </div>
    );
};

export default CarouselSection;
