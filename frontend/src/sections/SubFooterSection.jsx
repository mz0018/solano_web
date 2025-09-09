const SubFooterSection = () => {
    const agencies = [
        { name: "Department of Information and Communications Technology (DICT)", path: "/img/agencies/DICT.png", url: "https://dict.gov.ph/" },
        { name: "Department of the Interior and Local Government (DILG)", path: "/img/agencies/DILG.png", url: "https://dilg.gov.ph/" },
        { name: "Department of Science and Technology (DOST)", path: "/img/agencies/DOST.png", url: "https://asti.dost.gov.ph/" },
        { name: "Integrated Government Philippines (iGov)", path: "/img/agencies/IGOV.png", url: "https://i.gov.ph/" },
    ];

    return (
        <section
            className="bg-no-repeat bg-center bg-cover py-6"
            aria-labelledby="partner-agencies"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 id="partner-agencies" className="text-center text-lg font-semibold mb-4">
                    Attached Agencies
                </h2>
                <ul className="flex flex-wrap justify-center items-center gap-6">
                    {agencies.map(({ name, path, url }) => (
                        <li key={name} className="flex justify-center items-center">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={path}
                                    alt={`${name} logo`}
                                    title={name}
                                    loading="lazy"
                                    className="h-24 md:h-48 object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SubFooterSection;
