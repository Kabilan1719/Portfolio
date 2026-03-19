import profile from "../assets/Kabilan R Photo.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function AboutPage() {
  return (
    <div className="container-fluid mt-3">

      {/* HEADER */}
      <div
        className="p-3 mb-3 rounded-4 border"
        style={{ background: "#F4F4F4" }}
      >
        <h2 className="m-0">
          Creating Scalable Applications That Solve Real Problems
        </h2>
      </div>

      {/* MAIN GRID */}
      <div className="row g-4 align-items-stretch">

        {/* LEFT - INTRO + EDUCATION */}
        <div className="col-lg-4 d-flex flex-column gap-4">

          {/* INTRO */}
          <div className="card p-3 rounded-4 p-4">

            <p className="mb-2">
              Hi, I'm <strong>Kabilan R</strong>, a passionate Full-Stack Developer 
              with expertise in <strong>Core Java</strong> and <strong>React.js</strong>.
            </p>

            <p className="mb-2">
              I build scalable, high-performance web applications with clean 
              architecture and modern UI design.
            </p>

            <p className="mb-0">
              Exploring AI-based solutions like my Plant Water Footprint Detection project.
            </p>

          </div>

          {/* EDUCATION */}
          <div className="card p-3 rounded-4 h-100 p-4">

            <h5 className="mb-3">Education</h5>

            <div className="mb-3">
              <h6 className="fw-bold mb-1">B.Tech Information Technology</h6>
              <p className="mb-0 text-muted">
                K.S.Rangasamy College of Technology, 2025
              </p>
              <p className="mb-0 text-muted"><strong>CGPA:</strong> 7.89</p>
            </div>

            <div className="mb-3">
              <h6 className="fw-bold mb-1">Higher Secondary (12th)</h6>
              <p className="mb-0 text-muted">Tamil Nadu State Board</p>
              <p className="mb-0 text-muted">T.M.H.N.U School, 2021</p>
              <p className="mb-0 text-muted"><strong>Per:</strong> 88.28%</p>
            </div>

            <div>
              <h6 className="fw-bold mb-1">SSLC (10th)</h6>
              <p className="mb-0 text-muted">Tamil Nadu State Board</p>
              <p className="mb-0 text-muted">T.M.H.N.U School, 2019</p>
              <p className="mb-0 text-muted"><strong>Per:</strong> 84.4%</p>
            </div>

          </div>

        </div>

        {/* MIDDLE - SKILLS + TOOLS + SOCIAL */}
        <div className="col-lg-4 d-flex flex-column gap-4">

          {/* CORE SKILLS */}
          <div className="card p-3 rounded-4 h-100 p-5">

            <h5>Core Skills</h5>

            <p className="mb-2">
              <strong>Backend:</strong><br />
              Core Java | JDBC | Hibernate | REST API
            </p>

            <p className="mb-2">
              <strong>Frontend:</strong><br />
              React.js | JavaScript | HTML | CSS | Bootstrap
            </p>

            <p className="mb-0">
              <strong>Database:</strong><br />
              MySQL | SQL | Database Design
            </p>

          </div>

          {/* TOOLS */}
          <div className="card p-3 rounded-4 h-50 p-5">

            <h5>Tools</h5>

            <p className="mb-0">
              Git | GitHub | Postman | VS Code | IntelliJ IDEA
            </p>

          </div>

          {/* SOCIAL */}
          <div className="card p-3">

            <div className="social-icons">

              <a href="https://github.com/Kabilan1719" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/kabilan-r-221ab624a" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>

              <a href="https://instagram.com/kabilan_1719" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="mailto:rkabilan1719@gmail.com">
                <MdEmail />
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT - IMAGE */}
        <div className="col-lg-4 d-flex flex-column">

          <div className="card p-3 rounded-4 text-center h-100">

            <div className="profile-img-box1 mt-5">
              <img src={profile} alt="profile" />
            </div>

            <h5 className="mt-3">Kabilan R</h5>
            <p className="text-muted">Full Stack Developer</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutPage;