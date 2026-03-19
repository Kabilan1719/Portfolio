import Hero from "../components/Hero";
import AboutCard from "../components/AboutCard";
import ResumeCard from "../components/ResumeCard";
import GithubCard from "../components/GithubCard";
import Skills from "../components/Skills";
import SkillsScore from "../components/SkillsScore";
import LinkedInCard from "../components/LinkedInCard";
import SocialLinks from "../components/SocialLinks";

function Home(){
  return (
    <div style={{padding:"20px"}}>

      <div className="portfolio-grid">

        <Hero/>
        <AboutCard/>

        <div className="small-grid">
          <ResumeCard/>
          <GithubCard/>
        </div>

        <SkillsScore/>
        <Skills/>
        <LinkedInCard/>
        <SocialLinks/>

      </div>

    </div>
  )
}

export default Home;