import profile from "../assets/Kabilan R Photo1.jpg"
import linkedin from "../assets/linkedin.png"

function LinkedInCard() {
  return (
    <div>
      <div className="card rounded-4 border p-4 text-center">

        {/* Heading */}
        <p className="text-muted mb-4">
          Connect with me on LinkedIn
        </p>

        {/* Images */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-3">

          <img
            src={profile}
            alt="profile"
            className="rounded-circle"
            style={{ width: "65px", height: "65px", objectFit: "cover" }}
          />

          <img
            src={linkedin}
            alt="linkedin"
            style={{ width: "60px" }}
          />

        </div>

        {/* Text */}
        <h6 className="fw-semibold">
          Kabilan R
        </h6>

        <p className="text-muted">
          Let's connect and grow together
        </p>

        {/* Button */}
        <a
          href="https://www.linkedin.com/in/kabilan-r-221ab624a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          className="btn btn-outline-primary rounded-pill px-4"
        >
          Follow
        </a>

      </div>
    </div>
  )
}

export default LinkedInCard