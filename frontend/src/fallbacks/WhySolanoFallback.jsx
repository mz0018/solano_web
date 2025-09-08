const WhySolanoFallback = () => {
    return (
        <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    What We Do
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                    Doing Business
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                    The City of Solano, recognized as a business-friendly city, is here
                    to support you and your business. Be our partner. Do business in the
                    City of Solano.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, index) => (
                    <article
                        key={index}
                        className="bg-blue-50 border border-blue-100 rounded-lg p-6 shadow-sm animate-pulse"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
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
