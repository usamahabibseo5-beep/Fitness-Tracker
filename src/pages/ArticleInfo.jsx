
// import React from "react";
// import "../styles/globals.css";

// const HealthArticle = () => {
//   return (
//     <div className="article-container">
//       <div className="hero-section">
//         <div className="overlay">
//           <h1>Healthy Life Guide</h1>
//           <p>Weight Loss, Weight Gain & Healthy Lifestyle</p>
//         </div>
//       </div>

//       <div className="content-section">
//         <div className="card">
//           <img
//             src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
//             alt="Healthy Food"
//           />
//           <div>
//             <h2>Weight Loss</h2>
//             <p>
//               Weight loss is important for people who want to improve their
//               fitness and health. A healthy diet with fruits, vegetables,
//               proteins, and regular exercise can help reduce extra body fat.
//               Drinking enough water and avoiding junk food also supports weight
//               loss. People should focus on balanced meals instead of skipping
//               food because proper nutrition keeps the body active and healthy.
//             </p>
//           </div>
//         </div>

//         <div className="card reverse">
//           <img
//             src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
//             alt="Workout"
//           />
//           <div>
//             <h2>Weight Gain</h2>
//             <p>
//               Healthy weight gain is necessary for underweight people who need
//               more energy and strength. Eating protein-rich foods, milk, eggs,
//               nuts, rice, and healthy snacks can help increase body weight.
//               Regular exercise and strength training also help build muscles.
//               Unhealthy fast food should be avoided because it can harm the
//               body even if it increases weight quickly.
//             </p>
//           </div>
//         </div>

//         <div className="card">
//           <img
//             src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
//             alt="Healthy Lifestyle"
//           />
//           <div>
//             <h2>Weight Maintenance</h2>
//             <p>
//               Maintaining body weight is important for long-term health. People
//               should eat balanced meals, exercise daily, and avoid overeating.
//               Sleeping on time and reducing stress also help maintain a healthy
//               body. A healthy lifestyle improves energy levels and keeps the
//               mind fresh and active.
//             </p>
//           </div>
//         </div>

//         <div className="tips-section">
//           <h2>How to Avoid Bad Foods</h2>
//           <p>
//             Fast foods, soft drinks, chips, and sugary snacks can damage health
//             if eaten regularly. People should replace unhealthy foods with fresh
//             fruits, vegetables, homemade meals, and natural juices. Reading food
//             labels and avoiding extra sugar and oil are also good habits for a
//             healthy life.
//           </p>

//           <h2>How to Stay Safe from Diseases</h2>
//           <p>
//             To stay safe from diseases, people should keep good hygiene, wash
//             their hands regularly, drink clean water, and eat healthy food.
//             Daily exercise and proper sleep strengthen the immune system.
//             Regular medical checkups and vaccinations also help protect the
//             body from serious illnesses.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthArticle;


// HealthArticle.jsx

import React from "react";
import "../styles/globals.css";

const HealthArticle = () => {
  return (

    <div className="healthy-main-wrapper">

      {/* HERO SECTION */}

      <div className="healthy-hero-banner">

        <div className="healthy-dark-layer">

          <h1 className="healthy-main-heading">
            Healthy Life Guide
          </h1>

          <p className="healthy-sub-heading">
            Weight Loss, Weight Gain & Healthy Lifestyle
          </p>

        </div>

      </div>

      {/* ARTICLE CONTENT */}

      <div className="healthy-content-area">

        {/* CARD 1 */}

        <div className="healthy-info-box">

          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt="Healthy Food"
            className="healthy-image-style"
          />

          <div>

            <h2 className="healthy-title-text">
              Weight Loss
            </h2>

            <p className="healthy-para-text">

              Weight loss is important for people who want to improve
              their fitness and health. A healthy diet with fruits,
              vegetables, proteins, and regular exercise can help
              reduce extra body fat. Drinking enough water and avoiding
              junk food also supports weight loss. Balanced meals and
              active routines keep the body energetic and healthy.

            </p>

          </div>

        </div>

        {/* CARD 2 */}

        <div className="healthy-info-box healthy-reverse-layout">

          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            alt="Workout"
            className="healthy-image-style"
          />

          <div>

            <h2 className="healthy-title-text">
              Weight Gain
            </h2>

            <p className="healthy-para-text">

              Healthy weight gain is necessary for underweight people.
              Eating foods rich in protein such as eggs, milk, nuts,
              rice, and healthy snacks can help increase body strength
              and weight. Regular exercise and gym workouts also help
              build muscles and improve body fitness naturally.

            </p>

          </div>

        </div>

        {/* CARD 3 */}

        <div className="healthy-info-box">

          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
            alt="Healthy Lifestyle"
            className="healthy-image-style"
          />

          <div>

            <h2 className="healthy-title-text">
              Weight Maintenance
            </h2>

            <p className="healthy-para-text">

              Maintaining body weight is important for long-term health.
              People should eat balanced meals, exercise daily, avoid
              overeating, and sleep properly. A healthy routine improves
              energy levels and keeps both the mind and body active.

            </p>

          </div>

        </div>

        {/* TIPS SECTION */}

        <div className="healthy-tips-wrapper">

          <h2 className="healthy-orange-heading">
            How to Avoid Bad Foods
          </h2>

          <p className="healthy-para-text">

            Fast foods, sugary drinks, chips, and oily snacks can harm
            the body if eaten regularly. People should replace unhealthy
            foods with fruits, vegetables, homemade meals, and fresh
            juices. Reading food labels and avoiding extra sugar and oil
            are good habits for a healthy lifestyle.

          </p>

          <h2 className="healthy-orange-heading">
            How to Stay Safe from Diseases
          </h2>

          <p className="healthy-para-text">

            To stay safe from diseases, people should maintain hygiene,
            wash hands regularly, drink clean water, and eat healthy
            foods. Daily exercise, proper sleep, and regular medical
            checkups strengthen the immune system and protect the body
            from illnesses.

          </p>

        </div>

      </div>

    </div>

  );
};

export default HealthArticle;

