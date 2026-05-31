// MaintainWeightTips.jsx

import React from "react";
import "../styles/globals.css";
import { Activity, Apple, Dumbbell, Moon } from "lucide-react";
import VideoBg from "../images-logo/videoBg.mp4"

const tips = [
  {
    icon: <Apple size={34} />,
    title: "Balanced Diet",
    desc: "Eat healthy meals with protein, fruits, vegetables, and enough water daily.",
  },
  {
    icon: <Dumbbell size={34} />,
    title: "Stay Active",
    desc: "Exercise at least 30 minutes daily to keep your body strong and energetic.",
  },
  {
    icon: <Moon size={34} />,
    title: "Proper Sleep",
    desc: "Sleep 7-8 hours every night to maintain metabolism and body recovery.",
  },
  {
    icon: <Activity size={34} />,
    title: "Healthy Routine",
    desc: "Maintain a consistent lifestyle and avoid unhealthy eating habits.",
  },
];

const MaintainWeightTips = () => {
  return (
    <div className="maintain-container">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="bg-video">
  <source src={VideoBg} type="video/mp4" />
</video>

      <div className="overlay"></div>

      <div className="content">
        <h1 className="main-heading">
          Guidance to  <span>Maintain a Healthy Body</span>
        </h1>

        <p className="subtitle">
          Follow these simple lifestyle habits to keep your body fit, healthy,
          and energetic every day.
        </p>

        <div className="tips-grid">
          {tips.map((tip, index) => (
            <div
              className="tip-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-box">{tip.icon}</div>
              <h2>{tip.title}</h2>
              <p>{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintainWeightTips;