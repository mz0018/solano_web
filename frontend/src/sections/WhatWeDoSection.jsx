import { HandCoins } from "lucide-react";
import { Handshake, FileUser } from "../icons/lucide_icons";

const WhatWeDoSection = () => {
    const services = [
        {
            title: "Business Registration",
            description:
                "Doing business has never been this fast and easy! Register your business online.",
            icon: <Handshake />,
            link: "#",
        },
        {
            title: "Application of Incentives",
            description:
                "Register and apply to avail our fiscal and non-fiscal incentives!",
            icon: <FileUser />,
            link: "#",
        },
        {
            title: "Cost of Doing Business",
            description:
                "Discover the relatively low wage rate and other related costs!",
            icon: <HandCoins />,
            link: "#",
        },
    ];

    return (
        <section
        className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-20"
        aria-labelledby="what-we-do-heading"
        >
            <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    What We Do
                </p>
                <h2
                    id="what-we-do-heading"
                    className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
                >
                    Doing Business
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                    The City of Solano, recognized as a business-friendly city, is here
                    to support you and your business. Be our partner. Do business in the
                    City of Solano.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(({ title, description, icon, link }, index) => (
                    <article
                        key={index}
                        onClick={() => console.log(title)}
                        className="group bg-blue-50 border border-blue-100 rounded-lg p-6 shadow-sm hover:shadow-lg transition duration-300"
                    >
                        <div 
                        className="flex items-center gap-3 mb-4 text-blue-600">
                            <span className="text-3xl">{icon}</span>
                            <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold line-clamp-1">{title}</h3>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base mb-6">{description}</p>
                        <a
                            href={link}
                            className="inline-block text-md font-bold text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition uppercase"
                        >
                            Learn more &rarr;
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDoSection;
