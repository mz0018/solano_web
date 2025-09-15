const FooterSection = () => {
  const abtgovlinks = [
    { title: "Gov.ph", url: "https://www.gov.ph/" },
    { title: "Open Data Portal", url: "https://www.gov.ph/data" },
    { title: "Official Gazette", url: "https://www.officialgazette.gov.ph/" },
  ];

  const governmentLinks = [
    { title: "Office of the President", url: "https://op-proper.gov.ph/" },
    { title: "Office of the Vice President", url: "https://www.ovp.gov.ph/" },
    { title: "Senate of the Philippines", url: "https://web.senate.gov.ph/" },
    { title: "House of Representatives", url: "https://www.congress.gov.ph/" },
    { title: "Supreme Court", url: "https://sc.judiciary.gov.ph/" },
    { title: "Court of Appeals", url: "https://ca.judiciary.gov.ph/" },
    { title: "Sandiganbayan", url: "https://sb.judiciary.gov.ph/" },
  ];

  return (
    <footer className="bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="uppercase font-semibold text-lg">
            Republic of the Philippines
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            All content is in the public domain unless otherwise stated.
          </p>
        </div>

        <div>
          <h2 className="uppercase font-semibold text-lg">About GovPH</h2>
          <p className="text-sm text-gray-600 mt-2">
            Learn more about the Philippine government, its structure, how it
            works, and the people behind it.
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            {abtgovlinks.map(({ title, url }) => (
              <li key={title}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${title}`}
                  className="hover:underline text-blue-600"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="uppercase font-semibold text-lg">Government Links</h2>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            {governmentLinks.map(({ title, url }) => (
              <li key={title}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${title}`}
                  className="hover:underline text-blue-600"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
