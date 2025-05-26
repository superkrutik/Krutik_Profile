import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './icons';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 rounded-md text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-dark-background"
  >
    {children}
  </a>
);

interface NavbarProps {
  profilePicUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({ profilePicUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 dark:bg-dark-card/80 backdrop-blur-xl shadow-lg dark:shadow-futuristic-dark py-3 border-b border-border-color dark:border-dark-border-color/30' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <a href="#hero" className="block hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-dark-background rounded-full">
              <img 
                src={profilePicUrl} // Already updated in App.tsx
                alt="Krutik Patel" 
                className="h-10 w-10 rounded-full object-cover border-2 border-accent/70 dark:border-dark-accent/60 hover:border-accent dark:hover:border-dark-accent transition-all duration-300 transform hover:scale-110 dark:shadow-sm dark:hover:shadow-futuristic-hover-dark"
              />
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
                {navItems.map((item) => (
                  <NavLink key={item.label} href={item.href}>{item.label}</NavLink>
                ))}
              </div>
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-4 p-2 rounded-full text-text-secondary dark:text-dark-text-secondary hover:bg-card-alt/70 dark:hover:bg-dark-card-alt/50 hover:text-accent dark:hover:text-dark-accent focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent focus:ring-offset-1 focus:ring-offset-background dark:focus:ring-offset-dark-background transition-all duration-300"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 text-dark-accent" />}
            </button>
            {/* Mobile menu button (optional, for simplicity not fully implemented here) */}
            <div className="md:hidden ml-2">
              <button type="button" className="p-2 rounded-md text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent dark:focus:ring-dark-accent">
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;