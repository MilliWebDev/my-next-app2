'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

//import { usePathname } from 'next/navigation';
//import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Accueil', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Boutiques',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Articles', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for the hamburger menu (open or closed)
  

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-white shadow-md w-full">
      {/* Container for navbar items */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo Section */}
        <div className={`text-2xl font-bold text-blue-600 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href="/">Logo</Link>
        </div>
        
        {/* Hamburger menu button (visible only on mobile) */}
        <button
          className="block md:hidden p-2"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Search (links) section */}
        <div className={`text-2xl font-bold text-blue-600 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href="/">Logo</Link>
        </div>

        
        {/* Menu (links) section */}
        <div
          className={`md:flex items-center gap-4 ${isMenuOpen ? 'flex' : 'hidden'} md:block`}
        >
          {/* Loop through each link */}
          {links.map((link) => {
            const LinkIcon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold flex items-center gap-2 p-3 text-xl hover:bg-sky-100 hover:text-blue-600 rounded-md }`}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
