


// import React, { useState, useEffect } from "react";
// import { getWeeklyProgress } from "../api/auth";
// import TrendsChart from "../components/charts/TrendsChart";
// import { Flame, Footprints, Droplets, Zap, Calendar, TrendingUp } from "lucide-react";
// import "../styles/globals.css";

// const DAY_ORDER = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const Progress = () => {
//   const [weeklyData, setWeeklyData] = useState([]);
//   const [summary, setSummary] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await getWeeklyProgress();
//         const raw = res.data.weeklyData || [];

//         // Monday first sort
//         const sorted = [...raw].sort(
//           (a, b) => DAY_ORDER.indexOf(a.label) - DAY_ORDER.indexOf(b.label)
//         );

//         setWeeklyData(sorted);
//         setSummary(res.data.summary || null);
//       } catch (err) {
//         console.log("No progress data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   const caloriesData = {
//     labels: weeklyData.map(d => d.label),
//     values: weeklyData.map(d => d.caloriesBurned),
//   };
//   const stepsData = {
//     labels: weeklyData.map(d => d.label),
//     values: weeklyData.map(d => d.steps),
//   };
//   const waterData = {
//     labels: weeklyData.map(d => d.label),
//     values: weeklyData.map(d => d.waterIntake),
//   };
//   const proteinData = {
//     labels: weeklyData.map(d => d.label),
//     values: weeklyData.map(d => d.proteinIntake),
//   };

//   const getDayStatus = (day) => {
//     if (day.steps === 0 && day.caloriesBurned === 0) return "rest";
//     if (day.steps > 8000) return "great";
//     return "good";
//   };

//   const statusConfig = {
//     great: { label: "Great", className: "status-great" },
//     good:  { label: "Good",  className: "status-good" },
//     rest:  { label: "Rest",  className: "status-rest" },
//   };

//   if (loading) {
//     return (
//       <div className="activity-loading">
//         <div className="activity-loading-spinner" />
//         <span>Loading your progress...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="progress-container">

//       {/* HEADER */}
//       <div className="progress-header">
//         <TrendingUp size={24} color="#6366f1" />
//         <h2 className="progress-title">Weekly Progress</h2>
//       </div>

//       {/* SUMMARY CARDS */}
//       {summary && (
//         <div className="progress-summary-grid">
//           <div className="progress-summary-card calories-card">
//             <div className="progress-summary-icon-wrap">
//               <Flame size={20} color="#fdba74" />
//             </div>
//             <div>
//               <p className="progress-summary-value">{summary.avgCalories?.toLocaleString()}</p>
//               <p className="progress-summary-label">Avg Calories</p>
//             </div>
//           </div>

//           <div className="progress-summary-card steps-card">
//             <div className="progress-summary-icon-wrap">
//               <Footprints size={20} color="#93c5fd" />
//             </div>
//             <div>
//               <p className="progress-summary-value">{summary.avgSteps?.toLocaleString()}</p>
//               <p className="progress-summary-label">Avg Steps</p>
//             </div>
//           </div>

//           <div className="progress-summary-card active-card">
//             <div className="progress-summary-icon-wrap">
//               <Calendar size={20} color="#6ee7b7" />
//             </div>
//             <div>
//               <p className="progress-summary-value">{summary.activeDays}/7</p>
//               <p className="progress-summary-label">Active Days</p>
//             </div>
//           </div>

//           <div className="progress-summary-card consistency-card">
//             <div className="progress-summary-icon-wrap">
//               <Zap size={20} color="#c4b5fd" />
//             </div>
//             <div>
//               <p className="progress-summary-value">{summary.consistency}%</p>
//               <p className="progress-summary-label">Consistency</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CHARTS */}
//       <div className="chart-section">
//         <div className="chart-box">
//           <div className="chart-heading">
//             <Flame size={16} color="#fdba74" />
//             <span>Calories Burned</span>
//           </div>
//           <TrendsChart data={caloriesData} title="Calories" color="#fdba74" />
//         </div>

//         <div className="chart-box">
//           <div className="chart-heading">
//             <Footprints size={16} color="#93c5fd" />
//             <span>Daily Steps</span>
//           </div>
//           <TrendsChart data={stepsData} title="Steps" color="#93c5fd" />
//         </div>

