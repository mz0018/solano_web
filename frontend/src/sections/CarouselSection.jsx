import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "../icons/lucide_icons";

const CarouselSection = () => {
    const images = [
        { path: "/img/carousel/two.webp", alt: "Second slide" },
        { path: "/img/carousel/one.webp", alt: "First slide" },
        { path: "/img/carousel/three.webp", alt: "Third slide" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(goToNext, 3500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        images.forEach((img) => {
            const preload = new Image();
            preload.src = img.path;
        });
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div
            className="relative w-full max-h-[200px] md:max-h-[400px] lg:max-h-[500px] overflow-hidden shadow-xl"
            role="region"
            aria-label="Image Carousel"
        >
            <figure className="w-full h-full">
                <img
                    key={images[currentIndex].path}
                    src={images[currentIndex].path}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover"
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                />
                <figcaption className="sr-only">{images[currentIndex].alt}</figcaption>
                <div className="absolute inset-0 bg-gray-500/60 z-10" />
            </figure>

            <button
                onClick={goToPrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-black px-3 py-2 rounded z-20"
                aria-label="Previous Slide"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-black px-3 py-2 rounded z-20"
                aria-label="Next Slide"
            >
                <ChevronRight />
            </button>
        </div>
    );
};

export default CarouselSection;
