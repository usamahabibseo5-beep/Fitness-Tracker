


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { saveActivity, getTodayActivity } from "../api/auth";
// import "../styles/globals.css";

// const StepsIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M13 4v4l3 3-4 5H8" /><path d="M11 4v4L8 11l4 5h4" /><path d="M8 20h4M12 20h4" />
//   </svg>
// );
// const CaloriesIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="#fdba74" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 2c0 0-5 4.5-5 9a5 5 0 0010 0c0-4.5-5-9-5-9z" />
//   </svg>
// );
// const WaterIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 2L6.5 10A6.5 6.5 0 0012 22a6.5 6.5 0 005.5-12L12 2z" />
//   </svg>
// );
// const ProteinIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M6.5 6.5c3-3 7.5-3 10.5 0s3 7.5 0 10.5-7.5 3-10.5 0" />
//     <circle cx="12" cy="12" r="2.5" />
//   </svg>
// );

// const Activity = () => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     steps: 0,
//     caloriesBurned: 0,
//     waterIntake: 0,
//     proteinIntake: 0,
//   });

//   const [targets, setTargets] = useState({
//     steps: 0,
//     calories: 0,
//     water: 0,
//     protein: 0,
//   });

//   const [goalSet, setGoalSet] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await getTodayActivity();

//         if (res.data.activity) {
//           setData(res.data.activity);
//         }

//         if (res.data.targets && res.data.targets.calories > 0) {
//           setTargets({
//             steps: res.data.targets.steps || 0,
//             calories: res.data.targets.calories || 0,
//             water: res.data.targets.water || 0,
//             protein: res.data.targets.protein || 0,
//           });
//           setGoalSet(true);
//         } else {
//           setTargets({ steps: 0, calories: 0, water: 0, protein: 0 });
//           setGoalSet(false);
//         }
//       } catch (err) {
//         console.log("No activity yet");
//         setTargets({ steps: 0, calories: 0, water: 0, protein: 0 });
//         setGoalSet(false);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   // ✅ Auto save — button nahi chahiye
//   const handleChange = async (e) => {
//     const newData = { ...data, [e.target.name]: Number(e.target.value) };
//     setData(newData);
//     setSaved(false);
//     try {
//       await saveActivity(newData);
//       setSaved(true);
//       setTimeout(() => setSaved(false), 2000);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const getPercent = (value, target) => {
//     if (!target || target === 0) return 0;
//     return Math.min(Math.round((value / target) * 100), 100);
//   };

//   const handleGoalClick = () => {
//     navigate("/");
//     setTimeout(() => {
//       const section = document.getElementById("goal-section");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 500);
//   };

//   const stats = [
//     {
//       title: "Steps Today",
//       name: "steps",
//       value: data.steps,
//       target: targets.steps,
//       unit: goalSet ? `/ ${targets.steps?.toLocaleString()}` : "Set goal first",
//       icon: <StepsIcon />,
//       theme: "card-steps",
//     },
//     {
//       title: "Calories Burned",
//       name: "caloriesBurned",
//       value: data.caloriesBurned,
//       target: targets.calories,
//       unit: goalSet ? `/ ${targets.calories} kcal` : "Set goal first",
//       icon: <CaloriesIcon />,
//       theme: "card-calories",
//     },
//     {
//       title: "Water Intake",
//       name: "waterIntake",
//       value: data.waterIntake,
//       target: targets.water,
//       unit: goalSet ? `/ ${targets.water}L` : "Set goal first",
//       icon: <WaterIcon />,
//       theme: "card-water",
//     },
//     {
//       title: "Protein Intake",
//       name: "proteinIntake",
//       value: data.proteinIntake,
//       target: targets.protein,
//       unit: goalSet ? `/ ${targets.protein}g` : "Set goal first",
//       icon: <ProteinIcon />,
//       theme: "card-protein",
//     },
//   ];

//   if (loading) {
//     return (
//       <div className="activity-loading">
//         <div className="activity-loading-spinner" />
//         <span>Loading your activity...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="activity-page">

//       {/* HEADER */}
//       <div className="activity-header">
//         <div className="activity-header-left">
//           <h2>Today's Activity</h2>
//           <p>Track your daily health metrics</p>
//         </div>
//         {/* ✅ Sirf saved badge — button nahi */}
//         <div className="activity-header-right">
//           {saved && (
//             <span className="activity-saved-badge">✅ Auto Saved</span>
//           )}
//         </div>
//       </div>

//       {/* GOAL WARNING BANNER */}
//       {!goalSet && (
//         <div style={{
//           padding: "12px 20px",
//           marginBottom: "20px",
//           borderRadius: "12px",
//           border: "1px solid #f97316",
//           color: "#f97316",
//           fontSize: "14px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           background: "rgba(249,115,22,0.08)",
//         }}>
//           <span>⚠️ You haven't set a goal yet!</span>
//           <span
//             onClick={handleGoalClick}
//             style={{
//               cursor: "pointer",
//               fontWeight: 700,
//               textDecoration: "underline",
//             }}
//           >
//             Set Goal Now →
//           </span>
//         </div>
//       )}

//       {/* CARDS */}
//       <div className="activity-grid">
//         {stats.map((item, index) => {
//           const pct = getPercent(item.value, item.target);
//           return (
//             <div key={index} className={`activity-card ${item.theme}`}>

//               <div className="card-top-row">
//                 <div className="card-icon-wrap">{item.icon}</div>
//                 <span className="card-percent-badge">{pct}%</span>
//               </div>

//               <p className="card-label">{item.title}</p>

//               <div className="card-value-row">
//                 <span className="card-value">
//                   {item.name === "waterIntake"
//                     ? `${item.value}L`
//                     : item.value}
//                 </span>
//                 <span className="card-target">{item.unit}</span>
//               </div>

//               <input
//                 type="number"
//                 name={item.name}
//                 value={item.value}
//                 onChange={handleChange}
//                 placeholder="Enter value"
//                 className="card-input"
//               />

//               <div className="progress-track">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${pct}%` }}
//                 />
//               </div>

//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Activity;

