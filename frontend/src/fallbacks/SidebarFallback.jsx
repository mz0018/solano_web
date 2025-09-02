const SidebarFallback = () => {
  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-gray-200 flex items-center justify-center z-50">
      <span className="text-gray-700 font-semibold animate-pulse">
        Loading sidebar...
      </span>
    </div>
  );
};

export default SidebarFallback;
