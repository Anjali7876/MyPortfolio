import React from 'react'
import './Skill.css'
import { FaLaptop,FaRss,FaShareAlt} from "react-icons/fa";
const Skill = () => {
  return (
    <div id="Skill">
    <div className="container">
     <h2 className="abouttitle">Skills</h2>
       <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 py-5  skillleftcol">
         <FaLaptop className='iconskill' style={{justifyContent:"center",marginLeft:"200px",fontSize:"30px"}}/>
         <p style={{paddingTop:"12px",fontWeight:"bold",fontSize:"18px",textAlign:"center"}}>JS</p>
         <p style={{textAlign:"center"}}>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12  py-5  skillleftcol">
          <FaRss className='iconskill' style={{textAlign:"center",marginLeft:"200px",fontSize:"30px"}}/>
          <p style={{paddingTop:"12px",fontWeight:"bold",fontSize:"18px",textAlign:"center"}}>React Js</p>
         <p style={{textAlign:"center"}}>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12  py-5  skillleftcol">
        <FaShareAlt  className='iconskill' style={{textAlign:"center",marginLeft:"200px",fontSize:"30px"}}/>
         <p style={{paddingTop:"12px",fontWeight:"bold",fontSize:"18px",textAlign:"center"}}>Node Js</p>
         <p style={{textAlign:"center"}}>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</p>
        </div>
       </div>
       <marquee>
      <div className="row rowskill">
        <div className="col mt-2">
          <img src="logo-html.png" alt="" className="logos1" style={{width:"100px",}}/>
        </div>
        <div className="col">
          <img src="css.png" alt=""style={{width:"250px"}} />
        </div>
        <div className="col mt-2">
          <img src="jslogo.png" alt="" className="logos2" style={{width:"100px"}} />
        </div>
        <div className="col">
          <img src="wordpresslogo.png" className="logos3" alt="" style={{width:"100px"}}/>
        </div>
        <div className="col">
          <img src="reactlogo.png" alt="" className="logos4" style={{width:"100px"}}/>
        </div>
        <div className="col">
          <img src="nodejs.png" alt="" style={{width:"100px"}}/>
        </div>
      </div>
      </marquee>
    </div>
    </div>
  )
}

export default Skill