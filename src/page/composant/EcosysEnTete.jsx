import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EcosysHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-badge {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-title {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .animate-description {
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .animate-buttons {
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .animate-image {
          animation: scaleIn 1s ease-out 0.3s backwards;
        }

        .animate-leaf {
          animation: float 3s ease-in-out infinite;
        }

        .btn-hover {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-hover:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
        }

        .btn-outline-hover {
          transition: all 0.3s ease;
        }

        .btn-outline-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          background-color: #000;
          color: white;
        }

        .image-container {
          transition: transform 0.5s ease;
        }

        .image-container:hover {
          transform: scale(1.02);
        }

        .image-container img {
          transition: transform 0.5s ease;
        }

        .image-container:hover img {
          transform: scale(1.05);
        }

        .highlight-green {
          display: inline-block;
          animation: fadeInUp 0.8s ease-out 0.3s backwards;
        }

        .highlight-lime {
          display: inline-block;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }
      `}</style>

      <div className="container-fluid py-5" style={{ backgroundColor: 'rgba(238, 237, 243, 0.84)' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Colonne de texte */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="mb-3">
                <span 
                  className={`badge px-3 py-2 ${isVisible ? 'animate-badge' : ''}`}
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
              
              <h1 className={`display-4 fw-bold mb-4 ${isVisible ? 'animate-title' : ''}`} style={{ lineHeight: '1.2' }}>
                Innovons pour une{' '}
                <span className="highlight-green" style={{ color: '#22c55e' }}>Afrique verte</span>{' '}
                <span className="highlight-lime" style={{ color: '#84cc16' }}>et durable</span>
              </h1>
              
              <p className={`lead mb-4 ${isVisible ? 'animate-description' : ''}`} style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                Nous développons des solutions agroécologiques et circulaires 
                pour catalyser le progrès social, économique et 
                environnemental en Côte d'Ivoire et en Afrique de l'Ouest.
              </p>
              
              <div className={`d-flex flex-wrap gap-3 ${isVisible ? 'animate-buttons' : ''}`}>
                <button 
                  className="btn btn-lg px-4 py-3 d-flex align-items-center gap-2 btn-hover"
                  style={{ 
                    backgroundColor: '#22c55e', 
                    color: 'white',
                    border: 'none',
                    fontWeight: '600',
                  }}
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
                    style={{ transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                
                <button 
                  className="btn btn-lg btn-outline-dark px-4 py-3 btn-outline-hover"
                  style={{ fontWeight: '600' }}
                >
                  Contactez-nous
                </button>
              </div>
            </div>
            
            {/* Colonne d'image */}
            <div className="col-lg-6 col-md-12">
              <div 
                className={`position-relative rounded-4 overflow-hidden shadow-lg image-container ${isVisible ? 'animate-image' : ''}`}
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
                  className="position-absolute animate-leaf"
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
    </>
  );
}