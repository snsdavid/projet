import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    cv: null,
    lettreMotivation: '',
    disponibilite: '',
    pretentionsSalariales: '',
    experienceAnnees: '',
    diplomeSuperieur: '',
    competencesCles: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    alert('Candidature soumise avec succès!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Description du poste</h2>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Vos principales missions</h3>
          <ul style={styles.list}>
            <li>Élaborer la stratégie et assurer l'exécution des organisations globales en dialoguant de projets de productions animales</li>
            <li>Chiffrer, spécifier et valider le cahier des charges et maîtriser et optimiser les coûts des projets</li>
            <li>Planifier et suivre la maîtrise d'œuvre pendant la réalisation du projet</li>
            <li>Vérifier le respect : suivre votre avenir avec les organismes qualifiés et suivre vérifier la bonne exécution d'élevage & d'équipements sur chantier</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Votre profil</h3>
          <ul style={styles.list}>
            <li>Participer avec votre contribution, vous supervisez les travaux et assurez le suivi de plusieurs projets simultanés</li>
            <li>Vous êtes doté(e) d'un bon relationnel, votre adaptabilité, vos compétences techniques et organisationnelles vous donnent la capacité de gérer l'ensemble de la satisfaction du client</li>
            <li>Diplômé(e) d'un diplôme Bac +2 minimum en construction, génie civil +3</li>
            <li>Vous avez une expérience réussie en tant que chef de projet de 3-5 ans</li>
            <li>Maîtrise l'anglais (au moins les notions de base en anglais et l'importance de la maîtrise, posté à l'international)</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Profil recherché</h3>
          <ul style={styles.list}>
            <li>Vous êtes diplômé d'une formation supérieure en BTP ou en Production Industrielle (Ingénieur ou équivalent)</li>
            <li>Vous bénéficiez d'une expérience de 5 à 10 ans en tant que chef de projet (de l'étude jusqu'à la réalisation)</li>
            <li>Vous possédez une excellente culture technique qui vous permet de maîtriser les aspects relatifs aux productions/élevages</li>
            <li>Aux notions d'une passion des métiers de construction réels et d'ouvrir l'élevage avec votre résultat sur résolution</li>
            <li>Le français est un plus mais pas obligatoire. L'anglais technique est indispensable</li>
            <li>Vous avez l'habitude de gérer plusieurs projets et disposez d'une capacité, calme, méthode (management civil)</li>
          </ul>
        </div>

        <div style={styles.formSection}>
          <h3 style={styles.formTitle}>Données personnelles</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Nom*</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Prénom*</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Téléphone*</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.questionGroup}>
              <label style={styles.questionLabel}>
                CV ou portfolio (obligatoire). Seuls les fichiers .pdf seront acceptés. Taille maxi: 2MB
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                style={styles.fileInput}
                required
              />
            </div>

            <div style={styles.questionGroup}>
              <label style={styles.questionLabel}>
                Si nécessaire, joignez une lettre de motivation (facultatif). Seuls fichiers .pdf*
              </label>
              <textarea
                name="lettreMotivation"
                value={formData.lettreMotivation}
                onChange={handleChange}
                style={styles.textarea}
                rows="3"
              />
            </div>

            <div style={styles.questionGroup}>
              <label style={styles.questionLabel}>
                Quelles sont vos disponibilités pour commencer ce poste ? Seuls fichiers .pdf seront acceptés
              </label>
              <input
                type="text"
                name="disponibilite"
                value={formData.disponibilite}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.questionGroup}>
              <label style={styles.questionLabel}>
                Quelles sont vos prétentions salariales pour ce poste ? (en €/an brut). Seuls fichiers .pdf acceptés
              </label>
              <input
                type="text"
                name="pretentionsSalariales"
                value={formData.pretentionsSalariales}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.questionGroup}>
              <label style={styles.questionLabel}>
                Combien d'années d'expérience avez-vous dans ce domaine ? Seuls fichiers .pdf acceptés
              </label>
              <input
                type="text"
                name="experienceAnnees"
                value={formData.experienceAnnees}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.questionGroup}>
              <label style={styles.questionLabel}>
                Quel est votre niveau de diplôme supérieur ? (BAC+2, BAC+3, BAC+5, Master/Engineer, etc.)
              </label>
              <input
                type="text"
                name="diplomeSuperieur"
                value={formData.diplomeSuperieur}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.questionGroup}>
              <label style={styles.questionLabel}>
                Quelles sont vos compétences clés pour ce poste ? Seuls fichiers .pdf seront acceptés
              </label>
              <textarea
                name="competencesCles"
                value={formData.competencesCles}
                onChange={handleChange}
                style={styles.textarea}
                rows="3"
              />
            </div>

            <div style={styles.disclaimer}>
              En transmettant ma candidature, je déclare avoir pris connaissance de ce paragraphe et accepte que mes données soient traitées dans le cadre de l'EPPOLIS (remplacement)
            </div>

            <button type="submit" style={styles.submitButton}>
              Postuler
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  card: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff8e1',
    overflow: 'hidden'
  },
  header: {
    backgroundColor: '#39b1b7',
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    margin: 0,
    color: '#fff',
    fontSize: '24px',
    fontWeight: '600'
  },
  section: {
    padding: '20px 30px',
    borderBottom: '1px solid #e0e0e0'
  },
  sectionTitle: {
    color: '#1879be',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '15px',
    marginTop: '0'
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    lineHeight: '1.8'
  },
  formSection: {
    padding: '30px',
    backgroundColor: '#fff'
  },
  formTitle: {
    color: '#1879be',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '25px',
    marginTop: '0',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333'
  },
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'border-color 0.3s',
    outline: 'none'
  },
  questionGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  questionLabel: {
    fontSize: '13px',
    color: '#555',
    lineHeight: '1.6'
  },
  textarea: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'inherit',
    resize: 'vertical',
    outline: 'none',
    transition: 'border-color 0.3s'
  },
  fileInput: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer'
  },
  disclaimer: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '1.6',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    marginTop: '10px'
  },
  submitButton: {
    backgroundColor: '#a4c639',
    color: '#fff',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '10px'
  }
};

export default JobApplicationForm;