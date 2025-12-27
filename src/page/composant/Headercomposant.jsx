import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, Linkedin, Facebook } from 'lucide-react';
import 'animate.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // For Mobile
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null); // For Desktop
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    // Set active page based on current URL
    const updateActivePage = () => {
      const currentPath = window.location.pathname;
      setActivePage(currentPath);
    };

    updateActivePage();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Close desktop dropdown on click outside
    const handleClickOutside = () => setActiveDesktopDropdown(null);
    document.addEventListener('click', handleClickOutside);

    // Listen for URL changes (for SPA navigation)
    const handlePopState = () => {
      updateActivePage();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleDesktopDropdown = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDesktopDropdown(prev => (prev === name ? null : name));
  };

  // Menu Items Configuration - UPDATED path for NousRecrutons
  const navItems = [
    { label: 'ACCUEIL', path: '/' },
    {
      label: "L'ENTREPRISE",
      path: '#',
      isDropdown: true,
      children: [
        { label: 'A propos', path: '/a-propos' },
        { label: 'Notre expertise', path: '/expertise' },
        { label: 'Nous Rejoindre', path: '/nous-recrutons' }, // Fixed path
        { label: 'Contact', path: '/contact' }
      ]
    },
    { label: "DOMAINES D'INTERVENTION", path: '/domaines-intervention' },
    { label: 'NOS PROJETS', path: '/NosRealisations' },
    { label: 'ACTUALITÉS', path: '/actualites' },
    { label: 'ESPACE OPPORTUNITÉS', path: '/espace-client-partenaire', isButton: true }
  ];

  return (
    <>
      <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="top-bar">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="top-info d-flex gap-4 animate__animated animate__fadeInLeft">
              <a href="mailto:contact@nya-agritek.com" className="info-link">
                <Mail size={14} /> <span>contact@nya-agritek.com</span>
              </a>
              <a href="tel:+2250586253131" className="info-link">
                <Phone size={14} /> <span>+225 05 86 25 31 31</span>
              </a>
            </div>
            <div className="top-social d-flex gap-3">
              <a href="https://www.linkedin.com/company/nya-agritek-sarl/" target="_blank" rel="noreferrer" className="social-link">
                <Linkedin size={14} />
              </a>
              <a href="https://www.facebook.com/nya.agritekSarl" target="_blank" rel="noreferrer" className="social-link">
                <Facebook size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="main-nav-container">
          <div className="container">
            <nav className="main-nav">
              {/* Logo */}
              <a href="/" className="brand-logo">
                <img src="/icon.png" alt="NYA AGRITEK" className="logo-img" />
              </a>

              {/* Desktop Menu */}
              <ul className="desktop-menu">
                {navItems.map((item, index) => (
                  <li key={index}
                      className={`menu-item ${item.isDropdown ? 'has-dropdown' : ''}`}
                      onMouseEnter={() => !activeDesktopDropdown && setActiveDesktopDropdown(null)}
                  >
                    {item.isDropdown ? (
                      <div className="dropdown-wrapper">
                         <button
                            className={`nav-link dropdown-trigger ${activeDesktopDropdown === item.label ? 'active' : ''}`}
                            onClick={(e) => toggleDesktopDropdown(e, item.label)}
                         >
                          {item.label} <ChevronDown size={14} className="chevron" />
                        </button>
                        <ul className={`dropdown-menu ${activeDesktopDropdown === item.label ? 'show' : ''}`}>
                          {item.children.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a href={subItem.path} className="dropdown-item">
                                {subItem.label}
                                <ChevronRight size={14} className="arrow" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a
                        href={item.path}
                        className={`nav-link ${item.isButton ? 'cta-button' : ''} ${activePage === item.path ? 'active' : ''}`}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Toggle */}
              <button className="mobile-toggle" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-header">
              <span className="mobile-title">Menu</span>
              <button className="close-btn" onClick={toggleMobileMenu}><X size={24} /></button>
            </div>
            <ul className="mobile-links">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.isDropdown ? (
                    <div className="mobile-dropdown">
                      <button 
                        className={`mobile-link has-child ${activeDropdown === item.label ? 'active' : ''}`}
                        onClick={(e) => toggleMobileDropdown(e, item.label)}
                      >
                        {item.label}
                        <ChevronRight size={16} className="mobile-arrow" />
                      </button>
                      <div className="sub-menu-container" style={{ maxHeight: activeDropdown === item.label ? '500px' : '0' }}>
                        {item.children.map((subItem, subIndex) => (
                          <a key={subIndex} href={subItem.path} className="mobile-sub-link">
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a href={item.path} className={`mobile-link ${activePage === item.path ? 'active' : ''}`}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <style>{`
        /* Variables & Reset */
        :root {
          --primary: #1879be;
          --secondary: #f3a31a;
          --tertiary: #82c28a;
          --dark: #1e334e;
          --light: #f8fafc;
          --glass-bg: rgba(255, 255, 255, 0.98);
          --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          --font-julius: 'Julius Sans One', sans-serif;
          --font-main: 'Gill Sans MT', 'Gill Sans', Calibri, 'Trebuchet MS', sans-serif;
        }

        /* Top Bar */
        .top-bar {
          background: var(--primary);
          color: white;
          font-size: 13px;
          padding: 8px 0;
          transition: all 0.3s ease;
        }
        .modern-header.scrolled .top-bar {
          height: 0;
          padding: 0;
          overflow: hidden;
          opacity: 0;
        }
        .info-link {
          color: inherit;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
          font-family: var(--font-main);
        }
        .info-link:hover, .social-link:hover {
          color: var(--secondary);
        }
        .social-link {
          color: inherit;
        }

        /* Main Header */
        .modern-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
          transition: all 0.3s ease;
          font-family: var(--font-main);
        }
        .modern-header.scrolled {
          background: white;
          box-shadow: var(--shadow-sm);
        }
        .modern-header:not(.scrolled) .main-nav-container {
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .main-nav-container {
          padding: 1rem 0;
          transition: padding 0.3s ease;
        }
        .modern-header.scrolled .main-nav-container {
          padding: 0.8rem 0;
        }

        .main-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Branding */
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img {
          height: 90px;
          width: auto;
          transition: height 0.3s ease;
        }
        .modern-header.scrolled .logo-img {
          height: 65px;
        }
        .logo-text {
          font-family: Arial, sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--primary);
          line-height: 1;
        }
        .logo-text .highlight {
          color: var(--secondary);
        }

        /* Desktop Menu */
        .desktop-menu {
          display: none;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
          align-items: center;
        }
        @media (min-width: 992px) {
          .desktop-menu {
            display: flex;
          }
        }

        .nav-link {
          font-family: var(--font-main);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark);
          text-decoration: none;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link:hover, .menu-item:hover .nav-link {
          color: var(--primary);
        }

        .nav-link.active {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--secondary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
          background: var(--secondary);
        }

        /* CTA Button */
        .cta-button {
          background: var(--primary);
          color: white !important;
          padding: 0.6rem 1.5rem !important;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background: var(--secondary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0, 0.1);
          color: white !important;
        }
        .cta-button::after {
          display: none;
        }

        /* Dropdown */
        .menu-item {
          position: relative;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: white;
          min-width: 240px;
          padding: 1rem 0;
          box-shadow: var(--shadow-md);
          border-radius: 4px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          list-style: none;
          z-index: 105;
          border-top: 3px solid var(--secondary);
        }
        
        .menu-item:hover .dropdown-menu,
        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.5rem;
          color: var(--dark);
          text-decoration: none;
          font-family: var(--font-main);
          font-size: 0.9rem;
          transition: all 0.2s ease;
          border-left: 2px solid transparent;
        }

        .dropdown-item:hover {
          background: #f8fafc;
          color: var(--primary);
          border-left-color: var(--secondary);
          padding-left: 1.8rem;
        }
        
        .dropdown-item .arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.2s ease;
        }
        .dropdown-item:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .chevron {
            transition: transform 0.3s;
        }
        .menu-item:hover .chevron, 
        .nav-link.active .chevron {
            transform: rotate(180deg);
        }

        /* Mobile Header */
        .mobile-toggle {
          display: block;
          background: none;
          border: none;
          color: var(--primary);
          padding: 0;
          cursor: pointer;
        }
        @media (min-width: 992px) {
          .mobile-toggle {
            display: none;
          }
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 85%;
          max-width: 400px;
          height: 100vh;
          background: white;
          box-shadow: -5px 0 25px rgba(0,0,0,0.1);
          z-index: 1001;
          transition: right 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          overflow-y: auto;
        }
        .mobile-menu-overlay.active {
          right: 0;
        }

        .mobile-menu-content {
          padding: 2rem;
        }

        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          border-bottom: 2px solid #f1f1f1;
          padding-bottom: 1rem;
        }

        .mobile-title {
          font-family: var(--font-julius);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }

        .close-btn {
          background: none;
          border: none;
          color: #999;
        }

        .mobile-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 1rem 0;
          font-size: 1.1rem;
          color: var(--dark);
          text-decoration: none;
          border-bottom: 1px solid #f1f1f1;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          text-align: left;
          font-family: var(--font-main);
          font-weight: 600;
        }

        .mobile-link.active, .mobile-link:hover {
          color: var(--primary);
        }
        
        .mobile-arrow {
          transition: transform 0.3s;
        }
        .mobile-link.active .mobile-arrow {
          transform: rotate(90deg);
        }

        .sub-menu-container {
          overflow: hidden;
          transition: max-height 0.4s ease;
          background: #f8fafc;
        }
        
        .mobile-sub-link {
          display: block;
          padding: 0.8rem 0 0.8rem 2rem;
          color: #666;
          text-decoration: none;
          font-family: var(--font-main);
          font-size: 0.95rem;
          border-bottom: 1px dashed #eee;
        }
        .mobile-sub-link:hover {
            color: var(--secondary);
        }
      `}</style>
    </>
  );
};

export default Header;