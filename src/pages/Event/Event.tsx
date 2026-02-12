import { useState, useEffect } from "react";


import "../../styles/global.css";

/* ===========================
   IMAGE IMPORTS – 2025–26
=========================== */
import Innovgenius25 from "../../assets/images/Innov_OG.jpeg";
import recruitment25 from "../../assets/images/Recruitment.png";
import membershipdrive25 from "../../assets/images/Membershipdrive.jpeg";
import alumni25 from "../../assets/images/Alumniinteraction.png";
import genai25 from "../../assets/images/Generative AI and Quantumn computing.png";
import pixxel25 from "../../assets/images/Pixxelhack webathon 1.0.png";
import automation25 from "../../assets/images/AutomationExpo.png";
import iic25 from "../../assets/images/IIC.png";
import zephyr25 from "../../assets/images/zephyr.jpeg";
import ezine25 from "../../assets/images/ezine.png";
import social25 from "../../assets/images/Socialcause.png";
import ACMSummit from "../../assets/images/ACMSummit.png";

/* ===========================
   REPORT IMPORTS – 2025–26
=========================== */
import alumni25Report from "../../assets/reports/Alumni Interaction 1.pdf";
import genai25Report from "../../assets/reports/Generative AI and Quantum computing Report 1.pdf";
import pixxel25Report from "../../assets/reports/PIXXELHACK webathon report 1.pdf";
import automation25Report from "../../assets/reports/Local Iv report 1.pdf";
import iic25Report from "../../assets/reports/IIC Report .pdf";
// import zephyr25Report from "../../assets/reports/Alumni Interaction 1.pdf";
// import ezine25Report from "../../assets/reports/Alumni Interaction 1.pdf";
import social25Report from "../../assets/reports/Social Cause Report .pdf";
// import acmSummitReport from "../../assets/reports/Alumni Interaction 1.pdf";



/* ===========================
   IMAGE IMPORTS – 2022–23
=========================== */
import bigdata22 from "../../assets/images/7.png";
import iv22 from "../../assets/images/industrial-visit-delhi-nainital-2023.png";
import zephyr22 from "../../assets/images/9.jpeg";
import alumni22 from "../../assets/images/alumni-interaction-2023.jpeg";
import blockchain22 from "../../assets/images/11.jpeg";
import qualpack22 from "../../assets/images/qualification-pack-workshop-2023.jpeg";

/* ===========================
   IMAGE IMPORTS – 2023–24
=========================== */
import arvr23 from "../../assets/images/13.png";
import prototype23 from "../../assets/images/14.png";
import localiv23 from "../../assets/images/15.jpeg";
import toi24 from "../../assets/images/16.png";
import idea23 from "../../assets/images/17.png";
import genai24 from "../../assets/images/18.png";

/* ===========================
   IMAGE IMPORTS – 2024–25
=========================== */
import meeting24 from "../../assets/images/19.png";
import incubation24 from "../../assets/images/20.png";
import social24 from "../../assets/images/21.png";
import devops25 from "../../assets/images/22.png";
import alumni25b from "../../assets/images/23.png";
import ngo25 from "../../assets/images/24.png";

