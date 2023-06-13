import React from 'react'
import './Contact.css'
// import TextField from '@mui/material/Button';

import { FaHouseUser, FaTabletAlt, FaRegEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bgcontact" id="Contact">
      
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col-lg-8">
              <label className="contactlabel">Get in Touch</label><br /><br />
              <textarea name="" id="" cols="100" rows="7" placeholder="Enter Message" className='form-control'>
              </textarea><br />
              <div className="row">
                <div className="col-lg-6">
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                {/* <TextField  label="Enter your name" variant="outlined" className='form-control' placeholder="Enter your name" required /> */}
                  <input type="text" placeholder='Enter your name' className='form-control' required />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder='Enter email address' className='form-control' required />
                </div>
              </div>
              <button className=" Submitbtn">Submit</button>
            </div>
            <div className="col-lg-4 rightcolform">
              <div className="rightcolindent" ><FaHouseUser className="contacticon" /><span className="iconaddress">
                <a href="https://www.bing.com/maps/embed-a-map?src=SHELL&cp=31.708328902310328~76.93229414223765&lvl=11.07&form=LMLTEW" className="iconaddress">HP Distt. Mandi</a>
              </span></div><br />
              <div className="rightcolindent"><FaTabletAlt className="contacticon" /><span className="iconaddress"> +91 7876030787</span></div><br />
              <div className="rightcolindent"><FaRegEnvelope className="contacticon" /><a href="mailto:attalanjali2001@gmail.com" className="iconaddress"> attalanjali2001@gmail.com</a></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact