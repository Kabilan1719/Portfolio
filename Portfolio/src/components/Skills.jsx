function Skills() {

  const skills = [
  "Java",
  "Spring Boot",
  "JDBC",
  "Hibernate",
  "REST API",
  "Microservices",

  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Responsive Design",

  "SQL",
  "MySQL",
  "Database Design",

  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "IntelliJ IDEA",

  "Data Structures",
  "OOP",
  "Problem Solving"
];

  return (
    <div>
      <div className="card rounded-4 border h-100">

        <div className="card-header bg-transparent">
          Skills
        </div>

        <div className="card-body d-flex flex-wrap gap-2">

          {skills.map((skill, index) => (
            <span
              key={index}
              className="badge skill-badge rounded-pill border text-dark px-3 py-2"
              style={{fontSize:"14px"}}
            >
              {skill}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Skills;