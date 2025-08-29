import { useState, Suspense, lazy } from "react";
import { Nav_links } from "./NavlinkStructure";
const SidebarComponents = lazy(() => import('./SidebarComponents'));
const SidebarFallback = lazy(() => import('../fallbacks/SidebarFallback'));

import { Menu } from "../icons/lucide_icons";

const NavbarComponent = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleDrawer = () => setIsSidebarOpen(prev => !prev);

  return (
    <nav className="bg-[#FBFFFF] shadow-xl py-4 md:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center space-x-2">
          <img
            src="/img/logo.png"
            alt="LGU Solano Logo"
            className="h-12 md:h-16 lg:h-24 w-auto"
          />
          <span className="font-bold text-lg text-gray-700 truncate">LGU SOLANO</span>
        </div>

        
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {Nav_links.map((link, index) => (
            <li
              key={index}
              className="relative group cursor-pointer text-sm md:text-md lg:text-lg"
            >
              <div className="flex items-center gap-1 hover:text-gray-500 transition-all">
                <span>{link.name}</span>
                {link.icon}
              </div>

              {link.submenu && (
                <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-md rounded-md py-2 z-50 hidden group-hover:block group-hover:flex flex-col">
                  {link.submenu.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
        onClick={toggleDrawer} 
        className="md:hidden cursor-pointer"
        >
          <Menu />
        </button>

        {isSidebarOpen && (
            <Suspense fallback={SidebarFallback}>
                <SidebarComponents
                links={Nav_links}
                onClose={toggleDrawer}
                />
            </Suspense>
        )}

      </div>
    </nav>
  );
};

export default NavbarComponent;
