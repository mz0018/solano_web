const CarouselFallback = () => {

    return (
        <div
            className="relative w-full max-h-[200px] md:max-h-[400px] lg:max-h-[500px] overflow-hidden shadow-xl"
            role="region"
            aria-label="Image Carousel"
        >
            <img
                className="w-full h-full object-fill"
            />
        </div>
    );
};

export default CarouselFallback;
