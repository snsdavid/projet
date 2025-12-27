import React, { useState } from 'react';
import HeaderComposant from './Headercomposant';
import Footer from './Footer';
import { Calendar, Clock, ChevronRight, Tag } from 'lucide-react';

const NewsPag = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const categories = [
    { id: 'all', name: 'Tout', icon: '📰' },
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
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  // Link to detail page (using simple href for now, usually Link component)
  const handleArticleClick = (id) => {
      window.location.href = `/actualites/${id}`;
  };

  return (
    <div style={styles.pageWrapper}>
      <HeaderComposant />
      
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Actualités & Innovations</h1>
          <p style={styles.heroSubtitle}>
            Restez informé des dernières avancées chez NYA AGRITEK et dans le monde agricole.
          </p>
        </div>
      </section>

      <div style={styles.container}>
        
        {/* Filter Section */}
        <div style={styles.filterContainer}>
            {categories.map(cat => (
                <button 
                    key={cat.id}
                    style={{
                        ...styles.filterBtn,
                        ...(selectedCategory === cat.id ? styles.activeFilterBtn : {})
                    }}
                    onClick={() => setSelectedCategory(cat.id)}
                >
                    {cat.icon} {cat.name}
                </button>
            ))}
        </div>

        {/* Articles Grid */}
        <div style={styles.grid}>
            {displayedArticles.length > 0 ? (
                displayedArticles.map(article => (
                    <article 
                        key={article.id} 
                        style={styles.card}
                        onClick={() => handleArticleClick(article.id)}
                    >
                        <div style={styles.imageContainer}>
                            <img src={article.image} alt={article.title} style={styles.image} />
                            <div style={styles.categoryTag}>{categories.find(c => c.id === article.category)?.name || 'News'}</div>
                        </div>
                        <div style={styles.cardContent}>
                            <div style={styles.meta}>
                                <span style={styles.metaItem}><Calendar size={14} /> {new Date(article.date).toLocaleDateString()}</span>
                                <span style={styles.metaItem}><Clock size={14} /> {article.readTime}</span>
                            </div>
                            <h3 style={styles.cardTitle}>{article.title}</h3>
                            <p style={styles.cardExcerpt}>{article.excerpt}</p>
                            <div style={styles.cardFooter}>
                                <span style={styles.readMore}>Lire la suite <ChevronRight size={16} /></span>
                            </div>
                        </div>
                    </article>
                ))
            ) : (
                <div style={styles.noResults}>
                    <p>Aucun article trouvé dans cette catégorie.</p>
                </div>
            )}
        </div>

      </div>
      <Footer />
    </div>
  );
};

const styles = {
    pageWrapper: {
        background: '#f8fafc',
        minHeight: '100vh',
    },
    heroSection: {
        background: '#1879be', // Solid Primary Blue
        padding: '220px 20px 60px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto'
    },
    heroTitle: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        fontFamily: "'Julius Sans One', sans-serif"
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        opacity: 0.9,
        fontWeight: '300'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 100px'
    },
    filterContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '60px',
        flexWrap: 'wrap'
    },
    filterBtn: {
        background: 'white',
        border: '1px solid #e2e8f0',
        padding: '12px 24px',
        borderRadius: '30px',
        fontSize: '0.95rem',
        color: '#64748b',
        cursor: 'pointer',
        transition: 'all 0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: '500'
    },
    activeFilterBtn: {
        background: '#1879be',
        color: 'white',
        borderColor: '#1879be',
        boxShadow: '0 4px 12px rgba(24, 121, 190, 0.2)'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '40px'
    },
    card: {
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #f1f5f9',
        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
    },
    imageContainer: {
        position: 'relative',
        height: '240px',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s'
    },
    categoryTag: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'white',
        color: '#1879be',
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '0.8rem',
        fontWeight: '700',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    },
    cardContent: {
        padding: '25px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    meta: {
        display: 'flex',
        gap: '15px',
        marginBottom: '15px',
        color: '#94a3b8',
        fontSize: '0.85rem'
    },
    metaItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#1e293b',
        marginBottom: '15px',
        lineHeight: '1.4',
        fontFamily: "'Julius Sans One', sans-serif"
    },
    cardExcerpt: {
        color: '#64748b',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        marginBottom: '20px',
        flex: 1
    },
    cardFooter: {
        borderTop: '1px solid #f1f5f9',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    readMore: {
        color: '#f3a31a', // Secondary Orange
        fontWeight: '600',
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },
    noResults: {
        gridColumn: '1 / -1',
        textAlign: 'center',
        padding: '40px',
        color: '#64748b'
    }
};

export default NewsPag;