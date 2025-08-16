"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import NavbarDesktopMenu from "./navbar/NavbarDesktopMenu";
import NavbarMobileMenu from "./navbar/NavbarMobileMenu";
import NavbarActions from "./navbar/NavbarActions";
import NavbarLogo from "./navbar/NavbarLogo";
import AuthPage from "../auth/AuthPage";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpenIndex, setMobileSubmenuOpenIndex] = useState(null);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);

  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenIndex(null), 200);
  };

  const toggleMobileSubmenu = (index) => {
    setMobileSubmenuOpenIndex((prev) => (prev === index ? null : index));
  };

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const navbarStyle = {
    background:
      scrolled && currentTheme === "light"
        ? "rgba(255, 255, 255, 0.85)"
        : scrolled && currentTheme === "dark"
        ? "rgba(0, 0, 0, 0.3)"
        : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
    transition: "background 0.3s ease",
  };

  return (
    <>
      <nav
        className={`navbar rtl font-peyda sticky top-0 z-50 transition-all duration-500 border-b border-white/10 dark:border-white/10 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
        style={navbarStyle}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <NavbarLogo />

          <NavbarDesktopMenu
            openIndex={openIndex}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

          <NavbarActions
            currentTheme={currentTheme}
            setTheme={setTheme}
            onShowAuth={() => setShowAuthForm(true)}
            onToggleMobileMenu={() => setMobileMenuOpen((p) => !p)}
            mobileMenuOpen={mobileMenuOpen}
          />
        </div>

        {mobileMenuOpen && (
          <NavbarMobileMenu
            toggleMobileSubmenu={toggleMobileSubmenu}
            mobileSubmenuOpenIndex={mobileSubmenuOpenIndex}
            closeMobileMenu={() => setMobileMenuOpen(false)}
            onShowAuth={() => {
              setShowAuthForm(true);
              setMobileMenuOpen(false);
            }}
          />
        )}
      </nav>

      {showAuthForm && <AuthPage onClose={() => setShowAuthForm(false)} />}
    </>
  );
};

export default Navbar;


