import React, { useState } from 'react';


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home Style 1', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Shop Menu', href: '#' },
    { name: 'Blog News', href: '#' },
    { name: 'Pages Grid', href: '#' },
    { name: 'Contact Now', href: '#' },
  ];

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-md p-4 shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 h-20">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
            <div className="bg-red-500 p-1 rounded-sm">
                <span className="text-white font-bold text-xl italic">T</span>
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">TasteNest</span>
        </div>

        {/* Desktop Links (Hidden on small/tab screens) */}
        <div className="hidden lg:flex space-x-8 items-center font-bold text-sm">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-700 hover:text-red-500 transition">
              {item.name}
            </a>
          ))}
          <div className="relative cursor-pointer">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          <button className="bg-yellow-400 text-slate-950 px-6 py-3 rounded-md font-black shadow-md hover:bg-yellow-500 transition">Contact Us</button>
        </div>

        {/* Hamburger Icon for Mobile/Tab (Visible on smaller screens) */}
        <button 
          className="lg:hidden text-gray-700 focus:outline-none" 
          onClick={handleMobileMenuToggle}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white z-40 p-6 flex flex-col space-y-4 shadow-xl animate-slideDown">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="block text-lg font-bold text-gray-800 hover:text-red-500" onClick={handleMobileMenuToggle}>
              {item.name}
            </a>
          ))}
          <button className="w-full bg-red-500 text-white py-3 rounded-lg font-bold mt-auto" onClick={handleMobileMenuToggle}>Reserve Now</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;