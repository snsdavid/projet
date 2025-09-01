import React from 'react';

const Entreprise = ({title}) => {
  return (
    <section className="values-vision-section">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center min-vh-50">
          {/* Colonne de texte */}
          <div className="col-lg-6 col-md-12">
            <div className="text-content p-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgb(230, 229, 233)', minHeight: '400px' }}>
              <h1  className="fw-bold" style={{ color: 'rgb(17, 8, 59)', fontWeight: '500',fontFamily: 'Julius Sans One', fontSize: '1.9rem' , maxWidth:'500px'}}>
                {title}
              </h1>
            </div>
          </div>
                   
          {/* Colonne d'image */}
          <div className="col-lg-6 col-md-12">
            <div className="image-container" style={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Mains se tenant"
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Élément de courbe au bas */}
      <div className="curved-bottom-svg">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,10 Q50,0 100,10 L100,10 L0,10 Z" fill="white" />
        </svg>
      </div>
      
      {/* Styles CSS personnalisés */}
      <style jsx>{`
        .values-vision-section {
          margin: 0 0 50px 0;
          position: relative;
          background-color: rgba(32, 10, 129, 0.25);
        }
        
        .curved-bottom-svg {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 60px;
          z-index: 1;
        }
           
        @media (max-width: 991px) {
          .text-content h1 {
            font-size: 2.5rem;
          }
          
          .curved-bottom-svg {
            height: 40px;
          }
        }
           
        @media (max-width: 767px) {
          .text-content {
            padding: 3rem 2rem !important;
          }
                   
          .text-content h1 {
            font-size: 2rem;
            text-align: center;
          }
                   
          .image-container {
            height: 300px !important;
          }
          
          .curved-bottom-svg {
            height: 30px;
          }
        }
           
        /* Effet hover optionnel */
        .image-container img {
          transition: transform 0.3s ease;
        }
                 
        .image-container:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Entreprise;