//         <div className="chart-box">
//           <div className="chart-heading">
//             <Droplets size={16} color="#7dd3fc" />
//             <span>Water Intake</span>
//           </div>
//           <TrendsChart data={waterData} title="Water (L)" color="#7dd3fc" />
//         </div>

//         <div className="chart-box">
//           <div className="chart-heading">
//             <Zap size={16} color="#6ee7b7" />
//             <span>Protein Intake</span>
//           </div>
//           <TrendsChart data={proteinData} title="Protein (g)" color="#6ee7b7" />
//         </div>
//       </div>

//       {/* DAILY ACTIVITY LIST */}
//       <div className="progress-history-section">
//         <div className="progress-history-header">
//           <Calendar size={18} color="#94a3b8" />
//           <h3 className="progress-history-title">Daily Activity Log</h3>
//         </div>

//         <div className="progress-history-list">
//           {weeklyData.map((day, i) => {
//             const status = getDayStatus(day);
//             const config = statusConfig[status];
//             return (
//               <div key={i} className="progress-history-item">

//                 <div className="progress-history-left">
//                   <span className="progress-history-day">{day.label}</span>
//                   <span className="progress-history-date">{day.date}</span>
//                 </div>

//                 <div className="progress-history-stats">
//                   <div className="progress-stat-item">
//                     <Footprints size={13} color="#93c5fd" />
//                     <span className="steps-color">{day.steps?.toLocaleString() || 0}</span>
//                   </div>
//                   <div className="progress-stat-item">
//                     <Flame size={13} color="#fdba74" />
//                     <span className="calories-color">{day.caloriesBurned || 0} kcal</span>
//                   </div>
//                   <div className="progress-stat-item">
//                     <Droplets size={13} color="#7dd3fc" />
//                     <span className="water-color">{day.waterIntake || 0}L</span>
//                   </div>
//                   <div className="progress-stat-item">
//                     <Zap size={13} color="#6ee7b7" />
//                     <span className="protein-color">{day.proteinIntake || 0}g</span>
//                   </div>
//                 </div>

//                 <span className={`progress-status-badge ${config.className}`}>
//                   {config.label}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Progress;



import React, { useState, useEffect } from "react";
import { getWeeklyProgress } from "../api/auth";
import TrendsChart from "../components/charts/TrendsChart";
import { Flame, Footprints, Droplets, Zap, Calendar, TrendingUp } from "lucide-react";
import "../styles/globals.css";

