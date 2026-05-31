// import React from "react";
// import "../styles/globals.css";
// import doctorImg from "../images-logo/dr-img.png";

// const DoctorSection = () => {
//   return (
//     <section className="doctor-section">

//       {/* BACKGROUND GLOW */}
//       <div className="doctor-glow glow-1"></div>
//       <div className="doctor-glow glow-2"></div>

//       {/* LEFT CONTENT */}
//       <div className="doctor-left">

//         <span className="doctor-tag">
//           YOUR DIET & HEALTH GUIDE
//         </span>

//         <h2 className="doctor-title">
//           Meet Your Expert <br />
//           <span>Diet Planner & Food Scientist</span>
//         </h2>

//         <p className="doctor-desc">
//           Get professional nutrition guidance, personalized diet planning,
//           and scientific food insights to improve your health, energy,
//           and lifestyle in a smart way.
//         </p>

//         {/* DOCTOR CARD */}
//         <div className="doctor-card">

//           <h3 className="doctor-name">
//             Dr. Fareed Afzal
//           </h3>

//           <p className="doctor-qualification">
//             PhD in Food Science • Clinical Nutrition Specialist
//           </p>

//           <ul className="doctor-list">
//             <li>✔ Personalized Diet Planning</li>
//             <li>✔ Weight Loss & Weight Gain Programs</li>
//             <li>✔ Scientific Nutrition Analysis</li>
//             <li>✔ Healthy Lifestyle Coaching</li>
//           </ul>

//         </div>

//       </div>

//       {/* RIGHT SIDE IMAGE */}
//       <div className="doctor-right">

//         <div className="doctor-image-card">

//           <img
//             src={doctorImg }
//             alt="Dr. Fareed Afzal"
//             className="doctor-img"
//           />

//           <div className="doctor-badge">
//             Verified Expert
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default DoctorSection;


import React from "react";
import "../styles/globals.css";
import doctorImg from "../images-logo/dr-img.png";

const DoctorSection = () => {
  return (
    <section className="doctor-section">

      {/* LEFT CONTENT */}
      <div className="doctor-left">

        <div className="doctor-badge-top">
          Expert Nutrition Consultant
        </div>

        <h1 className="doctor-title">
          Your Personal <span>Diet & Health Guide</span>
        </h1>

        <p className="doctor-subtext">
          Science-based nutrition planning, personalized diet strategies,
          and professional guidance to improve your health and lifestyle.
        </p>

        {/* DOCTOR NAME CARD */}
        <div className="doctor-profile-box">

          <p className="doctor-role">Lead Consultant</p>

          <h2 className="doctor-name">
            Dr. Fareed Afzal
          </h2>

          <p className="doctor-edu">
            PhD Food Science • Clinical Nutrition Specialist
          </p>

        </div>

        {/* FEATURES */}
        <div className="doctor-features">
          <div>✔ Personalized Diet Planning</div>
          <div>✔ Weight Loss & Gain Programs</div>
          <div>✔ Scientific Food Analysis</div>
          <div>✔ Lifestyle Optimization</div>
        </div>

        {/* CTA */}
        <button className="doctor-btn">
          Book Consultation
        </button>

      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="doctor-right">

        <div className="doctor-image-frame">

          <img src={doctorImg} alt="Doctor" />

          {/* <div className="doctor-floating-card">
            Available Today
          </div> */}

        </div>

      </div>

    </section>
  );
};

export default DoctorSection;