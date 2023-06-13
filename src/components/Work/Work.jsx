import React from 'react'
import './Work.css'
const Work = () => { 
  return ( 

    <div className="workborder" id="Work">
    <div className="container Worksection">
      <h2 className="Worktitle">My Work</h2>
      <div className="row pt-5  Rows">
        <div className="col-lg-5 col-sm-12 col-md-12 Overlay">
        <img src="girl03.png" alt="" id="firstcol" className="images"/>
        <div class="Colinside">
        <div class="text"> 
        Visit Himachal Website
      </div>
         </div>

        </div>
        <div className="col-lg-5 col-sm-12 col-md-12 Overlay">
        <img src="girl04.png" alt="" className="images" id="Image4" />
        <div class="Colinside">
        <div class="text"> Visit Netflix Landing Page</div>
         </div>
        </div>
      </div>
        <div className="row pt-2 Rows">
        <div className="col-lg-5 col-sm-12 col-md-12 Overlay">
         <img src="01.png" alt="" className="images"/>
         <div class="Colinside">
        <div class="text"> Visit Portfolio</div>
         </div>
        </div>
        <div className="col-lg-5 pt-2 col-sm-12 col-md-12 Overlay">
        <img src="02.png" alt="" className="images" />
        <div class="Colinside">
        <div class="text"> Visit DropGalaxy</div>
         </div>
        </div>
       
       
      </div> 

    </div>
    </div>
  )
}
export default Work 