const DAY_ORDER = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Progress = () => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [summary, setSummary]       = useState(null);
  const [loading, setLoading]       = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getWeeklyProgress();
        const raw = res.data.weeklyData || [];
        const sorted = [...raw].sort(
          (a, b) => DAY_ORDER.indexOf(a.label) - DAY_ORDER.indexOf(b.label)
        );
        setWeeklyData(sorted);
        setSummary(res.data.summary || null);
      } catch (err) {
        console.log("No progress data");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // ✅ Percentage values graph mein jaayengi
  const caloriesData = {
    labels: weeklyData.map(d => d.label),
    values: weeklyData.map(d => d.caloriesPct),
  };
  const stepsData = {
    labels: weeklyData.map(d => d.label),
    values: weeklyData.map(d => d.stepsPct),
  };
  const waterData = {
    labels: weeklyData.map(d => d.label),
    values: weeklyData.map(d => d.waterPct),
  };
  const proteinData = {
    labels: weeklyData.map(d => d.label),
    values: weeklyData.map(d => d.proteinPct),
  };

  const getDayStatus = (day) => {
    if (day.stepsPct === 0 && day.caloriesPct === 0) return "rest";
    if (day.stepsPct >= 80) return "great";
    return "good";
  };

  const statusConfig = {
    great: { label: "Great", className: "status-great" },
    good:  { label: "Good",  className: "status-good" },
    rest:  { label: "Rest",  className: "status-rest" },
  };

  if (loading) {
    return (
      <div className="activity-loading">
        <div className="activity-loading-spinner" />
        <span>Loading your progress...</span>
      </div>
    );
  }

  return (
    <div className="progress-container">

      {/* HEADER */}
      <div className="progress-header">
        <TrendingUp size={24} color="#6366f1" />
        <h2 className="progress-title">Weekly Progress</h2>
      </div>

      {/* SUMMARY CARDS */}
      {summary && (
        <div className="progress-summary-grid">
          <div className="progress-summary-card calories-card">
            <div className="progress-summary-icon-wrap">
              <Flame size={20} color="#fdba74" />
            </div>
            <div>
              <p className="progress-summary-value">{summary.avgCalories?.toLocaleString()}</p>
              <p className="progress-summary-label">Avg Calories</p>
            </div>
          </div>

          <div className="progress-summary-card steps-card">
            <div className="progress-summary-icon-wrap">
              <Footprints size={20} color="#93c5fd" />
            </div>
            <div>
              <p className="progress-summary-value">{summary.avgSteps?.toLocaleString()}</p>
              <p className="progress-summary-label">Avg Steps</p>
            </div>
          </div>

          <div className="progress-summary-card active-card">
            <div className="progress-summary-icon-wrap">
              <Calendar size={20} color="#6ee7b7" />
            </div>
            <div>
              <p className="progress-summary-value">{summary.activeDays}/7</p>
              <p className="progress-summary-label">Active Days</p>
            </div>
          </div>

          <div className="progress-summary-card consistency-card">
            <div className="progress-summary-icon-wrap">
              <Zap size={20} color="#c4b5fd" />
            </div>
            <div>
              <p className="progress-summary-value">{summary.consistency}%</p>
              <p className="progress-summary-label">Consistency</p>
            </div>
          </div>
        </div>
      )}

      {/* CHARTS */}
      <div className="chart-section">
        <div className="chart-box">
          <div className="chart-heading">
            <Flame size={16} color="#fdba74" />
            <span>Calories Burned</span>
          </div>
          <TrendsChart data={caloriesData} title="Calories %" color="#fdba74" />
        </div>

        <div className="chart-box">
          <div className="chart-heading">
            <Footprints size={16} color="#93c5fd" />
            <span>Daily Steps</span>
          </div>
          <TrendsChart data={stepsData} title="Steps %" color="#93c5fd" />
        </div>

        <div className="chart-box">
          <div className="chart-heading">
            <Droplets size={16} color="#7dd3fc" />
            <span>Water Intake</span>
          </div>
          <TrendsChart data={waterData} title="Water %" color="#7dd3fc" />
        </div>

        <div className="chart-box">
          <div className="chart-heading">
            <Zap size={16} color="#6ee7b7" />
            <span>Protein Intake</span>
          </div>
          <TrendsChart data={proteinData} title="Protein %" color="#6ee7b7" />
        </div>
      </div>

      {/* DAILY ACTIVITY LOG */}
      <div className="progress-history-section">
        <div className="progress-history-header">
          <Calendar size={18} color="#94a3b8" />
          <h3 className="progress-history-title">Daily Activity Log</h3>
        </div>

        <div className="progress-history-list">
          {weeklyData.map((day, i) => {
            const status = getDayStatus(day);
            const config = statusConfig[status];
            return (
              <div key={i} className="progress-history-item">
                <div className="progress-history-left">
                  <span className="progress-history-day">{day.label}</span>
                  <span className="progress-history-date">{day.date}</span>
                </div>
                <div className="progress-history-stats">
                  <div className="progress-stat-item">
                    <Footprints size={13} color="#93c5fd" />
                    <span className="steps-color">{day.stepsPct}%</span>
                  </div>
                  <div className="progress-stat-item">
                    <Flame size={13} color="#fdba74" />
                    <span className="calories-color">{day.caloriesPct}%</span>
                  </div>
                  <div className="progress-stat-item">
                    <Droplets size={13} color="#7dd3fc" />
                    <span className="water-color">{day.waterPct}%</span>
                  </div>
                  <div className="progress-stat-item">
                    <Zap size={13} color="#6ee7b7" />
                    <span className="protein-color">{day.proteinPct}%</span>
                  </div>
                </div>
                <span className={`progress-status-badge ${config.className}`}>
                  {config.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Progress;


