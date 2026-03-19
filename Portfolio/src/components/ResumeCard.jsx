import resume from "../assets/resume.pdf"

function ResumeCard() {
  return (
    <div>
      <div
        className="card rounded-4 border p-4 h-100"
        style={{ backgroundColor: "#f5f5f7" }}
      >

        {/* CV Title */}
        <h1
          style={{
            fontSize: "90px",
            fontWeight: "400",
            marginBottom: "40px"
          }}
        >
          CV
        </h1>

        {/* Download Button */}
        <a
          href={resume}
          download
          className="btn border rounded-pill d-flex justify-content-between align-items-center px-4 py-3" style={{backgroundColor:"#FFFFFF"}}
        >
          Download
          <span style={{ fontSize: "20px" }}>↓</span>
        </a>

      </div>
    </div>
  )
}

export default ResumeCard