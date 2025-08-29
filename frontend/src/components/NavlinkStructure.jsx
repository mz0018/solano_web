import { ChevronDown } from "../icons/lucide_icons";

export const Nav_links = [
    { name: 'Home', icon: null },
    { 
        name: 'About us',
        icon: <ChevronDown className="h-4 mt-1" />,
        submenu: [
            'Municipal Profile',
            'Barangay Profiles',
            'Local Offices',
            'List of LGU Officials',
            'Executive Branch',
            'Legislative Branch'
        ]
    },
    { name: 'Services', icon: null },
    { 
        name: 'Transparency',
        icon: <ChevronDown className="h-4 mt-1" />,
        submenu: [
            'Full Disclosure Policy',
            'Programs and Projects'
        ]
    },
    { name: 'Downloadable Form', icon: null },
    { name: 'Contact', icon: null }
]