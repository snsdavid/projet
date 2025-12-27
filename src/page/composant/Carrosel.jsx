import React, { useEffect, useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Carrosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Using mostly local images + high quality unsplash fallback where needed
  const slides = [
    {
      title: "CULTIVER L'AVENIR ENSEMBLE",
      subtitle: "Des solutions innovantes pour une agriculture durable.",
      buttonText: "À propos de nous",
      link: "/a-propos",
      image: "/images/realisation2.png" // Local high quality
    },
    {
      title: "L'EXPERTISE AU SERVICE DE LA TERRE",
      subtitle: "Des stratégies éprouvées pour maximiser vos rendements.",
      buttonText: "En savoir plus",
      link: "/a-propos",
      image: "/images/realisation1.png" // Local high quality
    },
    {
      title: "DURABILITÉ ET PERFORMANCE",
      subtitle: "Concilier rentabilité économique et respect de l'environnement.",
      buttonText: "Nos Domaines",
      link: "/domaines-intervention",
      image: "/images/domain_forestry.png" // Local forestry
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(nextSlide, 3000); // 3 seconds
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      style={styles.carouselWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div 
          key={index} 
          style={{
            ...styles.slide,
            opacity: index === activeIndex ? 1 : 0,
            zIndex: index === activeIndex ? 1 : 0
          }}
        >
          {/* Background Image with Overlay */}
          <div style={styles.imageWrapper}>
            <img src={slide.image} alt={slide.title} style={styles.image} />
            <div style={styles.overlay}></div>
          </div>

          {/* Content */}
          <div style={styles.contentContainer}>
             <div style={{
                 ...styles.content,
                 transform: index === activeIndex ? 'translateY(0)' : 'translateY(30px)',
                 opacity: index === activeIndex ? 1 : 0
             }}>
                <h1 style={styles.title}>{slide.title}</h1>
                <p style={styles.subtitle}>{slide.subtitle}</p>
                <a href={slide.link} style={styles.ctaButton}>
                   {slide.buttonText} <ChevronRight size={20} />
                </a>
             </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button onClick={prevSlide} style={{...styles.controlBtn, left: '20px'}}>
         <span style={styles.arrow}>‹</span>
      </button>
      <button onClick={nextSlide} style={{...styles.controlBtn, right: '20px'}}>
         <span style={styles.arrow}>›</span>
      </button>

      {/* Indicators */}
      <div style={styles.indicators}>
        {slides.map((_, idx) => (
            <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                    ...styles.indicator,
                    background: idx === activeIndex ? '#f3a31a' : 'rgba(255,255,255,0.5)',
                    width: idx === activeIndex ? '40px' : '12px'
                }}
            />
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselWrapper: {
    position: 'relative',
    height: '85vh',
    minHeight: '600px',
    width: '100%',
    overflow: 'hidden',
    background: '#000'
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out'
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    paddingLeft: '10%',
    paddingBottom: '15vh',
    zIndex: 2
  },
  content: {
    maxWidth: '700px',
    transition: 'all 1s ease-out 0.2s',
    color: 'white'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '900',
    marginBottom: '20px',
    fontFamily: "'Julius Sans One', sans-serif",
    lineHeight: '1.2',
    textTransform: 'uppercase'
  },
  subtitle: {
    fontSize: '1.4rem',
    marginBottom: '40px',
    fontWeight: '300',
    color: '#e0e0e0'
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: '#f3a31a', // Orange
    color: 'white',
    padding: '16px 36px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '700',
    transition: 'transform 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  },
  controlBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    color: 'white',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s'
  },
  arrow: {
    fontSize: '2rem',
    lineHeight: 1,
    marginTop: '-4px'
  },
  indicators: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '12px',
    zIndex: 10
  },
  indicator: {
    height: '12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default Carrosel;