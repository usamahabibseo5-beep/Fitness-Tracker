


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { setGoal, getDietPlan } from "../api/auth";
// import "../styles/globals.css";

// const WeightLoss = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [dietPlan, setDietPlan] = useState(null);
//   const [existingGoal, setExistingGoal] = useState(false);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const loadExisting = async () => {
//       try {
//         const res = await getDietPlan();
//         if (res.data && res.data.goalType === "Weight Loss") {
//           setDietPlan(res.data);
//           setExistingGoal(true);
//         }
//       } catch (err) { console.log("No existing plan"); }
//     };
//     loadExisting();
//   }, []);

//   const [formData, setFormData] = useState({
//     currentWeight: "", targetWeight: "", height: "", age: "", activity: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError(""); setDietPlan(null); setExistingGoal(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await setGoal({
//         goalType: "weight-loss",
//         currentWeight: Number(formData.currentWeight),
//         targetWeight: Number(formData.targetWeight),
//         height: Number(formData.height),
//         age: Number(formData.age),
//         gender: "male",
//         activityLevel: formData.activity === "low" ? "light" : formData.activity === "medium" ? "moderate" : "active",
//       });
//       const res = await getDietPlan();
//       setDietPlan(res.data);
//       setExistingGoal(false);
//     } catch (err) {
//       setError(err?.response?.data?.message || "Failed to save goal");
//     } finally { setLoading(false); }
//   };

//   const getMealColor = (mealName) => {
//     if (mealName?.includes("Breakfast")) return "meal-color-yellow";
//     if (mealName?.includes("Lunch")) return "meal-color-blue";
//     if (mealName?.includes("Snack") || mealName?.includes("workout")) return "meal-color-purple";
//     if (mealName?.includes("Dinner")) return "meal-color-pink";
//     return "meal-color-orange";
//   };

//   return (
//     <div className="weight-loss-container">
//       <h1>Weight Loss Plan</h1>
//       <p>Reduce body fat and stay fit with a healthy lifestyle</p>
//       {error && <div className="auth-error">{error}</div>}
//       {existingGoal && <div className="existing-plan-badge loss"> You have an active Weight Loss plan! Fill form below to update it.</div>}

//       <form onSubmit={handleSubmit} className="weight-loss-form">
//         <input type="number" name="currentWeight" placeholder="Current Weight (kg)" onChange={handleChange} required />
//         <input type="number" name="targetWeight" placeholder="Target Weight (kg)" onChange={handleChange} required />
//         <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} required />
//         <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
//         <select name="activity" onChange={handleChange} required>
//           <option value="">Activity Level</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//         <button type="submit" disabled={loading}>{loading ? "Generating..." : existingGoal ? "Update Plan" : "Generate Plan"}</button>
//       </form>

//       {dietPlan && (
//         <div className="diet-plan-box loss">

//           {/* ✅ Daily Summary - dailyTargets se */}
//           <div className="diet-daily-summary">
//             <div className="summary-item">
//               <span className="summary-label">Calories</span>
//               <span className="summary-value orange">{dietPlan.dailyTargets?.calories} kcal</span>
//             </div>
//             <div className="summary-divider" />
//             <div className="summary-item">
//               <span className="summary-label">Protein</span>
//               <span className="summary-value orange">{dietPlan.dailyTargets?.protein}g</span>
//             </div>
//             <div className="summary-divider" />
//             <div className="summary-item">
//               <span className="summary-label">Water</span>
//               <span className="summary-value orange">{dietPlan.dailyTargets?.water}L</span>
//             </div>
//             <div className="summary-divider" />
//             <div className="summary-item">
//               <span className="summary-label">Steps</span>
//               <span className="summary-value orange">{dietPlan.dailyTargets?.steps?.toLocaleString()}</span>
//             </div>
//           </div>

//           <div className="diet-plan-section">
//             <h3 className="diet-plan-heading orange">Your Daily Diet Plan</h3>
//             {dietPlan.meals.map((meal, i) => (
//               <div key={i} className={`meal-card ${getMealColor(meal.meal)}`}>
//                 <div className="meal-card-top">
//                   <span className="meal-name">{meal.meal}</span>
//                   <div className="meal-meta">
//                     <span className="meal-kcal orange">{meal.calories} kcal</span>
//                     <span className="meal-protein">Protein {meal.protein}g</span>
//                     <span className="meal-time">{meal.time}</span>
//                   </div>
//                 </div>
//                 <ul className="meal-foods">
//                   {meal.foods.map((food, j) => <li key={j}>{food}</li>)}
//                 </ul>
//                 {meal.note && <p className="meal-note">{meal.note}</p>}
//               </div>
//             ))}
//           </div>

