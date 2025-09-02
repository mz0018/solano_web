import { useState, useRef, useEffect } from "react";

const SidebarComponents = ({ links, onClose }) => {
  const [currentView, setCurrentView] = useState("main");
  const [submenuItems, setSubmenuItems] = useState([]);
  const [contentItems, setContentItems] = useState([]);

  const sidebarRef = useRef();

  useEffect(() => {
    
    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            onClose();
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

  }, [onClose]);   

  const handleOpenSubmenu = (submenu) => {
    if (submenu) {
      setSubmenuItems(submenu);
      setCurrentView("submenu");
    }
  };

  const handleOpenContents = (contents) => {
    if (contents) {
      setContentItems(contents);
      setCurrentView("content");
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
  };

  return (
    <div
    ref={sidebarRef} 
    className="lg:hidden bg-[#FBFFFF] fixed top-0 right-0 h-full w-80 p-5 z-50 shadow-lg overflow-y-auto">
      <div className="mb-4 flex justify-between items-center">
        {currentView !== "main" ? (
          <button onClick={handleBack} className="text-blue-600">
            Go Back
          </button>
        ) : (
          <button onClick={onClose} className="text-red-600">
            Close
          </button>
        )}
      </div>

      <ul className="text-gray-700 font-medium space-y-6">
        {currentView === "main" &&
          links.map((link, index) => (
            <li
              key={index}
              className="flex items-center justify-between hover:text-gray-500 cursor-pointer"
              onClick={() => handleOpenSubmenu(link.submenu)}
            >
              <span>{link.name}</span>
              {link.icon && <span>{link.icon}</span>}
            </li>
          ))}

        {currentView === "submenu" &&
          submenuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between hover:text-gray-500 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOpenContents(item.contents)}
            >
              <span>{item.name}</span>
              {item.icon && <span>{item.icon}</span>}
            </li>
          ))}

        {currentView === "content" &&
          contentItems.map((content, index) => (
            <li
              key={index}
              className="px-2 py-1 text-gray-700 hover:text-gray-500 hover:bg-gray-100 rounded cursor-pointer"
            >
              {content.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SidebarComponents;
