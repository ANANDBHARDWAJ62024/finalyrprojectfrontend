import React from 'react'
import {NavLink} from 'react-router-dom';

const Footer = (props) => {
  return(
          <div id="footer" className="footer">
                <div className="row" xs={12} md={8}>
               <div style={{padding:"50px",color:"whitesmoke", fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"lighter"}} className="col" >
                   <h2 style={{padding:"15px"}}>About us</h2>
                     <ul style={{fontFamily:"Proxima Nova",fontSize:"15px",fontWeight:"lighter"}}>
                         <li>Startup</li>
                         <li>Fastest Growth</li>
                         <li>Quick Delivery</li>
                         <li>Transport</li>
                     </ul>
               </div>
               <div style={{padding:"50px",color:"whitesmoke", fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"bold"}} className="col" >
               <h2 style={{padding:"15px"}}>Branches</h2>
                     <ul  style={{fontFamily:"Proxima Nova",fontSize:"15px",fontWeight:"lighter"}} > 
                    
                         <li>kolkata</li>
                         <li>banglore</li>
                         <li>Pune</li>
                         <li>Hyderabad</li>
                     </ul>
               
               </div>

               <div style={{padding:"50px",color:"whitesmoke",fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"lighter"}} className="col" >
               <h2 style={{padding:"15px"}}>Find us</h2>
                     <ul style={{fontFamily:"Proxima Nova",fontSize:"15px",fontWeight:"lighter"}}>
                         <li>Facebook</li>
                         <li>Twitter</li>
                         <li>Instagram</li>
                         <li>linkdin</li>
                         <li>Email:anandbhardwaj987@gmail.com</li>
                     </ul>
               
               </div>
                </div>
               <div className ='logofit' style={{display:'flex'}}>
                 <img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" alt ="logo-insta" className="logofooter"/>
               
                <a href='https://www.facebook.com/anand.bhardwaj.75839923'>
                 <img src="data:image/png;base64,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" alt ="logo-fb" className="logofooter"/>
                 </a>
                <a href='https://www.linkedin.com/in/fullmern/'>
                 <img src="data:image/jpeg;base64,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" alt ="logo-linkdin" className="logofooter"/>
                 </a>

                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHIZuDb--IJ-q5d97gWm1W2eyLj7BePcWnQ&usqp=CAU" alt ="logo-twitter" className="logofooter"/>
               </div>
              <h4 id="footu" style={{color:"whitesmoke",fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"medium"}}>Expand Business is quick trustable and registered  with All India Manufacturer and Transport Limited </h4>
              <p id="footl" style={{color:"whitesmoke",fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"normal"}}>Good to Go Good !!to invest</p>
              <NavLink to="signupadmin" id="disabled-link" className="nav-link">Register As Admin</NavLink>
              {/* <NavLink to="signupadmin" id="disabled-link" className="nav-link">Register As Admin</NavLink> to disabled admin registering */}
          </div>
   )

 }

export default Footer;