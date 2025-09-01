import React from 'react';
import { Leaf, Satellite, TreePine, BarChart3, Users, Globe } from 'lucide-react';

const ForestryServicesCard = ({titre,paragraph1,paragraph2,paragraph3,paragraph4,paragraph5}) => {
  const services = [
    {
      emoji: "🪴",
      text: "Production de plants forestiers et fruitiers"
    },
    {
      emoji: "🛰️",
      text: "Télédétection & cartographie forestière"
    },
    {
      emoji: "🌿",
      text: "Agroforesterie & reforestation"
    },
    {
      emoji: "📊",
      text: "Suivi de reboisement & réalisation de plans d'aménagement"
    },
    {
      emoji: "🧑🏾‍🏫",
      text: "Formation en sylviculture & techniques de production de plants"
    },
    {
      emoji: "🌍",
      text: "Gestion des écosystèmes & sensibilisation des communautés"
    }
  ];

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.64)', minHeight: '100vh', padding: '40px 20px' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Section principale - Colonne de gauche */}
          <div className="col-8">
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', height: '100%' }}>
              {/* Titre principal */}
              <h1 style={{ 
                color: '#2c5aa0', 
                fontSize: '32px', 
                fontWeight: 'bold',
                lineHeight: '1.2',
                marginBottom: '30px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontFamily: 'Julius Sans One',
              }}>
                NOS SERVICES EN<br/>
                {titre}
              </h1>
              
              {/* Premier paragraphe */}
              <p style={{ 
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '20px',
                textAlign: 'justify'
              }}>
                {paragraph1}
              </p>

              <p style={{ 
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '20px',
                textAlign: 'justify'
              }}>
                {paragraph2}
              </p>

              <p style={{ 
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '20px',
                textAlign: 'justify'
              }}>
                {paragraph3}
              </p>

              <p style={{ 
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '15px',
                textAlign: 'justify'
              }}>
                {paragraph4}
              </p>

              <p style={{ 
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '15px',
                textAlign: 'justify'
              }}>
                {paragraph5}
              </p>

            </div>
          </div>

          {/* Section droite */}
          <div className="col-4">
            <div style={{ backgroundColor: 'white', borderRadius: '8px', height: '100%' }}>
              {/* Header gris */}
              <div style={{ 
                backgroundColor: '#e9ecef', 
                padding: '20px',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ 
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#333',
                  margin: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontFamily: 'Julius Sans One',
                }}>
                  NOS AUTRES PRESTATIONS
                </h3>
              </div>

              {/* Contenu */}
              <div style={{ padding: '30px 25px' }}>
                <div className="row">
                  <div className="col-6">
                    <div style={{ 
                      textAlign: 'center',
                      padding: '15px 5px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '6px',
                      marginBottom: '15px',
                    }}>
                      <a href="#" style={{ textDecoration: 'none' }}><div style={{ fontSize: '24px', marginBottom: '8px' }}>📋</div></a>
                      <div style={{ 
                        fontSize: '9px',
                        fontWeight: 'bold',
                        color: '#333',
                        lineHeight: '1.2'
                      }}>
                        <a href="#" style={{ textDecoration: 'none' }}>ÉTUDES ET PLANIFICATION</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div style={{ 
                      textAlign: 'center',
                      padding: '15px 5px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '6px',
                      marginBottom: '15px'
                    }}>
                      <a href="#" style={{ textDecoration: 'none' }}><div style={{ fontSize: '24px', marginBottom: '8px' }}>💼</div></a>
                      <div style={{ 
                        fontSize: '9px',
                        fontWeight: 'bold',
                        color: '#333',
                        lineHeight: '1.2'
                      }}>
                       <a href="#" style={{ textDecoration: 'none' }}> AT ET AMO</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div style={{ 
                      textAlign: 'center',
                      padding: '15px 5px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '6px'
                    }}>
                      <a href="#" style={{ textDecoration: 'none' }}><div style={{ fontSize: '24px', marginBottom: '8px' }}>📚</div></a>
                      <div style={{ 
                        fontSize: '9px',
                        fontWeight: 'bold',
                        color: '#333',
                        lineHeight: '1.2'
                      }}>
                        <a href="#" style={{ textDecoration: 'none' }}>FORMATION -<br/>COMMUNICATION</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div style={{ 
                      textAlign: 'center',
                      padding: '15px 5px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '6px'
                    }}>
                      <a href="#" style={{ textDecoration: 'none' }}><div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div></a>
                      <div style={{ 
                        fontSize: '9px',
                        fontWeight: 'bold',
                        color: '#333',
                        lineHeight: '1.2'
                      }}>
                        <a href="#" style={{ textDecoration: 'none' }}>AUDIT ET EXPERTISE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestryServicesCard;