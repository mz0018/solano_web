import { ChevronDown, ChevronRight } from "../icons/lucide_icons";

export const Nav_links = [
  { name: "Home", icon: null, submenu: null, link: "/" },

  {
    name: "About us",
    icon: <ChevronDown className="h-4 mt-1" />,
    submenu: [
      //Municipal Profile
      { 
        name: "Municipal Profile",
        icon: <ChevronRight className="h-4 mt-1" />,
        contents: [
          { title: "Official Seal and Its Meaning" },
          { title: "Vision, Mission, Goals and Objective" },
          { title: "Historical Background" },
          { title: "List of Elected Officials Since Its Creation" },
          { title: "Political Subdivision" },
          { title: "Geographical Location/ Land Area" },
          { title: "Social Composition" },
          { title: "Schools/ Colleges" },
          { title: "Health, Social Welfare and Nutrition" },
          { title: "Economic Resources" },
          { title: "Tourism" },
          { title: "Communications" },
          { title: "Power and Water Facilities" },
          { title: "Transportation" },
          { title: "Other Services and Facilities" }
        ]
      },
      //Barangay Profile
      { 
        name: "Barangay Profiles",
        icon: <ChevronRight className="h-4 mt-1" />,
        contents: [
          { title: "Barangay Aggub" },
          { title: "Barangay Bagahabag" },
          { title: "Barangay Bangaan" },
          { title: "Barangay Bangar" },
          { title: "Barangay Bascaran" },
          { title: "Barangay Communal" },
          { title: "Barangay Concepcion" },
          { title: "Barangay Curifang" },
          { title: "Barangay Dadap" },
          { title: "Barangay Lactawan" },
          { title: "Barangay Osmeña" },
          { title: "Barangay PD Galima" },
          { title: "Barangay Poblacion North" },
          { title: "Barangay Poblacion South" },
          { title: "Barangay Quezon" },
          { title: "Barangay Quirino" },
          { title: "Barangay Roxas" },
          { title: "Barangay San Juan" },
          { title: "Barangay San Luis" },
          { title: "Barangay Tucal" },
          { title: "Barangay Uddiawan" },
          { title: "Barangay Wacal" },
        ]
      },
      //Local Offices
      { 
        name: "Local Offices",
        icon: <ChevronRight className="h-4 mt-1" />,
        contents: [
          { title: "Municipal Accounting Office (MACCO)" },
          { title: "Municipal Agriculture Office (MAGRO)" },
          { title: "Municipal Assessor's Office (MAO)" },
          { title: "Municipal Budget Office (MBO)" },
          { title: "Municipal Civil Registrar's Office (MCRO)" },
          { title: "Municipal Disaster Risk Reduction and Management Office (MDRRMO)" },
          { title: "Municipal Engineering Office (MEO)" },
          { title: "Municipal General Services Office (MGSO)" },
          { title: "Municipal Health Office" },
          { title: "Municipal Mayor's Office-Business Permits and Licensing Section (MMO-BPLS)" },
          { title: "Municipal Mayor's Office-Human Resources Management Section (MMO-HRMS)" },
          { title: "Municipal Planning and Development Office (MPDO)" },
          { title: "Municipal Social Welfare and Development Office (MSWDO)" },
          { title: "Municipal Treasurer's Office (MTO)" },
          { title: "Solano Economic Enterprises and Development Office (SEEDO)-Public Market" },
          { title: "Solano Economic Enterprises and Development Office (SEEDO)-Slaughterhouse" }
      ]
      },
      //List of LGGU Officials
      { name: "List of LGU Officials", icon: null },
      //Executive Branch
      { name: "Executive Branch", icon: null },
      //Legislative Branch
      { 
        name: "Legislative Branch",
        icon: <ChevronRight className="h-4 mt-1" />,
        contents: [
          { title: "Ordinances 2020" },
          { title: "Resolutions 2020" },
      ]
      },
    ],
    link: null
  },

  { name: "Services", icon: null, submenu: null, link: "/services" },
  {
    name: "Transparency",
    icon: <ChevronDown className="h-4 mt-1" />,
    submenu: [
      //Full Disclosure Policy
      { name: "Full Disclosure Policy", icon: null },
      //Programs and Projects
      { 
        name: "Programs and Projects",
        icon: <ChevronRight className="h-4 mt-1" />,
        contents: [
          { title: "Road Development Projects" },
          { title: "Project Monitoring" },
          { title: "Completed Projects" },
      ]
      },
    ],
    link: null
  },
  { name: "Downloadable Forms", icon: null, submenu: null, link: "/forms" },
  { name: "Contact", icon: null, submenu: null, link: "/contact" },
];
