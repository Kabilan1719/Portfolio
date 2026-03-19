import { useNavigate } from "react-router-dom";
function AboutCard() {
  const navigate = useNavigate();
  return (
    <div className="about-card-wrapper">

      <div className="card about-card rounded-4 h-100">

        <div className="card-header fw-semibold">
          About
        </div>

        <div className="card-body">

          <p>
            Hi, I'm <strong>Kabilan</strong>, a passionate Full-Stack Developer
            specializing in <strong>Core Java</strong> and <strong>React.js</strong>.
            I build scalable, responsive, and user-friendly web applications with
            a strong focus on clean architecture and performance.
          </p>

          <button onClick={() => navigate("/Projects")} className="btn btn-dark w-100 mt-3">
            View My Projects →
          </button>

        </div>

      </div>

    </div>
  )
}

export default AboutCard