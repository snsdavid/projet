import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MissionSection() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Colonne Image */}
        <div className="col-lg-6 col-md-12">
          <div 
            className="position-relative"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
              alt="Équipe ECOSYS"
              className="img-fluid w-100"
              style={{ 
                objectFit: 'cover',
                minHeight: '450px'
              }}
            />
          </div>
        </div>
        
        {/* Colonne Texte */}
        <div className="col-lg-6 col-md-12">
          <h2 
            className="fw-bold mb-4" 
            style={{ 
              fontSize: '2.5rem',
              lineHeight: '1.2',
              color: '#1a1a1a'
            }}
          >
            Notre mission : Transformer le potentiel en prospérité
          </h2>
          
          <p 
            className="mb-4" 
            style={{ 
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#6c757d'
            }}
          >
            Fondée en 2019 à Abidjan, ECOSYS INTERNATIONAL a pour mission de 
            créer de la valeur à partir des ressources locales, en plaçant l'innovation 
            et la durabilité au cœur de sa stratégie de croissance.
          </p>
          
          <button 
            className="btn btn-outline-dark btn-lg px-4 py-3"
            style={{ 
              fontWeight: '600',
              borderWidth: '2px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#1a1a1a';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#1a1a1a';
            }}
          >
            Découvrir notre histoire
          </button>
        </div>
      </div>
    </div>
  );
}