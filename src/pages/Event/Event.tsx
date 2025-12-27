import { useState, useEffect } from "react";
import "../../styles/global.css";

/* ===========================
   IMAGE IMPORTS – 2025–26
=========================== */
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
import zephyr25Report from "../../assets/reports/Alumni Interaction 1.pdf";
import ezine25Report from "../../assets/reports/Alumni Interaction 1.pdf";
import social25Report from "../../assets/reports/Social Cause Report .pdf";
import acmSummitReport from "../../assets/reports/Alumni Interaction 1.pdf";



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

      <Event
        img={alumni25}
        title="Alumni Interaction"
        time="16 July 2025 • 2 hrs"
        place="TCET Auditorium"
        desc="A candid session where alumni shared internships, career paths and real-world advice."
         report={alumni25Report}
      />

      <Event
        img={genai25}
        title="Generative AI & Quantum Seminar"
        time="17 July 2025 • 2 hrs"
        place="TCET Auditorium"
        desc="Intro to generative AI workflows and quantum computing concepts."
         report={genai25Report}
      />
     
      <Event
        img={pixxel25}
        title="PixxleHack Webathon"
        time="8 August 2025 • 48 hrs"
        place="Online"
        desc="48-hour web sprint — prototype, ship, present."
        report={pixxel25Report}
      />
      
      <Event
        img={automation25}
        title="Automation Expo – Industrial Visit"
        time="13–14 August 2025"
        place="Nesco, Goregaon"
        desc="Hands-on exposure to automation & smart manufacturing."
        report={automation25Report}
      />
      <Event
        img={iic25}
        title="IIC — Institute Innovation Cell"
        time="19 September 2025"
        place="TCET"
        desc="Mentoring & workshops to turn ideas into projects."
        report={iic25Report}
      />
      <Event
        img={zephyr25}
        title="Zephyr — 3 Day Fest"
        time="25–27 September 2025"
        place="TCET Campus"
        desc="Culture + tech + food stalls — annual fest."
        report={zephyr25Report}
      />
     
      <Event
        img={ezine25}
        title="E-Magazine"
        time="20 October 2025"
        place="Online"
        desc="Articles from students, faculty and alumni."
        // report={ezine25Report}
      />
      

      <Event
        img={social25}
        title="Social Cause — Cyber Safety Drive"
        time="29 October 2025"
        place="Buddha Vihar"
        desc="Outreach teaching online safety."
        report={social25Report}
      />
     

      <Event
        img={ACMSummit}
        title="ACM Summit 2025"
        time="19 December 2025 • Full Day"
        place="NMIMS, Indore"
        desc="ACM Summit 2025 brought together students, researchers, and industry experts for insightful talks, technical sessions, and networking opportunities focused on emerging technologies and innovation."
        report={genai25Report}
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
};

const Event = ({ img, title, time, place, desc,report }: Props) => (
  <div className="event-card-new reveal">
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
      <p>{desc}</p>
        <a
          href={report}
          download
          className="event-download-btn"
        >
          <i className="ri-download-line"></i> Download Report
        </a>
    </div>
  </div>
);
