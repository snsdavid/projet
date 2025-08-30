import React from 'react';

const EntrepriseSection2 = ({ 
        title, 
        petittitre, 
        text, 
        points = [] 
      }) => {

        return (
          <div className="container-fluid py-4" >
            {/* Titre principal */}
            <div className="text-center mb-4">
              <h1 className="fw-bold mb-0" style={{ color: '#8bc34a', fontSize: '1.5rem', letterSpacing: '1px' ,fontFamily: 'Julius Sans One' }}>
                {title}
              </h1>
            </div>
      
            {/* Section */}
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                {/* Sous-titre */}
                <h3 className="fw-bold mb-3" style={{ color: 'rgb(17, 108, 139)', fontSize: '1.5rem' }}>
                  {petittitre}
                </h3>
      
                {/* Texte de description */}
                {text && (
                  <p className="mb-3" style={{lineHeight: '1.6' , fontSize: '1.1rem' , fontWeight: 'semi-bold' , maxWidth: "700px" , margin: "0 auto" }}>
                    {text}
                  </p>
                )}
      
                {/* Liste des points */}
                {points.length > 0 && (
                  <ul className="list-unstyled">
                    {points.map((point, index) => (
                        <li key={index} className="mb-3">
                        { point.titre ? (
                            <div>
                                <h3 className="fw-bold" style={{ color: 'rgb(17, 108, 139)', fontSize: '1.1rem' }}>
                                    {point.titre}
                                </h3>
                            </div>
                        ):""}
                        <div style={{paddingTop: '0.4rem' , marginLeft: '0' }}>
                            <span className="me-2" style={{ color: '#666', fontSize: '1.5rem'}}>•</span>
                            <span style={{ color: '#333', lineHeight: '1.6', fontSize: '1.1rem' , fontWeight: 'semi-bold' }}>
                            {point.text}
                            </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      };
export default EntrepriseSection2;