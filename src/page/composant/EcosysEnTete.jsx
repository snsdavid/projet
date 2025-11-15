import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EcosysHero() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: 'rgba(238, 237, 243, 0.84)' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Colonne de texte */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="mb-3">
              <span 
                className="badge px-3 py-2" 
                style={{ 
                  backgroundColor: '#d4f4dd', 
                  color: '#2d7a3e',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}
              >
                NYA AGRITECH
              </span>
            </div>
            
            <h1 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
              Innovons pour une{' '}
              <span style={{ color: '#22c55e' }}>Afrique verte</span>{' '}
              <span style={{ color: '#84cc16' }}>et durable</span>
            </h1>
            
            <p className="lead mb-4" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
              Nous développons des solutions agroécologiques et circulaires 
              pour catalyser le progrès social, économique et 
              environnemental en Côte d'Ivoire et en Afrique de l'Ouest.
            </p>
            
            <div className="d-flex flex-wrap gap-3">
              <button 
                className="btn btn-lg px-4 py-3 d-flex align-items-center gap-2"
                style={{ 
                  backgroundColor: '#22c55e', 
                  color: 'white',
                  border: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#16a34a'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#22c55e'}
              >
                Découvrir nos projets
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              
              <button 
                className="btn btn-lg btn-outline-dark px-4 py-3"
                style={{ fontWeight: '600' }}
              >
                Contactez-nous
              </button>
            </div>
          </div>
          
          {/* Colonne d'image */}
          <div className="col-lg-6 col-md-12">
            <div 
              className="position-relative rounded-4 overflow-hidden shadow-lg"
              style={{ backgroundColor: '#7fb3a1' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop"
                alt="Produits ECOSYMS Natural Radiance"
                className="img-fluid w-100"
                style={{ 
                  objectFit: 'cover',
                  minHeight: '400px'
                }}
              />
              
              {/* Élément décoratif - feuille */}
              <div 
                className="position-absolute"
                style={{
                  top: '20px',
                  right: '20px',
                  fontSize: '4rem',
                  opacity: '0.9'
                }}
              >
                🌿
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}