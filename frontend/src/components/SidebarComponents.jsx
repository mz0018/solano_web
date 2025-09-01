
const SidebarComponents = ({ links, onClose }) => {

    return (
        <div
        className="bg-[#FBFFFF] fixed top-0 right-0 h-full w-48 p-5 z-50"
        >
            <ul className="text-gray-700 font-medium">
                <button onClick={onClose}>Close Sidebar</button>
                {links.map((link, index) => (
                    <li 
                        key={index}
                        className="relative cursor-pointer text-md"
                        onClick={() => console.log(link.submenu)}
                    >
                    {link.name}
                    </li>
                ))}  
            </ul>
        </div>
    )
}

export default SidebarComponents;