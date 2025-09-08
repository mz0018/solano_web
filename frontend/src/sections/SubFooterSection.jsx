const SubFooterSection = () => {
    const agencies = [
        { name: "Department of Information and Communications Technology (DICT)", path: "/img/agencies/DICT.png" },
        { name: "Department of the Interior and Local Government (DILG)", path: "/img/agencies/DILG.png" },
        { name: "Department of Science and Technology (DOST)", path: "/img/agencies/DOST.png" },
        { name: "Integrated Government Philippines (iGov)", path: "/img/agencies/IGOV.png" },
    ];

    return (
        <section
            className="bg-no-repeat bg-center bg-cover py-6"
            aria-labelledby="partner-agencies"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 id="partner-agencies" className="text-center text-lg font-semibold mb-4">
                    Partner Government Agencies
                </h2>
                <ul className="flex flex-wrap justify-center items-center gap-6">
                    {agencies.map(({ name, path }) => (
                        <li key={name} className="flex justify-center items-center">
                            <img
                                src={path}
                                alt={`${name} logo`}
                                title={`${name}`}
                                loading="lazy"
                                className="h-32 md:h-64 object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SubFooterSection;
