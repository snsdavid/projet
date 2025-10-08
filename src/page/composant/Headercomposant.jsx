import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const openModal = (modalId) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden'; 
  };
  
  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto'; 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            { label: "Qui sommes-nous", url: "/entreprise/Qui_Somme_Nous" },
            { label: "Notre vision", url: "/entreprise/Notre_Vision" },
            { label: "Notre mission", url: "/entreprise/Notre_Mission" },
            { label: "Nos valeurs", url: "/entreprise/Nos_Valeurs" },
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
          icon: "/styleico.svg",
          title: "FORESTERIE & ENVIRONNEMENT",
          links: [
            { label: "FORESTERIE & ENVIRONNEMENT", url: "/domaine-d-intervention/FORESTERIE_ENVIRONNEMENT" },
          ]
        },
        {
          title: "AGRICULTURE ET NEGOCE AGRICOLE",
          icon: "/studi.svg",
          links: [
            { label: "AGRICULTURE", url: "/domaine-d-intervention/AGRICULTURE" },
            { label: "NEGOCE AGRICOLE", url: "/domaine-d-intervention/NEGOCE_AGRICOLE" },
          ]
        },
        {
          title: "ETUDE ET CONSEIL",
          icon: "/computer.svg",
          links: [
            { label: "ETUDE ET CONSEIL", url: "/domaine-d-intervention/ETUDE_ET_CONSEIL" },
          ]
        },
        {
          title: "DIGITALISATION AGRICOLE",
          icon: "/agriculture (1).svg",
          links: [
            { label: "DIGITALISATION AGRICOLE", url: "/domaine-d-intervention/DIGITALISATION_AGRICOLE" },
          ]
        },
      ]
    },
    prestations: {
      title: "NOS PRESTATIONS",
      sections: [
        {
          title: "𝐅𝐨𝐫𝐞𝐬𝐭𝐞𝐫𝐢𝐞 & 𝐄𝐧𝐯𝐢𝐫𝐨𝐧𝐧𝐞𝐦𝐞𝐧𝐭",
          icon: "/styleico.svg",
          links: [
            { label: "Agroforesterie & reforestation", url: "/nos-prestation/Agroforesterie" },
            { label: "Suivi de reboisement & réalisation de plans d'aménagement", url: "/nos-prestation/Suivi" },
          ]
        },
        {
          title: "𝐀𝐠𝐫𝐢𝐜𝐮𝐥𝐭𝐮𝐫𝐞",
          icon: "/studi.svg",
          links: [
            { label: "Production de plants forestiers et fruitiers ", url: "/nos-prestation/Production" },
          ]
        },
        {
          title: "𝐄𝐓𝐔𝐃𝐄 𝐄𝐓 𝐂𝐎𝐍𝐒𝐄𝐈𝐋",
          icon: "/computer.svg",
          links: [
            { label: "Télédétection & cartographie forestière", url: "/nos-prestation/Télédétection" },
            { label: "Formation en sylviculture & techniques de production de plants", url: "/nos-prestation/Formation" },
            { label: "Gestion des écosystèmes & sensibilisation des communautés", url: "/nos-prestation/Gestion" },
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
            { label: "Nous recrutons", url: "/nous-recrutons" },
          ]
        }
      ]
    }
  };
  
  return (
    <>
    <div className="header-menu-system">
      <header className="shadow-sm py-3 header-menu pt-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center logo-container mt-4">
              <img 
                src="/icon.png"
                alt="Logo" 
                style={{ width: "200px", height: "150px"}}
              />
              <span className="logo-text">NYA AGRITEK</span>
            </div>
            
            <button 
              className="btn btn-link d-lg-none mobile-menu-btn"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} color="#0a7b8e" />
            </button>
            
            <nav className="d-none d-lg-block mb-2">
              <div className="d-flex align-items-center gap-3 justify-content-end mb-3">
                <a href="https://www.linkedin.com/in/nya-agritek-sarl-0754ab311" target="_blank" rel="noopener noreferrer" className="btn btn-link p-0 d-flex align-items-center fort header-link">
                  Suivez-nous 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a7b8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
                    <path d="M16 8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-4v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2H4a6 6 0 0 1-6-6v-2a6 6 0 0 1 6-6h4v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V8h4z"></path>
                  </svg>
                </a>
                <a href="/contact" className="btn btn-link p-0 d-flex align-items-center fort header-link">
                  Contactez-nous 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a7b8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-1 fort">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
              <ul className="list-unstyled d-flex mb-0 gap-3 mt-2">
                {Object.keys(menuData).map((menuKey) => (
                  <li key={menuKey}>
                    <button 
                      className="btn btn-link text-uppercase fw-medium fort nav-button "
                      onClick={() =>{
                        if (menuKey !== 'accueil') {
                        openModal(menuKey);
                      } else {
                        window.location.href = '/';
                      }
                      }}
                    >
                      {menuKey === 'entreprise' ? "L'Entreprise " : 
                       menuKey === 'enjeux' ? "Domaines d'intervention " : 
                       menuKey === 'prestations' ? "Nos Prestations " : 
                       menuKey === 'contact' ? "Nous recrutons" : "Accueil "}
                       {menuKey !== 'contact' && <span className="fw-bold nav-dot">o</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button className="btn btn-link mobile-close-btn" onClick={toggleMobileMenu}>
            <X size={15} color="#0a7b8e" className="fort" />
          </button>
        </div>
        <div className="mobile-menu-content">
          <div className="mobile-links mb-4">
            <a href="https://www.linkedin.com/in/nya-agritek-sarl-0754ab311" target="_blank" rel="noopener noreferrer" className="mobile-link">Suivez-nous</a>
            <a href="/contact" className="mobile-link">Contactez-nous</a>
          </div>
          <ul className="mobile-nav-list">
            {Object.keys(menuData).map((menuKey) => (
              <li key={menuKey}>
                <button 
                  className="mobile-nav-button"
                  onClick={() => {
                    if (menuKey !== 'accueil') {
                      openModal(menuKey);
                      setIsMobileMenuOpen(false);
                  } else {
                    window.location.href = '/';
                  }
                  }}
                >
                  {menuKey === 'entreprise' ? "L'Entreprise" : 
                   menuKey === 'enjeux' ? "Domaines d'intervention" : 
                   menuKey === 'prestations' ? "Nos Prestations" : 
                   menuKey === 'contact' ? "Nous recrutons" : "Accueil"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu} />
      )}
      
      {Object.keys(menuData).map((menuKey) => (
        <div 
          key={menuKey}
          className={`modal-overlay ${activeModal === menuKey ? 'show' : ''}`}
        >
          <div className="container modal-container">
          <div className="modal-header">
            <button className="btn btn-link modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            <h2 className="modal-title">{menuData[menuKey].title}</h2>
          </div>
            
            <div className="modal-content-grid">
              {menuData[menuKey].sections.map((section, idx) => (
                <div key={idx} className={`col-md-${menuKey === 'entreprise' ? '3' : '4'}`}>
                  {section.icon && (
                    <img src={section.icon} alt={section.title} style={{ width: "15px", height: "15px", objectFit: "contain" }}/>
                  )}
                  <h3 className="modal-section-title">{section.title}</h3>
                  <ul className="list-unstyled">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="mb-2">
                        <a href={link.url} className="modal-link">
                          <span className="modal-link-bullet">◦</span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="modal-footer">
              <a href="/" className="modal-footer-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a7b8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
                  <path d="M19 12H5"></path>
                  <path d="M12 19l-7-7 7-7"></path>
                </svg>
                Retour page d'accueil
              </a>
              
              <div className="modal-footer-links">
                <a href="#" className="modal-footer-link">
                  Suivez-nous 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a7b8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
                    <path d="M16 8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-4v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2H4a6 6 0 0 1-6-6v-2a6 6 0 0 1 6-6h4v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V8h4z"></path>
                  </svg>
                </a>
                <a href="/contact" className="modal-footer-link">
                  Contactez-nous 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a7b8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
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
      .header-menu-system {
        padding-top: env(safe-area-inset-top);
      }

      .fort:hover {
        color: #9cc24d;
      }
      .fort {
        color: #0a7b8e;
      }
      .header-menu {
        clip-path: ellipse(110% 100% at 50% 0%);
        background-color: white;
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);
      }

      .logo-container {
        margin-top: 0.5rem;
        flex-shrink: 0;
      }
      .logo-text {
        font-size: 1.9rem;
        color: #0a7b8e;
        font-weight: bold;
        font-family: 'Julius Sans One', Arial, sans-serif;
        margin-left: 0.5rem;
        white-space: nowrap;
      }

      .header-link {
        text-decoration: none !important;
        font-size: 0.8rem;
      }
      .nav-button {
        text-decoration: none !important;
        padding: 0.3rem 0;
        font-family: 'Julius Sans One';
        font-size: 13px;
        white-space: nowrap;
      }
      .nav-dot {
        font-size: 6px;
        padding-left: 4px;
      }

      .mobile-menu-btn {
        padding: 0.5rem;
        margin: 0;
        background: none;
        border: none;
        min-width: 44px;
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .mobile-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 85vw;
        max-width: 320px;
        height: 100vh;
        background-color: white;
        box-shadow: -2px 0 10px rgba(0,0,0,0.1);
        transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1060;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding-top: env(safe-area-inset-top);
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);
        padding-bottom: env(safe-area-inset-bottom);
      }
      
      .mobile-menu-open {
        right: 0;
      }
      
      .mobile-menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 1rem 1rem 1rem;
        border-bottom: 1px solid #eee;
        position: sticky;
        top: 0;
        background: white;
        z-index: 1;
      }
      
      .mobile-menu-title {
        font-size: 1.3rem;
        font-weight: bold;
        color: #0a7b8e;
        font-family: 'Julius Sans One', Arial, sans-serif;
      }
      
      .mobile-close-btn {
        padding: 0.5rem;
        margin: 0;
        background: none;
        border: none;
        min-width: 35px;
        min-height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .mobile-menu-content {
        padding: 1rem;
        flex: 1;
      }
      
      .mobile-links {
        padding-bottom: 1rem;
        border-bottom: 1px solid #eee;
        margin-bottom: 1rem;
      }
      
      .mobile-link {
        display: flex;
        align-items: center;
        padding: 1rem 0;
        color: #0a7b8e;
        text-decoration: none;
        font-size: 1rem;
        min-height: 48px;
        border-bottom: 1px solid #f5f5f5;
      }
      
      .mobile-link:hover {
        color: #9cc24d;
        background-color: #f8f9fa;
      }
      
      .mobile-nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .mobile-nav-button {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1.2rem 0;
        border: none;
        background: none;
        text-align: left;
        color: #0a7b8e;
        font-size: 1.1rem;
        font-family: 'Julius Sans One', Arial, sans-serif;
        border-bottom: 1px solid #f0f0f0;
        cursor: pointer;
        min-height: 56px;
        position: relative;
      }
      
      .mobile-nav-button:hover,
      .mobile-nav-button:focus {
        color: #9cc24d;
        background-color: #f8f9fa;
        outline: none;
      }
      
      .mobile-nav-button::after {
        content: '›';
        position: absolute;
        right: 0;
        font-size: 1.5rem;
        color: #ccc;
      }
      
      .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1055;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
      }

      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.98);
        z-index: 1050;
        padding-top: env(safe-area-inset-top);
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);
        padding-bottom: env(safe-area-inset-bottom);
        transform: translateY(100%);
        opacity: 0;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                    opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
      }
      
      .modal-overlay.show {
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;
      }

      .modal-container {
        padding: 1rem;
        height: 100vh;
        width: 60%;
        overflow-y: none;
        -webkit-overflow-scrolling: touch;
        position: absolute;
        top: 0;
      }
      
      
      .modal-header {
        text-align: center;
        margin: 3rem 0 2rem 0;
        padding-top: 2rem;
      }
      
      .modal-title {
        font-weight: bold;
        color: #0a7b8e;
        font-size: 1rem;
        font-family: 'Julius Sans One', Arial, sans-serif;
      }
      
      .modal-content-grid {
        display: flex;
        flex-wrap: wrap;
      }
      
      .modal-section-title {
        color: #83b614;
        margin-bottom: 0.2rem;
        font-size: 0.9rem;
        font-weight: 600;
      }
      
      .modal-link {
        display: flex;
        align-items: center;
        color: #0a7b8e;
        text-decoration: none;
        padding: 0.3rem 0;
        font-size: 0.8rem;
        min-height: 15px;
      }
      
      .modal-link:hover {
        color: #9cc24d;
      }
      
      .modal-link-bullet {
        margin-right: 0.8rem;
        color: #83b614;
        font-size: 1.2rem;
      }
      
      .modal-footer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border-top: 1px solid #dee2e6;
        margin-bottom: calc(2rem + env(safe-area-inset-bottom));
      }
      
      .modal-footer-link {
        display: flex;
        align-items: center;
        color: #0a7b8e;
        text-decoration: none;
        padding: 0.2rem 0;
        font-size: 0.9rem;
      }
      
      .modal-footer-link:hover {
        color: #9cc24d;
      }
      
      .modal-footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      @media screen and (max-width: 414px) {
        .logo-text {
          font-size: 1rem;
          line-height: 1.2;
        }
        .logo-container {
          margin-top: 0.25rem;
        }
        .header-link {
          font-size: 0.7rem;
        }
        .nav-button {
          font-size: 18px !important;
          padding: 0.2rem 0;
        }
        .modal-title {
          font-size: 1rem;
        }
        .mobile-menu {
          width: 90vw;
        }
      }

      @media screen and (max-width: 375px) {
        .logo-text {
          font-size: 0.9rem;
        }
        .header-link {
          font-size: 0.6rem;
        }
        .modal-container {
          padding: 0.5rem;
        }
        .mobile-menu {
          width: 95vw;
        }
      }

      @media (hover: none) and (pointer: coarse) {
        .mobile-nav-button,
        .mobile-link,
        .modal-link,
        .modal-footer-link {
          min-height: 48px;
        }

      }
        .modal-overlay {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-container {
          width: 70%;
          max-height: 80vh;
          height: auto;
          background: white;
          padding: 2rem;
          overflow-y: none;
        }

        .modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd; /* fine ligne de séparation */
  padding-bottom: 0.75rem;
  margin-bottom: 1.5rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0a7b8e;
  margin: 0;
  font-family: 'Julius Sans One', Arial, sans-serif;
}

.modal-close-btn {
  border-radius: 50%;
  z-index: 10;
  background: none;
  border: none;
  color: #0a7b8e;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s ease;
}

.modal-close-btn:hover {
  color: #9cc24d;
}

    `}</style>
    </>
  );
};

export default Header;