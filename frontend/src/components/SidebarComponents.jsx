import { useState, useRef, useEffect } from "react";
import { ChevronLeft } from "lucide-react";

const SidebarComponents = ({ links, onClose, isVisible }) => {
  const [currentView, setCurrentView] = useState("main");
  const [submenuItems, setSubmenuItems] = useState([]);
  const [contentItems, setContentItems] = useState([]);
  const [activeTitle, setActiveTitle] = useState("");
  const [hasMounted, setHasMounted] = useState(false);

  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleOpenSubmenu = (submenu, name) => {
    if (submenu) {
      setSubmenuItems(submenu);
      setCurrentView("submenu");
      setActiveTitle(name);
    }
  };

  const handleOpenContents = (contents, name) => {
    if (contents) {
      setContentItems(contents);
      setCurrentView("content");
      setActiveTitle(name);
    }
  };

  const handleBack = () => {
    if (currentView === "content") {
      setCurrentView("submenu");
      setContentItems([]);
    } else if (currentView === "submenu") {
      setCurrentView("main");
      setSubmenuItems([]);
    }

    setActiveTitle("");
  };

  return (
    <div
      ref={sidebarRef}
      aria-hidden={!isVisible}
      className={`
        lg:hidden fixed top-0 right-0 h-full w-80 p-5 z-[60] bg-[#FBFFFF] shadow-lg overflow-y-auto
        transition-all transform duration-300 ease-in-out
        ${isVisible && hasMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
      `}
    >
      <div className="mb-4 flex flex-col gap-2">
        {currentView !== "main" && (
          <>
            <button
              onClick={handleBack}
              className="text-gray-500 flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft />
              <span>Go Back</span>
            </button>
            <div className="relative w-full overflow-hidden">
              <span className="text-gray-700 font-semibold block">{activeTitle}</span>
              <span
                className={`block h-0.5 bg-gray-300 origin-right transition-transform duration-500 ease-out ${
                  activeTitle ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </div>
          </>
        )}
      </div>

      <ul className="text-gray-700 font-medium space-y-6">
        {currentView === "main" &&
          links.map((link) => (
            <li
              key={link.name}
              className="flex items-center justify-between text-lg hover:text-gray-500 cursor-pointer"
              onClick={() => handleOpenSubmenu(link.submenu, link.name)}
            >
              <span>{link.name}</span>
              {link.icon && <span>{link.icon}</span>}
            </li>
          ))}

        {currentView === "submenu" &&
          submenuItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between text-md hover:text-gray-500 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOpenContents(item.contents, item.name)}
            >
              <span>{item.name}</span>
              {item.icon && <span>{item.icon}</span>}
            </li>
          ))}

        {currentView === "content" &&
          contentItems.map((content) => (
            <li
              key={content.title}
              className="px-2 py-1 text-gray-700 text-sm hover:text-gray-500 hover:bg-gray-100 rounded cursor-pointer"
            >
              {content.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SidebarComponents;
