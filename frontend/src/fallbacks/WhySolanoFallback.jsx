const WhySolanoFallback = () => {
    return (
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                    Why
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                    Solano
                </h2>
                <p className="text-base max-w-2xl mx-auto text-blue-100">
                    The City of Solano, being the heart of the Province of Nueva Vizcaya and referred to as the gateway to the vast Cagayan Valley Region, is the most viable site for industry development in the country. With its strategic location, strong investment incentives, stable political climate, and business-friendly environment, come and discover the endless possibilities in the City of Solano.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, index) => (
                    <article
                        key={index}
                        className="bg-white/80 backdrop-blur border border-blue-100 rounded-xl p-6 shadow-md animate-pulse"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                            <div className="h-6 bg-blue-200 rounded w-2/3" />
                        </div>
                        <div className="space-y-2 mb-6">
                            <div className="h-4 bg-gray-300 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-5/6" />
                        </div>
                        <div className="h-4 bg-blue-300 rounded w-1/3" />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default WhySolanoFallback;
