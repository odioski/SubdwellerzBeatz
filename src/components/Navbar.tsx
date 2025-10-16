import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="justify-between items-center h-16 flex">
          <div className="items-center flex">
            <div className="text-2xl font-bold text-red-600">Book Motives | Subdwellerz Beatz</div>
          </div>
          <div className="md:block hidden">
            <div className="ml-10 items-baseline flex space-x-8">
              <a href="/A16bX4MGHYDp8VUw1w2j#" className="text-gray-300 px-3 py-2 text-sm font-medium hover:text-indigo-400 transition-colors">About Us</a>
              <a href="/A16bX4MGHYDp8VUw1w2j#" className="text-gray-300 px-3 py-2 text-sm font-medium hover:text-indigo-400 transition-colors">Loops</a>
              <a href="/A16bX4MGHYDp8VUw1w2j#" className="text-gray-300 px-3 py-2 text-sm font-medium hover:text-indigo-400 transition-colors">Books</a>
              <a href="/A16bX4MGHYDp8VUw1w2j#" className="text-gray-300 px-3 py-2 text-sm font-medium hover:text-indigo-400 transition-colors">Beats</a>
              <a href="/A16bX4MGHYDp8VUw1w2j#" className="text-gray-300 px-3 py-2 text-sm font-medium hover:text-indigo-400 transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button type="button" className="hover:text-indigo-400 p-2 text-gray-300">
              <span dangerouslySetInnerHTML={{ __html: "<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_jupjS1ojR"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> </svg>" }} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
