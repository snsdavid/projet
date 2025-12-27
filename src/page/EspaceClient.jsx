import React, { useState } from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import { Mail, Lock, User, Eye, EyeOff, X, ArrowRight, UserPlus, LogIn } from 'lucide-react';

const EspaceClient = () => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Toggle Password Visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <>
      <HeaderComposant />
      
      <div style={styles.pageContainer}>
        {/* Background Decorative Elements - Solid Colors now */}
        <div style={styles.blob1}></div>
        <div style={styles.blob2}></div>

        <div style={styles.cardContainer}>
          {/* No Tab Header anymore, title handles context */}
          
          <div style={styles.formContent}>
            <div style={styles.headerSection}>
                <div style={styles.iconCircle}>
                    {activeTab === 'login' ? <LogIn size={32} color="white" /> : <UserPlus size={32} color="white" />}
                </div>
                <h2 style={styles.title}>
                    {activeTab === 'login' ? 'Connexion' : 'Créer un compte'}
                </h2>
                <p style={styles.subtitle}>
                    {activeTab === 'login' 
                        ? 'Accédez à votre espace sécurisé' 
                        : 'Rejoignez notre réseau de partenaires'}
                </p>
            </div>

            {activeTab === 'login' ? (
                <form style={styles.form}>
                    <div style={styles.inputGroup}>
                        <Mail size={20} style={styles.inputIcon} />
                        <input type="email" placeholder="Adresse Email" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <Lock size={20} style={styles.inputIcon} />
                        <input type={showPassword ? "text" : "password"} placeholder="Mot de passe" style={styles.input} />
                        <button type="button" onClick={togglePasswordVisibility} style={styles.eyeBtn}>
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <div style={styles.forgotRow}>
                        <button type="button" style={styles.forgotLink} onClick={() => setShowForgotModal(true)}>
                            Mot de passe oublié ?
                        </button>
                    </div>
                    <button type="submit" style={styles.submitBtn}>
                        Se Connecter <ArrowRight size={18} />
                    </button>
                    
                    <div style={styles.switchContainer}>
                        <p style={styles.switchText}>Vous n'avez pas de compte ?</p>
                        <button 
                            type="button" 
                            style={styles.switchBtn}
                            onClick={() => setActiveTab('register')}
                        >
                            Inscrivez-vous
                        </button>
                    </div>
                </form>
            ) : (
                <form style={styles.form}>
                     <div style={styles.inputGroup}>
                        <User size={20} style={styles.inputIcon} />
                        <input type="text" placeholder="Nom complet / Entreprise" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <Mail size={20} style={styles.inputIcon} />
                        <input type="email" placeholder="Adresse Email" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <Lock size={20} style={styles.inputIcon} />
                        <input type={showPassword ? "text" : "password"} placeholder="Mot de passe" style={styles.input} />
                         <button type="button" onClick={togglePasswordVisibility} style={styles.eyeBtn}>
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    
                    {/* User Type Selection */}
                    <div style={styles.radioGroup}>
                        <label style={styles.radioLabel}>
                            <input type="radio" name="userType" style={styles.radio} defaultChecked /> Client
                        </label>
                        <label style={styles.radioLabel}>
                             <input type="radio" name="userType" style={styles.radio} /> Partenaire
                        </label>
                    </div>

                    <button type="submit" style={styles.submitBtn}>
                        S'inscrire <ArrowRight size={18} />
                    </button>

                    <div style={styles.switchContainer}>
                        <p style={styles.switchText}>Vous avez déjà un compte ?</p>
                        <button 
                            type="button" 
                            style={styles.switchBtn}
                            onClick={() => setActiveTab('login')}
                        >
                            Connectez-vous
                        </button>
                    </div>
                </form>
            )}
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div style={styles.modalOverlay}>
            <div style={styles.modalCard}>
                <button style={styles.closeModalBtn} onClick={() => setShowForgotModal(false)}>
                    <X size={24} />
                </button>
                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                    <div style={{...styles.iconCircle, background: '#f3a31a', margin: '0 auto 15px'}}>
                         <Lock size={24} color="white" />
                    </div>
                    <h3 style={styles.modalTitle}>Mot de passe oublié</h3>
                    <p style={styles.modalText}>Entrez votre adresse email pour recevoir un lien de réinitialisation.</p>
                </div>
                
                <form style={styles.form}>
                    <div style={styles.inputGroup}>
                        <Mail size={20} style={styles.inputIcon} />
                        <input type="email" placeholder="Votre email" style={styles.input} />
                    </div>
                    <button type="submit" style={styles.submitBtn}>Envoyer le lien</button>
                </form>
            </div>
        </div>
      )}

      <Footer />
      
      <style>
      {`
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>
    </>
  );
};

const styles = {
    pageContainer: {
        minHeight: '100vh',
        background: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 20px 60px' // Padding for header
    },
    blob1: {
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: '#1879be', // Primary Blue
        borderRadius: '50%',
        filter: 'blur(80px)',
        opacity: '0.08',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 0
    },
    blob2: {
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: '#f3a31a', // Secondary Orange
        borderRadius: '50%',
        filter: 'blur(80px)',
        opacity: '0.08',
        animation: 'float 10s ease-in-out infinite reverse',
        zIndex: 0
    },
    cardContainer: {
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 15px 50px rgba(24, 121, 190, 0.1)', // Light blue shadow
        width: '100%',
        maxWidth: '420px',
        zIndex: 1,
        overflow: 'hidden',
        border: '1px solid #edf2f7',
        animation: 'fadeIn 0.5s ease-out'
    },
    headerSection: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    iconCircle: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: '#1879be',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem',
        boxShadow: '0 8px 20px rgba(24, 121, 190, 0.25)'
    },
    formContent: {
        padding: '2.5rem 2rem'
    },
    title: {
        color: '#1e293b', 
        marginBottom: '0.5rem',
        fontFamily: "'Julius Sans One', sans-serif",
        fontSize: '1.75rem',
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#64748b',
        fontSize: '0.95rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem'
    },
    inputGroup: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    inputIcon: {
        position: 'absolute',
        left: '16px',
        color: '#94a3b8' 
    },
    input: {
        width: '100%',
        padding: '14px 14px 14px 48px',
        borderRadius: '12px',
        border: '2px solid #f1f5f9',
        fontSize: '15px',
        background: '#f8fafc',
        transition: 'all 0.3s',
        outline: 'none',
        color: '#334155',
        fontWeight: '500'
    },
    eyeBtn: {
        position: 'absolute',
        right: '15px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#94a3b8',
        padding: 0
    },
    forgotRow: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '-5px'
    },
    forgotLink: {
        background: 'none',
        border: 'none',
        color: '#64748b', 
        fontSize: '13px',
        cursor: 'pointer',
        textDecoration: 'none',
        fontWeight: '500',
        transition: 'color 0.2s'
    },
    submitBtn: {
        background: '#1879be', // Primary Blue
        color: 'white',
        border: 'none',
        padding: '16px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '10px',
        boxShadow: '0 10px 25px -5px rgba(24, 121, 190, 0.4)'
    },
    radioGroup: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginBottom: '5px',
      background: '#f8fafc',
      padding: '10px',
      borderRadius: '10px'
    },
    radioLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#475569',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    radio: {
      accentColor: '#1879be', 
      transform: 'scale(1.1)'
    },
    switchContainer: {
        marginTop: '20px',
        textAlign: 'center',
        paddingTop: '20px',
        borderTop: '1px solid #f1f5f9'
    },
    switchText: {
        color: '#64748b',
        fontSize: '0.9rem',
        marginBottom: '8px'
    },
    switchBtn: {
        background: 'none',
        border: 'none',
        color: '#1879be',
        fontWeight: '700',
        fontSize: '1rem',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(4px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    modalCard: {
        background: 'white',
        borderRadius: '24px',
        padding: '40px 30px',
        width: '100%',
        maxWidth: '400px',
        position: 'relative',
        animation: 'float 0.5s ease-out',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    closeModalBtn: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#94a3b8'
    },
    modalTitle: {
        color: '#1e293b', 
        fontSize: '1.4rem',
        marginBottom: '10px',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: 'bold'
    },
    modalText: {
        color: '#64748b',
        fontSize: '0.95rem',
        marginBottom: '0',
        lineHeight: '1.5'
    }
};

export default EspaceClient;
