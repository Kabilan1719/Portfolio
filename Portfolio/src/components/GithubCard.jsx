import github from "../assets/github.png";

function GithubCard() {
  return (
    <div>
      <div className="card rounded-4 overflow-hidden border h-80">

        {/* Purple Section */}
        <div
          className="text-white text-center p-4"
          style={{ background: "#7b2cbf" }}
        >
          <img
            src={github}
            alt="github"
            style={{ width: "70px" }}
          />

          <h4 className="mt-3">GitHub</h4>

          <p className="mb-0">Explore My Projects</p>
        </div>

        {/* Button Section */}
        <div className="p-4">
          <a
            href="https://github.com/Kabilan1719"
            target="_blank"
            className="btn btn-dark w-100"
          >
            View Repository →
          </a>
        </div>

      </div>
    </div>
  );
}

export default GithubCard;