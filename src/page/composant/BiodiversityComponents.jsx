import React from 'react';

// Composant Header avec image et titre
export const BiodiversityHeader = ({title, description , icon}) => {
  return (
    <div className="position-relative" style={{ height: '300px' }}>
      {/* Image de fond avec lézard à droite */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: 'url("/thumb__940_0_0_0_auto.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'right center'
        }}
      />
      
      {/* Section blanche à gauche avec le contenu */}
      <div 
        className="position-absolute h-100 d-flex"
        style={{ 
          backgroundColor: 'white',
          width: '60%',
          left: 0,
          clipPath: 'polygon(0 0, 85% 0, 75% 100%, 0 100%)'
        }}
      >
        <div className="container-fluid d-flex justify-content-end" style={{ marginRight: '190px' }}>
          <div className="row">
            <div className="col-10">
              {/* Badge vert en haut */}
              <div className="mb-3 mt-5">
                <span 
                  className="badge px-4 fs-6 py-3 fw-normal text-white"
                  style={{ 
                    backgroundColor: '#9BC53D',
                    borderRadius: '40px'
                  }}
                >
                  {title}
                </span>
              </div>
              
              {/* Titre principal */}
              <h1 
                className="fw-bold mb-4"
                style={{ 
                  color: '#1E3A5F',
                  fontSize: '1.5rem',
                  lineHeight: '1.5',
                  letterSpacing: '-0.02em',
                  fontFamily: 'Julius Sans One'
                }}
              >
                {description}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="curved-bottom-svg" style={{ position: "absolute",bottom: "-1px",left: "0",width: "100%",height: "60px",zIndex: "1" }}>
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ width: '100%', height: '100%'}}>
          <path d="M0,10 Q50,0 100,10 L100,10 L0,10 Z" fill="#9BC53D" />
        </svg>
      </div>
      
      {/* Cercle vert avec icône en bas à droite de la section blanche */}
      <div 
        className="position-absolute d-flex align-items-center justify-content-center rounded-circle"
        style={{ 
          backgroundColor: '#9BC53D',
          width: '130px',
          height: '130px',
          bottom: '145px',
          left: '49%',
          transform: 'translateX(-50%)'
        }}
      >
        {/* <svg 
          width="35" 
          height="35" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="1.5"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg> */}
        <img src={icon} alt="" style={{ width: "40px", height: "40px", objectFit: "contain" }}/>
      </div>
    </div>
  );
};

// Composant Section verte avec texte
export const BiodiversityContent = ({title, description}) => {
  return (
    <section 
      style={{ backgroundColor: '#9BC53D',height: '40vh'}}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Titre de la section */}
            <h2 className="text-white fw-bold mb-4 text-uppercase text-center" style={{ fontSize: '1.4rem' , maxWidth: '650px' , margin: '0 auto'}}>
              {title}
            </h2>
            
            {/* Texte descriptif */}
            <div className="text-white" style={{ fontSize: '1.2rem', lineHeight: '1.7' , maxWidth: '800px' , margin: '0 auto'}}>
              <p className="mb-0">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
