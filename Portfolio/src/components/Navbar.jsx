import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar bg-light py-3 px-4 d-flex justify-content-between">

      {/* Left Side */}
      <div className="fw-bold border rounded px-3 py-2">
        Kabilan R | Full Stack Developer
      </div>

      {/* Right Side */}
      <div className="d-flex gap-3">

        {/* Portfolio */}
        <button
          onClick={() => navigate("/")}
          className={`btn rounded-pill px-4 ${
            location.pathname === "/" || location.pathname.includes("Portfolio/")
              ? "btn-dark disabled"
              : "btn-outline-dark"
          }`}
        >
          Portfolio
        </button>

        {/* Projects */}
        <button
          onClick={() => navigate("/Projects")}
          className={`btn rounded-pill px-4 ${
            location.pathname.includes("/Projects")
              ? "btn-dark disabled"
              : "btn-outline-dark"
          }`}
        >
          Projects
        </button>

        {/* About */}
        <button
          onClick={() => navigate("/AboutPage")}
          className={`btn rounded-pill px-4 ${
            location.pathname.includes("/AboutPage")
              ? "btn-dark disabled"
              : "btn-outline-dark"
          }`}
        >
          About
        </button>

        {/* Contact */}
        <button
          onClick={() => navigate("/Contact")}
          className={`btn rounded-pill px-4 ${
            location.pathname.includes("/Contact")
              ? "btn-dark disabled"
              : "btn-outline-dark"
          }`}
        >
          Contact
        </button>

      </div>

    </nav>
  );
}

export default Navbar;