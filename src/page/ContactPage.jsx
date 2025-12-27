import React, { useState } from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Votre message a été envoyé avec succès !');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div style={styles.pageWrapper}>
            <HeaderComposant />

            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.container}>
                    <h1 style={styles.heroTitle}>Contactez-Nous</h1>
                    <p style={styles.heroSubtitle}>
                        Une question, un projet ou simplement envie d'échanger ? <br/>
                        Notre équipe est à votre écoute pour répondre à vos besoins.
                    </p>
                </div>
            </section>

            <div style={styles.container}>
                <div style={styles.contentWrapper}>
                    
                    {/* Contact Info Cards */}
                    <div style={styles.infoGrid}>
                        <div style={styles.infoCard}>
                            <div style={styles.iconCircle}>
                                <Phone size={24} color="#1879be" />
                            </div>
                            <h3 style={styles.infoTitle}>Téléphone</h3>
                            <p style={styles.infoText}>+225 05 86 25 31 31</p>
                            <p style={styles.infoSubText}>Lun-Ven, 8h-18h</p>
                        </div>
                        
                        <div style={styles.infoCard}>
                            <div style={styles.iconCircle}>
                                <Mail size={24} color="#f3a31a" />
                            </div>
                            <h3 style={styles.infoTitle}>Email</h3>
                            <p style={styles.infoText}>contact@nya-agritek.com</p>
                            <p style={styles.infoSubText}>Réponse sous 24h</p>
                        </div>

                        <div style={styles.infoCard}>
                            <div style={styles.iconCircle}>
                                <MapPin size={24} color="#82c28a" />
                            </div>
                            <h3 style={styles.infoTitle}>Siège Social</h3>
                            <p style={styles.infoText}>Cocody Riviera 2</p>
                            <p style={styles.infoSubText}>Abidjan, Côte d'Ivoire</p>
                        </div>
                    </div>

                    {/* Main Content: Form + Map */}
                    <div style={styles.mainGrid}>
                        
                        {/* Contact Form */}
                        <div style={styles.formContainer}>
                            <h2 style={styles.formTitle}>Envoyez-nous un message</h2>
                            <form onSubmit={handleSubmit} style={styles.form}>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Nom complet</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        style={styles.input} 
                                        placeholder="Votre nom" 
                                        required 
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        style={styles.input} 
                                        placeholder="votre@email.com" 
                                        required 
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Sujet</label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        value={formData.subject} 
                                        onChange={handleChange} 
                                        style={styles.input} 
                                        placeholder="Sujet de votre message" 
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Message</label>
                                    <textarea 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        style={styles.textarea} 
                                        placeholder="Comment pouvons-nous vous aider ?" 
                                        rows="5"
                                        required 
                                    ></textarea>
                                </div>
                                <button type="submit" style={styles.submitBtn}>
                                    Envoyer le message <Send size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Map or Additional Info Side */}
                        <div style={styles.mapSide}>
                            <div style={styles.mapContainer}>
                                {/* Using an iframe for Google Maps or similar is standard. Using a placeholder for now to avoid complexity or API keys if not provided. Or simpler static map image. */}
                                {/* Simulating map area */}
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.492196025112!2d-3.998492685233838!3d5.341490996125372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb5e9d0d3d3d%3A0x67a988698947605e!2sCocody%20Riviera%202%2C%20Abidjan!5e0!3m2!1sen!2sci!4v1647867543210!5m2!1sen!2sci" 
                                    width="100%" 
                                    height="100%" 
                                    style={{border:0}} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                    title="Map Location"
                                ></iframe>
                            </div>
                            
                            <div style={styles.availabilityBox}>
                                <h4 style={styles.boxTitle}><Clock size={16} style={{marginRight: '8px'}}/> Horaires d'ouverture</h4>
                                <ul style={styles.hoursList}>
                                    <li style={styles.hourItem}><span>Lundi - Vendredi</span> <span>08:00 - 18:00</span></li>
                                    <li style={styles.hourItem}><span>Samedi</span> <span>09:00 - 13:00</span></li>
                                    <li style={styles.hourItem}><span>Dimanche</span> <span>Fermé</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    },
    heroSection: {
        background: '#1879be',
        padding: '220px 0 60px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '40px'
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
        lineHeight: '1.6'
    },
    contentWrapper: {
        marginTop: '-40px' // Pull up
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        marginBottom: '60px'
    },
    infoCard: {
        background: 'white',
        padding: '30px',
        borderRadius: '16px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid #f1f5f9',
        transition: 'transform 0.3s ease'
    },
    iconCircle: {
        width: '60px',
        height: '60px',
        background: '#f8fafc',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px'
    },
    infoTitle: {
        fontSize: '1.2rem',
        color: '#1e334e',
        marginBottom: '10px',
        fontWeight: '700'
    },
    infoText: {
        fontSize: '1.1rem',
        color: '#334155',
        fontWeight: '600',
        marginBottom: '5px'
    },
    infoSubText: {
        fontSize: '0.9rem',
        color: '#94a3b8'
    },
    mainGrid: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '60px',
        marginBottom: '100px'
    },
    formContainer: {
        background: 'white',
        padding: '40px',
        borderRadius: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        border: '1px solid #e2e8f0'
    },
    formTitle: {
        fontSize: '1.8rem',
        color: '#1e334e',
        marginBottom: '30px',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: 'bold'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    label: {
        fontWeight: '600',
        color: '#475569',
        fontSize: '0.95rem'
    },
    input: {
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid #cbd5e1',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit'
    },
    textarea: {
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid #cbd5e1',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit',
        resize: 'vertical'
    },
    submitBtn: {
        background: '#f3a31a',
        color: 'white',
        padding: '14px',
        borderRadius: '8px',
        border: 'none',
        fontSize: '1.05rem',
        fontWeight: '700',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        transition: 'background 0.2s',
        marginTop: '10px'
    },
    mapSide: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
    },
    mapContainer: {
        height: '400px',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
    },
    availabilityBox: {
        background: '#1e334e',
        padding: '30px',
        borderRadius: '20px',
        color: 'white'
    },
    boxTitle: {
        fontSize: '1.2rem',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    hoursList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    hourItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        fontSize: '0.95rem'
    }
};

export default ContactPage;
