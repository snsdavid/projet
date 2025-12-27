import React from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import { Briefcase, Heart, Users, ArrowRight, Star } from 'lucide-react';

const NousRecrutons = () => {
    const jobs = [
        {
            title: "Ingénieur Agronome Junior",
            department: "Terrain - Etude et Conseil",
            location: "Yamoussoukro",
            type: "CDI",
        },
        {
            title: "Technicien SIG / Télédétection",
            department: "Digitalisation",
            location: "Abidjan (Siège)",
            type: "CDD - 12 mois",
        },
        {
            title: "Commercial Agro-alimentaire",
            department: "Négoce",
            location: "San-Pédro",
            type: "Stage",
        }
    ];

    return (
        <div style={styles.pageWrapper}>
            <HeaderComposant />

            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.container}>
                    <span style={styles.heroBadge}>CARRIÈRES</span>
                    <h1 style={styles.heroTitle}>Rejoignez l'Aventure NYA AGRITEK</h1>
                    <p style={styles.heroSubtitle}>
                        Donnez du sens à votre carrière en contribuant à la transformation durable de l'agriculture africaine.
                    </p>
                </div>
            </section>

            <div style={styles.container}>
                
                {/* Intro / Culture */}
                <section style={styles.introSection}>
                    <div style={styles.introContent}>
                        <h2 style={styles.sectionTitle}>Pourquoi nous rejoindre ?</h2>
                        <p style={styles.introText}>
                            Nous sommes toujours à la recherche de talents passionnés pour renforcer notre équipe. 
                            Travailler chez NYA AGRITEK, c'est intégrer un environnement dynamique où l'innovation 
                            et l'impact social sont au cœur de chaque projet.
                        </p>
                    </div>

                    <div style={styles.benefitsGrid}>
                        <div style={styles.benefitCard}>
                            <Star size={32} color="#f3a31a" style={{marginBottom: '20px'}}/>
                            <h4>Impact Réel</h4>
                            <p>Participez à des projets qui changent la vie des producteurs et protègent l'environnement.</p>
                        </div>
                        <div style={styles.benefitCard}>
                            <Users size={32} color="#1879be" style={{marginBottom: '20px'}}/>
                            <h4>Équipe Passionnée</h4>
                            <p>Évoluez aux côtés de jeunes experts multidisciplinaires et visionnaires.</p>
                        </div>
                        <div style={styles.benefitCard}>
                            <Briefcase size={32} color="#82c28a" style={{marginBottom: '20px'}}/>
                            <h4>Innovation</h4>
                            <p>Utilisez les dernières technologies (Drones, IoT, IA) pour moderniser l'agriculture.</p>
                        </div>
                    </div>
                </section>

                {/* Job Offers */}
                <section style={styles.jobsSection}>
                    <h3 style={styles.jobsTitle}>Nos Offres Actuelles</h3>
                    <div style={styles.jobsList}>
                        {jobs.map((job, index) => (
                            <div key={index} style={styles.jobCard}>
                                <div style={styles.jobInfo}>
                                    <h4 style={styles.jobTitle}>{job.title}</h4>
                                    <div style={styles.jobDetails}>
                                        <span style={styles.jobBadge}>{job.department}</span>
                                        <span style={styles.jobMeta}>{job.location} • {job.type}</span>
                                    </div>
                                </div>
                                <button style={styles.applyBtn}>Postuler</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Spontaneous Application CTA */}
                <section style={styles.spontaneousSection}>
                    <div style={styles.spontaneousCard}>
                        <div style={styles.spontaneousContent}>
                            <h3 style={styles.spontaneousTitle}>Candidature Spontanée</h3>
                            <p style={styles.spontaneousText}>
                                Aucune offre ne correspond à votre profil pour l'instant ? Nous sommes toujours ouverts aux talents d'exception.
                                Envoyez-nous votre CV et lettre de motivation.
                            </p>
                            <a href="mailto:nya.agritek@gmail.com" style={styles.emailLink}>
                                nya.agritek@gmail.com <ArrowRight size={18} />
                            </a>
                            <p style={styles.note}>(Format PDF exclusivement, Objet: "Candidature Spontanée")</p>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
};

const styles = {
    pageWrapper: {
        background: '#f8fafc',
        fontFamily: "'Inter', sans-serif",
        minHeight: '100vh'
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px'
    },
    heroSection: {
        background: '#1879be',
        padding: '160px 0 100px',
        textAlign: 'center',
        color: 'white'
    },
    heroBadge: {
        background: 'rgba(255,255,255,0.2)',
        padding: '8px 20px',
        borderRadius: '30px',
        fontSize: '0.85rem',
        fontWeight: '700',
        letterSpacing: '1px',
        marginBottom: '20px',
        display: 'inline-block'
    },
    heroTitle: {
        fontSize: '3.5rem',
        fontWeight: '900',
        fontFamily: "'Julius Sans One', sans-serif",
        marginBottom: '20px',
        lineHeight: '1.2'
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        opacity: 0.9,
        fontWeight: '300',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6'
    },
    introSection: {
        padding: '80px 0',
        textAlign: 'center'
    },
    introContent: {
        maxWidth: '800px',
        margin: '0 auto 60px'
    },
    sectionTitle: {
        fontSize: '2.2rem',
        color: '#1e334e',
        marginBottom: '20px',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: '800'
    },
    introText: {
        fontSize: '1.1rem',
        color: '#64748b',
        lineHeight: '1.8'
    },
    benefitsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
        marginBottom: '80px'
    },
    benefitCard: {
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        textAlign: 'left',
        borderTop: '4px solid transparent',
        transition: 'all 0.3s'
    },
    jobsSection: {
        marginBottom: '100px'
    },
    jobsTitle: {
        fontSize: '1.8rem',
        color: '#1e334e',
        marginBottom: '40px',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    jobsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '900px',
        margin: '0 auto'
    },
    jobCard: {
        background: 'white',
        padding: '30px',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
        border: '1px solid #f1f5f9',
        flexWrap: 'wrap',
        gap: '20px'
    },
    jobInfo: {
        flex: 1
    },
    jobTitle: {
        fontSize: '1.25rem',
        color: '#1e334e',
        marginBottom: '10px',
        fontWeight: '700'
    },
    jobDetails: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    jobBadge: {
        background: '#e0f2fe',
        color: '#1879be',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: '600'
    },
    jobMeta: {
        color: '#64748b',
        fontSize: '0.95rem'
    },
    applyBtn: {
        background: 'white',
        border: '1px solid #1e334e',
        color: '#1e334e',
        padding: '10px 24px',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s'
    },
    spontaneousSection: {
        marginBottom: '100px'
    },
    spontaneousCard: {
        background: '#1e334e',
        borderRadius: '24px',
        padding: '60px',
        textAlign: 'center',
        color: 'white',
        backgroundImage: 'linear-gradient(135deg, #1e334e 0%, #0b466fff 100%)'
    },
    spontaneousContent: {
        maxWidth: '700px',
        margin: '0 auto'
    },
    spontaneousTitle: {
        fontSize: '2rem',
        fontFamily: "'Julius Sans One', sans-serif",
        marginBottom: '20px',
        fontWeight: 'bold'
    },
    spontaneousText: {
        fontSize: '1.1rem',
        color: '#cbd5e1',
        marginBottom: '30px',
        lineHeight: '1.6'
    },
    emailLink: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        background: '#f3a31a',
        color: 'white',
        padding: '16px 32px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '1.1rem',
        transition: 'all 0.3s'
    },
    note: {
        marginTop: '20px',
        fontSize: '0.9rem',
        color: '#94a3b8',
        fontStyle: 'italic'
    }
};

export default NousRecrutons;