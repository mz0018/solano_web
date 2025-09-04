const CarouselChildSection = ({ currentIndex }) => {

    return (
        <div className="bg-gray-900/50 absolute bottom-0 p-4 rounded-sm">
            <h1 className="text-white text-xs md:text-xl font-medium">{currentIndex.alt}</h1>
        </div>
    )
}

export default CarouselChildSection