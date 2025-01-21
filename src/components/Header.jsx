'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Icon from '@/components/Icon';

import { Span } from '@/components/Typography';
import { ASSETS } from '@/conference';
import { NAV_ITEMS } from '@/navItems';

const NavItem = ({ item, activePage, handleNavItemClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-row py-2 px-4 mb-1 md:mb-0 rounded">
      <Link
        href={item.path}
        className={`${
          activePage === item.path
            ? 'text-primary-700 dark:text-primary-600'
            : 'text-gray-950 dark:text-gray-50'
        }`}
        aria-current={activePage === item.path ? 'page' : undefined}
        onClick={() => handleNavItemClick(item)}
        target={item.target}
      >
        <Span>{item.name}</Span>
      </Link>
      {item.children && (
        <>
          <button
            onClick={toggleDropdown}
            className="ml-2 text-gray-950 dark:text-gray-50 focus:outline-none"
          >
            <Icon name="ChevronDown" size={16} />
          </button>
          {isDropdownOpen &&
          <ul
            className={'flex flex-col'}
          >
            {item.children.map((child, index) => (
              <li key={index} className="md:inline-block">
                <Link
                  href={child.path}
                  className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-950 dark:text-gray-50"
                  onClick={() => handleNavItemClick(child)}
                  target={child.target}
                >
                  <Span>{child.name}</Span>
                </Link>
              </li>
            ))}
          </ul>
          }
        </>
      )}
    </div>
  );
};

const Header = ({ themeToggle }) => {
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
    <header className="bg-gray-50 dark:bg-gray-900 p-4 shadow-lg sticky top-0 z-10">
      <nav className="flex flex-wrap items-center justify-between sm:w-11/12 mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={ASSETS.navbarLogoUrl}
            alt={ASSETS.navbarLogoAlt}
            width={50}
            height={50}
          />
        </Link>
        <div className="flex items-center gap-1">
          <div className="md:hidden">{themeToggle}</div>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-light-100 text-gray-950 dark:text-gray-50"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <Span className="sr-only">Open main menu</Span>
            <Icon name="HamburgerMenu" />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <NavItem
                  item={item}
                  activePage={activePage}
                  handleNavItemClick={handleNavItemClick}
                />
              </li>
            ))}
            <li className="hidden md:flex">{themeToggle}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
