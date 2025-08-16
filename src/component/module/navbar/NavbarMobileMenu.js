"use client";

import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { menuItems } from "./menuData";

const NavbarMobileMenu = ({
  toggleMobileSubmenu,
  mobileSubmenuOpenIndex,
  closeMobileMenu,
  onShowAuth,
}) => {
  return (
    <div className="md:hidden fixed inset-0 bg-[var(--bg-dropdown)] backdrop-blur-md bg-opacity-90 shadow-lg overflow-auto px-4 pt-20 pb-8 z-50">
      <ul className="flex flex-col gap-3 font-semibold text-[var(--text-navbar)]">
        <li>
          <Link
            href="#"
            className="block px-2 py-2 hover:text-[var(--hover-text-navbar)]"
            onClick={closeMobileMenu}
          >
            درباره قطب دانش
          </Link>
        </li>

        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              className="flex justify-between items-center w-full px-2 py-2 hover:text-[var(--hover-text-navbar)]"
              onClick={() => toggleMobileSubmenu(index)}
              aria-expanded={mobileSubmenuOpenIndex === index}
              aria-controls={`submenu-${index}`}
            >
              {item.title}
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  mobileSubmenuOpenIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileSubmenuOpenIndex === index && (
              <ul
                id={`submenu-${index}`}
                className="mt-1 mr-4 flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                {item.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="block px-2 py-1 hover:text-[var(--hover-text-navbar)]"
                      onClick={closeMobileMenu}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <li>
          <Link
            href="#"
            className="block px-2 py-2 hover:text-[var(--hover-text-navbar)]"
            onClick={closeMobileMenu}
          >
            تماس با ما
          </Link>
        </li>
      </ul>

      
      <div className="mt-6 flex flex-col gap-3 px-2">
        <Link href="/auth"
          onClick={onShowAuth}
          className="w-full login-btn !text-[var(--text-login-btn)] hover:!text-[var(--hover-text-login-btn)] px-4 py-2 rounded-xl transition-colors bg-[var(--bg-button)]"
        >
          ورود / ثبت‌نام
        </Link>
        <button className="w-full support-btn !text-[var(--text-support-btn)] hover:!text-[var(--hover-text-support-btn)] border px-4 py-2 rounded-xl transition-colors">
          پشتیبانی
        </button>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
