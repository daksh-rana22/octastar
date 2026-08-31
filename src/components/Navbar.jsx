import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import Container from './Container';
import { navigation } from '../data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Full-Page Backdrop Blur Overlay when dropdown is open (Soft Apple-style) */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/25 backdrop-blur-[6px] transition-all duration-300 hidden lg:block ${
          activeDropdown ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setActiveDropdown(null)}
        onMouseEnter={handleMouseLeave}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activeDropdown
            ? 'bg-navy-900/95 backdrop-blur-xl border-b border-border shadow-lg shadow-navy-900/50'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10 flex-shrink-0">
              <Logo size="default" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={item.children ? handleMouseLeave : undefined}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-accent-secondary font-semibold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-2 w-80 bg-navy-900/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-2.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.08] transition-colors duration-200 group"
                          >
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-text-primary group-hover:text-accent-secondary transition-colors">
                                {child.label}
                              </div>
                              {child.description && (
                                <div className="text-xs text-text-muted mt-0.5 leading-relaxed">
                                  {child.description}
                                </div>
                              )}
                            </div>
                            <ArrowRight
                              size={14}
                              className="mt-1 text-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-accent-secondary"
                            />
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/10 p-2 bg-navy-950/40">
                        <Link
                          to={item.path}
                          className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-accent-secondary hover:bg-accent-primary/15 transition-colors duration-200"
                        >
                          View All {item.label}
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button to="/contact" size="sm">
                Partner With Us
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="relative z-10 p-2 text-text-primary hover:text-accent-secondary transition-colors"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity duration-300 ${isMobileOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-navy-800 border-l border-border shadow-2xl transition-transform duration-300 overflow-y-auto ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="pt-20 pb-8 px-6 flex flex-col justify-between min-h-full">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                        }
                        className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${isActive(item.path)
                            ? 'text-accent-secondary bg-navy-700/50'
                            : 'text-text-primary hover:bg-navy-700/50'
                          }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="block px-3 py-2 text-sm text-text-secondary hover:text-accent-secondary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                          <Link
                            to={item.path}
                            className="block px-3 py-2 text-sm font-medium text-accent-secondary"
                          >
                            View All →
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${isActive(item.path)
                          ? 'text-accent-secondary bg-navy-700/50'
                          : 'text-text-primary hover:bg-navy-700/50'
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border space-y-4">
              <Button to="/contact" className="w-full" size="lg">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
