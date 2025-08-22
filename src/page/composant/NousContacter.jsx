import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    console.log("Formulaire soumis:", formData);
    alert("Message envoyé avec succès!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div
        className="text-center text-white py-5 position-relative"
        style={{
          background: "linear-gradient(135deg, #10b981, #22c55e, #0d9488)",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
        <div className="position-relative container">
          <h1 className="display-4 fw-bold">Nous Contacter</h1>
          <p className="lead">
            Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à
            nous contacter !
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-6">
  <h2 className="fw-bold mb-3 text-dark">Nos Coordonnées</h2>
  <p className="text-muted mb-4">
    Contactez-nous par le moyen qui vous convient le mieux.
  </p>

  <div className="row g-4">
    {/* Téléphone */}
    <div className="col-md-6">
      <div className="card shadow-sm border-0 h-100 text-center">
        <div className="card-body">
          <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            📞
          </div>
          <h5 className="fw-bold text-dark">Téléphone</h5>
          <a href="tel:0586253131" className="text-success fw-semibold">
            05 86 25 31 31
          </a>
        </div>
      </div>
    </div>

    {/* WhatsApp */}
    <div className="col-md-6">
      <div className="card shadow-sm border-0 h-100 text-center">
        <div className="card-body">
          <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            💬
          </div>
          <h5 className="fw-bold text-dark">WhatsApp</h5>
          <a
            href="https://wa.me/22586253131"
            target="_blank"
            rel="noopener noreferrer"
            className="text-success fw-semibold"
          >
            +225 86 25 31 31
          </a>
        </div>
      </div>
    </div>

    {/* Email */}
    <div className="col-md-6">
      <div className="card shadow-sm border-0 h-100 text-center">
        <div className="card-body">
          <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            ✉️
          </div>
          <h5 className="fw-bold text-dark">Email</h5>
          <a href="mailto:nya.agritek@gmail.com" className="text-primary fw-semibold">
            nya.agritek@gmail.com
          </a>
        </div>
      </div>
    </div>

    {/* Adresse */}
    <div className="col-md-6">
      <div className="card shadow-sm border-0 h-100 text-center">
        <div className="card-body">
          <div className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            📍
          </div>
          <h5 className="fw-bold text-dark">Adresse</h5>
          <p className="text-muted mb-0">
            Angré Nouveau CHU, Cocody <br /> Abidjan, Côte d'Ivoire
          </p>
        </div>
      </div>
    </div>

    {/* LinkedIn */}
    <div className="col-md-12">
      <div className="card shadow-sm border-0 h-100 text-center">
        <div className="card-body">
          <div className="bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            🔗
          </div>
          <h5 className="fw-bold text-dark">LinkedIn</h5>
          <a
            href="https://linkedin.com/company/nya-agritek-sarl-0754ab311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info fw-semibold"
          >
            nya-agritek-sarl
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow p-4">
              <h2 className="fw-bold mb-4 text-dark">Envoyez-nous un Message</h2>
              <div className="mb-3">
                <label className="form-label">Nom Complet</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Adresse Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="votre.email@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Sujet</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </div>

              <button
                className="btn btn-success w-100 py-2 fw-bold"
                onClick={handleSubmit}
              >
                Envoyer le Message
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-5 text-center">
          <h2 className="fw-bold text-dark mb-4">Notre Localisation</h2>
          <div className="card shadow p-4">
            <div className="bg-light d-flex flex-column align-items-center justify-content-center rounded" style={{ height: "400px" }}>
              <h5 className="text-muted">Carte Google Maps</h5>
              <p className="small">Angré Nouveau CHU, Cocody, Abidjan</p>
              <p className="text-secondary small">
                Ajoutez votre lien Google Maps ici pour remplacer cette zone
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center text-white rounded p-5 mt-5"
          style={{
            background: "linear-gradient(135deg, #10b981, #22c55e, #0d9488)",
          }}
        >
          <h2 className="fw-bold mb-3">Prêt à Collaborer ?</h2>
          <p className="lead mb-4">
            Contactez-nous dès aujourd'hui pour discuter de vos projets
            agricoles.
          </p>
          <a
            href="https://wa.me/22586253131"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light text-success fw-semibold px-4 py-2"
          >
            WhatsApp Direct 💬
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
