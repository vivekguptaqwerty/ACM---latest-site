import "../../styles/global.css";
import heroImg from "../../assets/images/Landingimage.png";
/* ===== MARQUEE IMAGES (NON-TEAM) ===== */
import g1 from "../../assets/images/gallery1.jpeg";
import g2 from "../../assets/images/gallery2.jpeg";
import g3 from "../../assets/images/gallery3.jpeg";
import g4 from "../../assets/images/gallery4.jpeg";
import g5 from "../../assets/images/gallery5.jpeg";
import g6 from "../../assets/images/gallery6.jpeg";

/* Event / misc images */
import e1 from "../../assets/images/Alumniinteraction.png";
import e2 from "../../assets/images/AutomationExpo.png";
import e3 from "../../assets/images/zephyr.jpeg";
import e4 from "../../assets/images/Pixxelhack webathon 1.0.png";


const Home = () => {
  return (
    <>

      {/* HERO */}
      <section id="hero">
        <div className="container hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <i className="ri-global-line"></i>
              TCET ACM Student Chapter
            </div>

            <h1 className="hero-title">
              A student-powered ACM community
              <span className="accent">
                building the next era of innovation at TCET.
              </span>
            </h1>

            <p className="hero-desc">
              TCET ACM is a vibrant tech community shaping future-ready engineers
              through projects, events, mentorship, innovation and leadership.
            </p>

            <div className="hero-actions">
              <a href="/contact">
                <button className="btn btn-primary">
                  Reach out to TCET ACM now{" "}
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </a>

              <a href="/events">
                <button className="btn btn-ghost">
                  <i className="ri-calendar-event-line"></i> Explore Our Events
                </button>
              </a>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <i className="ri-group-line"></i> 200+ members
              </div>
              <div className="hero-meta-item">
                <i className="ri-macbook-line"></i> 12+ annual events
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <img
              src={heroImg}
              className="hero-showcase-img"
              alt="TCET ACM Showcase"
            />
          </div>
        </div>
      </section>

      {/* IMAGE MARQUEE */}
      <div className="image-marquee-strip marquee-enhanced">
        <div className="marquee-content">

          {/* GROUP 1 */}
          <div className="marquee-group">
            <img src={g1} alt="ACM Gallery" />
            <img src={g2} alt="ACM Gallery" />
            <img src={e1} alt="ACM Event" />
            <img src={g3} alt="ACM Gallery" />
            <img src={e2} alt="ACM Event" />
            <img src={g4} alt="ACM Gallery" />
            <img src={e3} alt="ACM Fest" />
            <img src={g5} alt="ACM Gallery" />
            <img src={e4} alt="ACM Hackathon" />
            <img src={g6} alt="ACM Gallery" />
          </div>

          {/* GROUP 2 (duplicate for seamless loop) */}
          <div className="marquee-group">
            <img src={g1} alt="ACM Gallery" />
            <img src={g2} alt="ACM Gallery" />
            <img src={e1} alt="ACM Event" />
            <img src={g3} alt="ACM Gallery" />
            <img src={e2} alt="ACM Event" />
            <img src={g4} alt="ACM Gallery" />
            <img src={e3} alt="ACM Fest" />
            <img src={g5} alt="ACM Gallery" />
            <img src={e4} alt="ACM Hackathon" />
            <img src={g6} alt="ACM Gallery" />
          </div>

        </div>
      </div>


      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="section-label">
            <i className="ri-information-line"></i> About
          </div>

          <h2 className="section-title">
            A global ACM network, rooted at TCET.
          </h2>

          <p className="section-subtitle">
            ACM is the world’s largest computing society. At TCET, our student
            chapter gives learners a place to collaborate, build, experiment and
            grow alongside mentors.
          </p>

          <div className="grid about-grid">
            <div className="reveal">
              <p className="highlight">
                Established in <strong>2011</strong>, TCET ACM empowers students
                through peer learning, events, hackathons, projects and
                mentorship.
              </p>

              <div className="stats-row">
                <div className="stat-box">
                  <h3>200+</h3>
                  <p>Members</p>
                </div>
                <div className="stat-box">
                  <h3>12+</h3>
                  <p>Events / Year</p>
                </div>
                <div className="stat-box">
                  <h3>6+</h3>
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="card">
                <div className="card-header">
                  <div>
                    <div className="card-title">Our Pillars</div>
                    <p className="card-body">
                      We grow together through consistency and community.
                    </p>
                  </div>
                  <div className="pill-icon">
                    <i className="ri-pulse-line"></i>
                  </div>
                </div>

                <ul className="card-body">
                  <li>
                    <strong>Learn</strong> Workshops & sessions
                  </li>
                  <li>
                    <strong>Build</strong> Hackathons & projects
                  </li>
                  <li>
                    <strong>Connect</strong> Alumni & industry
                  </li>
                  <li>
                    <strong>Lead</strong> Student leadership roles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
