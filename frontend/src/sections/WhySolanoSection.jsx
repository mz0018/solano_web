import { User } from "lucide-react";
import { Clock8, ThumbsUpIcon } from "../icons/lucide_icons";

const WhySolanoSection = () => {
    const content = [
        {
            title: "why in the city of solano",
            description:
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
            icon: <Clock8 />,
            link: "",
        },
        {
            title: "what to expect in city of solano",
            description:
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
            icon: <ThumbsUpIcon />,
            link: "",
        },
        {
            title: "business incentives",
            description:
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
            icon: <User />,
            link: "",
        },
    ];

    return (
        <section
            className="bg-gradient-to-br from-blue-700 to-blue-800 py-16 px-4 sm:px-6 lg:px-20"
            aria-labelledby="what-we-do-heading"
        >
            <div className="max-w-4xl mx-auto text-center mb-12 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                    Why
                </p>
                <h2
                    id="what-we-do-heading"
                    className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
                >
                    Solano
                </h2>
                <p className="text-base max-w-2xl mx-auto text-blue-100">
                    The City of Solano, being the heart of the Province of Nueva Vizcaya and referred to as the gateway to the vast Cagayan Valley Region, is the most viable site for industry development in the country. With its strategic location, strong investment incentives, stable political climate, and business-friendly environment, come and discover the endless possibilities in the City of Solano.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {content.map(({ title, description, icon, link }, index) => (
                    <article
                        key={index}
                        onClick={() => console.log(title)}
                        className="group bg-white/80 backdrop-blur border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4 text-blue-600">
                            <span className="text-3xl">{icon}</span>
                            <h3 className="text-xl font-semibold text-gray-800 capitalize">
                                {title}
                            </h3>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base mb-6">
                            {description}
                        </p>
                        <a
                            href={link}
                            className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition"
                        >
                            Learn more &rarr;
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default WhySolanoSection;
