import "../../styles/global.css";
import { useState } from "react";


const Contact = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <>

            {/* CONTACT SECTION */}
            <section id="contact">
                <div className="container contact-page-wrapper">

                    <div className="section-label">
                        <i className="ri-mail-send-line"></i>
                        Reach TCET ACM
                    </div>

                    <h2 className="section-title">Let’s talk ideas, events and collabs.</h2>

                    <p className="section-subtitle">
                        Whether you’re a student, faculty member or external partner — this is the place to reach the TCET ACM team.
                    </p>

                    {/* INFO PILLS */}
                    <div className="contact-pill-row reveal">
                        <span className="chip">
                            <i className="ri-building-line"></i> TCET Campus, Kandivali (E)
                        </span>
                        <span className="chip">
                            <i className="ri-time-line"></i> Active on weekdays • 10 AM – 5 PM
                        </span>
                        <span className="chip">
                            <i className="ri-chat-1-line"></i> Tech talks • Events • Collabs
                        </span>
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid contact-grid">

                        {/* LEFT CARD */}
                        <div className="reveal">
                            <div className="card contact-card-neon">

                                <div className="card-header">
                                    <div>
                                        <div className="card-title">Talk to the TCET ACM team</div>
                                        <p className="card-body">
                                            Drop us a mail, ping us on socials or catch us in the IT department.
                                            We’re always up for <strong>ideas, events and collaborations.</strong>
                                        </p>
                                    </div>
                                    <div className="pill-icon">
                                        <i className="ri-sparkling-2-line"></i>
                                    </div>
                                </div>

                                <ul className="contact-info-list">
                                    <li>
                                        <i className="ri-mail-line"></i>
                                        <span>
                                            <strong>Email</strong><br />
                                            acmtcet8@gmail.com
                                        </span>
                                    </li>

                                    <li>
                                        <i className="ri-map-pin-2-line"></i>
                                        <span>
                                            <strong>On campus</strong><br />
                                            TCET • 2nd Floor • IT Staffroom
                                        </span>
                                    </li>
                                </ul>

                                <div className="contact-uses">
                                    <p className="contact-uses-label">You can reach us for:</p>
                                    <ul>
                                        <li><i className="ri-checkbox-circle-line"></i> Event partnerships & tech talks</li>
                                        <li><i className="ri-checkbox-circle-line"></i> Student chapter activities & queries</li>
                                        <li><i className="ri-checkbox-circle-line"></i> Hackathons, workshops & bootcamps</li>
                                    </ul>
                                </div>

                                <div className="contact-social-quick">
                                    <span>Direct links:</span>
                                    <div className="contact-social-chips">
                                        <a className="chip" href="https://www.instagram.com/tcet_acm" target="_blank" rel="noopener noreferrer">
                                            <i className="ri-instagram-line"></i> Instagram
                                        </a>
                                        <a className="chip" href="https://www.linkedin.com/in/acmtcet" target="_blank" rel="noopener noreferrer">
                                            <i className="ri-linkedin-fill"></i> LinkedIn
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT STACK */}
                        <div className="reveal contact-right-stack">

                            {/* MAP */}
                            <div className="card contact-map-card">
                                <div className="card-header">
                                    <div>
                                        <div className="card-title">Find us on the map</div>
                                        <p className="card-body">
                                            Located at Thakur College of Engineering & Technology, Kandivali (E).
                                        </p>
                                    </div>
                                    <div className="pill-icon">
                                        <i className="ri-map-pin-line"></i>
                                    </div>
                                </div>

                                <div className="map-embed-wrapper">
                                    <iframe
                                        className="map-embed"
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.748370571548!2d72.874!3d19.207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzI1LjIiTiA3MsKwNTInMjYuNCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                                    />
                                </div>
                            </div>

                            {/* OFFICE HOURS */}
                            <div className="card office-hours-card">
                                <div className="card-header">
                                    <div>
                                        <div className="card-title">When are we usually active?</div>
                                        <p className="card-body">
                                            Timings may shift during fests & exams, but generally:
                                        </p>
                                    </div>
                                    <div className="pill-icon">
                                        <i className="ri-time-line"></i>
                                    </div>
                                </div>

                                <div className="office-hours">
                                    <div className="oh-row">
                                        <span>Mon – Fri</span>
                                        <span>10:00 AM – 5:00 PM</span>
                                    </div>
                                    <div className="oh-row">
                                        <span>Saturday</span>
                                        <span>As per schedule / events</span>
                                    </div>
                                    <div className="oh-row">
                                        <span>Sunday</span>
                                        <span>Usually offline</span>
                                    </div>
                                </div>

                                <p className="office-note">
                                    Best time to catch us in person:{" "}
                                    <strong>shortly before / after lectures</strong> or during scheduled ACM activities.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="section-divider reveal"></div>

                    <div className="faq-section reveal">
                        <h3 className="faq-title">Quick FAQs before you mail us</h3>
                        <p className="faq-subtitle">
                            Here are some things people usually ask TCET ACM.
                        </p>

                        <div className="faq-grid">

                            {/* FAQ 1 */}
                            <div className={`faq-item ${openFAQ === 0 ? "open" : ""}`}>
                                <button className="faq-question" onClick={() => toggleFAQ(0)}>
                                    <span>Why join TCET ACM?</span>
                                    <i className={`ri-${openFAQ === 0 ? "subtract" : "add"}-line`}></i>
                                </button>
                                {openFAQ === 0 && (
                                    <div className="faq-answer">
                                        Join TCET ACM to gain global exposure, enhance your technical skills, and connect with a community that accelerates your growth in computing and innovation.
                                    </div>
                                )}
                            </div>

                            {/* FAQ 2 */}
                            <div className={`faq-item ${openFAQ === 1 ? "open" : ""}`}>
                                <button className="faq-question" onClick={() => toggleFAQ(1)}>
                                    <span>Can non-IT branches attend ACM events?</span>
                                    <i className={`ri-${openFAQ === 1 ? "subtract" : "add"}-line`}></i>
                                </button>
                                {openFAQ === 1 && (
                                    <div className="faq-answer">
                                        Yes! Most ACM activities are open to all tech-interested students.
                                    </div>
                                )}
                            </div>

                            {/* FAQ 3 */}
                            <div className={`faq-item ${openFAQ === 2 ? "open" : ""}`}>
                                <button className="faq-question" onClick={() => toggleFAQ(2)}>
                                    <span>How do external speakers collaborate with TCET ACM?</span>
                                    <i className={`ri-${openFAQ === 2 ? "subtract" : "add"}-line`}></i>
                                </button>
                                {openFAQ === 2 && (
                                    <div className="faq-answer">
                                        Mail us at <strong>acmtcet8@gmail.com</strong> with your proposal.
                                    </div>
                                )}
                            </div>

                            {/* FAQ 4 */}
                            <div className={`faq-item ${openFAQ === 3 ? "open" : ""}`}>
                                <button className="faq-question" onClick={() => toggleFAQ(3)}>
                                    <span>Will someone respond to Instagram DMs?</span>
                                    <i className={`ri-${openFAQ === 3 ? "subtract" : "add"}-line`}></i>
                                </button>
                                {openFAQ === 3 && (
                                    <div className="faq-answer">
                                        Yes — but email is preferred for formal communication.
                                    </div>
                                )}
                            </div>

                            {/* FAQ 5 */}
                            <div className={`faq-item ${openFAQ === 3 ? "open" : ""}`}>
                                <button className="faq-question" onClick={() => toggleFAQ(3)}>
                                    <span>What are the benefits of being an ACM member?</span>
                                    <i className={`ri-${openFAQ === 3 ? "subtract" : "add"}-line`}></i>
                                </button>
                                {openFAQ === 3 && (
                                    <div className="faq-answer">
                                        ACM membership provides access to technical resources, research publications, professional development programs, networking opportunities, and career support, helping members stay updated and grow academically and professionally.
                                    </div>
                                )}
                            </div>
                          


                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default Contact;
