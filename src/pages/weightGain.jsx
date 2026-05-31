


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setGoal, getDietPlan } from "../api/auth";
import "../styles/globals.css";

const WeightGain = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dietPlan, setDietPlan] = useState(null);
  const [existingGoal, setExistingGoal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const loadExisting = async () => {
      try {
        const res = await getDietPlan();
        if (res.data && res.data.goalType === "Weight Gain") {
          setDietPlan(res.data);
          setExistingGoal(true);
        }
      } catch (err) { console.log("No existing plan"); }
    };
    loadExisting();
  }, []);

  const [formData, setFormData] = useState({
    currentWeight: "", targetWeight: "", height: "", age: "", activity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); setDietPlan(null); setExistingGoal(false);
  };

  const calculatePlan = async (e) => {
    e.preventDefault();
    const weightDiff = Number(formData.targetWeight) - Number(formData.currentWeight);
    if (weightDiff <= 0) { setError("Target weight should be higher than current weight!"); return; }
    setLoading(true);
    try {
      await setGoal({
        goalType: "weight-gain",
        currentWeight: Number(formData.currentWeight),
        targetWeight: Number(formData.targetWeight),
        height: Number(formData.height),
        age: Number(formData.age),
        gender: "male",
        activityLevel: formData.activity === "low" ? "light" : formData.activity === "medium" ? "moderate" : "active",
      });
      const res = await getDietPlan();
      setDietPlan(res.data);
      setExistingGoal(false);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to save goal");
    } finally { setLoading(false); }
  };

  // ✅ Backend se meal name already emoji ke saath aata hai
  const getMealColor = (mealName) => {
    if (mealName?.includes("Breakfast")) return "meal-color-yellow";
    if (mealName?.includes("Lunch")) return "meal-color-blue";
    if (mealName?.includes("Snack") || mealName?.includes("workout")) return "meal-color-purple";
    if (mealName?.includes("Dinner")) return "meal-color-pink";
    return "meal-color-green";
  };

  return (
    <div className="weight-gain-container">
      <h1>Weight Gain Plan</h1>
      <p>Enter your details to get a personalized weight gain plan</p>
      {error && <div className="auth-error">{error}</div>}
      {existingGoal && <div className="existing-plan-badge">💪 You have an active Weight Gain plan! Fill form below to update it.</div>}

      <form onSubmit={calculatePlan} className="weight-form">
        <input type="number" name="currentWeight" placeholder="Current Weight (kg)" onChange={handleChange} required />
        <input type="number" name="targetWeight" placeholder="Target Weight (kg)" onChange={handleChange} required />
        <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <select name="activity" onChange={handleChange} required>
          <option value="">Activity Level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" disabled={loading}>{loading ? "Generating..." : existingGoal ? "Update Plan" : "Generate Plan"}</button>
      </form>

      {dietPlan && (
        <div className="diet-plan-box gain">

          {/* ✅ Daily Summary - dailyTargets se */}
          <div className="diet-daily-summary">
            <div className="summary-item">
              <span className="summary-label">Calories</span>
              <span className="summary-value green">{dietPlan.dailyTargets?.calories} kcal</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <span className="summary-label">Protein</span>
              <span className="summary-value green">{dietPlan.dailyTargets?.protein}g</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <span className="summary-label">Water</span>
              <span className="summary-value green">{dietPlan.dailyTargets?.water}L</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <span className="summary-label">Steps</span>
              <span className="summary-value green">{dietPlan.dailyTargets?.steps?.toLocaleString()}</span>
            </div>
          </div>

          <div className="diet-plan-section">
            <h3 className="diet-plan-heading green">Your Daily Diet Plan</h3>
            {dietPlan.meals.map((meal, i) => (
              <div key={i} className={`meal-card ${getMealColor(meal.meal)}`}>
                <div className="meal-card-top">
                  {/* ✅ meal.meal already has emoji from backend */}
                  <span className="meal-name">{meal.meal}</span>
                  <div className="meal-meta">
                    <span className="meal-kcal green">{meal.calories} kcal</span>
                    <span className="meal-protein">Protein {meal.protein}g</span>
                    <span className="meal-time">{meal.time}</span>
                  </div>
                </div>
                <ul className="meal-foods">
                  {meal.foods.map((food, j) => <li key={j}>{food}</li>)}
                </ul>
                {meal.note && <p className="meal-note">{meal.note}</p>}
              </div>
            ))}
          </div>

          <div className="diet-tips-box green">
            <p className="tips-heading green">Pro Tips</p>
            <ul className="tips-list">
              {dietPlan.tips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>

          {!existingGoal && <p className="goal-saved-text">✅ Goal saved successfully!</p>}
          <button className="activity-btn green" onClick={() => navigate("/activity")}>
            View My Activity Targets 💪
          </button>
        </div>
      )}

      <div className="tips">
        <h2>Healthy Weight Gain Tips</h2>
        <ul>
          <li>Eat calorie-dense foods like nuts, rice, and milk</li>
          <li>Increase protein intake (eggs, chicken, fish)</li>
          <li>Eat 5–6 meals per day</li>
          <li>Do strength training exercises</li>
          <li>Drink healthy smoothies and shakes</li>
        </ul>
      </div>
    </div>
  );
};

export default WeightGain;


