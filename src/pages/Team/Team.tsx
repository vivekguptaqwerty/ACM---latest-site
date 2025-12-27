import "../../styles/global.css";

/* ================= FACULTY IMAGES ================= */
import rajesh from "../../assets/images/Rajeshsir.jpeg";
import mary from "../../assets/images/MaryMAM.jpeg";
import apeksha from "../../assets/images/Apekshamam.jpeg";

/* ================= STUDENT IMAGES ================= */
import vivek from "../../assets/images/Vivek.jpeg";
import dheer from "../../assets/images/Dheer.jpeg";
import pooja from "../../assets/images/Pooja.jpeg";
import tanmayi from "../../assets/images/Tanmayi.jpeg";
import sharvari from "../../assets/images/Sharvari.jpeg";
import om from "../../assets/images/Om.jpeg";
import vansh from "../../assets/images/Vansh.jpeg";
import arya from "../../assets/images/Arya.jpeg";
import girik from "../../assets/images/Girik.jpeg";
import lavya from "../../assets/images/Lavya.jpg";
import jainam from "../../assets/images/Jainam.jpg";
import prakshal from "../../assets/images/Prakshal.jpeg";



const Team = () => {
    return (
        <section id="team">
            <div className="container">

                {/* ================= FACULTY ================= */}
                <div className="section-label">
                    <i className="ri-user-star-line"></i> Core Team – TCET ACM
                </div>

                <h2 className="section-title">Faculty In-Charge</h2>
                <p className="section-subtitle">
                    The faculty members who guide TCET ACM throughout the academic year.
                </p>

                <div className="faculty-grid reveal">
                    <FacultyCard
                        img={rajesh}
                        name="Dr. Rajesh Bansode"
                        role="Branch Counsellor IT & Head of Department"
                        highlight
                    />

                    <FacultyCard
                        img={mary}
                        name="Prof. Mary Margarat"
                        role="Faculty Chair"
                    />

                    <FacultyCard
                        img={apeksha}
                        name="Prof. Apeksha Waghmare"
                        role="Faculty In-Charge"
                    />
                </div>


                {/* STUDENT TEAM */}
                <h2 className="section-title">The student leaders behind TCET ACM.</h2>
                <p className="section-subtitle">
                    The student core body that manages initiatives, events and chapter activities year-round.
                </p>

                <div className="team-student-grid reveal">
                    <StudentCard img={vivek} name="Vivek Gupta" role="Chairperson"
                        linkedin="https://www.linkedin.com/in/vivek-gupta-4607bb25a/"
                        github="https://github.com/vivekguptaqwerty" />

                    <StudentCard img={dheer} name="Dheer Shrivastava" role="Vice Chairperson"
                        linkedin="https://www.linkedin.com/in/dheershrivastava/"
                        github="https://github.com/DheerShrivastava" />

                    <StudentCard img={tanmayi} name="Tanmayi Reddy" role="Secretary"
                        linkedin="https://www.linkedin.com/in/tanmayi-reddy-b60843340/"
                        github="https://github.com/Tanmayi2803" />

                    <StudentCard img={pooja} name="Pooja Swammy" role="Event Manager"
                        linkedin="https://www.linkedin.com/in/pooja-swamy-1504b3344?"
                        github="https://github.com/pooja7406" />

                    <StudentCard img={sharvari} name="Sharvari More" role="Treasurer"
                        linkedin="https://www.linkedin.com/in/sharvarimore/"
                        github="https://github.com/it-shar24" />

                    <StudentCard img={om} name="Om Suryavanshi" role="Sponsorship Head"
                        linkedin="https://www.linkedin.com/in/om-suryavanshi"
                        github="https://github.com/om711" />

                    <StudentCard img={vansh} name="Vansh Khandelwal" role="Publicity & Marketing Head"
                        linkedin="https://www.linkedin.com/in/vansh-khandelwal-6a48b0265"
                        github="https://github.com/VanshKh" />

                    <StudentCard img={arya} name="Arya Mokari" role="Publication Head"
                        linkedin="https://www.linkedin.com/in/arya-mokari-01406037b"
                        github="https://github.com/mokariarya04-bit" />

                    <StudentCard img={girik} name="Girik Shukla" role="Technical Head"
                        linkedin="https://www.linkedin.com/in/girik-shukla-070a272b9"
                        github="https://github.com/Girikkk" />

                    <StudentCard img={lavya} name="Lavya Damania" role="Creative Head"
                        linkedin="https://www.linkedin.com/in/lavya-damania-6778472a7/"
                        github="https://github.com/lavyadamania" />

                    <StudentCard img={jainam} name="Jainam Jain" role="Design Director"
                        linkedin="https://www.linkedin.com/in/jainam-jain-746188263/"
                        github="https://github.com/jain44" />

                    <StudentCard img={prakshal} name="Prakshal Jain" role="Webmaster"
                        linkedin="https://www.linkedin.com/in/prakshal-jain-b832b5331"
                        github="https://github.com/Prakshal--97" />
                </div>
            </div>
        </section>
    );
};

export default Team;

/* ================= COMPONENTS ================= */

type FacultyProps = {
    img: string;
    name: string;
    role: string;
    highlight?: boolean;
};

const FacultyCard = ({ img, name, role, highlight }: FacultyProps) => (
    <div className={`card team-card ${highlight ? "leader-card" : ""}`}>
        <div className="avatar-img">
            <img src={img} alt={name} />
        </div>
        <div className="team-name">{name}</div>
        <div className="team-role">{role}</div>
    </div>
);

type StudentProps = {
    img: string;
    name: string;
    role: string;
    linkedin: string;
    github: string;
};

const StudentCard = ({ img, name, role, linkedin, github }: StudentProps) => {
    const isLeader = ["Chairperson", "Vice Chairperson", "Secretary"].includes(role);

    return (
        <div className={`card team-card ${isLeader ? "leader-card" : ""}`}>
            <div className="avatar-img">
                <img src={img} alt={name} />
            </div>
            <div className="team-name">{name}</div>
            <div className="team-role">{role}</div>
            <div className="team-links">
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                    <i className="ri-github-fill"></i>
                </a>
            </div>
        </div>
    );
};
