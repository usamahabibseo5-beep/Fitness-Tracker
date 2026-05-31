


import React from "react";
import "../styles/global1.css";

const GOAL_ICONS = {
  "weight-gain": (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h1M21 12h1M6.5 12a1 1 0 0 1 1-1h1V7.5a1.5 1.5 0 0 1 3 0V11h1a1 1 0 0 1 1 1v.5h1V9a1.5 1.5 0 0 1 3 0v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3a1.5 1.5 0 0 1 3 0v.5h.5V12z"/>
    </svg>
  ),
  "weight-loss": (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-4.97 0-9 3.185-9 7.115C3 14.505 7.03 18 12 18s9-3.495 9-7.885C21 6.185 16.97 3 12 3z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  "maintenance": (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18M3 6h18M3 18h18"/>
    </svg>
  ),
};

const TARGET_ICONS = {
  Calories: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c0 6-5 8-5 13a5 5 0 0 0 10 0c0-5-5-7-5-13z"/>
      <path d="M10 15a2 2 0 0 0 4 0"/>
    </svg>
  ),
  Protein: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l3-9 4 18 3-9h4"/>
    </svg>
  ),
  Water: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 3 8.5 3 13a9 9 0 0 0 18 0C21 8.5 17.5 2 12 2z"/>
    </svg>
  ),
};

const GoalBanner = ({
  currentGoal,
  userGoal,
  progressPct = 0,
  weightDiff = 0,
}) => {
  if (!currentGoal || !userGoal) return null;

  const goalIcon = GOAL_ICONS[currentGoal.key] || GOAL_ICONS["weight-gain"];

  return (
  <div
  className="goal-banner"
  style={{
    border: `1px solid ${currentGoal.border}`,
  }}
>
      <div
        className="goal-glow"
        style={{
          background: `radial-gradient(circle, ${currentGoal.color}33, transparent)`,
        }}
      />

      <div className="goal-banner-wrapper">

        {/* LEFT */}
        <div className="goal-left">
          <div
            className="goal-icon-box"
            style={{
              border: `1px solid ${currentGoal.border}`,
              color: currentGoal.color,
            }}
          >
            {goalIcon}
          </div>

          <div>
            <span className="goal-badge" style={{ color: currentGoal.color }}>
              Active Goal
            </span>
            <h3 className="goal-title">{currentGoal.label}</h3>
            <p className="goal-tagline">{currentGoal.tagline}</p>
          </div>
        </div>

        {/* CENTER */}
        <div className="goal-progress">
          <div className="goal-progress-top">
            <span>Weight Journey</span>
            <span style={{ color: currentGoal.color }}>{weightDiff} kg to go</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${progressPct}%`,
                background: `linear-gradient(90deg, ${currentGoal.color}, ${currentGoal.color}99)`,
              }}
            />
          </div>

          <div className="goal-progress-bottom">
            <span>{userGoal.currentWeight} kg</span>
            <span style={{ color: currentGoal.color }}>{userGoal.targetWeight} kg</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="goal-targets">
          {[
            { label: "Calories", value: userGoal.dailyCalorieTarget || 0, unit: "kcal" },
            { label: "Protein",  value: userGoal.dailyProteinTarget || 0, unit: "g"    },
            { label: "Water",    value: userGoal.dailyWaterTarget   || 0, unit: "L"    },
          ].map((item) => (
            <div key={item.label} className="target-card">
              <span
                className="target-icon"
                style={{ color: currentGoal.color }}
                aria-hidden="true"
              >
                {TARGET_ICONS[item.label]}
              </span>
              <span className="target-value">{item.value}</span>
              <span className="target-unit">{item.unit}</span>
              <span className="target-label">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default GoalBanner;