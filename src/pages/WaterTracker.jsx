


import React, { useState, useEffect } from "react";
import { getTodayActivity, saveActivity } from "../api/auth";
import "../styles/globals.css";

const WaterTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [goal, setGoal] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getTodayActivity();

        if (res.data.activity) {
          setWaterIntake(res.data.activity.waterIntake || 0);
        }

        if (res.data.targets) {
          setGoal(res.data.targets.water ?? 0);
        }
      } catch (err) {
        console.log("No data yet");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const goalMl = goal * 1000;

  const progress =
    goal > 0
      ? Math.min(((waterIntake * 1000) / goalMl) * 100, 100).toFixed(0)
      : 0;

  const addWater = async (amount) => {
    const newVal =
      goal > 0
        ? Math.min(waterIntake + amount / 1000, goal)
        : waterIntake + amount / 1000;

    setWaterIntake(newVal);
    setSaved(false);

    try {
      const res = await getTodayActivity();
      const current = res.data.activity || {};

      await saveActivity({
        ...current,
        waterIntake: newVal,
      });

      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const resetWater = async () => {
    setWaterIntake(0);
    setSaved(false);

    try {
      const res = await getTodayActivity();
      const current = res.data.activity || {};

      await saveActivity({
        ...current,
        waterIntake: 0,
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading)
    return (
      <div className="activity-loading">
        <div className="activity-loading-spinner" />
        <span>Loading...</span>
      </div>
    );

  return (
    <div className="hydrate-wrapper">
      <div className="hydrate-main-card">
        <div className="hydrate-top-section">
          <div>
            <p className="hydrate-label">Daily Water Intake</p>

            <h1 className="hydrate-liter-text">
              {waterIntake.toFixed(1)}L
            </h1>

            <p className="hydrate-goal-text">
              {(waterIntake * 1000).toFixed(0)}ml
              {goal > 0 ? ` / ${goalMl}ml` : " / No Goal"}
            </p>

            {saved && <p className="hydrate-saved-text">✅ Saved!</p>}
          </div>

          <div className="hydrate-icon-box">💧</div>
        </div>

        <div className="hydrate-progress-area">
          <div className="hydrate-progress-bar">
            <div
              className="hydrate-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="hydrate-progress-footer">
            <span>
              {goal > 0
                ? `Goal: ${goal}L/day`
                : "Please set your goal"}
            </span>

            <span>{progress}%</span>
          </div>
        </div>
      </div>

      <div className="hydrate-action-grid">
        <button
          className="hydrate-action-btn"
          onClick={() => addWater(250)}
        >
          +250ml
        </button>

        <button
          className="hydrate-action-btn"
          onClick={() => addWater(500)}
        >
          +500ml
        </button>

        <button
          className="hydrate-action-btn"
          onClick={() => addWater(1000)}
        >
          +1L
        </button>

        <button
          className="hydrate-reset-btn"
          onClick={resetWater}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default WaterTracker;