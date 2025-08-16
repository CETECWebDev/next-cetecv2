"use client";

import Link from "next/link";
import { menuItems } from "./menuData";

const NavbarDesktopMenu = ({ openIndex, onMouseEnter, onMouseLeave }) => {
  return (
    <ul className="hidden md:flex items-center gap-6 text-base font-semibold relative ml-1">
      <li>
        <Link
          href="/about"
          className="relative px-1 py-2 text-[var(--text-navbar)] hover:text-[var(--hover-text-navbar)] transition-colors"
        >
          درباره قطب دانش
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--hover-text-navbar)] transition-[width] duration-300 hover:w-full" />
        </Link>
      </li>

      {menuItems.map((item, index) => (
        <li
          key={index}
          className="group relative"
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
        >
          <button className="flex items-center gap-1 relative px-1 py-2 text-[var(--text-navbar)] hover:text-[var(--hover-text-navbar)] transition-colors">
            {item.title}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--hover-text-navbar)] transition-[width] duration-300 group-hover:w-full" />
          </button>

          {openIndex === index && (
            <div className="dropdown-menu absolute top-full mt-2 end-0 min-w-[300px] z-50 rounded-xl overflow-hidden bg-[var(--bg-dropdown)] backdrop-blur-md bg-opacity-80 shadow-lg text-[var(--text-dropdown)]">
              {item.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block px-4 py-3 border-b border-white/10 dark:border-gray-700 hover:bg-[var(--hover-bg-dropdown)] transition-all"
                >
                  <p className="font-semibold text-sm mb-1">{link.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{link.desc}</p>
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}

      <li>
        <Link
          href="#"
          className="relative px-1 py-2 text-[var(--text-navbar)] hover:text-[var(--hover-text-navbar)] transition-colors"
        >
          تماس با ما
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--hover-text-navbar)] transition-[width] duration-300 hover:w-full" />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarDesktopMenu;
