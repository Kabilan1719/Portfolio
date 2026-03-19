import profile from "../assets/Kabilan R Photo1.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactPage() {
  return (
    <div className="container-fluid mt-4">

      {/* HEADER */}
      <div className="p-3 mb-4 rounded-4 border" style={{ background: "#F4F4F4" }}>
        <h1 className="m-0">Let's Connect</h1>
      </div>

      <div className="row g-4 align-items-start">

        {/* LEFT - GET IN TOUCH + SOCIAL */}
        <div className="col-lg-4">

          {/* GET IN TOUCH */}
          <div className="card p-4 rounded-4 mb-3">

            <h4 className="mb-3">Get in Touch</h4>

            <p>
              I'm open to opportunities, collaborations, and interesting projects.
              Feel free to reach out!
            </p>

            <p><strong>Email:</strong> rkabilan1719@gmail.com</p>
            <p><strong>Phone:</strong> +91 8056587637</p>
            <p><strong>Location:</strong> Bangalore, Karnataka, India</p>

          </div>

          {/* SOCIAL CARD */}
          <div className="card p-3 mt-4">
          
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

        {/* MIDDLE - FORM */}
        <div className="col-lg-4">

          <div className="card p-4 rounded-4">

            <h4 className="mb-3">Send Message</h4>

            <form>

              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-3"
              />

              <textarea
                placeholder="Your Message"
                className="form-control mb-3"
                rows="5"
              ></textarea>

              <button className="btn btn-dark w-100">
                Send Message →
              </button>

            </form>

          </div>

        </div>

        {/* RIGHT - PROFILE */}
        <div className="col-lg-4">

          <div className="card p-3 rounded-4 text-center">

            <div className="profile-img-box">
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

export default ContactPage;