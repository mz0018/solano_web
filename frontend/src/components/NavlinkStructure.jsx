import { ChevronDown, ChevronRight } from "../icons/lucide_icons";

export const Nav_links = [
  { name: "Home", icon: null },

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
          { title: "Barangay Curifang" }
        ]
      },
      { name: "Local Offices", icon: <ChevronRight className="h-4 mt-1" /> },
      { name: "List of LGU Officials", icon: null },
      { name: "Executive Branch", icon: null },
      { name: "Legislative Branch", icon: <ChevronRight className="h-4 mt-1" /> },
    ],
  },

  { name: "Services", icon: null },
  {
    name: "Transparency",
    icon: <ChevronDown className="h-4 mt-1" />,
    submenu: [
      { name: "Full Disclosure Policy", icon: null },
      { name: "Programs and Projects", icon: <ChevronRight className="h-4 mt-1" /> },
    ],
  },
  { name: "Downloadable Forms", icon: null },
  { name: "Contact", icon: null },
];
