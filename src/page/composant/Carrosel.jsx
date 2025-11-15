import React, { useEffect } from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 // Assuming you have a CSS file for styling

const Carrosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


    const slides = [
    {
    title: "PROMOUVOIR UNE AGRICULTURE DURABLE, SOURCE DE SÉCURITÉ ALIMENTAIRE",
    buttonText: "Découvrez cet enjeu",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop"
    },
    {
    title: "SOUTENIR L'INNOVATION AGRICOLE POUR UN AVENIR DURABLE",
    buttonText: "En savoir plus",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop"
    },
    {
    title: "PRÉSERVER LES RESSOURCES NATURELLES POUR LES GÉNÉRATIONS FUTURES",
    buttonText: "Découvrir",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&h=600&fit=crop"
    },
    {
    title: "DÉVELOPPER DES PRATIQUES AGRICOLES RESPECTUEUSES DE L'ENVIRONNEMENT",
    buttonText: "Explorer",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop"
    },
    {
    title: "AMÉLIORER LA QUALITÉ DE VIE DES AGRICULTEURS",
    buttonText: "Découvrir l'initiative",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=600&fit=crop"
    },
    {
    title: "CULTIVER L'AVENIR ENSEMBLE",
    buttonText: "Participez",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=600&fit=crop"
    }
    ];

    const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
    setActiveIndex(index);
    };

    useEffect(() => {
      let interval;
    
      if (!isHovered) {
        interval = setInterval(() => {
          nextSlide();
        }, 1700);
      }
    
      return () => clearInterval(interval);
    }, [isHovered]);

    return (
      <div>

    <div className="position-relative overflow-hidden pb-5" style={{ borderRadius: '0 0 20px 20px', maxWidth:'1000px', margin:'0 auto' , maxHeight:'350px' }}>
    <div id="agricultureCarousel" className="carousel slide" onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>
    <div className="carousel-inner">
    {slides.map((slide, index) => (
    <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
    <div className="position-relative" style={{ height: '350px' }}>
      <img
      src={slide.image}
      className="d-block w-100 h-70"
      alt={`Slide ${index + 1}`}
      style={{ objectFit: 'cover' }}
      />

    <div className="position-absolute top-0 start-0 h-100" style={{ width: '40%' }}>
    <div className="h-100 d-flex align-items-center"
    style={{
    background: 'linear-gradient(135deg, rgba(6, 147, 227, 0.95), rgba(4, 119, 184, 0.90))',
    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
    }}>
    <div className="px-5">
    <h1 className="text-white fw-bold mb-5" style={{ fontSize: '1.5rem', lineHeight: '1.2', textTransform: 'uppercase' }}>
    {slide.title}
    </h1>

    <button className="btn btn-lg text-white border-0 d-flex align-items-center gap-2"
    style={{
    backgroundColor: 'transparent',
    borderBottom: '2px solid white',
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: '1.1rem'
    }}
    onMouseEnter={(e) => {
    e.target.style.transform = 'translateX(5px)';
    }}
    onMouseLeave={(e) => {
    e.target.style.transform = 'translateX(0)';
    }}>
    {slide.buttonText}
    <ChevronRight size={24} />
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    ))}
    </div>

    <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-center pb-4" style={{ zIndex: 10 }}>
    <div className="d-flex gap-2">
    {slides.map((_, index) => (
    <button
    key={index}
    onClick={() => goToSlide(index)}
    className={`border-0 rounded-circle transition-all ${
    index === activeIndex ? 'bg-warning' : 'bg-white'
    }`}
    style={{
    width: '12px',
    height: '12px',
    opacity: index === activeIndex ? 1 : 0.6,
    transition: 'all 0.3s ease',
    cursor: 'pointer'
    }}
    aria-label={`Go to slide ${index + 1}`}
    />
    ))}
    </div>
    </div>

    <button
    className="carousel-control-prev border-0 bg-transparent"
    type="button"
    onClick={prevSlide}
    style={{ width: '5%', opacity: 0.8 }}
    onMouseEnter={(e) => e.target.style.opacity = 1}
    onMouseLeave={(e) => e.target.style.opacity = 0.8}
    >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>

    <button
    className="carousel-control-next border-0 bg-transparent"
    type="button"
    onClick={nextSlide}
    style={{ width: '5%', opacity: 0.8 }}
    onMouseEnter={(e) => e.target.style.opacity = 1}
    onMouseLeave={(e) => e.target.style.opacity = 0.8}
    >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
    </div>

    <style jsx>{`
    .carousel-item {
    transition: transform 0.6s ease-in-out;
    }
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
    }

    button {
    transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
    .position-absolute.top-0 {
    width: 100% !important;
    }

    h1 {
    font-size: 1.5rem !important;
    }

    .px-5 {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    }
    }
    `}</style>
    </div>
    </div>
  );
};

export default Carrosel;