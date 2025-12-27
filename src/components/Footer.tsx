import "../styles/global.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} TCET ACM</div>

        <div className="footer-social">
          <a href="https://www.instagram.com/tcet_acm"><i className="ri-instagram-line"></i></a>
          <a href="https://www.linkedin.com/in/acmtcet"><i className="ri-linkedin-box-fill"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
