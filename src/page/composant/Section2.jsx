import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Section2.css"; // Assuming you have a CSS file for styling

const Section2 = () => {
  // Fonction lecture vidéo
  const playVideo = () => {
    const playButton = document.querySelector(".play-button");
    const videoOverlay = document.querySelector(".video-overlay");

    if (playButton && videoOverlay) {
      playButton.style.display = "none";
      videoOverlay.style.opacity = "0";
      document.querySelector(".video-container").classList.add("playing");
    }
  };

  useEffect(() => {
    // Animation au scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".stat-item, .testimonial-card, .video-container"
      );
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.style.animationDelay = "0s";
          element.style.animationFillMode = "both";
        }
      });

      // Parallax effect pour les formes flottantes
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll(".shape");
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${
          scrolled * 0.1
        }deg)`;
      });
    };

    // Gestion responsive de la vidéo Facebook
    const adjustVideoHeight = () => {
      const videoWrappers = document.querySelectorAll(".video-wrapper");
      videoWrappers.forEach((wrapper) => {
        const iframe = wrapper.querySelector("iframe");
        if (iframe) {
          iframe.style.height = (iframe.offsetWidth * 9) / 16 + "px";
        }
      });
    };

    // Effet typing
    const typeWriter = (element, text, speed = 30) => {
      let i = 0;
      element.innerHTML = "";

      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }

      type();
    };

    // IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";

            if (entry.target.classList.contains("testimonial-text")) {
              const originalText = entry.target.textContent;
              typeWriter(entry.target, originalText);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(
      ".testimonial-card, .video-container, .stat-item"
    );
    animatedElements.forEach((el) => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });

    // Listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", adjustVideoHeight);
    window.addEventListener("resize", adjustVideoHeight);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", adjustVideoHeight);
      window.removeEventListener("resize", adjustVideoHeight);
    };
  }, []);

  return (
    <section className="testimonial-section">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="container content-wrapper">
        <div className="row">
          <div className="col-12">
            <h5 className="section-title display-4">Témoignage</h5>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Témoignage */}
          <div className="col-lg-6 col-md-12">
            <div className="testimonial-card">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>

              <div className="testimonial-text">
                "l’assèchement des bas-fonds rizicoles en période supposée pluvieuse est encore un signe alarmant des effets du changement climatique sur nos systèmes agricoles.
Cette situation nous interpelle tous : 𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝐫𝐞𝐧𝐟𝐨𝐫𝐜𝐞𝐫 𝐥𝐚 𝐫𝐞́𝐬𝐢𝐥𝐢𝐞𝐧𝐜𝐞 𝐝𝐞 𝐧𝐨𝐬 𝐜𝐮𝐥𝐭𝐮𝐫𝐞𝐬 𝐞𝐭 𝐝𝐞 𝐧𝐨𝐬 𝐜𝐨𝐦𝐦𝐮𝐧𝐚𝐮𝐭𝐞́𝐬 𝐚𝐠𝐫𝐢𝐜𝐨𝐥𝐞𝐬 ?
💡 Nous croyons en des solutions co-construites avec les producteurs. Parmi celles-ci:
- l'adoption de variétés plus résistantes à la sécheresse,
- les aménagements hydro-agricoles adaptés,
- les pratiques agroécologiques et la gestion durable de l’eau,
- le partage d’expériences et de savoir-faire locaux."
              </div>

              <div className="client-info">
                <div className="client-avatar">Zb</div>
                <div className="client-details">
                  <h5>Zaki Ben Bangaye </h5>
                  <div className="rating mt-2">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Vidéo */}
          <div className="col-lg-6 col-md-12">
            <div className="video-container">
              <div className="video-wrapper">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnya.agritekSarl%2Fposts%2Fpfbid02aj8eKP1M9TV9aYHuCx1FypiuW5BYtiSqYGyDBDCPEaTRYGDR1bpmgD3ce2SeDJffl&show_text=true&width=500"
                  frameBorder="0"
                  allowFullScreen={true}
                  width="500"
                  height="223"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="video-overlay"></div>
              <div className="play-button" onClick={playVideo}>
                <i className="fas fa-play"></i>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-light mb-2">
                <a href="https://www.facebook.com/nya.agritekSarl" style={{ color: "#fff" , textDecoration: "none" }}>
                <i className="fab fa-facebook-square me-2"></i>
                Suivez-nous sur Facebook pour plus de témoignages
                </a>
              </p>
              <div className="d-flex justify-content-center gap-3">
                <span className="badge bg-light text-dark px-3 py-2">
                  <i className="fas fa-eye me-1"></i> 12.5K vues
                </span>
                <span className="badge bg-light text-dark px-3 py-2">
                  <i className="fas fa-thumbs-up me-1"></i> 1.2K j'aime
                </span>
                <span className="badge bg-light text-dark px-3 py-2">
                  <i className="fas fa-share me-1"></i> 245 partages
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
