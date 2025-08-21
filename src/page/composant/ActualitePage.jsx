import React, { useState } from 'react';

const NewsPag = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const categories = [
    { id: 'all', name: 'Toutes les actualités', icon: '📰' },
    { id: 'agriculture', name: 'Agriculture', icon: '🌾' },
    { id: 'technology', name: 'Innovation', icon: '💻' },
    { id: 'environment', name: 'Environnement', icon: '🌳' },
    { id: 'company', name: 'Entreprise', icon: '🏢' }
  ];

  const articles = [
    {
      id: 1,
      title: "NYA AGRITEK lance sa nouvelle plateforme de digitalisation agricole",
      excerpt: "Découvrez notre solution innovante qui révolutionne la gestion des exploitations agricoles en Côte d'Ivoire grâce à l'IoT et l'IA.",
      category: "technology",
      date: "2025-01-15",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      readTime: "5 min",
      featured: true,
      tags: ["Innovation", "Digitalisation", "IoT"]
    },
    {
      id: 2,
      title: "Projet de reforestation : 10 000 arbres plantés dans la région d'Abidjan",
      excerpt: "Notre équipe a mené avec succès une campagne de reforestation en partenariat avec les communautés locales pour restaurer l'écosystème.",
      category: "environment",
      date: "2025-01-12",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      readTime: "4 min",
      featured: true,
      tags: ["Reforestation", "Environnement", "Communauté"]
    },
    {
      id: 3,
      title: "Formation des producteurs : 200 agriculteurs certifiés en agriculture durable",
      excerpt: "Nos programmes de formation ont permis de renforcer les capacités de 200 producteurs locaux sur les techniques d'agriculture durable.",
      category: "agriculture",
      date: "2025-01-10",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=400&fit=crop",
      readTime: "3 min",
      featured: false,
      tags: ["Formation", "Agriculture durable", "Certification"]
    },
    {
      id: 4,
      title: "NYA AGRITEK remporte le prix de l'innovation agricole 2025",
      excerpt: "Notre entreprise a été récompensée pour ses solutions innovantes lors du salon international de l'agriculture à Abidjan.",
      category: "company",
      date: "2025-01-08",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      readTime: "2 min",
      featured: false,
      tags: ["Prix", "Innovation", "Reconnaissance"]
    },
    {
      id: 5,
      title: "Lancement du programme d'agroforesterie en milieu rural",
      excerpt: "Initiative ambitieuse pour combiner production agricole et conservation forestière dans 5 villages de la région du Sud-Comoé.",
      category: "environment",
      date: "2025-01-05",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop",
      readTime: "6 min",
      featured: false,
      tags: ["Agroforesterie", "Développement rural", "Conservation"]
    },
    {
      id: 6,
      title: "Partenariat stratégique avec les coopératives agricoles locales",
      excerpt: "NYA AGRITEK s'associe avec 15 coopératives pour améliorer la commercialisation des produits agricoles locaux.",
      category: "company",
      date: "2025-01-03",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop",
      readTime: "4 min",
      featured: false,
      tags: ["Partenariat", "Coopératives", "Commerce"]
    },
    {
      id: 7,
      title: "Nouvelle technologie de monitoring des cultures par satellite",
      excerpt: "Utilisation de l'imagerie satellite pour surveiller la santé des cultures et optimiser les rendements agricoles.",
      category: "technology",
      date: "2025-01-01",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=400&fit=crop",
      readTime: "5 min",
      featured: false,
      tags: ["Satellite", "Monitoring", "Technologie"]
    },
    {
      id: 8,
      title: "Campagne de sensibilisation sur l'agriculture biologique",
      excerpt: "Sensibilisation de 500 producteurs aux techniques d'agriculture biologique et aux certifications internationales.",
      category: "agriculture",
      date: "2024-12-28",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop",
      readTime: "3 min",
      featured: false,
      tags: ["Agriculture biologique", "Sensibilisation", "Certification"]
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const featuredArticles = articles.filter(article => article.featured);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="news-page">
      <style jsx>{`
        .news-page {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.03), rgba(34, 197, 94, 0.03), rgba(13, 148, 136, 0.03));
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
          font-size: 1.3rem;
          line-height: 1.6;
          color: #cbd5e1;
          max-width: 700px;
          margin: 0 auto;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .featured-section {
          margin-bottom: 80px;
        }

        .featured-title {
          font-size: 2.5rem;
          color: rgb(30, 51, 78);
          text-align: center;
          margin-bottom: 50px;
          font-weight: 700;
          position: relative;
        }

        .featured-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          border-radius: 2px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }

        .featured-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .featured-card::before {
          content: '⭐ À LA UNE';
          position: absolute;
          top: 20px;
          left: 20px;
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
        }

        .featured-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .categories-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .category-button {
          padding: 12px 24px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-weight: 500;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .category-button:hover {
          border-color: #10b981;
          color: #10b981;
          transform: translateY(-2px);
        }

        .category-button.active {
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          border-color: transparent;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .article-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .article-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .article-card:hover .article-image {
          transform: scale(1.05);
        }

        .article-content {
          padding: 25px;
        }

        .article-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .article-date {
          color: #64748b;
          font-size: 0.9rem;
        }

        .article-read-time {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1));
          color: #10b981;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .article-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: rgb(30, 51, 78);
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .article-excerpt {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 50px;
        }

        .page-button {
          padding: 10px 15px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          color: #64748b;
        }

        .page-button:hover {
          border-color: #10b981;
          color: #10b981;
        }

        .page-button.active {
          background: linear-gradient(135deg, #10b981, #22c55e, #0d9488);
          border-color: transparent;
          color: white;
        }

        .page-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .no-articles {
          text-align: center;
          padding: 60px 20px;
          color: #64748b;
        }

        .no-articles-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          display: block;
        }

        .no-articles-text {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .featured-grid {
            grid-template-columns: 1fr;
          }
          
          .categories-filter {
            padding: 20px;
          }
          
          .category-button {
            padding: 10px 16px;
            font-size: 0.9rem;
          }
          
          .articles-grid {
            grid-template-columns: 1fr;
          }
          
          .pagination {
            flex-wrap: wrap;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Actualités</h1>
          <p className="hero-subtitle">
            Restez informé des dernières nouvelles, innovations et projets de NYA AGRITEK. 
            Découvrez notre impact sur l'agriculture durable en Côte d'Ivoire et au-delà.
          </p>
        </div>
      </section>

      <div className="main-content">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="featured-section">
            <h2 className="featured-title">Articles à la Une</h2>
            <div className="featured-grid">
              {featuredArticles.map(article => (
                <article key={article.id} className="featured-card article-card">
                  <img src={article.image} alt={article.title} className="article-image" />
                  <div className="article-content">
                    <div className="article-meta">
                      <span className="article-date">{formatDate(article.date)}</span>
                      <span className="article-read-time">📖 {article.readTime}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-tags">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <div className="categories-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1);
              }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {displayedArticles.length > 0 ? (
          <>
            <div className="articles-grid">
              {displayedArticles.map(article => (
                <article key={article.id} className="article-card">
                  <img src={article.image} alt={article.title} className="article-image" />
                  <div className="article-content">
                    <div className="article-meta">
                      <span className="article-date">{formatDate(article.date)}</span>
                      <span className="article-read-time">📖 {article.readTime}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-tags">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  ← Précédent
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  className="page-button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Suivant →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-articles">
            <span className="no-articles-icon">📰</span>
            <p className="no-articles-text">Aucun article trouvé dans cette catégorie</p>
            <p>Essayez de sélectionner une autre catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPag;