import { useState, useEffect } from "react";
import "../../styles/global.css";

import winner from "../../assets/images/winner.jpeg";
import finalist from "../../assets/images/finalist.jpeg";
import olympiad from "../../assets/images/olympiad.jpeg";
import WinnersPixxelhack from "../../assets/images/WinnersPixxelhack.jpeg";
import BestWebsite from "../../assets/images/Bestwebsiteaward.png";
import Innovgenius2ndwinner from "../../assets/images/Innovgenius_2nd.png";
import Innovgenius3rddwinner from "../../assets/images/Innovgenius3rd.png";
import ezinewinner from "../../assets/images/ezinewinners.png";
type Project = {
  title: string;
  image: string;
  desc: string;
  tags: string[];
};

const projects: Project[] = [
{
  title: "Third Place - Inter-Department Magazine Presentation",
  image: ezinewinner,
  desc: "Secured third place in the Inter-Department Magazine Presentation for showcasing creativity, content quality, and effective presentation of ideas through the departmental e-magazine.",
  tags: ["Third Place", "Magazine Presentation", "Creative Work"],
},
  {
  title: "Honourable Mention – Best Website Award (ACM India Council)",
  image: BestWebsite,
  desc: "Recognized at the ACM India Council for excellence in web development during PixxelHack Webathon organized by TCET ACM, where a Kartavya student from IT secured first position.",
 tags: ["Award Winning", "ACM Recognition", "Top Performer"],
},
{
  title: "Second Place – Innov Genius 2025 (SE IT Department)",
  image: Innovgenius2ndwinner,
  desc: "Secured second position in Innov Genius for developing an innovative and impactful solution, demonstrating strong technical execution and problem-solving skills.",
  tags: ["Innovation", "Technical Excellence", "Competition"],
},
{
  title: "Third Place – Innov Genius 2025 (SE IT Department)",
  image: Innovgenius3rddwinner,
  desc: "Secured third position in Innov Genius for presenting an innovative solution, showcasing strong technical skills, creativity, and effective problem-solving abilities.",
  tags: ["Innovation", "Technical Skills", "Competition"],
},
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
