import profile from "../assets/Kabilan R Photo1.jpg"
import topcard from "../assets/Top Image.png";
function Hero() {
  return (
    <div>
      <div className="card rounded-4 overflow-hidden border v-100">

        {/* Top Image */}
        <img
          src={topcard}
          alt="hero"
          className="w-100"
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="p-4">

          {/* Profile Image */}
          <img
            src={profile}
            alt="profile"
            className="rounded-circle border"
            style={{
              width: "80px",
              height: "80px",
              marginTop: "-50px",
              objectFit: "cover"
            }}
          />

          {/* Heading */}
          <h1 className="mt-3 fw-normal hero-title">
            Building Scalable <br/>
            Full-Stack Applications <br/>
            With Java & React
          </h1>

        </div>
      </div>
    </div>
  );
}

export default Hero;