import { useState, Suspense, lazy } from "react";
const SidebarComponents = lazy(() => import('./SidebarComponents'));
const SidebarFallback = lazy(() => import('../fallbacks/SidebarFallback'));

const NavbarComponent = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const links = [
        { name: 'Home' },
        { name: 'About us' },
        { name: 'Services' },
        { name: 'Transparency' },
        { name: 'Downloadable Form' },
        { name: 'Contact' }
    ]

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
          <span className="font-bold text-lg text-gray-800 truncate">LGU SOLANO</span>
        </div>

        
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links.map((link, index) => (
            <li key={index} className="truncate cursor-pointer" >{link.name}</li>
          ))}
        </ul>

        <button
        onClick={toggleDrawer} 
        className="md:hidden p-2 bg-green-500 text-white rounded-md"
        >Drawer</button>

        {isSidebarOpen && (
            <Suspense fallback={SidebarFallback}>
                <SidebarComponents
                links={links}
                onClose={toggleDrawer}
                />
            </Suspense>
        )}

      </div>
    </nav>
  );
};

export default NavbarComponent;
