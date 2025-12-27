import "../../styles/global.css";

/* ================= GALLERY IMAGES ================= */
import g1 from "../../assets/images/gallery1.jpeg";
import g2 from "../../assets/images/gallery2.jpeg";
import g3 from "../../assets/images/gallery3.jpeg";
import g4 from "../../assets/images/gallery4.jpeg";
import g5 from "../../assets/images/gallery5.jpeg";
import g6 from "../../assets/images/gallery6.jpeg";
import g7 from "../../assets/images/gallery7.jpeg";
import g8 from "../../assets/images/gallery8.jpeg";
import g9 from "../../assets/images/gallery9.jpeg";
import g10 from "../../assets/images/gallery10.jpeg";
import g11 from "../../assets/images/gallery11.jpeg";
import g12 from "../../assets/images/gallery12.jpeg";
import g13 from "../../assets/images/gallery13.jpeg";
import g14 from "../../assets/images/gallery14.jpeg";
import g15 from "../../assets/images/gallery15.jpeg";
import g16 from "../../assets/images/gallery16.jpeg";
import g17 from "../../assets/images/gallery17.jpeg"
import g18 from "../../assets/images/gallery18.jpeg"

const Gallery = () => {
  return (
    <>

      {/* GALLERY SECTION */}
      <section id="gallery">
        <div className="container reveal">

          <div className="section-label">
            <i className="ri-image-line"></i> Gallery
          </div>

          <h2 className="section-title">Frames from TCET ACM Moments.</h2>

          <p className="section-subtitle">
            Memories from events, visits, fests and team interactions.
          </p>

          {/* NEON DIVIDER */}
          <div className="neon-divider"></div>

          {/* GALLERY GRID */}
          <div className="gallery-grid reveal">

            <div className="gallery-item">
              <img src={g1} alt="" />
              <span className="gallery-caption">
                Alumni Interaction 2025
              </span>
            </div>


            <div className="gallery-item">
              <img src={g2} alt="" />
              <span className="gallery-caption">
                Pixelhack 2025 college winners
              </span>
            </div>

            <div className="gallery-item">
              <img src={g3} alt="" />
              <span className="gallery-caption">
                Seminar on latest trends and Technology
              </span>
            </div>

            <div className="gallery-item">
              <img src={g4} alt="" />
              <span className="gallery-caption">
                ACM Core Team 2025-26
              </span>
            </div>

            <div className="gallery-item">
              <img src={g5} alt="" />
              <span className="gallery-caption">
                ACM Team 2025
              </span>
            </div>

            <div className="gallery-item">
              <img src={g6} alt="" />
              <span className="gallery-caption">
                Taiwan Automation Expo 2025
              </span>
            </div>

            <div className="gallery-item">
              <img src={g7} alt="" />
              <span className="gallery-caption">
                Social Cause Activity
              </span>
            </div>

            <div className="gallery-item">
              <img src={g8} alt="" />
              <span className="gallery-caption">
                Seminar on Idea to Impact
              </span>
            </div>

            <div className="gallery-item">
              <img src={g9} alt="" />
              <span className="gallery-caption">
                ACM Team
              </span>
            </div>

            <div className="gallery-item">
              <img src={g10} alt="" />
              <span className="gallery-caption">
                Escape Room (Zephyr 2025)
              </span>
            </div>

            <div className="gallery-item">
              <img src={g11} alt="" />
              <span className="gallery-caption">
                WWE Console (Zephyr 2025)
              </span>
            </div>

            <div className="gallery-item">
              <img src={g12} alt="" />
              <span className="gallery-caption">
                Zephyr 2025
              </span>
            </div>

            <div className="gallery-item">
              <img src={g13} alt="" />
              <span className="gallery-caption">
                Dance Workshop (Zephyr 2025)
              </span>
            </div>

            <div className="gallery-item">
              <img src={g14} alt="" />
              <span className="gallery-caption">
                Powershow (Zephyr 2025)
              </span>
            </div>

            <div className="gallery-item">
              <img src={g15} alt="" />
              <span className="gallery-caption">
                Social Cause Activity 
              </span>
            </div>

            <div className="gallery-item">
              <img src={g16} alt="" />
              <span className="gallery-caption">
                Taiwan Automation Expo 2025
              </span>
            </div>

            <div className="gallery-item">
              <img src={g17} alt="" />
              <span className="gallery-caption">
                Seminar on Gen AI
              </span>
            </div>

            <div className="gallery-item">
              <img src={g18} alt="" />
              <span className="gallery-caption">
                Taiwan Automation Expo 2025
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      <div id="lightboxOverlay">
        <span id="lightboxClose">
          <i className="ri-close-line"></i>
        </span>

        <div className="lightbox-content">
          <img id="lightboxImg" src={g1} alt="" />
          <p id="lightboxDesc"></p>
        </div>
      </div>
    </>
  );
};

export default Gallery;
