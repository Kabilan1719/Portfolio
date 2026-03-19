import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function SocialLinks(){

  return(

    <div className="card p-3">

      <div className="social-icons">

        <a href="https://github.com/Kabilan1719" target="_blank">
          <FaGithub/>
        </a>

        <a href="https://www.linkedin.com/in/kabilan-r-221ab624a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
          <FaLinkedin/>
        </a>

        <a href="https://instagram.com/kabilan_1719" target="_blank">
          <FaInstagram/>
        </a>

        <a href="mailto:rkabilan1719@gmail.com">
          <MdEmail/>
        </a>

      </div>

    </div>

  )
}

export default SocialLinks