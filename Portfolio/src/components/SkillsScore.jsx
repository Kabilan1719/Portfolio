import './SkillsScore.css'

function SkillsScore() {

  const skills = [
    {name:"Core Java", score:90},
    {name:"React JS", score:80},
    {name:"JavaScript", score:80},
    {name:"SQL", score:90},
    {name:"JDBC", score:75}
  ]

  return (

    <div className="card p-3">

      <h6 className="mb-3">Skill Scores</h6>

      <div className="skills-grid">

        {skills.map((skill,index)=>(
          <div className="skill-item" key={index}>

            <div
              className="circle"
              style={{
                background:`conic-gradient(#ff8c00 ${skill.score*3.6}deg,#e6e6e6 0deg)`
              }}
            >
              <div className="inner-circle">
                {skill.score}%
              </div>
            </div>

            <small>{skill.name}</small>

          </div>
        ))}

      </div>

    </div>
  )
}

export default SkillsScore