const Events = () => {
  const [activeYear, setActiveYear] = useState("2025-26");
const [selectedEvent, setSelectedEvent] = useState<Props | null>(null);
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  }, []);

  return (
    <>

      <div id="preloader">
        <div className="neon-spinner"></div>
      </div>

      <section id="events">
        <div className="container reveal">
          <div className="section-label">
            <i className="ri-calendar-event-line"></i> Our Events
          </div>

          <h2 className="section-title">Where learning meets experience.</h2>
          <p className="section-subtitle">
            From hackathons to industrial visits — every ACM event is designed to
            expand your knowledge and build connections.
          </p>

          {/* YEAR SWITCHER */}
          <div className="year-switcher reveal">
            {["2025-26", "2024-25", "2023-24", "2022-23"].map((year) => (
              <button
                key={year}
                type="button"
                className={`year-btn ${activeYear === year ? "active" : ""}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          {/* =======================
              YEAR SLIDES
          ======================= */}
          <div className="year-slides-wrap reveal">

            {/* ===== 2025–26 ===== */}
           {/* ===== 2025–26 ===== */}
{activeYear === "2025-26" && (
  <div className="year-slide active">
    
    <div className="events-grid">
   

  {/* INNOVGENIUS */}
  <Event
    img={Innovgenius25}
    title="INNOVGENIUS 2026 – National Level Ideathon"
    time="29 May 2025 • 3 hours"
    place="IT Staff Room"
    desc="A national-level ideathon encouraging students to solve real-world industry problems through innovation and structured idea pitching."
    registrationLink="https://unstop.com/hackathons/innovgenius-2026-hackathon-acm-tcet-1631419"
    onClick={() =>
      setSelectedEvent({
        img: Innovgenius25,
        title: "INNOVGENIUS 2026 – National Level Ideathon",
        time: "29 May 2025 • 3 hours",
        place: "IT Staff Room",
        desc: `INNOVGENIUS 2026 is a flagship national-level ideathon organized by the TCET ACM SIGITE Student Chapter in collaboration with Tata Consultancy Services (TCS). Participants tackled real-world problem statements, presented innovative solutions before expert evaluators, and received structured feedback from industry professionals. The event emphasized creativity, feasibility, scalability, and presentation skills while exposing students to practical industry expectations.`,
        registrationLink: "https://unstop.com/hackathons/innovgenius-2026-hackathon-acm-tcet-1631419",
      })
    }
  />

  {/* RECRUITMENT */}
  <Event
    img={recruitment25}
    title="Recruitment Process 2025–26"
    time="29 May 2025 • 3 hours"
    place="IT Staff Room"
    desc="Structured selection process to onboard passionate and skilled ACM members."
    onClick={() =>
      setSelectedEvent({
        img: recruitment25,
        title: "Recruitment Process 2025–26",
        time: "29 May 2025 • 3 hours",
        place: "IT Staff Room",
        desc: `The ACM Recruitment Process 2025–26 was designed to identify motivated and technically skilled students. The selection included technical assessments, task-based evaluation, interviews, and interaction rounds to assess communication, teamwork, and leadership abilities. The process ensured formation of a dedicated and dynamic student team.`,
      })
    }
  />

  {/* MEMBERSHIP DRIVE */}
  <Event
    img={membershipdrive25}
    title="Membership Drive 2025–26"
    time="7 September 2025 • 3 days"
    place="TCET Campus"
    desc="Campus-wide enrollment drive introducing students to ACM opportunities."
    onClick={() =>
      setSelectedEvent({
        img: membershipdrive25,
        title: "Membership Drive 2025–26",
        time: "7 September 2025 • 3 days",
        place: "TCET Campus",
        desc: `The Membership Drive introduced students to the benefits of joining TCET ACM, including technical workshops, hackathons, networking opportunities, and leadership roles. The three-day drive included orientation sessions, interaction booths, and Q&A discussions to help students understand ACM’s vision and growth opportunities.`,
      })
    }
  />

  {/* ALUMNI INTERACTION */}
  <Event
    img={alumni25}
    title="Alumni Interaction"
    time="16 July 2025 • 2 hrs"
    place="TCET Auditorium"
    desc="Interactive session with alumni sharing industry and career insights."
    report={alumni25Report}
    onClick={() =>
      setSelectedEvent({
        img: alumni25,
        title: "Alumni Interaction",
        time: "16 July 2025 • 2 hrs",
        place: "TCET Auditorium",
        desc: `A highly engaging session where distinguished alumni shared their professional journeys, internship experiences, placement preparation strategies, and insights into corporate expectations. Students gained clarity on skill development, career planning, and real-world challenges.`,
        report: alumni25Report,
      })
    }
  />

  {/* GENERATIVE AI */}
  <Event
    img={genai25}
    title="Generative AI & Quantum Seminar"
    time="17 July 2025 • 2 hrs"
    place="TCET Auditorium"
    desc="Seminar exploring AI models and emerging quantum computing concepts."
    report={genai25Report}
    onClick={() =>
      setSelectedEvent({
        img: genai25,
        title: "Generative AI & Quantum Seminar",
        time: "17 July 2025 • 2 hrs",
        place: "TCET Auditorium",
        desc: `This seminar introduced students to Generative AI, Large Language Models (LLMs), and foundational concepts in Quantum Computing. The session covered real-world AI applications, ethical considerations, and the future scope of quantum technologies, encouraging students to explore emerging research domains.`,
        report: genai25Report,
      })
    }
  />

  {/* PIXXELHACK */}
  <Event
    img={pixxel25}
    title="PixxleHack Webathon"
    time="8 August 2025 • 48 hrs"
    place="Online"
    desc="48-hour intensive web development competition."
    report={pixxel25Report}
    onClick={() =>
      setSelectedEvent({
        img: pixxel25,
        title: "PixxleHack Webathon",
        time: "8 August 2025 • 48 hrs",
        place: "Online",
        desc: `PixxleHack was a 48-hour webathon challenging participants to design, develop, and deploy functional web applications within a strict time limit. The event emphasized UI/UX design, frontend-backend integration, deployment strategies, and teamwork under pressure.`,
        report: pixxel25Report,
      })
    }
  />

  {/* AUTOMATION EXPO */}
  <Event
    img={automation25}
    title="Automation Expo – Industrial Visit"
    time="13–14 August 2025"
    place="Nesco, Goregaon"
    desc="Industrial exposure to automation and smart manufacturing systems."
    report={automation25Report}
    onClick={() =>
      setSelectedEvent({
        img: automation25,
        title: "Automation Expo – Industrial Visit",
        time: "13–14 August 2025",
        place: "Nesco, Goregaon",
        desc: `Students explored the latest advancements in automation, robotics, and smart manufacturing technologies at Automation Expo. The visit provided hands-on exposure to industrial machinery, IoT-based control systems, and interactions with industry experts.`,
        report: automation25Report,
      })
    }
  />

  {/* IIC */}
  <Event
    img={iic25}
    title="IIC — Institute Innovation Cell"
    time="19 September 2025"
    place="TCET"
    desc="Mentorship-driven innovation and startup guidance sessions."
    report={iic25Report}
    onClick={() =>
      setSelectedEvent({
        img: iic25,
        title: "IIC — Institute Innovation Cell",
        time: "19 September 2025",
        place: "TCET",
        desc: `The IIC session focused on transforming innovative ideas into viable projects and startups. Students were guided through ideation frameworks, MVP validation, business modeling, and mentorship support provided under the Innovation Cell initiative.`,
        report: iic25Report,
      })
    }
  />

  {/* ZEPHYR */}
  <Event
    img={zephyr25}
    title="Zephyr — 3 Day Fest"
    time="25–27 September 2025"
    place="TCET Campus"
    desc="Annual techno-cultural festival blending innovation and entertainment."
    onClick={() =>
      setSelectedEvent({
        img: zephyr25,
        title: "Zephyr — 3 Day Fest",
        time: "25–27 September 2025",
        place: "TCET Campus",
        desc: `Zephyr 2025 was a vibrant three-day techno-cultural fest featuring technical competitions, gaming tournaments, creative showcases, food stalls, and cultural performances. The event fostered collaboration, innovation, and campus-wide engagement.`,
      })
    }
  />

  {/* E-MAGAZINE */}
  <Event
    img={ezine25}
    title="E-Magazine"
    time="20 October 2025"
    place="Online"
    desc="Digital publication featuring student achievements and articles."
    onClick={() =>
      setSelectedEvent({
        img: ezine25,
        title: "E-Magazine",
        time: "20 October 2025",
        place: "Online",
        desc: `The ACM E-Magazine featured technical articles, student achievements, faculty contributions, and event highlights. It served as a platform to showcase innovation, creativity, and academic excellence within the ACM community.`,
      })
    }
  />

  {/* SOCIAL CAUSE */}
  <Event
    img={social25}
    title="Social Cause — Cyber Safety Drive"
    time="29 October 2025"
    place="Buddha Vihar"
    desc="Community outreach promoting digital safety awareness."
    report={social25Report}
    onClick={() =>
      setSelectedEvent({
        img: social25,
        title: "Social Cause — Cyber Safety Drive",
        time: "29 October 2025",
        place: "Buddha Vihar",
        desc: `ACM members conducted a Cyber Safety Awareness Drive educating local communities about online scams, digital privacy, and responsible internet usage. The initiative emphasized social responsibility and digital literacy.`,
        report: social25Report,
      })
    }
  />

  {/* ACM SUMMIT */}
  <Event
    img={ACMSummit}
    title="ACM Summit 2025"
    time="19 December 2025 • Full Day"
    place="NMIMS, Indore"
    desc="National-level summit connecting students, researchers and industry."
    onClick={() =>
      setSelectedEvent({
        img: ACMSummit,
        title: "ACM Summit 2025",
        time: "19 December 2025 • Full Day",
        place: "NMIMS, Indore",
        desc: `ACM Summit 2025 brought together students, researchers, and industry leaders for keynote talks, technical sessions, networking events, and discussions on emerging technologies. The summit provided exposure to research trends and career opportunities in computing domains.`,
      })
    }
  />



    </div>
  </div>
)}


            {/* ===== 2022–23 ===== */}
            {activeYear === "2022-23" && (
              <div className="year-slide active">
                <div className="events-grid">
                  <Event img={bigdata22} title="Big Data Analysis (Webinar)" time="23 July 2022 • 2 hrs" place="Online"
                    desc="Webinar introducing core Big Data concepts." />

                  <Event img={iv22} title="Industrial Visit" time="3–11 January 2023 • 9 days" place="Delhi – Nainital"
                    desc="A 9-day industrial visit with real-world exposure." />

                  <Event img={zephyr22} title="Zephyr 2022 — Metaverse" time="6–8 October 2022" place="TCET Campus"
                    desc="Technical fest with coding competitions and workshops." />

                  <Event img={alumni22} title="Alumni Interaction" time="9 February 2023" place="Online"
                    desc="Career guidance session by alumni." />

                  <Event img={blockchain22} title="Seminar on Blockchain Technology" time="10 March 2023" place="Seminar Hall"
                    desc="Blockchain fundamentals by industry expert." />

                  <Event img={qualpack22} title="Qualification Pack Workshop" time="20–25 Feb 2023" place="Online"
                    desc="Workshop covering Data Analytics, RPA & AWS." />
                  
                </div>
              </div>
            )}

            {/* ===== 2023–24 ===== */}
            {activeYear === "2023-24" && (
              <div className="year-slide active">
                <div className="events-grid">
                  <Event img={arvr23} title="AR & VR Exposure Program" time="4 August 2023" place="TIAT Lab"
                    desc="Seminar + AR/VR lab visit." />

                  <Event img={prototype23} title="Prototype Design Workshop" time="11 August 2023" place="Online"
                    desc="Design thinking and prototyping workshop." />

                  <Event img={localiv23} title="Local Industrial Visit" time="9 September 2023" place="Andheri & Vasai"
                    desc="Industry tours with expert interactions." />

                  <Event img={idea23} title="Idea Presentation" time="8 September 2023" place="Seminar Hall"
                    desc="Platform for pitching innovative ideas." />

                  <Event img={toi24} title="Times of India Visit" time="15–16 April 2024" place="Kandivali"
                    desc="Insights into media and publishing workflows." />

                  <Event img={genai24} title="Generative AI Seminar" time="27 January 2024" place="Online"
                    desc="Intro to LLMs and AI workflows." />
                    
                 
                </div>
              </div>
            )}

            {/* ===== 2024–25 ===== */}
            {activeYear === "2024-25" && (
              <div className="year-slide active">
                <div className="events-grid">
                  <Event img={meeting24} title="Core Committee Meeting" time="06 July 2024" place="TCET"
                    desc="Annual planning briefing." />

                  <Event img={incubation24} title="Incubation Seminar" time="26 July 2024" place="TCET"
                    desc="Entrepreneurship & incubation opportunities." />

                  <Event img={social24} title="Educational Drive" time="16 August 2024" place="STS School"
                    desc="IT awareness outreach." />

                  <Event img={devops25} title="Platform Engineering in DevOps" time="29 January 2025" place="TCET"
                    desc="DevOps workflows and scalability." />

                  <Event img={alumni25b} title="Alumni Interaction" time="5 February 2025" place="TCET"
                    desc="Placement & internship insights." />

                  <Event img={ngo25} title="NGO Drive" time="26 March 2025" place="Caring Hands NGO"
                    desc="Community outreach and mentorship." />
                   
                </div>
              </div>
            )}
          </div>
        </div>
        {selectedEvent && (
  <div className="event-modal-overlay" onClick={() => setSelectedEvent(null)}>
    <div
      className="event-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="event-modal-close"
        onClick={() => setSelectedEvent(null)}
      >
        ×
      </button>

      <h2>{selectedEvent.title}</h2>

      <p className="event-meta-new">
        <i className="ri-time-line"></i> {selectedEvent.time}
      </p>

      <p className="event-meta-new">
        <i className="ri-map-pin-line"></i> {selectedEvent.place}
      </p>

      <p className="event-modal-desc">{selectedEvent.desc}</p>

      {selectedEvent.report && (
        <a
          href={selectedEvent.report}
          download
          className="event-download-btn"
        >
          <i className="ri-download-line"></i> Download Report
        </a>
      )}
      {selectedEvent.registrationLink && (
  <a
    href={selectedEvent.registrationLink}
    target="_blank"
    rel="noopener noreferrer"
    className="event-register-btn"
  >
    <i className="ri-external-link-line"></i> Register Now
  </a>
)}

    </div>
  </div>
)}

      </section>
    </>
  );
};

export default Events;

/* ===========================
   EVENT CARD COMPONENT
=========================== */

type Props = {
  img: string;
  title: string;
  time: string;
  place: string;
  desc: string;
  report?: string;
    registrationLink?: string;
  onClick?: () => void;
  
};
const Event = ({ img, title, time, place, desc, report, registrationLink, onClick }: Props) => (
  <div
    className="event-card-new reveal"
    onClick={onClick}
  >
    <div className="event-img">
      <img src={img} alt={title} />
    </div>

    <div className="event-content">
      <h3>{title}</h3>

      <p className="event-meta-new">
        <i className="ri-time-line"></i> {time}
      </p>

      <p className="event-meta-new">
        <i className="ri-map-pin-line"></i> {place}
      </p>

      <p className="event-desc-preview">
        {desc.slice(0, 90)}...
      </p>

      {report && (
        <a
          href={report}
          download
          className="event-download-btn"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="ri-download-line"></i> Download Report
        </a>
      )}
      
    </div>
  </div>
);

