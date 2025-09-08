import { User } from "lucide-react";
import { Clock8, ThumbsUpIcon, Users2 } from "../icons/lucide_icons";

const WhySolanoSection = () => {

    const content = [
        {
            title: "why in the city of solano",
            description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
            icon: <Clock8 />,
            link: "", 
        },
        {
            title: "what to expect in city of solano",
            description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
            icon: <ThumbsUpIcon />,
            link: "", 
        },
        {
            title: "business incentives",
            description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
            icon: <User />,
            link: "", 
        },
    ];

    return (
        <section
        className="bg-blue-700 py-16 px-4 sm:px-6 lg:px-20"
        aria-labelledby="what-we-do-heading"
        >
            <div className="max-w-4xl mx-auto text-center mb-12 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider">
                    Why
                </p>
                <h2
                    id="what-we-do-heading"
                    className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
                >
                    Solano
                </h2>
                <p className="text-base max-w-2xl mx-auto">
                    The City of Solano, being the heart of the Province of Nueva Vizcaya and referred to as the gateway to vast Cagayan Valley Region, is the most viable site for industry development in the country. With its strategic location, strong investment incentives, stable political climate and business-friendly environment, come and discover the endless possibilities in the City of Solano.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {content.map(({ title, description, icon, link }, index) => (
                    <article
                        key={index}
                        onClick={() => console.log(title)}
                        className="group bg-blue-50 border border-blue-100 rounded-lg p-6 shadow-sm hover:shadow-xl transition duration-300"
                    >
                        <div 
                        className="flex items-center gap-3 mb-4 text-blue-600">
                            <span className="text-3xl text-gray-500">{icon}</span>
                            <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold line-clamp-1 text-gray-800 capitalize">{title}</h3>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base mb-6 line-clamp-2">{description}</p>
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
    )
}

export default WhySolanoSection;
