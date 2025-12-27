import React from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import { Target, Eye, Heart, Shield, Award, Users } from 'lucide-react';

const APropos = () => {
    return (
        <div style={styles.pageWrapper}>
            <HeaderComposant />

            {/* Hero Header */}
            <section style={styles.heroSection}>
                <div style={styles.container}>
                    <span style={styles.heroBadge}>L'ENTREPRISE</span>
                    <h1 style={styles.heroTitle}>Qui Sommes-Nous ?</h1>
                    <p style={styles.heroSubtitle}>
                        Découvrez l'histoire, la vision et les valeurs qui animent NYA AGRITEK au quotidien.
                    </p>
                </div>
            </section>

            <div style={styles.container}>
                {/* Section: Qui Sommes-Nous */}
                <section style={styles.section}>
                    <div style={styles.textBlock}>
                        <h2 style={styles.sectionTitle}>Notre Histoire & Ambition</h2>
                        <div style={styles.divider}></div>
                        <p style={styles.text}>
                            NYA AGRITEK incarne une ambition forte : contribuer à un développement équilibré et durable en s’appuyant sur des collaborations solides et des approches novatrices. Depuis sa création, l’entreprise s’engage à accompagner la transformation des territoires et des filières, en contribuant à apporter des réponses concrètes aux enjeux économiques, sociaux et environnementaux qui façonnent notre époque.
                        </p>
                        <p style={styles.text}>
                            Nous sommes persuadés que la performance durable repose sur la combinaison d’une expertise solide, de la technologie et d’un engagement constant. Pour cette raison, nous concevons des approches modernes et des outils performants qui permettent aux organisations de concrétiser leurs projets stratégiques, d’améliorer leur efficacité et de s’adapter aux évolutions rapides de leurs environnements.
                        </p>
                        <p style={styles.text}>
                            Chez NYA AGRITEK, nous plaçons l’accompagnement au cœur de notre démarche. En tant que partenaire de confiance, nous apportons un soutien opérationnel et stratégique à chaque étape, afin de transformer les ambitions en résultats concrets.
                        </p>
                    </div>
                </section>

                {/* Section: Mission & Vision (2 Columns) */}
                <section style={styles.gridSection}>
                    {/* Vision */}
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}>
                           <Eye size={32} color="#1879be" />
                        </div>
                        <h3 style={styles.cardTitle}>Notre Vision</h3>
                        <p style={styles.cardText}>
                           Soutenir le développement rural et agricole durable, c’est bien plus qu’un objectif : c’est notre raison d’être. Chez NYA AGRITEK, nous croyons que la transformation des territoires passe par des partenariats solides et une approche collaborative. Nous travaillons main dans la main avec nos partenaires pour concevoir des solutions innovantes, adaptées à leurs réalités et capables de répondre aux défis actuels tout en anticipant ceux de demain.
                        </p>
                        <div style={styles.quoteBox}>
                            "Soutenir le développement rural et agricole durable en forgeant des partenariats solides et en offrant des solutions novatrices, adaptées aux besoins uniques de nos partenaires, face aux défis actuels et futurs."
                        </div>
                    </div>

                    {/* Mission */}
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}>
                           <Target size={32} color="#f3a31a" />
                        </div>
                        <h3 style={styles.cardTitle}>Notre Mission</h3>
                        <p style={styles.cardText}>
                            Nous combinons expertise stratégique, créativité et technologies pour fournir des prestations sur mesure qui répondent aux besoins uniques de chaque client.
                            Notre engagement envers l'excellence nous permet d'accompagner nos clients à chaque étape de mise en œuvre de leurs projets.
                        </p>
                        <div style={{...styles.quoteBox, borderColor: '#f3a31a'}}>
                            "Notre mission est simple : accompagner nos clients vers le succès."
                        </div>
                    </div>
                </section>

                {/* Section: Nos Valeurs */}
                <section style={styles.section}>
                    <div style={styles.centerHeader}>
                        <h2 style={styles.sectionTitle}>Nos Valeurs</h2>
                        <p style={styles.sectionSubtitle}>
                            Intégrité, excellence et collaboration : nos valeurs fondamentales guident nos actions et renforcent nos relations.
                        </p>
                    </div>

                    <div style={styles.valuesGrid}>
                        {/* Intégrité */}
                        <div style={styles.valueCard}>
                            <Shield size={40} color="#1879be" style={{marginBottom: '20px'}}/>
                            <h4 style={styles.valueTitle}>Intégrité</h4>
                            <p style={styles.valueText}>
