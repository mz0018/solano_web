import { ChevronDown, ChevronRight } from "../icons/lucide_icons";

export const Nav_links = [
  { name: "Home", icon: null },
  {
    name: "About us",
    icon: <ChevronDown className="h-4 mt-1" />,
    submenu: [
      { name: "Municipal Profile", icon: <ChevronRight className="h-4 mt-1" /> },
      { name: "Barangay Profiles", icon: <ChevronRight className="h-4 mt-1" /> },
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
