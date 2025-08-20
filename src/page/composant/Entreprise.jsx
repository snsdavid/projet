import React from 'react';

const Entreprise = () => {
  const services = [
    {
      title: "Agriculture & Négoce agricole",
      description: "Accompagner les producteurs, structurer les filières, dynamiser les marchés vivriers et maraîchers.",
      details: [
        "Mise en place et gestion d'exploitations agricoles",
        "Accompagnement technique et stratégique de projets agricoles",
        "Formation des producteurs et renforcement de capacités",
        "Mobilisation de main-d'œuvre qualifiée",
        "Commercialisation et valorisation des produits vivriers et maraîchers",
        "Intermédiation et partenariat marchand",
        "Logistique, stockage et gestion de la qualité"
      ],
      icon: "🌾"
    },
    {
      title: "Études & Conseil",
      description: "Analyser, planifier, orienter. Nous apportons des solutions stratégiques pour des projets agricoles et environnementaux solides.",
      details: [
        "Études de faisabilité agricole",
        "Conseil stratégique et technique",
        "Planification de projets agricoles",
        "Analyse de marché et opportunités",
        "Évaluation d'impact environnemental"
      ],
      icon: "📊"
    },
    {
      title: "Digitalisation agricole",
      description: "Des outils numériques pour transformer les pratiques agricoles : données, capteurs, pilotage intelligent.",
      details: [
        "Solutions IoT pour l'agriculture",
        "Systèmes de monitoring des cultures",
        "Applications mobiles agricoles",
        "Analyse de données agricoles",
        "Outils de gestion intelligente des exploitations"
      ],
      icon: "💻"
    },
    {
      title: "Foresterie & Environnement",
      description: "Reboiser, restaurer, préserver. Nous développons des projets verts à fort impact écologique et social.",
      details: [
        "Production de plants forestiers et fruitiers",
        "Télédétection & cartographie forestière",
        "Agroforesterie & reforestation",
        "Suivi de reboisement & plans d'aménagement",
        "Formation en sylviculture & production de plants",
        "Gestion des écosystèmes & sensibilisation communautaire"
      ],
      icon: "🌳"
    }
  ];

  return (
    <div className="about-page">
      <style jsx>{`
        .about-page {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(34, 197, 94, 0.05), rgba(13, 148, 136, 0.05));
          min-height: 100vh;
        }

        .hero-section {
          background: rgb(30, 51, 78);
          color: white;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          opacity: 0.1;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 30px;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #e2e8f0;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #cbd5e1;
          max-width: 800px;
          margin: 0 auto;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .intro-section {
          text-align: center;
          margin-bottom: 80px;
        }

        .intro-title {
          font-size: 2.5rem;
          color: rgb(30, 51, 78);
          margin-bottom: 30px;
          font-weight: 700;
        }

        .intro-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #64748b;
          max-width: 900px;
          margin: 0 auto 40px;
        }

        .approach-section {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1), rgba(13, 148, 136, 0.1));
          padding: 80px 40px;
          border-radius: 30px;
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(16, 185, 129, 0.2);
        }

        .approach-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 49%, rgba(16, 185, 129, 0.05) 50%, transparent 51%);
          animation: rotatePattern 20s linear infinite;
        }

        .approach-section::after {
          content: '';
          position: absolute;
          top: 20px;
          right: 20px;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          border-radius: 50%;
          opacity: 0.1;
        }

        @keyframes rotatePattern {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .approach-content {
          position: relative;
          z-index: 2;
        }

        .approach-title {
          font-size: 2.5rem;
          color: rgb(30, 51, 78);
          text-align: center;
          margin-bottom: 50px;
          font-weight: 700;
          position: relative;
        }

        .approach-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          border-radius: 2px;
        }

        .approach-highlight {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
          border-left: 5px solid #10b981;
          position: relative;
        }

        .approach-highlight::before {
          content: '🌱';
          position: absolute;
          top: -10px;
          right: 20px;
          font-size: 2rem;
          background: white;
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .approach-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #64748b;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 30px;
        }

        .approach-phases {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .phase-item {
          background: white;
          padding: 30px 20px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .phase-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
        }

        .phase-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .phase-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          display: block;
        }

        .phase-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: rgb(30, 51, 78);
          margin-bottom: 10px;
        }

        .phase-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.5;
        }

        .approach-footer {
          text-align: center;
          margin-top: 40px;
        }

        .approach-tagline {
          font-size: 1.3rem;
          font-weight: 600;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-section {
          margin-bottom: 80px;
        }

        .services-title {
          font-size: 2.5rem;
          color: rgb(30, 51, 78);
          text-align: center;
          margin-bottom: 60px;
          font-weight: 700;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .service-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }

        .service-title {
          font-size: 1.5rem;
          color: rgb(30, 51, 78);
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-description {
          color: #64748b;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .service-details {
          list-style: none;
          padding: 0;
        }

        .service-details li {
          color: #64748b;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
          font-size: 0.95rem;
        }

        .service-details li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .mission-section {
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          color: white;
          padding: 80px 40px;
          border-radius: 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .mission-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
          animation: float 20s linear infinite;
          opacity: 0.1;
        }

        @keyframes float {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .mission-title {
          font-size: 2.5rem;
          margin-bottom: 30px;
          font-weight: 700;
          position: relative;
          z-index: 1;
        }

        .mission-text {
          font-size: 1.3rem;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .stat-item {
          text-align: center;
          padding: 30px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .approach-section {
            padding: 40px 20px;
          }
          
          .approach-phases {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .approach-highlight {
            padding: 30px 20px;
          }
          
          .mission-section {
            padding: 60px 20px;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">NYA AGRITEK</h1>
          <p className="hero-subtitle">🌱 Cultivons l'avenir, une récolte à la fois ! 🌾</p>
          <p className="hero-description">
            Entreprise ivoirienne engagée pour une agriculture durable et innovante. 
            Agriculture, négoce agricole, digitalisation, conseil, étude, foresterie & environnement. 🌱🌍
          </p>
        </div>
      </section>

      <div className="main-content">
        {/* Introduction */}
        <section className="intro-section">
          <h2 className="intro-title">Experts en Agriculture Durable</h2>
          <p className="intro-text">
            Experts en agriculture et négoce agricole, digitalisation et technologie agricole, 
            étude et conseil, foresterie et environnement, nous proposons des solutions sur mesure 
            pour accompagner le développement agricole durable. Rejoignez-nous pour innover et 
            relever ensemble les défis du secteur.
          </p>
        </section>

        {/* Notre Approche */}
        <section className="approach-section">
          <div className="approach-content">
            <h2 className="approach-title">Notre Approche Intégrée</h2>
            
            <div className="approach-highlight">
              <p className="approach-text">
                Chez <strong>NYA AGRITEK</strong>, l'agriculture ne s'arrête pas à la production. 
                Nous intervenons <strong>avant, pendant et après la récolte</strong>, pour garantir un accompagnement complet et durable.
              </p>
            </div>

            <div className="approach-phases">
              <div className="phase-item">
                <span className="phase-icon">🌱</span>
                <h3 className="phase-title">AVANT la récolte</h3>
                <p className="phase-desc">
                  Préparation, planification et mise en place des systèmes agricoles optimaux
                </p>
              </div>
              <div className="phase-item">
                <span className="phase-icon">🌾</span>
                <h3 className="phase-title">PENDANT la récolte</h3>
                <p className="phase-desc">
                  Accompagnement technique et suivi de la production agricole
                </p>
              </div>
              <div className="phase-item">
                <span className="phase-icon">📦</span>
                <h3 className="phase-title">APRÈS la récolte</h3>
                <p className="phase-desc">
                  Valorisation, commercialisation et distribution des produits
                </p>
              </div>
            </div>

            <div className="approach-footer">
              <p className="approach-tagline">
                Innovation × Expertise × Impact Terrain = Succès Durable
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2 className="services-title">Nos Quatre Pôles d'Action</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-details">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="mission-section">
          <h2 className="mission-title">Notre Mission</h2>
          <p className="mission-text">
            Nous sommes une entreprise ivoirienne engagée pour une agriculture 
            <strong> plus intelligente, plus durable et plus humaine</strong>. 
            Nous transformons les défis agricoles en opportunités de croissance 
            durable pour les communautés et l'environnement.
          </p>
          
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Pôles d'Expertise</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Solutions Durables</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">360°</div>
              <div className="stat-label">Accompagnement</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">🇨🇮</div>
              <div className="stat-label">Expertise Locale</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Entreprise;