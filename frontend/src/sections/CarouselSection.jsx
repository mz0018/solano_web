import { useState, useEffect } from "react";

const CarouselSection = () => {
    const images = [
        { path: "/img/carousel/two.webp", alt: "Second slide" },
        { path: "/img/carousel/one.webp", alt: "First slide" },
        { path: "/img/carousel/three.webp", alt: "Third slide" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        const img = new Image();
        img.src = images[nextIndex].path;
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[400px] overflow-hidden" role="region" aria-label="Image Carousel">
            <figure>
                <picture>
                    <source srcSet={images[currentIndex].path} type="image/webp" />
                    <img
                        src={images[currentIndex].path.replace(".webp", ".jpg")}
                        alt={images[currentIndex].alt}
                        className="w-full h-full object-fill"
                        loading={currentIndex === 0 ? "eager" : "lazy"}
                    />
                </picture>
                <figcaption className="sr-only">
                    {images[currentIndex].alt}
                </figcaption>
            </figure>
        </div>
    );
};

export default CarouselSection;
