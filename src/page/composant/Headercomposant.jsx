import React, { useState } from 'react';
import { X } from 'lucide-react';

const Header = () => {
  const [activeModal, setActiveModal] = useState(null);
  
  const openModal = (modalId) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden'; 
  };
  
  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto'; 
  };
  
  const menuData = {
    accueil: {
      title: "ACCUEIL",
      sections: [
        {
          title: "Menu Accueil",
          links: [
            { label: "Sous-menu Accueil 1", url: "/" },
            { label: "Sous-menu Accueil 2", url: "/" },
          ]
        }
      ]
    },
    entreprise: {
      title: "L'ENTREPRISE",
      sections: [
        {
          title: "A propos",
          links: [
            { label: "Qui sommes-nous", url: "/entreprise" },
            { label: "Notre vision", url: "/entreprise" },
            { label: "Notre mission", url: "/entreprise" },
            { label: "Nos valeurs", url: "/entreprise" },
          ]
        },
        {
          title: "Notre expertise",
          links: [
            { label: "Notre expertise", url: "/expertise" },
          ]
        },
      ]
    },
    enjeux: {
      title: "DOMAINES D'INTERVENTION",
      sections: [
        {
          title: "FORESTERIE & ENVIRONNEMENT",
          links: [
            { label: "FORESTERIE & ENVIRONNEMENT", url: "#" },
          ]
        },
        {
          title: "AGRICULTURE ET NEGOCE AGRICOLE",
          links: [
            { label: "AGRICULTURE", url: "#" },
            { label: "NEGOCE AGRICOLE", url: "#" },
          ]
        },
        {
          title: "ETUDE ET CONSEIL",
          links: [
            { label: "ETUDE ET CONSEIL", url: "#" },
          ]
        },
        {
          title: "DIGITALISATION AGRICOLE",
          links: [
            { label: "DIGITALISATION AGRICOLE", url: "#" },
          ]
        },
      ]
    },
    prestations: {
      title: "NOS PRESTATIONS",
      sections: [
        {
          title: "Menu Prestations",
          links: [
            { label: "Sous-menu Prestations 1", url: "#" },
            { label: "Sous-menu Prestations 2", url: "#" },
          ]
        }
      ]
    },
    contact: {
      title: "Nous recrutons",
      sections: [
        {
          title: "Nous recrutons",
          links: [
            { label: "Offres d'emploi", url: "#" },
            { label: "Offres de missions", url: "#" },
            { label: "Offres de stages et d'alternances", url: "#" },
          ]
        }
      ]
    }
  };
  
  return (
    <>
    <div className="header-menu-system mb-5">
      {/* Header principal */}
      <header className="shadow-sm py-3 header-menu">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="d-flex align-items-center mt-5 mr-3">
              <img 
                src="icon.png"
                alt="Logo" 
                style={{ height: '120px' }}
                padding="0px"
                margin="0px"
              />
              <span style={{ fontSize: '1.2rem', color: '#0a7b8e', fontWeight: 'medium' , fontFamily: 'Julius Sans One,Arial, sans-serif'}}>
              NYA AGRITEK
              </span>
            </div>
            
            {/* Menu navigation principal */}
            <nav>
                {/* Liens additionnels */}
            <div className="d-flex align-items-center gap-3 justify-content-end ">
              <a href="https://www.linkedin.com/in/nya-agritek-sarl-0754ab311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="btn btn-link p-0 d-flex align-items-center fort" style={{ textDecoration: 'none' }}>
                Suivez-nous 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#0a7b8e" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ms-1"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-4v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2H4a6 6 0 0 1-6-6v-2a6 6 0 0 1 6-6h4v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V8h4z"></path>
                </svg>
              </a>
              <a href="#" className="btn btn-link p-0 d-flex align-items-center fort" style={{textDecoration: 'none' }}>
                Contactez-nous 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#0a7b8e" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ms-1 fort"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
              <ul className="list-unstyled d-flex mb-0 gap-3 mt-3">
                {Object.keys(menuData).map((menuKey) => (
                  <li key={menuKey}>
                    <button 
                      className="btn btn-link text-uppercase fw-medium fort"
                      style={{ textDecoration: 'none', padding: '0.5rem 0' , fontFamily: 'Julius Sans One' , fontSize: '14px' }}
                      onClick={() => openModal(menuKey)}
                    >
                      {menuKey === 'entreprise' ? "L'Entreprise " : 
                       menuKey === 'enjeux' ? "Domaines d'intervention " : 
                       menuKey === 'prestations' ? "Nos Prestations " : 
                       menuKey === 'contact' ? "Nous recrutons" : "Accueil "}
                       {
                      menuKey != 'contact' ? <span className="fw-bold "  style={{fontSize: '8px', paddingLeft: '6px'}}>o</span> : null
                    }
                    </button>
                    
                  </li>
                ))}
              </ul>
            </nav>
            
          </div>
        </div>
      </header>
      
      {/* Modals pour sous-menus */}
      {Object.keys(menuData).map((menuKey) => (
        <div 
          key={menuKey}
          className={`position-fixed top-0 start-0 w-100 ${activeModal === menuKey ? 'show' : 'd-none'}`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            zIndex: 1050,
            opacity: activeModal === menuKey ? 1 : 0,
            transition: 'opacity 0.3s ease',
            height: '100vh',
            width: '100vw',
            left: 0,
            top: 0
          }}
        >
          <div className="container py-5">
            <button 
              className="btn btn-link position-absolute top-0 start-0 mt-3 ms-3"
              style={{ color: '#0a7b8e', fontSize: '1.5rem' }}
              onClick={closeModal}
            >
              <X size={28} />
            </button>
            
            <div className="text-end mb-5">
              <h2 className="fw-bold" style={{ color: '#0a7b8e', fontSize: '2rem' }}>
                {menuData[menuKey].title}
              </h2>
            </div>
            
            <div className="row g-4">
              {menuData[menuKey].sections.map((section, idx) => (
                <div key={idx} className={`col-md-${menuKey === 'entreprise' ? '3' : '4'}`}>
                  <h3 style={{ color: '#83b614', marginBottom: '1rem', fontSize: '1.3rem' }}>
                    {section.title}
                  </h3>
                  <ul className="list-unstyled">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="mb-2">
                        <a 
                          href={link.url}
                          className="d-flex align-items-center"
                          style={{ color: '#0a7b8e', textDecoration: 'none' }}
                        >
                          <span className="me-2" style={{ color: '#83b614' }}>◦</span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="d-flex justify-content-between mt-5 pt-4 border-top">
              <a 
                href="/" 
                className="d-flex align-items-center"
                style={{ color: '#0a7b8e', textDecoration: 'none' }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#0a7b8e" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="me-2"
                >
                  <path d="M19 12H5"></path>
                  <path d="M12 19l-7-7 7-7"></path>
                </svg>
                Retour page d'accueil
              </a>
              
              <div className="d-flex gap-3">
                <a 
                  href="#" 
                  className="d-flex align-items-center"
                  style={{ color: '#0a7b8e', textDecoration: 'none' }}
                >
                  Suivez-nous 
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#0a7b8e" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ms-1"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-4v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2H4a6 6 0 0 1-6-6v-2a6 6 0 0 1 6-6h4v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V8h4z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center"
                  style={{ color: '#0a7b8e', textDecoration: 'none' }}
                >
                  Contactez-nous 
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#0a7b8e" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ms-1"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
          </div>
          <style jsx>{`
            .fort:hover {
              color: #9cc24d;
            }
            .fort {
              color: #0a7b8e;
            }
            .header-menu {
              margin-bottom: 20px;
              clip-path: ellipse(110% 100% at 50% 0%);
              background-color:rgb(243, 243, 243);
            }
          `}</style>
          </>
    );
};

export default Header;