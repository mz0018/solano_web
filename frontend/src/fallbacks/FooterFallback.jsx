const FooterFallback = () => {
  return (
    <footer className="bg-gray-100 p-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="h-4 w-48 bg-gray-300 rounded mb-3"></div>
          <div className="h-3 w-64 bg-gray-300 rounded"></div>
        </div>

        <div>
          <div className="h-4 w-40 bg-gray-300 rounded mb-3"></div>
          <div className="h-3 w-64 bg-gray-300 rounded mb-2"></div>
          <ul className="space-y-2">
            <li className="h-3 w-32 bg-gray-300 rounded"></li>
            <li className="h-3 w-28 bg-gray-300 rounded"></li>
            <li className="h-3 w-36 bg-gray-300 rounded"></li>
          </ul>
        </div>

        <div>
          <div className="h-4 w-44 bg-gray-300 rounded mb-3"></div>
          <ul className="space-y-2">
            <li className="h-3 w-40 bg-gray-300 rounded"></li>
            <li className="h-3 w-36 bg-gray-300 rounded"></li>
            <li className="h-3 w-48 bg-gray-300 rounded"></li>
            <li className="h-3 w-32 bg-gray-300 rounded"></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterFallback
