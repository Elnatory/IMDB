// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-light text-center text-lg-start" style={{position: "fixed", bottom: "0", width: "100%"}}>
//       <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2023 Copyright:
//         <a className="text-dark" href="https://mdbootstrap.com/"> Muhammad Omar</a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { NavLink } from "react-router-dom"; // Assuming you are using React Router
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
  return (
    <>
    <footer className="footer">
  <div className="container">

   <div className="col" >
     <div className="footer-col">
       <h4>company</h4>
       <ul>
         <li><NavLink style={{color:"white"}}to="#" >about us</NavLink></li>
         <li><NavLink style={{color:"white"}}to="#" >our services</NavLink></li>
         <li><NavLink style={{color:"white"}}to="#" >privacy policy</NavLink></li>
         <li><NavLink style={{color:"white"}}to="#" >affiliate program</NavLink></li>
       </ul>
     </div>
     <div className="footer-col">
       <h4>get help</h4>
       <ul>
         <li><NavLink style={{color:"white"}} to="#" >FAQ</NavLink></li>
         <li><NavLink style={{color:"white"}}to="#" >shipping</NavLink></li>
         <li><NavLink style={{color:"white"}}to="#" >returns</NavLink></li>
         <li><NavLink style={{color:"white"}}to="#" >order status</NavLink></li>
         <li><NavLink style={{color:"white"}} to="#" >payment options</NavLink></li>
       </ul>
     </div>
     <div className="footer-col col-m-3" >
       <h4>online shop</h4>
       <ul  >
         <li><NavLink style={{color:"white"}} to="# ">watch</NavLink></li>
         <li><NavLink style={{color:"white"}} to="# ">bag</NavLink></li>
         <li><NavLink style={{color:"white"}} to="#">shoes</NavLink></li>
         <li><NavLink style={{color:"white"}}to="#">dress</NavLink></li>
       </ul>
     </div>
     <div className="footer-col col-m-3">
       <h4>follow us</h4>
       
             <NavLink className="m-3"style={{fontSize:"2rem",color:"white"}} to="#">
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
              <NavLink  className="m-3" style={{fontSize:"2rem",color:"white"}} to="#">
                <FontAwesomeIcon icon={faTwitter} />
              </NavLink>
              <NavLink className="m-3" style={{fontSize:"2rem",color:"white"}} to="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </NavLink>
     </div>
   </div>
  </div>
</footer>
    </>
  );
};

export default Footer;






