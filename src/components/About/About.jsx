import React from 'react'
import { FaMedal ,FaPenSquare,FaCheckDouble,FaGithubSquare,FaLinkedin,FaEnvelope} from "react-icons/fa";
import './About.css'
const About = () => {
  return (
      <div className="container" id="About">
          <h2 className="abouttitle">About Me</h2>
          <div className="row rows">
            <div className="col-lg-6 col-md-6 col-12 leftcol ">
              <p>A highly skilled and experienced professional  with expertise in Mern Stack Developer possesses a strong educational background in B.Tech that supports Professional knowledge and skills.</p>
              <h4 className="leftheading1 pb-2">< FaCheckDouble/> Personal Details</h4>
              <p className="linepara">Birthday : 19 Aug 2001</p>
              <p className="linepara">Phone : 7876030787</p>
              <p className="linepara">City : Chandigrah, India</p>
              <p className="linepara">Degree : Bachalor</p>
              <h4 className="leftheading1 pb-1 pt-2">< FaCheckDouble/> Web's links</h4>
                <a href="" className="iconaboutright"><FaGithubSquare/></a>
                <a href="https://www.linkedin.com/in/anjali-attal-98498937" className="iconaboutright"><FaLinkedin/></a>
                <a href="mailto:attalanjali2001@gmail.com" className="iconaboutright"><FaEnvelope/></a>
               </div>
            <div className="col-lg-6 col-md-6 col-12 indentcol">
              <h4 className="rightheading"><FaMedal className="iconabout"/> Achievements & Awards</h4>
              <p>Got scholarship by "National Means-Cum-Merit scholarship(NMMS) EXAM".</p>
              <p>Got 100% tution fee scholarship on merit basis.</p>
              <p>Represented my school in science technology & environment held in mandi(H.P)</p><br />
              <h4 className="rightheading"><FaPenSquare className="iconabout"/> Hobbies</h4>
              <p>Banner Making using Photoshop,Coreldraw</p>
              <p>Drawing</p>
            </div>
          </div>
      </div>
  )
}

export default About


