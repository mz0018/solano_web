import { useState, useRef, useEffect, Suspense, lazy } from "react";
import { Nav_links } from "./NavlinkStructure";
import { Menu } from "../icons/lucide_icons";
import SidebarFallback from "../fallbacks/SidebarFallback";

const SidebarComponents = lazy(() => import('./SidebarComponents'));

const NavbarComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [hoveredContent, setHoveredContent] = useState(null);

  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);

  const closeTimeout = useRef(null);
  const hoveredContentTimeout = useRef(null);

  const toggleDrawer = () => setIsSidebarOpen(prev => !prev);

  const handleMouseEnter = (index) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenSubmenuIndex(index);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenSubmenuIndex(null);
    }, 200);
  };

  const handleContentMouseEnter = (index) => {
    if (hoveredContentTimeout.current) clearTimeout(hoveredContentTimeout.current);
    setHoveredContent(index);
  };

  const handleContentMouseLeave = () => {
    hoveredContentTimeout.current = setTimeout(() => {
      setHoveredContent(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      if (hoveredContentTimeout.current) clearTimeout(hoveredContentTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      setShouldRenderSidebar(true);
    } else {
      const timeout = setTimeout(() => setShouldRenderSidebar(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isSidebarOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#FBFFFF] drop-shadow-2xl py-4 md:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/img/logo.png"
            alt="LGU Solano Logo"
            className="h-14 md:h-18 lg:h-24 w-auto"
          />
          <img
            src="/img/love,solano.png"
            alt="Love Solano"
            className="h-14 md:min-h-18 lg:h-24 w-auto mt-5"
          />
        </div>

        <ul className="hidden lg:flex space-x-6 lg:space-x-2 text-gray-700 font-medium">
          {Nav_links.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer text-sm md:text-md lg:text-lg"
            >
              <div className="truncate flex items-center gap-1 hover:text-gray-500 transition-all">
                <span>{link.name}</span>
                {link.icon}
              </div>

              {openSubmenuIndex === index && link.submenu && (
                <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-md rounded-md py-2 z-50 flex flex-col">
                  {link.submenu.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      onMouseEnter={() => handleContentMouseEnter(item.name)}
                      onMouseLeave={handleContentMouseLeave}
                      className="relative px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      <div className="flex items-center gap-1 hover:text-gray-500 transition-all">
                        <span>{item.name}</span>
                        <span className="ml-auto">{item.icon}</span>
                      </div>

                      {item.contents && hoveredContent === item.name && (
                        <ul className="absolute left-full top-0 ml-2 w-64 max-h-64 overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                          {item.contents.map((contentItem, contentIndex) => (
                            <li
                              key={contentIndex}
                              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 sm:px-4 sm:text-md md:px-5 md:text-lg"
                            >
                              {contentItem.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={toggleDrawer}
          className="lg:hidden cursor-pointer"
        >
          <Menu />
        </button>

        {shouldRenderSidebar && (
          <>
            <Suspense fallback={<SidebarFallback isVisible={isSidebarOpen} />}>
              <SidebarComponents
                links={Nav_links}
                onClose={toggleDrawer}
                isVisible={isSidebarOpen}
              />
            </Suspense>

            <div
              className={`
                fixed inset-0 bg-gray-500 transition-opacity duration-300 ease-in-out z-40
                ${isSidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}
              `}
              onClick={toggleDrawer}
            ></div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
