import React from 'react';
import { Facebook, Linkedin, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Decorative Top Line */}
      <div style={styles.topLine}></div>

      <div style={styles.container} className="footer-container">
        <div style={styles.footerContent} className="footer-content">
          
          {/* Brand Section */}
          <div style={styles.column}>
            <div style={styles.logoGroup}>
              <img src="/icon.png" alt="NYA AGRITEK" style={styles.logoImage} />
            </div>
            <p style={styles.tagline}>
              Cultivons l'avenir, une récolte à la fois.
            </p>
            <p style={styles.companyDesc}>
              Votre partenaire de confiance pour un développement agricole durable et innovant.
            </p>
            <div style={styles.socialLinks}>
              <a href="https://www.linkedin.com/company/nya-agritek-sarl/" target="_blank" rel="noreferrer" style={styles.socialLink}>
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/nya.agritekSarl" target="_blank" rel="noreferrer" style={styles.socialLink}>
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* L'Entreprise Section (Menu) */}
          <div style={styles.column}>
            <h3 style={styles.sectionTitle}>L'ENTREPRISE</h3>
            <ul style={styles.linkList}>
              <FooterLink href="/a-propos" label="A propos" />
              <FooterLink href="/expertise" label="Notre expertise" />
              <FooterLink href="/Nos_Recrutons" label="Nous Rejoindre" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          {/* Domaines Section */}
          <div style={styles.column}>
            <h3 style={styles.sectionTitle}>DOMAINES</h3>
            <ul style={styles.linkList}>
              <FooterLink href="/domaines-intervention" label="Foresterie & Environnement" />
              <FooterLink href="/domaines-intervention" label="Agriculture" />
              <FooterLink href="/domaines-intervention" label="Négoce Agricole" />
              <FooterLink href="/domaines-intervention" label="Étude et Conseil" />
              <FooterLink href="/domaines-intervention" label="Digitalisation Agricole" />
            </ul>
          </div>

          {/* Contact Section */}
          <div style={styles.column}>
            <h3 style={styles.sectionTitle}>CONTACT</h3>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <Mail size={18} style={styles.icon} />
                <span>contact@nya-agritek.com</span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={18} style={styles.icon} />
                <span>+225 05 86 25 31 31</span>
              </div>
              <div style={styles.contactItem}>
                <MapPin size={18} style={styles.icon} />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
            {/* Added Links for Others */}
            <div style={{marginTop: '20px'}}>
               <h4 style={{...styles.sectionTitle, fontSize: '14px', marginBottom: '10px'}}>AUTRES</h4>
               <ul style={styles.linkList}>
                  <FooterLink href="/actualites" label="Actualités" />
                  <FooterLink href="/espace-client-partenaire" label="Espace Opportunités agricoles" />
               </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={styles.footerBottom}>
          <p>© {new Date().getFullYear()} NYA AGRITEK. Tous droits réservés.</p>
        </div>
      </div>
      
      <style>
        {`
          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            width: 90%;
          }

          /* Ensure 4 columns stay on same line for desktop screens */
          @media (min-width: 769px) {
            .footer-content {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          /* Tablet view */
          @media (max-width: 768px) and (min-width: 577px) {
            .footer-content {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }

          /* Mobile view */
          @media (max-width: 576px) {
            .footer-content {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </footer>
  );
};

const FooterLink = ({ href, label }) => (
  <li style={styles.linkItem}>
    <a href={href} style={styles.link} className="footer-link">
      <ChevronRight size={14} style={{ marginRight: '5px', color: '#f3a31a' }} />
      {label}
    </a>
  </li>
);

const styles = {
  footer: {
    background: '#0b466fff', // Primary Blue
    color: '#fff',
    padding: '80px 0 20px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Gill Sans MT', 'Gill Sans', Calibri, 'Trebuchet MS', sans-serif"
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: '#f3a31a', // Secondary Orange
  },
  container: {
    width: '100%',
    margin: '0 auto',
    padding: '0 20px'
  },
  footerContent: {
    display: 'grid',
    gap: '40px',
    marginBottom: '60px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px'
  },
  logoImage: {
    height: '60px',
    width: 'auto',
    background: 'white', // Ensure logo is visible on blue bg
    padding: '5px',
    borderRadius: '8px'
  },
  logoText: {
    fontFamily: "'Julius Sans One', sans-serif",
    fontSize: '22px',
    fontWeight: '900', // BOLD
    color: '#fff'
  },
  tagline: {
    color: '#f3a31a', // Secondary Orange
    lineHeight: '1.6',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
    maxWidth: '300px'
  },
  companyDesc: {
    color: '#e0e0e0',
    lineHeight: '1.6',
    fontSize: '14px',
    marginBottom: '25px',
    maxWidth: '300px'
  },
  socialLinks: {
    display: 'flex',
    gap: '12px'
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.2)',
    color: '#fff',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.3)'
  },
  sectionTitle: {
    fontFamily: "'Julius Sans One', 'Gill Sans MT', 'Gill Sans', Calibri, 'Trebuchet MS', sans-serif",
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#f3a31a', // Secondary Orange
    marginBottom: '25px',
    letterSpacing: '1px'
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  linkItem: {
    marginBottom: '12px'
  },
  link: {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#e0e0e0',
    fontSize: '14px'
  },
  icon: {
    color: '#f3a31a', // Secondary Orange
    flexShrink: 0
  },
  footerBottom: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    paddingTop: '25px',
    textAlign: 'center',
    color: '#e0e0e0',
    fontSize: '13px'
  }
};

export default Footer;