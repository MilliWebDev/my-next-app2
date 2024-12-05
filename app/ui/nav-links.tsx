'use client';


import Link from 'next/link';
import { useState } from 'react';

//import { usePathname } from 'next/navigation';
//import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Accueil', href: '/dashboard' },
  {
    name: 'Boutiques',
    href: '/dashboard/invoices'
    
  },
  { name: 'Articles', href: '/dashboard/customers' },
];

export default function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for the hamburger menu (open or closed)
  

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="h-96 bg-black md:bg-right-bottom bg-no-repeat bg-[url('/hero.png')] w-screen">
      {/* Container for navbar items */}
      <div className="w-screen h-full  flex justify-between  p-4">
        
        {/* Logo Section */}
        <div className={`text-2xl font-bold text-blue-600 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href="/">Logo</Link>
        </div>
        
        {/* Hamburger menu button (visible only on mobile) */}
        <button
          className="flex items-start md:hidden p-2 text-white"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Menu (links) section */}
        <div
          className={`md:flex items-start gap-4 ${isMenuOpen ? 'flex' : 'hidden'} md:block`}
        >
          {/* Loop through each link */}
          {links.map((link) => {
            

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold flex  gap-2 p-3 text-white text-xl hover:bg-white hover:text-blue-600 rounded-md }`}
              >
              
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
