import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../css/Carrosel.css'; // Assuming you have a CSS file for styling

const Carrosel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      class: 'slide-1',
      title: 'Excellence & Innovation',
      subtitle: 'Votre partenaire de confiance depuis plus de 40 ans',
      description: 'Nous accompagnons les entreprises et organisations dans leurs défis les plus complexes grâce à notre expertise reconnue et notre approche innovante. Notre équipe d\'experts vous guide vers des solutions durables et performantes.',
      link: '#services',
      buttonText: 'Découvrir nos services'
    },
    {
      id: 1,
      class: 'slide-2',
      title: 'Développement Durable',
      subtitle: 'Construisons ensemble un avenir responsable',
      description: 'Notre engagement pour l\'environnement et la responsabilité sociale guide chacune de nos actions. Nous développons des solutions respectueuses de l\'environnement pour un impact positif durable.',
      link: '#environnement',
      buttonText: 'Nos engagements'
    },
    {
      id: 2,
      class: 'slide-3',
      title: 'Solutions Personnalisées',
      subtitle: 'Chaque projet est unique, notre approche aussi',
      description: 'Fort de notre expérience sur plus de 3000 références mondiales, nous adaptons notre méthodologie à vos besoins spécifiques pour garantir votre succès.',
      link: '#projets',
      buttonText: 'Voir nos projets'
    },
    {
      id: 3,
      class: 'slide-4',
      title: 'Expertise Reconnue',
      subtitle: 'Plus de 800 projets pilotés avec succès',
      description: 'Notre équipe pluridisciplinaire d\'experts vous apporte des solutions concrètes et opérationnelles adaptées aux défis de votre secteur d\'activité.',
      link: '#contact',
      buttonText: 'Nous contacter'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Fonction pour réinitialiser les animations
  const resetAnimations = () => {
    const activeSlide = document.querySelector('.carousel-item[style*="opacity: 1"]');
    if (activeSlide) {
      const elements = activeSlide.querySelectorAll('.carousel-title, .carousel-subtitle, .carousel-description, .carousel-btn');
      elements.forEach(el => {
        el.style.animation = 'none';
        // Force reflow
        void el.offsetHeight;
      });
      
      setTimeout(() => {
        activeSlide.classList.add('active');
      }, 50);
    }
  };

  useEffect(() => {
    resetAnimations();
  }, [currentSlide]);

  return (
    <div className="carousel-container">
      <section
        id="heroCarousel"
        className="hero-carousel"
        style={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Indicateurs */}
        <div className="carousel-indicators" style={{
          position: 'absolute',
          right: 0,
          bottom: '30px',
          left: 0,
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: 0,
          marginRight: '15%',
          marginBottom: 0,
          marginLeft: '15%',
          listStyle: 'none'
        }}>
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={index === currentSlide ? 'active' : ''}
              style={{
                boxSizing: 'content-box',
                flex: '0 1 auto',
                width: '15px',
                height: '15px',
                padding: 0,
                marginRight: '8px',
                marginLeft: '8px',
                textIndent: '-999px',
                cursor: 'pointer',
                backgroundColor: index === currentSlide ? 'white' : 'transparent',
                border: '2px solid white',
                borderTop: '2px solid white',
                borderBottom: '2px solid white',
                opacity: index === currentSlide ? 1 : 0.5,
                transition: 'all 0.3s ease',
                borderRadius: '50%',
                transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
              }}
            />
          ))}
        </div>

        {/* Container pour les slides */}
        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          height: '80vh',
          minHeight: '600px',
          borderRadius: '20px'
        }}>
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`carousel-item ${slide.class} ${index === currentSlide ? 'active' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: index === currentSlide ? 1 : 0,
                visibility: index === currentSlide ? 'visible' : 'hidden',
                transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '20px',
                overflow: 'hidden'
              }}
            >
              <div style={{
                content: '',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3))',
                zIndex: 1
              }} />
              <div className="carousel-content">
                <h1 className="carousel-title">
                  {slide.title}
                </h1>
                <p className="carousel-subtitle">
                  {slide.subtitle}
                </p>
                <p className="carousel-description">
                  {slide.description}
                </p>
                <a 
                  href={slide.link} 
                  className="carousel-btn"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contrôles */}
        <button 
          className="carousel-control-prev" 
          type="button"
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: '30px',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            padding: 0,
            color: '#fff',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            opacity: 0.7,
            transition: 'all 0.3s ease',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '1';
            e.target.style.background = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '0.7';
            e.target.style.background = 'rgba(255,255,255,0.1)';
          }}
        >
          <span className="carousel-control-prev-icon" style={{ display: 'inline-block' }}></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        
        <button 
          className="carousel-control-next" 
          type="button"
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: '30px',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            padding: 0,
            color: '#fff',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            opacity: 0.7,
            transition: 'all 0.3s ease',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '1';
            e.target.style.background = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '0.7';
            e.target.style.background = 'rgba(255,255,255,0.1)';
          }}
        >
          <span className="carousel-control-next-icon" style={{ display: 'inline-block' }}></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </section>
    </div>
  );
};

export default Carrosel;