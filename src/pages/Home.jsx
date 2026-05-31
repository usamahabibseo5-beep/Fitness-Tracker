



import React, { useState, useEffect } from "react";
import { getGoal } from "../api/auth";

import HomeCard from "../pages/hoem-page-cards";
import Article from "../pages/Article";
import Instruction from "../pages/home-page-inst";
import Drpage from "../pages/doctor";
import GoalBanner from "../pages/GoalBanner";

import slide1 from "../images-logo/slide-no1.jpeg";
import slide2 from "../images-logo/slide-no2.jpeg";
import slide3 from "../images-logo/slide3.jpeg";
import slide4 from "../images-logo/slide4.jpeg";
import slide5 from "../images-logo/slide5.jpeg";
import slide6 from "../images-logo/slide6.jpeg";

import "../styles/globals.css";

const Home = () => {

  const images = [
    slide1,
    slide3,
    slide2,
    slide5,
    slide4,
    slide6,
  ];

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [userGoal, setUserGoal] =
    useState(null);

  /* SLIDER */
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex(
        (prev) =>
          (prev + 1) % images.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  /* LOAD GOAL */
  useEffect(() => {

    const loadGoal = async () => {

      try {

        const res = await getGoal();

        console.log(res.data);

        setUserGoal(res.data);

      } catch (err) {

        console.log(
          "Goal not found"
        );

      }
    };

    loadGoal();

  }, []);

  /* GOAL CONFIG */
  const goalConfig = {

    "weight-loss": {
      label: "Weight Loss",
      tagline:
        "Burning fat & building confidence",
      color: "#f97316",
      border:
        "rgba(249,115,22,0.3)",

      icon: (
        <span
          style={{
            fontSize: "22px",
          }}
        >
          🔥
        </span>
      ),
    },

    "weight-gain": {
      label: "Weight Gain",
      tagline:
        "Building muscle & strength",
      color: "#22c55e",
      border:
        "rgba(34,197,94,0.3)",

      icon: (
        <span
          style={{
            fontSize: "22px",
          }}
        >
          💪
        </span>
      ),
    },

    maintain: {
      label: "Maintain Weight",
      tagline:
        "Balanced and healthy lifestyle",
      color: "#3b82f6",
      border:
        "rgba(59,130,246,0.3)",

      icon: (
        <span
          style={{
            fontSize: "22px",
          }}
        >
          ⚖️
        </span>
      ),
    },
  };

  /* CURRENT GOAL */
  const currentGoal = userGoal
    ? goalConfig[
        userGoal.goalType
          ?.toLowerCase()
          ?.replace(/\s+/g, "-")
      ]
    : null;

  /* WEIGHT DIFFERENCE */
  const weightDiff = userGoal
    ? Math.abs(
        userGoal.currentWeight -
          userGoal.targetWeight
      )
    : 0;

  /* PROGRESS */
  const progressPct =
    userGoal && weightDiff > 0
      ? Math.min(
          Math.round(
            (1 -
              weightDiff /
                userGoal.currentWeight) *
              100
          ),
          100
        )
      : 0;

  return (
    <div className="home-page">

      {/* HERO */}
      <div className="hero-section">

        <div className="hero-content">

          <h1 className="hero-title">
            Transform Your{" "}
            <span className="gradient-text">
              Health
            </span>
          </h1>

          <p className="hero-subtitle">
            Track your fitness journey
            with precision.
          </p>

        </div>

        {/* SLIDER */}
        <div className="carousel-3d">

          {images.map(
            (img, index) => {

              const position =
                index - currentIndex;

              let className =
                "carousel-item";

              if (position === 0)
                className +=
                  " active";

              else if (
                position === -1 ||
                position ===
                  images.length - 1
              )
                className +=
                  " left";

              else if (
                position === 1 ||
                position ===
                  -(images.length - 1)
              )
                className +=
                  " right";

              else
                className +=
                  " hidden";

              return (
                <img
                  key={index}
                  src={img}
                  alt="slide"
                  className={
                    className
                  }
                />
              );
            }
          )}

        </div>
      </div>

      {/* GOAL BANNER */}
      <GoalBanner
        currentGoal={currentGoal}
        userGoal={userGoal}
        progressPct={progressPct}
        weightDiff={weightDiff}
      />

      <HomeCard />
      <Article />
      <Instruction />
      <Drpage />

    </div>
  );
};

export default Home;
