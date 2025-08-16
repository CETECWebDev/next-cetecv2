"use client";

import { FiSearch, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const NavbarActions = ({
  currentTheme,
  setTheme,
  onShowAuth,
  onToggleMobileMenu,
  mobileMenuOpen,
}) => {
  return (
    <>
    
      <div className="hidden md:flex items-center gap-3 text-lg font-medium">
        <button className="p-2 transition-colors hover:text-[var(--hover-text-navbar)]" aria-label="search">
          <FiSearch size={18} />
        </button>

        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="p-2 transition-colors hover:text-[var(--hover-text-navbar)]"
          aria-label="change theme"
        >
          {currentTheme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

        <button
          onClick={onShowAuth}
          className="login-btn !text-[var(--text-login-btn)] hover:!text-[var(--hover-text-login-btn)] px-4 py-2 rounded-xl transition-colors"
        >
          ورود / ثبت‌نام
        </button>

        <button className="support-btn !text-[var(--text-support-btn)] hover:!text-[var(--hover-text-support-btn)] border px-4 py-2 rounded-xl transition-colors">
          پشتیبانی
        </button>
      </div>

    
      <div className="flex md:hidden items-center gap-3">
      
        <button className="p-2 text-[var(--text-navbar)] hover:text-[var(--hover-text-navbar)] transition-colors" aria-label="جستجو">
          <FiSearch size={20} />
        </button>

      
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="p-2 text-[var(--text-navbar)] hover:text-[var(--hover-text-navbar)] transition-colors"
          aria-label="تغییر حالت تم"
        >
          {currentTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        
        <button
          className="p-2 text-[var(--text-navbar)] hover:text-[var(--hover-text-navbar)] transition-colors"
          onClick={onToggleMobileMenu}
          aria-label="باز و بسته کردن منوی موبایل"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </>
  );
};

export default NavbarActions;
