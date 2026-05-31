



import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/globals.css";
import dietImg from "../images-logo/article-img.png";

const HealthHero = () => {

  const navigate = useNavigate();

  const goToArticle = () => {
    navigate("/ArticleInfo");
  };

  return (

    <section className="health-section">

      <div className="health-bg-blur blur-one"></div>
      <div className="health-bg-blur blur-two"></div>

      {/* LEFT CONTENT */}

      <div className="health-left">

        <p className="health-tag">
          HEALTH & FITNESS
        </p>

        <h1 className="health-title">

          Transform Your
          <span> Healthy Lifestyle</span>

        </h1>

        <p className="health-desc">

          Discover smart nutrition, balanced diets,
          and healthy fitness habits to improve your
          energy, body, and daily lifestyle naturally.

        </p>

        {/* ONE BUTTON */}

        <div className="health-buttons">

          <button
            className="health-btn primary-btn"
            onClick={goToArticle}
          >

            Explore More

          </button>

        </div>

        {/* STATS */}

        <div className="health-stats">

          <div className="health-stat-card">

            <h3>10K+</h3>

            <p>Fitness Users</p>

          </div>

          <div className="health-stat-card">

            <h3>95%</h3>

            <p>Success Rate</p>

          </div>

          <div className="health-stat-card">

            <h3>24/7</h3>

            <p>Health Support</p>

          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div className="health-right">

        <div className="image-card">

          <img
            src={dietImg}
            alt="Healthy Lifestyle"
          />

        </div>

      </div>

    </section>

  );

};

export default HealthHero;