import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import exp1 from "../assets/Expense Tracker/exp1.png"
import exp2 from "../assets/Expense Tracker/exp2.png"
import exp3 from "../assets/Expense Tracker/exp3.png"
import exp4 from "../assets/Expense Tracker/exp4.png"
import ecom1 from "../assets/E-Commerce/ecom1.png"
import ecom2 from "../assets/E-Commerce/ecom2.png"
import ecom3 from "../assets/E-Commerce/ecom3.png"
import ecom4 from "../assets/E-Commerce/ecom4.png"
import pwf1 from "../assets/Plant Water Footprint/pwf1.png"
import pwf2 from "../assets/Plant Water Footprint/pwf2.png"
import pwf3 from "../assets/Plant Water Footprint/pwf3.png"
import pwf4 from "../assets/Plant Water Footprint/pwf4.png"
import pwf5 from "../assets/Plant Water Footprint/pwf5.png"
function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
    title: "E-Commerce Web App",
    desc: "React-based shopping app with cart & dynamic products.",
    details: [
      {
        img: ecom1,
        text: "Modern homepage showcasing offers and categories with clean UI.\nResponsive layout ensures smooth experience across all devices."
      },
      {
        img: ecom2,
        text: "Product listing page with filters, categories, and sorting options.\nHelps users quickly find products with better navigation."
      },
      {
        img: ecom3,
        text: "Detailed product page with pricing, quantity control, and add-to-cart.\nImproves user experience with clear product information."
      },
      {
        img: ecom4,
        text: "Cart page showing selected items and total summary.\nAllows users to manage items before proceeding to checkout."
      }
    ],
    github: "https://github.com/Kabilan1719/React-shopping-website",
    website:"https://kabilan1719.github.io/React-shopping-website/",
    img: project1,
    color: "#DFE0FF"
  },
    {
      title: "Expense Tracker Website",
      desc: "Track daily expenses and manage budgets with an easy-to-use interface.",
      details: [
        {
          img: exp1,
          text: "Shows total spending and transaction list in a structured dashboard."
        },
        {
          img: exp2,
          text: "Allows adding, editing, and deleting expenses with category tracking."
        },
        {
          img: exp3,
          text: "Filter and search expenses based on category and time period."
        },
        {
          img: exp4,
          text: "Visualize data using charts to understand spending patterns."
        }
      ],
      github: "https://github.com/Kabilan1719/Front-end-Development/tree/main/Javascript/Expense%20Tracker",
      website:"https://kabilan1719.github.io/Expense_Tracker_Website/",
      img: project2,
      color: "#F34822"
    },
    {
  title: "Plant Water Footprint Detection",
  desc: "AI-based system to analyze plant water usage using YOLO model.",
  details: [
    {
      img: pwf1,
      text: "Upload plant image or use drag-and-drop to detect plant type.\nProvides quick and easy plant recognition using AI."
    },
    {
      img: pwf2,
      text: "Displays uploaded plant preview with smooth loading animation.\nEnsures user-friendly interaction before processing."
    },
    {
      img: pwf3,
      text: "YOLO model detects plant with bounding box visualization.\nShows accurate real-time plant identification results."
    },
    {
      img: pwf4,
      text: "Detailed analysis including plant name and medicinal properties.\nHelps users understand plant benefits and usage."
    },
    {
      img: pwf5,
      text: "Live camera detection for real-time plant recognition.\nUses webcam to identify plants instantly with AI model."
    }
  ],
  github: "https://github.com/yourrepo3",
  img: project3,
  color: "#EFAE44"
}
  ];

  return (
    <div className="p-3 rounded-4">

      {/* Header */}
      <div className="p-3 mb-4 rounded-4 border">
        <h1 className="m-0">Projects</h1>
      </div>

      {/* Grid */}
      <div className="row g-4">

        {projects.map((p, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12">

            <div
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedProject(p)}
              data-bs-toggle="modal"
              data-bs-target="#projectModal"
            >

              {/* IMAGE CARD */}
              <div
                className="project-image-box d-flex justify-content-center align-items-center rounded-4"
                style={{
                  backgroundColor: p.color,
                }}
              >
                <img src={p.img} alt={p.title} className="img-fluid" />
              </div>

              {/* TEXT CARD */}
              <div
                className="p-3 rounded-4 border mt-3"
                style={{ background: "#F4F4F4" }}
              >
                <h5 className="mb-1 fw-semibold">{p.title}</h5>
                <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                  {p.desc}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      <div className="modal fade" id="projectModal" tabIndex="-1">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content rounded-4">

            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title">
                {selectedProject?.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* BODY */}
            <div className="modal-body text-center">

              {selectedProject?.details?.map((item, i) => (
                <div key={i} className="mb-4">

                  <img
                  style={{marginTop:"30px",
                    width:"750px"
                  }}
                    src={item.img}
                    alt="project"
                    className="img-fluid rounded mb-2"
                  />

                  <p
                    style={{
                    fontSize: "14px",
                    textAlign: "center",
                    fontWeight: "600",
                    marginTop:"40px"
                    }}
                  >
                    "{item.text}"
                  </p>

                </div>
              ))}

            </div>

            {/* FOOTER */}
            <div className="modal-footer">

              <a
                href={selectedProject?.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                View GitHub →
              </a>
              
              <a className="btn btn-primary" href={selectedProject?.website}>Live Demo</a>

              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;