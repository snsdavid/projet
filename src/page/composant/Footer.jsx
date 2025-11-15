import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Ligne animée en haut */}
      <div style={styles.shimmerLine}></div>

      <div style={styles.container}>
        <div style={styles.footerContent}>
          {/* Section Marque */}
          <div style={styles.footerBrand}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <img src="/icon.png" alt="NYA AGRITEK" style={styles.logoImage} />
              </div>
              <div style={styles.logoText}>NYA AGRITEK</div>
            </div>
            
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Section Navigation */}
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>DOMAINES D'INTERVENTION</h3>
            <ul style={styles.footerLinks}>
              <li style={styles.linkItem}>
                <a href="/domaine-d-intervention/FORESTERIE_ENVIRONNEMENT" style={styles.link}>DOMAINES D'INTERVENTION</a>
              </li>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}>AGRICULTURE</a>
              </li>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}>NEGOCE AGRICOLE</a>
              </li>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}>ETUDE ET CONSEIL</a>
              </li>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}>DIGITALISATION AGRICOLE</a>
              </li>
            </ul>
          </div>

          {/* Section Explorer */}
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>Autres</h3>
            <ul style={styles.footerLinks}>
              <li style={styles.linkItem}>
                <a href="/actualites" style={styles.link}>Actualités</a>
              </li>
              <li style={styles.linkItem}>
                <a href="/candidate" style={styles.link}>Postuler</a>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>CONTACT</h3>
            <div style={styles.contactInfo}>
              <p style={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                contact@ecosys.ci
              </p>
              <p style={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +225 01 41 64 00 00
              </p>
              <p style={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Abidjan, Côte d'Ivoire
              </p>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div style={styles.footerBottom}>
          <p>© 2025 ECOSYS INTERNATIONAL SARL. Tous droits réservés.</p>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');

          @keyframes shimmer {
            0%, 100% { 
              background-position: -200% center; 
            }
            50% { 
              background-position: 200% center; 
            }
          }

          .footer-link:hover {
            color: #4facfe !important;
            transform: translateX(5px);
          }

          .social-link-hover:hover {
            background: linear-gradient(135deg, #4facfe, #00f2fe) !important;
            color: white !important;
            transform: translateY(-3px) !important;
            box-shadow: 0 10px 25px rgba(79, 172, 254, 0.4) !important;
          }
        `}
      </style>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'rgb(30, 51, 78)',
    color: 'white',
    padding: '60px 0 20px',
    position: 'relative',
    overflow: 'hidden'
  },
  shimmerLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #4facfe 100%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 3s ease-in-out infinite'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '40px',
    marginBottom: '40px'
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  },
  logoIcon: {
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    transition: 'transform 0.3s ease'
  },
  logoImage: {
    width: '200%',
    height: '200%',
    objectFit: 'contain'
  },
  logoText: {
    fontSize: '18px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  companyDescription: {
    color: '#94a3b8',
    lineHeight: '1.6',
    fontSize: '14px',
    marginBottom: '20px'
  },
  socialLinks: {
    display: 'flex',
    gap: '15px'
  },
  socialLink: {
    width: '45px',
    height: '45px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: '#94a3b8',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#f8fafc'
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  linkItem: {
    marginBottom: '10px'
  },
  link: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    position: 'relative',
    display: 'inline-block'
  },
  contactInfo: {
    color: '#94a3b8',
    fontSize: '14px',
    lineHeight: '1.6'
  },
  contactItem: {
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '20px',
    textAlign: 'center'
  }
};

export default Footer;