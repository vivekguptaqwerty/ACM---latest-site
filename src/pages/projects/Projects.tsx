import { useState, useEffect } from "react";
import "../../styles/global.css";

import winner from "../../assets/images/winner.jpeg";
import finalist from "../../assets/images/finalist.jpeg";
import olympiad from "../../assets/images/olympiad.jpeg";
import WinnersPixxelhack from "../../assets/images/WinnersPixxelhack.jpeg";

type Project = {
  title: string;
  image: string;
  desc: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Winner - Coherence - 2025 Blockchain Domain",
    image: winner,
    desc: "Rank 1 – PixxleHack Webathon. Awarded for UI/UX and Functional Prototype.",
    tags: ["Blockchain", "Web Dev"],
  },
  {
    title: "Health-Guard AI : Predict Protect Prevent",
    image: finalist,
    desc: "AI-based smart assistant created during ACM Research Sprint.",
    tags: ["AI", "Python"],
  },
  {
    title: "Secured 19th rank in National Maths Olympiad",
    image: olympiad,
    desc: "National-level mathematics competition achievement.",
    tags: ["Problem Solving", "Mathematics"],
  },
   {
    title: "Winner of Pixxelhack Webathon",
    image: WinnersPixxelhack,
    desc: "Pixxelhack webathon organised by TCET ACM : Kartavya student of IT secured first position in that",
    tags: ["Intutive Thinking", "Web development"],
  },
];

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  }, []);

  const openLightbox = (project: Project) => {
    setActiveProject(project);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveProject(null);
  };

  return (
    <>
      {/* PRELOADER */}
      <div id="preloader">
        <div className="neon-spinner"></div>
      </div>

      {/* PROJECTS / ACHIEVEMENTS */}
      <section id="projects">
        <div className="container reveal">
          <div className="section-label">
            <i className="ri-trophy-line"></i> Achievements
          </div>

          <h2 className="section-title">Our milestones & recognitions.</h2>
          <p className="section-subtitle">
            Competitions, Hackathons, Research, Certifications — everything our
            chapter is proud of.
          </p>

          <div className="neon-divider"></div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => openLightbox(project)}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && activeProject && (
        <div id="lightboxOverlay" style={{ display: "flex" }}>
          <span id="lightboxClose" onClick={closeLightbox}>
            <i className="ri-close-line"></i>
          </span>

          <div className="lightbox-content">
            <img src={activeProject.image} alt={activeProject.title} />
            <p id="lightboxDesc">{activeProject.desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
