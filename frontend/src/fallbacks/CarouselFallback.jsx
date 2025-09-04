const CarouselFallback = () => {
    return (
        <div
            className="relative w-full max-h-[200px] md:max-h-[400px] lg:max-h-[500px] min-h-[200px] md:min-h-[400px] lg:min-h-[450px] bg-gray-100 overflow-hidden shadow-xl flex items-center justify-center"
            role="region"
            aria-label="Image Carousel Loading"
        >
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );
};

export default CarouselFallback;
