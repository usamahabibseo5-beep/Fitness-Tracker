// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-column">
//           <h4>About us</h4>
//           <ul>
//             <li>About us</li>
//             <li>Jobs</li>
//             <li>Press</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Success Stories</h4>
//           <ul>
//             <li>All Success Stories</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Foods</h4>
//           <ul>
//             <li>All Foods</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Help</h4>
//           <ul>
//             <li>Help Center</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Calculator</h4>
//           <ul>
//             <li>BMI Calculator</li>
//             <li>Ideal Body Weight Calculator</li>
//             <li>Daily Calorie Intake Calculator</li>
//             <li>Calories Burned Calculator</li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <div className="footer-bottom-left">
//           © 2026 Fitness Tracker. All rights reserved.
//         </div>
//         <div className="footer-bottom-right">
//           <span>Contact</span>
//           <span>Privacy Policy</span>
//           <span>Cookies</span>
//           <span>Cancel Subscription</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import "../../styles/global1.css"

// const Footer = () => {
//   return (
//     <footer className="simple-footer">
//       <div className="simple-footer-container">

//         <div className="footer-logo">
//           <h2>Fitness Tracker</h2>
//           <p>Track your health and stay fit every day.</p>
//         </div>

//         <div className="footer-links">
//           <a href="/">Home</a>
//           <a href="/bmi">BMI</a>
//           <a href="/activity">Activity</a>
//           <a href="/protein-counter">Protein Counter</a>
//         </div>

//       </div>

//       <div className="footer-bottom">
//         <p>© 2026 Fitness Tracker. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "../../styles/global1.css";

const Footer = () => {
  return (
    <footer className="modern-footer">

      <div className="footer-top">

        <div className="footer-section">
          <h2 className="footer-logo">
            Fitness Tracker
          </h2>

          <p className="footer-text">
            Improve your lifestyle, track calories, monitor protein,
            and achieve your daily fitness goals easily.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/bmi">BMI Calculator</a></li>
            <li><a href="/activity">Daily Activity</a></li>
            <li><a href="/protein-counter">Protein Counter</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <div className="footer-contact">
            <p>support@fitnesstracker.com</p>
            <p>+92134338644</p>
            <p>Lahore, Pakistan</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="footer-socials">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Fitness Tracker. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;