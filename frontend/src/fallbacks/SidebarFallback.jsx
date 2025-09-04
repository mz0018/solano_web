const SidebarFallback = () => {
  return (
    <div className="lg:hidden bg-[#FBFFFF] fixed top-0 right-0 h-full w-80 p-5 z-50 shadow-lg overflow-y-auto">
      <div className="space-y-4 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-24 mb-4" />

        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
        <div className="h-4 bg-gray-300 rounded w-2/3" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-4/5" />
      </div>
    </div>
  );
};

export default SidebarFallback;