//           <div className="diet-tips-box orange">
//             <p className="tips-heading orange">Pro Tips</p>
//             <ul className="tips-list">
//               {dietPlan.tips.map((tip, i) => <li key={i}>{tip}</li>)}
//             </ul>
//           </div>

//           {!existingGoal && <p className="goal-saved-text">✅ Goal saved successfully!</p>}
//           <button className="activity-btn orange" onClick={() => navigate("/activity")}>
//             View My Activity Targets 
//           </button>
//         </div>
//       )}

//       <div className="tips">
//         <h2>Weight Loss Tips</h2>
//         <ul>
//           <li>Eat more vegetables and protein</li>
//           <li>Avoid sugary drinks and junk food</li>
//           <li>Walk daily and do cardio exercise</li>
//           <li>Drink enough water every day</li>
//           <li>Sleep 7–8 hours regularly</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default WeightLoss;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setGoal, getDietPlan } from "../api/auth";
import "../styles/globals.css";

const WeightLoss = () => {
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
        if (res.data && res.data.goalType === "Weight Loss") {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ FIX: Validation — loss mein target current se kam hona chahiye
    const weightDiff = Number(formData.currentWeight) - Number(formData.targetWeight);
    if (weightDiff <= 0) {
      setError("Target weight should be less than current weight for weight loss!");
      return;
    }

    setLoading(true);
    try {
      await setGoal({
        goalType: "weight-loss",
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

  const getMealColor = (mealName) => {
    if (mealName?.includes("Breakfast")) return "meal-color-yellow";
    if (mealName?.includes("Lunch")) return "meal-color-blue";
    if (mealName?.includes("Snack") || mealName?.includes("workout")) return "meal-color-purple";
    if (mealName?.includes("Dinner")) return "meal-color-pink";
    return "meal-color-orange";
  };

  return (
    <div className="weight-loss-container">
      <h1>Weight Loss Plan</h1>
      <p>Reduce body fat and stay fit with a healthy lifestyle</p>
      {error && <div className="auth-error">{error}</div>}
      {existingGoal && <div className="existing-plan-badge loss">You have an active Weight Loss plan! Fill form below to update it.</div>}

      <form onSubmit={handleSubmit} className="weight-loss-form">
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
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : existingGoal ? "Update Plan" : "Generate Plan"}
        </button>
      </form>

      {dietPlan && (
        <div className="diet-plan-box loss">
          <div className="diet-daily-summary">
            <div className="summary-item">
              <span className="summary-label">Calories</span>
              <span className="summary-value orange">{dietPlan.dailyTargets?.calories} kcal</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <span className="summary-label">Protein</span>
              <span className="summary-value orange">{dietPlan.dailyTargets?.protein}g</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <span className="summary-label">Water</span>
              <span className="summary-value orange">{dietPlan.dailyTargets?.water}L</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <span className="summary-label">Steps</span>
              <span className="summary-value orange">{dietPlan.dailyTargets?.steps?.toLocaleString()}</span>
            </div>
          </div>

          <div className="diet-plan-section">
            <h3 className="diet-plan-heading orange">Your Daily Diet Plan</h3>
            {dietPlan.meals.map((meal, i) => (
              <div key={i} className={`meal-card ${getMealColor(meal.meal)}`}>
                <div className="meal-card-top">
                  <span className="meal-name">{meal.meal}</span>
                  <div className="meal-meta">
                    <span className="meal-kcal orange">{meal.calories} kcal</span>
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

          <div className="diet-tips-box orange">
            <p className="tips-heading orange">Pro Tips</p>
            <ul className="tips-list">
              {dietPlan.tips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>

          {!existingGoal && <p className="goal-saved-text">✅ Goal saved successfully!</p>}
          <button className="activity-btn orange" onClick={() => navigate("/activity")}>
            View My Activity Targets
          </button>
        </div>
      )}

      <div className="tips">
        <h2>Weight Loss Tips</h2>
        <ul>
          <li>Eat more vegetables and protein</li>
          <li>Avoid sugary drinks and junk food</li>
          <li>Walk daily and do cardio exercise</li>
          <li>Drink enough water every day</li>
          <li>Sleep 7–8 hours regularly</li>
        </ul>
      </div>
    </div>
  );
};

export default WeightLoss;