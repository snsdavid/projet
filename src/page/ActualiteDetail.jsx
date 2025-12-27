import React, { useState } from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import { Calendar, Clock, ArrowLeft, MessageSquare, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';

const ActualiteDetail = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, { text: comment, date: new Date(), author: 'Visiteur' }]);
            setComment('');
        }
    };

    // Static data for now - in production this would come from an API based on ID
    const article = {
        title: "NYA AGRITEK lance sa nouvelle plateforme de digitalisation agricole",
        date: "2025-01-15",
        readTime: "5 min",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
        tags: ["Innovation", "Digitalisation", "IoT"],
        content: `
            <p>Dans une démarche résolument tournée vers l'avenir, <strong>NYA AGRITEK</strong> est fière d'annoncer le lancement officiel de sa nouvelle plateforme de digitalisation agricole. Cette solution innovante vise à transformer la manière dont les exploitations agricoles sont gérées en Côte d'Ivoire et dans la sous-région.</p>
            
            <h3>Une réponse aux défis modernes</h3>
            <p>Face aux défis climatiques et à la nécessité d'optimiser les ressources, notre plateforme utilise l'Internet des Objets (IoT) et l'Intelligence Artificielle pour fournir des données précises en temps réel aux agriculteurs.</p>

            <h3>Fonctionnalités clés</h3>
            <ul>
                <li>Monitoring en temps réel des sols (humidité, pH, température)</li>
                <li>Prévisions météorologiques localisées</li>
                <li>Alertes précoces pour les maladies des plantes</li>
                <li>Gestion automatisée de l'irrigation</li>
            </ul>

            <p>« C'est une révolution pour le petit producteur qui peut désormais prendre des décisions basées sur des données fiables », explique le Directeur Technique de NYA AGRITEK.</p>
        `
    };

    return (
        <>
            <HeaderComposant />
            
            <div style={styles.pageContainer}>
                
                {/* Back Button */}
                <div style={styles.container}>
                    <a href="/actualites" style={styles.backLink}>
                        <ArrowLeft size={16} /> Retour aux actualités
                    </a>
                </div>

                <div style={styles.container}>
                    <div style={styles.contentGrid}>
                        
                        {/* Main Article */}
                        <div style={styles.articleSection}>
                            <div style={styles.articleHeader}>
                                <span style={styles.categoryBadge}>{article.category}</span>
                                <h1 style={styles.title}>{article.title}</h1>
                                
                                <div style={styles.metaRow}>
                                    <div style={styles.metaItem}>
                                        <Calendar size={16} />
                                        <span>{new Date(article.date).toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                                    </div>
                                    <div style={styles.metaItem}>
                                        <Clock size={16} />
                                        <span>{article.readTime} de lecture</span>
                                    </div>
                                </div>
                            </div>

                            <img src={article.image} alt={article.title} style={styles.mainImage} />

                            <div 
                                style={styles.articleBody}
                                dangerouslySetInnerHTML={{ __html: article.content }} 
                            />

                            {/* Tags */}
                            <div style={styles.tagsContainer}>
                                {article.tags.map(tag => (
                                    <span key={tag} style={styles.tag}>#{tag}</span>
                                ))}
                            </div>

                            {/* Share */}
                            <div style={styles.shareSection}>
                                <span style={styles.shareLabel}>Partager cet article :</span>
                                <div style={styles.socialButtons}>
                                    <button style={styles.socialBtn}><Facebook size={18} /></button>
                                    <button style={styles.socialBtn}><Linkedin size={18} /></button>
                                    <button style={styles.socialBtn}><Twitter size={18} /></button>
                                    <button style={styles.socialBtn}><Share2 size={18} /></button>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div style={styles.commentsSection}>
                                <h3 style={styles.commentTitle}>
                                    <MessageSquare size={20} style={{marginRight: '10px'}}/> 
                                    Commentaires
                                </h3>
                                
                                <form onSubmit={handleCommentSubmit} style={styles.commentForm}>
                                    <textarea 
                                        style={styles.commentInput} 
                                        placeholder="Votre avis nous intéresse..."
                                        rows="4"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <button type="submit" style={styles.submitBtn}>
                                        Publier
                                    </button>
                                </form>

                                <div style={styles.commentsList}>
                                    {comments.length > 0 ? comments.map((c, i) => (
                                        <div key={i} style={styles.commentItem}>
                                            <div style={styles.commentHeader}>
                                                <span style={styles.commentAuthor}>{c.author}</span>
                                                <span style={styles.commentDate}>
                                                    {c.date.toLocaleDateString()} à {c.date.toLocaleTimeString()}
                                                </span>
                                            </div>
                                            <p style={styles.commentText}>{c.text}</p>
                                        </div>
                                    )) : (
                                        <p style={styles.noComments}>Soyez le premier à commenter !</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar (Optional Recommended articles) */}
                         <div style={styles.sidebar}>
                            <div style={styles.sidebarCard}>
                                <h4 style={styles.sidebarTitle}>Articles récents</h4>
                                <ul style={styles.sidebarList}>
                                    <li style={styles.sidebarItem}>
                                        <a href="#" style={styles.sidebarLink}>Projet de reforestation : 10 000 arbres plantés</a>
                                        <span style={styles.sidebarDate}>12 Jan 2025</span>
                                    </li>
                                    <li style={styles.sidebarItem}>
                                        <a href="#" style={styles.sidebarLink}>Formation des producteurs certifiés</a>
                                        <span style={styles.sidebarDate}>10 Jan 2025</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

const styles = {
    pageContainer: {
        paddingTop: '100px',
        paddingBottom: '80px',
        background: '#f8fafc',
        minHeight: '100vh'
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px'
    },
    backLink: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color: '#64748b',
        textDecoration: 'none',
        marginBottom: '30px',
        fontWeight: '500',
        transition: 'color 0.2s'
    },
    contentGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: '40px'
    },
    articleSection: {
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        padding: '40px',
        border: '1px solid #e2e8f0'
    },
    articleHeader: {
        marginBottom: '30px'
    },
    categoryBadge: {
        display: 'inline-block',
        padding: '6px 12px',
        background: '#e0f2fe',
        color: '#1879be',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: '600',
        marginBottom: '15px'
    },
    title: {
        fontSize: '2rem',
        color: '#1e293b',
        marginBottom: '20px',
        lineHeight: '1.3',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: 'bold'
    },
    metaRow: {
        display: 'flex',
        gap: '20px',
        color: '#64748b',
        fontSize: '0.9rem'
    },
    metaItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
    },
    mainImage: {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '30px'
    },
    articleBody: {
        color: '#334155',
        lineHeight: '1.8',
        fontSize: '1.05rem',
        marginBottom: '30px'
    },
    tagsContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        flexWrap: 'wrap'
    },
    tag: {
        color: '#64748b',
        background: '#f1f5f9',
        padding: '5px 10px',
        borderRadius: '8px',
        fontSize: '0.9rem',
        fontWeight: '500'
    },
    shareSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '20px 0',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '40px'
    },
    shareLabel: {
        color: '#1e293b',
        fontWeight: '600'
    },
    socialButtons: {
        display: 'flex',
        gap: '10px'
    },
    socialBtn: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1px solid #e2e8f0',
        background: 'white',
        color: '#64748b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s'
    },
    commentsSection: {
        marginTop: '20px'
    },
    commentTitle: {
        fontSize: '1.4rem',
        marginBottom: '20px',
        color: '#1e293b',
        display: 'flex',
        alignItems: 'center'
    },
    commentForm: {
        marginBottom: '30px'
    },
    commentInput: {
        width: '100%',
        padding: '15px',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        marginBottom: '15px',
        resize: 'vertical',
        fontSize: '1rem',
        fontFamily: 'inherit'
    },
    submitBtn: {
        background: '#1879be',
        color: 'white',
        border: 'none',
        padding: '12px 25px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '0.95rem'
    },
    commentsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    commentItem: {
        background: '#f8fafc',
        padding: '20px',
        borderRadius: '12px'
    },
    commentHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
    },
    commentAuthor: {
        fontWeight: '700',
        color: '#1e293b'
    },
    commentDate: {
        color: '#94a3b8',
        fontSize: '0.85rem'
    },
    commentText: {
        color: '#475569',
        lineHeight: '1.5'
    },
    noComments: {
        color: '#94a3b8',
        fontStyle: 'italic',
        textAlign: 'center',
        padding: '20px'
    },
    sidebar: {
        // Hide sidebar on small screens via media query usually, simplified here
    },
    sidebarCard: {
        background: 'white',
        padding: '25px',
        borderRadius: '16px',
        border: '1px solid #e2e8f0'
    },
    sidebarTitle: {
        fontSize: '1.1rem',
        marginBottom: '20px',
        color: '#1e293b',
        fontWeight: '700'
    },
    sidebarList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    sidebarItem: {
        marginBottom: '15px',
        borderBottom: '1px solid #f1f5f9',
        paddingBottom: '15px'
    },
    sidebarLink: {
        textDecoration: 'none',
        color: '#334155',
        fontWeight: '500',
        display: 'block',
        marginBottom: '5px',
        lineHeight: '1.4'
    },
    sidebarDate: {
        fontSize: '0.8rem',
        color: '#94a3b8'
    }
};

export default ActualiteDetail;
