import React, { useState, useEffect, useRef } from 'react';

export default function MissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-image {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-title {
          animation: fadeInRight 1s ease-out 0.2s backwards;
        }

        .animate-text {
          animation: fadeInUp 1s ease-out 0.4s backwards;
        }

        .animate-button {
          animation: fadeInUp 1s ease-out 0.6s backwards;
        }

        .image-hover-container {
          position: relative;
          transition: transform 0.4s ease;
        }

        .image-hover-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(132, 204, 22, 0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
          border-radius: 24px;
        }

        .image-hover-container:hover::before {
          opacity: 1;
        }

        .image-hover-container:hover {
          transform: translateY(-10px);
        }

        .image-hover-container img {
          transition: transform 0.4s ease;
        }

        .image-hover-container:hover img {
          transform: scale(1.05);
        }

        .btn-animated {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .btn-animated::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .btn-animated:hover::before {
          left: 100%;
        }

        .btn-animated:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .title-highlight {
          display: inline-block;
          position: relative;
        }

        .title-highlight::after {
          content: '';
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 0;
          height: 8px;
          background: linear-gradient(90deg, #22c55e, #84cc16);
          opacity: 0.3;
          transition: width 0.8s ease;
          z-index: -1;
        }

        .animate-title .title-highlight::after {
          width: 100%;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          }
          50% {
            box-shadow: 0 25px 70px rgba(34, 197, 94, 0.25);
          }
        }

        .image-hover-container {
          animation: pulse 3s ease-in-out infinite;
        }

        .mission-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.25rem;
        }

        .mission-row {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .mission-col-image {
          flex: 1 1 500px;
          min-width: 300px;
        }

        .mission-col-text {
          flex: 1 1 500px;
          min-width: 300px;
        }

        .mission-title {
          font-size: 2.5rem;
          line-height: 1.2;
          color: #1a1a1a;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .mission-text {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #6c757d;
          margin-bottom: 1.5rem;
        }

        .mission-btn {
          background-color: transparent;
          color: #1a1a1a;
          border: 2px solid #1a1a1a;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          display: inline-block;
        }

        .mission-image {
          width: 100%;
          object-fit: cover;
          min-height: 450px;
          border-radius: 24px;
        }

        /* Responsive pour tablettes */
        @media (max-width: 992px) {
          .mission-container {
            padding: 2.5rem 1rem;
          }

          .mission-row {
            gap: 2rem;
          }

          .mission-title {
            font-size: 2rem;
          }

          .mission-text {
            font-size: 1rem;
          }

          .mission-image {
            min-height: 350px;
          }

          .image-hover-container:hover {
            transform: translateY(-5px);
          }
        }

        /* Responsive pour mobiles */
        @media (max-width: 768px) {
          .animate-image {
            animation: fadeInUp 1s ease-out;
          }

          .animate-title {
            animation: fadeInUp 1s ease-out 0.2s backwards;
          }

          .mission-container {
            padding: 2rem 1rem;
          }

          .mission-row {
            gap: 2rem;
          }

          .mission-col-image,
          .mission-col-text {
            flex: 1 1 100%;
          }

          .mission-title {
            font-size: 1.75rem;
            margin-bottom: 1rem;
          }

          .title-highlight::after {
            bottom: 5px;
            height: 6px;
          }

          .mission-text {
            font-size: 1rem;
            margin-bottom: 1.25rem;
          }

          .mission-image {
            min-height: 300px;
          }

          .mission-btn {
            width: 100%;
            text-align: center;
            padding: 0.875rem 1.5rem;
          }
        }

        /* Responsive pour petits mobiles */
        @media (max-width: 576px) {
          .mission-container {
            padding: 1.5rem 0.75rem;
          }

          .mission-row {
            gap: 1.5rem;
          }

          .mission-title {
            font-size: 1.5rem;
          }

          .mission-text {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .mission-image {
            min-height: 250px;
            border-radius: 16px;
          }

          .image-hover-container {
            border-radius: 16px;
          }

          .image-hover-container::before {
            border-radius: 16px;
          }
        }
      `}</style>

      <div className="mission-container" ref={sectionRef}>
        <div className="mission-row">
          {/* Colonne Image */}
          <div className="mission-col-image">
            <div 
              className={`image-hover-container ${isVisible ? 'animate-image' : ''}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                alt="Équipe ECOSYS"
                className="mission-image"
              />
            </div>
          </div>
          
          {/* Colonne Texte */}
          <div className="mission-col-text">
            <h2 
              className={`mission-title ${isVisible ? 'animate-title' : ''}`}
            >
              Notre mission : <span className="title-highlight">Transformer le potentiel</span> en prospérité
            </h2>
            
            <p 
              className={`mission-text ${isVisible ? 'animate-text' : ''}`}
            >
              Fondée en 2019 à Abidjan, ECOSYS INTERNATIONAL a pour mission de 
              créer de la valeur à partir des ressources locales, en plaçant l'innovation 
              et la durabilité au cœur de sa stratégie de croissance.
            </p>
            
            <button 
              className={`mission-btn btn-animated ${isVisible ? 'animate-button' : ''}`}
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
    </>
  );
}