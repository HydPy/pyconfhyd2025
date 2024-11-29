'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Icon from '@/components/Icon';

import { CONFERENCE, NAV_ITEMS, ASSETS } from '@/details';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (item) => {
    if (item.target === '_blank') return;
    setActivePage(item.path);
  };

  return (
    <header className="bg-gray-50 p-4 shadow-lg">
      <nav className="flex flex-wrap items-center justify-between sm:w-11/12 mx-auto">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={ASSETS.navbarLogoUrl}
            alt={ASSETS.navbarLogoAlt}
            priority={true}
            width={50}
            height={50}
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-light-100 text-gray-950"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <Icon name="HamburgerMenu" />
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 md:mt-0 md:flex-row">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`block py-2 px-4 mb-1 md:mb-0 rounded  ${
                    activePage === item.path
                      ? 'text-primary-light-700'
                      : 'text-gray-950'
                  }`}
                  aria-current={activePage === item.path ? 'page' : undefined}
                  onClick={() => handleNavItemClick(item)}
                  target={item.target}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
