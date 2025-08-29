
const SidebarComponents = ({ links, onClose }) => {

    return (
        <div
        className="fixed top-0 right-0 h-full w-48 bg-red-500 p-5 z-50"
        >
            <ul>
                <button onClick={onClose}>Close Sidebar</button>
            </ul>
            {links.map((link, index) => (
                <li key={index}>{link.name}</li>
            ))}  
        </div>
    )
}

export default SidebarComponents;