Nous agissons avec honnêteté, transparence et responsabilité. En valorisant cette valeur, notre entreprise s'engage à établir une relation de confiance durable avec ses partenaires et clients, en respectant les engagements pris et en favorisant des pratiques équitables.                            </p>
                        </div>

                        {/* Excellence */}
                        <div style={styles.valueCard}>
                             <Award size={40} color="#f3a31a" style={{marginBottom: '20px'}}/>
                            <h4 style={styles.valueTitle}>Excellence</h4>
                            <p style={styles.valueText}>
Notre entreprise est impliquée dans une recherche continue d'amélioration, d'innovation et d'expertise dans chacun de nos domaines d'activité. L’excellence, pour nous, inspire une culture où le travail est réalisé avec précision et passion pour garantir des prestations et solutions remarquables.                            </p>
                        </div>

                        {/* Collaboration */}
                        <div style={styles.valueCard}>
                             <Users size={40} color="#82c28a" style={{marginBottom: '20px'}}/>
                            <h4 style={styles.valueTitle}>Collaboration</h4>
                            <p style={styles.valueText}>
Nous valorisons la synergie et le travail d'équipe entre l'entreprise, ses partenaires, clients et autres acteurs. En favorisant des partenariats solides, notre entreprise crée un environnement où les idées et les efforts collectifs sont intégrés pour atteindre nos objectifs communs.                            </p>
                        </div>
                    </div>
                </section>

                {/* Director Message / Conclusion (Optional, but adds nice touch) */}
                <section style={styles.directorSection}>
                     <p style={styles.directorText}>
                        "Cultivons l'avenir, une récolte à la fois."
                     </p>
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
        padding: '160px 0 80px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '60px'
    },
    heroBadge: {
        background: 'rgba(255,255,255,0.2)',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: '700',
        marginBottom: '20px',
        display: 'inline-block'
    },
    heroTitle: {
        fontSize: '3rem',
        fontWeight: '900',
        fontFamily: "'Julius Sans One', sans-serif",
        marginBottom: '20px'
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        opacity: 0.9,
        fontWeight: '300',
        maxWidth: '600px',
        margin: '0 auto'
    },
    section: {
        marginBottom: '100px'
    },
    textBlock: {
        background: 'white',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        lineHeight: '1.8',
        color: '#334155'
    },
    sectionTitle: {
        fontSize: '2rem',
        color: '#1e334e',
        marginBottom: '15px',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: '800'
    },
    divider: {
        width: '60px',
        height: '4px',
        background: '#f3a31a',
        marginBottom: '30px'
    },
    text: {
        marginBottom: '20px',
        fontSize: '1.05rem',
        textAlign: 'justify'
    },
    gridSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '40px',
        marginBottom: '100px'
    },
    card: {
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        borderTop: '5px solid #1879be'
    },
    iconWrapper: {
        background: '#f0f9ff',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px'
    },
    cardTitle: {
        fontSize: '1.5rem',
        color: '#1e334e',
        marginBottom: '15px',
        fontWeight: '700'
    },
    cardText: {
        color: '#64748b',
        lineHeight: '1.6',
        marginBottom: '20px',
        textAlign: 'justify'
    },
    quoteBox: {
        borderLeft: '4px solid #1879be',
        paddingLeft: '15px',
        fontStyle: 'italic',
        color: '#334155',
        fontWeight: '500'
    },
    centerHeader: {
        textAlign: 'center',
        marginBottom: '50px'
    },
    sectionSubtitle: {
        color: '#64748b',
        fontSize: '1.1rem',
        maxWidth: '700px',
        margin: '0 auto'
    },
    valuesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px'
    },
    valueCard: {
        background: 'white',
        padding: '30px',
        borderRadius: '16px',
        textAlign: 'center',
        border: '1px solid #e2e8f0',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    },
    valueTitle: {
        fontSize: '1.3rem',
        color: '#1e334e',
        marginBottom: '15px',
        fontWeight: '700'
    },
    valueText: {
        color: '#64748b',
        fontSize: '0.95rem',
        lineHeight: '1.6'
    },
    directorSection: {
        textAlign: 'center',
        padding: '40px',
        background: '#1e334e',
        borderRadius: '20px',
        marginBottom: '80px'
    },
    directorText: {
        color: 'white',
        fontSize: '1.5rem',
        fontFamily: "'Julius Sans One', sans-serif",
        fontStyle: 'italic'
    }
};

export default APropos;
