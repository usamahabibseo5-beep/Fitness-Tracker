

// import React, { useEffect } from "react";
// import "../styles/globals.css";
// import { Link } from "react-router-dom";

// import {
//   FaFireAlt,
//   FaDumbbell,
//   FaHeartbeat,
// } from "react-icons/fa";

// const WeightGoals = () => {

//   useEffect(() => {

//     const cards =
//       document.querySelectorAll(".goal-card");

//     const observer =
//       new IntersectionObserver(

//         (entries) => {

//           entries.forEach((entry) => {

//             if (entry.isIntersecting) {

//               entry.target.classList.add(
//                 "show-card"
//               );

//             }

//           });

//         },

//         {
//           threshold: 0.2,
//         }

//       );

//     cards.forEach((card) =>
//       observer.observe(card)
//     );

//   }, []);

//   const goals = [

//     {
//       title: "Weight Loss",

//       desc:
//         "Burn calories and achieve a lean healthy body with smart fitness tracking.",

//       icon: <FaFireAlt />,

//       className: "loss",

//       path: "/weight-loss",
//     },

//     {
//       title: "Weight Gain",

//       desc:
//         "Build muscle naturally and gain healthy body weight with proper nutrition.",

//       icon: <FaDumbbell />,

//       className: "gain",

//       path: "/weightGain",
//     },

//     {
//       title: "Maintain Weight",

//       desc:
//         "Stay balanced, healthy and maintain your perfect body lifestyle.",

//       icon: <FaHeartbeat />,

//       className: "maintain",

//       path: "/maintainWeight",
//     },

//   ];

//   return (

//     <section className="goal-section">

//       <div className="goal-header">

//         <p className="goal-subtitle">
//           FITNESS TRACKER
//         </p>

//         <h2 className="goal-title">

//           Achieve Your
//           <span> Dream Body</span>

//         </h2>

//         <p className="goal-text">

//           Start your transformation journey
//           with smart fitness solutions.

//         </p>

//       </div>

//       <div className="goal-grid">

//         {goals.map((goal, index) => (

//           <div
//             key={index}
//             className={`goal-card ${goal.className}`}
//           >

//             <div className="card-blur"></div>

//             <div className="goal-content">

//               <div className={`goal-icon ${goal.className}`}>
//                 {goal.icon}
//               </div>

//               <h3>
//                 {goal.title}
//               </h3>

//               <p>
//                 {goal.desc}
//               </p>

//               <Link to={goal.path}>

//                 <button className="goal-btn">

//                   Start Journey

//                 </button>

//               </Link>

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>

//   );

// };

// export default WeightGoals;



import React, { useEffect } from "react";
import "../styles/globals.css";
import { Link } from "react-router-dom";

import {
  FaFireAlt,
  FaDumbbell,
  FaHeartbeat,
} from "react-icons/fa";

const WeightGoals = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".goal-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  const goals = [
    {
      title: "Weight Loss",
      desc: "Burn calories and achieve a lean healthy body with smart fitness tracking.",
      icon: <FaFireAlt />,
      className: "loss",
      path: "/weight-loss",
    },
    {
      title: "Weight Gain",
      desc: "Build muscle naturally and gain healthy body weight with proper nutrition.",
      icon: <FaDumbbell />,
      className: "gain",
      path: "/weightGain",
    },
    {
      title: "Maintain Weight",
      desc: "Stay balanced, healthy and maintain your perfect body lifestyle.",
      icon: <FaHeartbeat />,
      className: "maintain",
      path: "/maintainWeight",
    },
  ];

  return (

  
    <section className="goal-section" id="goal-section">

      <div className="goal-header">
        <p className="goal-subtitle">FITNESS TRACKER</p>
        <h2 className="goal-title">
          Achieve Your<span> Dream Body</span>
        </h2>
        <p className="goal-text">
          Start your transformation journey with smart fitness solutions.
        </p>
      </div>

      <div className="goal-grid">
        {goals.map((goal, index) => (
          <div key={index} className={`goal-card ${goal.className}`}>
            <div className="card-blur"></div>
            <div className="goal-content">
              <div className={`goal-icon ${goal.className}`}>
                {goal.icon}
              </div>
              <h3>{goal.title}</h3>
              <p>{goal.desc}</p>
              <Link to={goal.path}>
                <button className="goal-btn">Start Journey</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WeightGoals;