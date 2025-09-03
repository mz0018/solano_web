const CarouselFallback = () => {

    return (
        <div className="relative w-full h-[400px] overflow-hidden" role="region" aria-label="Image Carousel">
            <img
                className="w-full h-full object-fill"
            />
        </div>
    );
};

export default CarouselFallback;
