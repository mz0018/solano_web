const SubFooterFallback = () => {
    return (
        <section
            className="bg-no-repeat bg-center bg-cover py-6 animate-pulse"
            aria-labelledby="partner-agencies-fallback"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 id="partner-agencies-fallback" className="text-center text-lg font-semibold mb-4 text-gray-400">
                    Attached Agencies
                </h2>
                <ul className="flex flex-wrap justify-center items-center gap-6">
                    {[...Array(4)].map((_, idx) => (
                        <li key={idx} className="flex justify-center items-center">
                            <div className="h-24 w-24 md:h-32 md:w-32 bg-gray-300 rounded-full" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SubFooterFallback;
