


// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useAppContext } from "../context/AppContext";
// // // // // // import { getGoal, getTodayActivity } from "../api/auth";
// // // // // // import { User, Mail, Edit3, Target, Activity, Droplets, Footprints } from "lucide-react";
// // // // // // import "../styles/globals.css";

// // // // // // const Profile = () => {
// // // // // //   const { user } = useAppContext();
// // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // //   const [name, setName] = useState(user?.name || "");
// // // // // //   const [email, setEmail] = useState(user?.email || "");
// // // // // //   const [goal, setGoal] = useState(null);
// // // // // //   const [todayActivity, setTodayActivity] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     const loadData = async () => {
// // // // // //       try {
// // // // // //         const goalRes = await getGoal();
// // // // // //         if (goalRes.data) setGoal(goalRes.data);
// // // // // //       } catch (err) { console.log("No goal"); }
// // // // // //       try {
// // // // // //         const actRes = await getTodayActivity();
// // // // // //         if (actRes.data.activity) setTodayActivity(actRes.data.activity);
// // // // // //       } catch (err) { console.log("No activity"); }
// // // // // //     };
// // // // // //     loadData();
// // // // // //   }, []);

// // // // // //   const goalLabels = {
// // // // // //     "weight-loss": "🔥 Weight Loss",
// // // // // //     "weight-gain": "💪 Weight Gain",
// // // // // //     "maintain":    "⚖️ Maintain Weight",
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="profile-page">
// // // // // //       <div className="profile-card">

// // // // // //         {/* Avatar */}
// // // // // //         <div className="avatar"><User size={42} /></div>

// // // // // //         {/* Edit Button */}
// // // // // //         <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
// // // // // //           <Edit3 size={16} />{editMode ? "Save" : "Edit"}
// // // // // //         </button>

// // // // // //         {/* User Info */}
// // // // // //         <div className="profile-info">
// // // // // //           {editMode ? (
// // // // // //             <>
// // // // // //               <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
// // // // // //               <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
// // // // // //             </>
// // // // // //           ) : (
// // // // // //             <>
// // // // // //               <h2>{name || "User Name"}</h2>
// // // // // //               <div className="info"><Mail size={16} /><span>{email || "user@email.com"}</span></div>
// // // // // //             </>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Goal Info */}
// // // // // //         {goal && (
// // // // // //           <div className="profile-goal-section">
// // // // // //             <h3 className="profile-section-title">My Goal</h3>
// // // // // //             <div className="profile-goal-grid">
// // // // // //               <div className="profile-goal-item">
// // // // // //                 <span className="profile-goal-label">Goal Type</span>
// // // // // //                 <span className="profile-goal-value">{goalLabels[goal.goalType] || goal.goalType}</span>
// // // // // //               </div>
// // // // // //               <div className="profile-goal-item">
// // // // // //                 <span className="profile-goal-label">Current Weight</span>
// // // // // //                 <span className="profile-goal-value">{goal.currentWeight} kg</span>
// // // // // //               </div>
// // // // // //               <div className="profile-goal-item">
// // // // // //                 <span className="profile-goal-label">Target Weight</span>
// // // // // //                 <span className="profile-goal-value">{goal.targetWeight} kg</span>
// // // // // //               </div>
// // // // // //               <div className="profile-goal-item">
// // // // // //                 <span className="profile-goal-label">Daily Calories</span>
// // // // // //                 <span className="profile-goal-value">{goal.dailyCalorieTarget} kcal</span>
// // // // // //               </div>
// // // // // //               <div className="profile-goal-item">
// // // // // //                 <span className="profile-goal-label">Daily Protein</span>
// // // // // //                 <span className="profile-goal-value">{goal.dailyProteinTarget}g</span>
// // // // // //               </div>
// // // // // //               <div className="profile-goal-item">
// // // // // //                 <span className="profile-goal-label">Daily Water</span>
// // // // // //                 <span className="profile-goal-value">{goal.dailyWaterTarget}L</span>
// // // // // //               </div>
// // // // // //               <div className="profile-goal-item">
// // // // // //                 <span className="profile-goal-label">Daily Steps</span>
// // // // // //                 <span className="profile-goal-value">{goal.dailyStepTarget?.toLocaleString()}</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Today's Activity */}
// // // // // //         {todayActivity && (
// // // // // //           <div className="profile-activity-section">
// // // // // //             <h3 className="profile-section-title">Today's Activity</h3>
// // // // // //             <div className="stats">
// // // // // //               <div className="stat-box">
// // // // // //                 <Activity size={18} />
// // // // // //                 <p>{todayActivity.caloriesBurned || 0}</p>
// // // // // //                 <span>Calories</span>
// // // // // //               </div>
// // // // // //               <div className="stat-box">
// // // // // //                 <Target size={18} />
// // // // // //                 <p>{todayActivity.proteinIntake || 0}g</p>
// // // // // //                 <span>Protein</span>
// // // // // //               </div>
// // // // // //               <div className="stat-box">
// // // // // //                 <Droplets size={18} />
// // // // // //                 <p>{todayActivity.waterIntake || 0}L</p>
// // // // // //                 <span>Water</span>
// // // // // //               </div>
// // // // // //               <div className="stat-box">
// // // // // //                 <Footprints size={18} />
// // // // // //                 <p>{todayActivity.steps?.toLocaleString() || 0}</p>
// // // // // //                 <span>Steps</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Profile;


// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useAppContext } from "../context/AppContext";
// // // // // import { getGoal, getTodayActivity } from "../api/auth";
// // // // // import {
// // // // //   User, Mail, Edit3, Save, Flame, Footprints,
// // // // //   Droplets, Zap, Target, Scale, TrendingUp,
// // // // //   Award, ChevronRight, Activity
// // // // // } from "lucide-react";
// // // // // import "../styles/globals.css";

// // // // // const Profile = () => {
// // // // //   const { user } = useAppContext();
// // // // //   const [editMode, setEditMode] = useState(false);
// // // // //   const [name, setName] = useState(user?.name || "");
// // // // //   const [email, setEmail] = useState(user?.email || "");
// // // // //   const [goal, setGoal] = useState(null);
// // // // //   const [todayActivity, setTodayActivity] = useState(null);
// // // // //   const [targets, setTargets] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const loadData = async () => {
// // // // //       try {
// // // // //         const goalRes = await getGoal();
// // // // //         if (goalRes.data) setGoal(goalRes.data);
// // // // //       } catch (err) { console.log("No goal"); }
// // // // //       try {
// // // // //         const actRes = await getTodayActivity();
// // // // //         if (actRes.data.activity) setTodayActivity(actRes.data.activity);
// // // // //         if (actRes.data.targets) setTargets(actRes.data.targets);
// // // // //       } catch (err) { console.log("No activity"); }
// // // // //       setLoading(false);
// // // // //     };
// // // // //     loadData();
// // // // //   }, []);

// // // // //   const goalConfig = {
// // // // //     "weight-loss": { label: "Weight Loss", icon: <Flame size={16} />, className: "goal-type-loss" },
// // // // //     "weight-gain": { label: "Weight Gain", icon: <TrendingUp size={16} />, className: "goal-type-gain" },
// // // // //     "maintain":    { label: "Maintain Weight", icon: <Scale size={16} />, className: "goal-type-maintain" },
// // // // //   };

// // // // //   const getPercent = (value, target) => {
// // // // //     if (!target || target === 0) return 0;
// // // // //     return Math.min(Math.round((value / target) * 100), 100);
// // // // //   };

// // // // //   const weightProgress = goal
// // // // //     ? Math.round(Math.abs((goal.currentWeight - goal.targetWeight) / goal.currentWeight * 100))
// // // // //     : 0;

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="activity-loading">
// // // // //         <div className="activity-loading-spinner" />
// // // // //         <span>Loading profile...</span>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="profile-page">

// // // // //       {/* ── TOP HERO CARD ── */}
// // // // //       <div className="profile-hero-card">

// // // // //         {/* Background decoration */}
// // // // //         <div className="profile-hero-bg" />

// // // // //         {/* Avatar + Info */}
// // // // //         <div className="profile-hero-content">
// // // // //           <div className="profile-avatar-wrap">
// // // // //             <div className="profile-avatar">
// // // // //               <User size={36} strokeWidth={1.5} />
// // // // //             </div>
// // // // //             {goal && (
// // // // //               <div className={`profile-goal-dot ${goalConfig[goal.goalType]?.className}`} />
// // // // //             )}
// // // // //           </div>

// // // // //           <div className="profile-hero-info">
// // // // //             {editMode ? (
// // // // //               <div className="profile-edit-fields">
// // // // //                 <input
// // // // //                   className="profile-edit-input"
// // // // //                   value={name}
// // // // //                   onChange={(e) => setName(e.target.value)}
// // // // //                   placeholder="Your name"
// // // // //                 />
// // // // //                 <input
// // // // //                   className="profile-edit-input"
// // // // //                   value={email}
// // // // //                   onChange={(e) => setEmail(e.target.value)}
// // // // //                   placeholder="Your email"
// // // // //                 />
// // // // //               </div>
// // // // //             ) : (
// // // // //               <>
// // // // //                 <h1 className="profile-hero-name">{name || "User Name"}</h1>
// // // // //                 <div className="profile-hero-email">
// // // // //                   <Mail size={13} />
// // // // //                   <span>{email || "user@email.com"}</span>
// // // // //                 </div>
// // // // //                 {goal && (
// // // // //                   <div className={`profile-hero-goal-badge ${goalConfig[goal.goalType]?.className}`}>
// // // // //                     {goalConfig[goal.goalType]?.icon}
// // // // //                     <span>{goalConfig[goal.goalType]?.label}</span>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </>
// // // // //             )}
// // // // //           </div>

// // // // //           <button
// // // // //             className={`profile-edit-btn ${editMode ? "save-mode" : ""}`}
// // // // //             onClick={() => setEditMode(!editMode)}
// // // // //           >
// // // // //             {editMode ? <><Save size={14} /> Save</> : <><Edit3 size={14} /> Edit</>}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ── GOAL STATS ROW ── */}
// // // // //       {goal && (
// // // // //         <div className="profile-stats-row">
// // // // //           <div className="profile-stat-pill">
// // // // //             <span className="profile-stat-pill-label">Current</span>
// // // // //             <span className="profile-stat-pill-value">{goal.currentWeight} kg</span>
// // // // //           </div>
// // // // //           <div className="profile-stat-arrow">
// // // // //             <ChevronRight size={20} color="#64748b" />
// // // // //           </div>
// // // // //           <div className="profile-stat-pill target">
// // // // //             <span className="profile-stat-pill-label">Target</span>
// // // // //             <span className="profile-stat-pill-value">{goal.targetWeight} kg</span>
// // // // //           </div>
// // // // //           <div className="profile-stat-pill progress">
// // // // //             <span className="profile-stat-pill-label">To Go</span>
// // // // //             <span className="profile-stat-pill-value">
// // // // //               {Math.abs(goal.currentWeight - goal.targetWeight)} kg
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ── DAILY TARGETS ── */}
// // // // //       {goal && (
// // // // //         <div className="profile-section-card">
// // // // //           <div className="profile-section-header">
// // // // //             <Target size={16} color="#6366f1" />
// // // // //             <h3 className="profile-section-title">Daily Targets</h3>
// // // // //           </div>
// // // // //           <div className="profile-targets-grid">
// // // // //             <div className="profile-target-item calories-border">
// // // // //               <div className="profile-target-icon calories-bg">
// // // // //                 <Flame size={16} color="#fdba74" />
// // // // //               </div>
// // // // //               <div className="profile-target-info">
// // // // //                 <span className="profile-target-label">Calories</span>
// // // // //                 <span className="profile-target-value calories-text">{goal.dailyCalorieTarget} kcal</span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="profile-target-item protein-border">
// // // // //               <div className="profile-target-icon protein-bg">
// // // // //                 <Zap size={16} color="#6ee7b7" />
// // // // //               </div>
// // // // //               <div className="profile-target-info">
// // // // //                 <span className="profile-target-label">Protein</span>
// // // // //                 <span className="profile-target-value protein-text">{goal.dailyProteinTarget}g</span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="profile-target-item water-border">
// // // // //               <div className="profile-target-icon water-bg">
// // // // //                 <Droplets size={16} color="#7dd3fc" />
// // // // //               </div>
// // // // //               <div className="profile-target-info">
// // // // //                 <span className="profile-target-label">Water</span>
// // // // //                 <span className="profile-target-value water-text">{goal.dailyWaterTarget}L</span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="profile-target-item steps-border">
// // // // //               <div className="profile-target-icon steps-bg">
// // // // //                 <Footprints size={16} color="#93c5fd" />
// // // // //               </div>
// // // // //               <div className="profile-target-info">
// // // // //                 <span className="profile-target-label">Steps</span>
// // // // //                 <span className="profile-target-value steps-text">{goal.dailyStepTarget?.toLocaleString()}</span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ── TODAY'S ACTIVITY ── */}
// // // // //       {todayActivity && targets && (
// // // // //         <div className="profile-section-card">
// // // // //           <div className="profile-section-header">
// // // // //             <Activity size={16} color="#6366f1" />
// // // // //             <h3 className="profile-section-title">Today's Activity</h3>
// // // // //           </div>
// // // // //           <div className="profile-activity-list">

// // // // //             <div className="profile-activity-row">
// // // // //               <div className="profile-activity-left">
// // // // //                 <div className="profile-target-icon calories-bg">
// // // // //                   <Flame size={14} color="#fdba74" />
// // // // //                 </div>
// // // // //                 <span className="profile-activity-label">Calories Burned</span>
// // // // //               </div>
// // // // //               <div className="profile-activity-right">
// // // // //                 <span className="profile-activity-value calories-text">
// // // // //                   {todayActivity.caloriesBurned || 0}
// // // // //                 </span>
// // // // //                 <span className="profile-activity-target">/ {targets.calories} kcal</span>
// // // // //               </div>
// // // // //               <div className="profile-activity-bar-wrap">
// // // // //                 <div className="profile-activity-bar">
// // // // //                   <div
// // // // //                     className="profile-activity-bar-fill calories-fill"
// // // // //                     style={{ width: `${getPercent(todayActivity.caloriesBurned, targets.calories)}%` }}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <span className="profile-activity-pct">
// // // // //                   {getPercent(todayActivity.caloriesBurned, targets.calories)}%
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="profile-activity-row">
// // // // //               <div className="profile-activity-left">
// // // // //                 <div className="profile-target-icon protein-bg">
// // // // //                   <Zap size={14} color="#6ee7b7" />
// // // // //                 </div>
// // // // //                 <span className="profile-activity-label">Protein</span>
// // // // //               </div>
// // // // //               <div className="profile-activity-right">
// // // // //                 <span className="profile-activity-value protein-text">
// // // // //                   {todayActivity.proteinIntake || 0}g
// // // // //                 </span>
// // // // //                 <span className="profile-activity-target">/ {targets.protein}g</span>
// // // // //               </div>
// // // // //               <div className="profile-activity-bar-wrap">
// // // // //                 <div className="profile-activity-bar">
// // // // //                   <div
// // // // //                     className="profile-activity-bar-fill protein-fill"
// // // // //                     style={{ width: `${getPercent(todayActivity.proteinIntake, targets.protein)}%` }}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <span className="profile-activity-pct">
// // // // //                   {getPercent(todayActivity.proteinIntake, targets.protein)}%
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="profile-activity-row">
// // // // //               <div className="profile-activity-left">
// // // // //                 <div className="profile-target-icon water-bg">
// // // // //                   <Droplets size={14} color="#7dd3fc" />
// // // // //                 </div>
// // // // //                 <span className="profile-activity-label">Water</span>
// // // // //               </div>
// // // // //               <div className="profile-activity-right">
// // // // //                 <span className="profile-activity-value water-text">
// // // // //                   {todayActivity.waterIntake || 0}L
// // // // //                 </span>
// // // // //                 <span className="profile-activity-target">/ {targets.water}L</span>
// // // // //               </div>
// // // // //               <div className="profile-activity-bar-wrap">
// // // // //                 <div className="profile-activity-bar">
// // // // //                   <div
// // // // //                     className="profile-activity-bar-fill water-fill"
// // // // //                     style={{ width: `${getPercent(todayActivity.waterIntake, targets.water)}%` }}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <span className="profile-activity-pct">
// // // // //                   {getPercent(todayActivity.waterIntake, targets.water)}%
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="profile-activity-row">
// // // // //               <div className="profile-activity-left">
// // // // //                 <div className="profile-target-icon steps-bg">
// // // // //                   <Footprints size={14} color="#93c5fd" />
// // // // //                 </div>
// // // // //                 <span className="profile-activity-label">Steps</span>
// // // // //               </div>
// // // // //               <div className="profile-activity-right">
// // // // //                 <span className="profile-activity-value steps-text">
// // // // //                   {todayActivity.steps?.toLocaleString() || 0}
// // // // //                 </span>
// // // // //                 <span className="profile-activity-target">/ {targets.steps?.toLocaleString()}</span>
// // // // //               </div>
// // // // //               <div className="profile-activity-bar-wrap">
// // // // //                 <div className="profile-activity-bar">
// // // // //                   <div
// // // // //                     className="profile-activity-bar-fill steps-fill"
// // // // //                     style={{ width: `${getPercent(todayActivity.steps, targets.steps)}%` }}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <span className="profile-activity-pct">
// // // // //                   {getPercent(todayActivity.steps, targets.steps)}%
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>

// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ── ACHIEVEMENT BADGE ── */}
// // // // //       {goal && (
// // // // //         <div className="profile-achievement-card">
// // // // //           <Award size={20} color="#f59e0b" />
// // // // //           <div>
// // // // //             <p className="profile-achievement-title">Keep it up! 🎯</p>
// // // // //             <p className="profile-achievement-text">
// // // // //               You are {Math.abs(goal.currentWeight - goal.targetWeight)} kg away from your goal!
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Profile;


// // // // import React, { useState, useEffect } from "react";
// // // // import { useAppContext } from "../context/AppContext";
// // // // import { getGoal, getTodayActivity } from "../api/auth";
// // // // import {
// // // //   User, Mail, Edit3, Save, Flame, Footprints,
// // // //   Droplets, Zap, Target, Scale, TrendingUp,
// // // //   Award, ChevronRight, Activity
// // // // } from "lucide-react";

// // // // const Profile = () => {
// // // //   const { user } = useAppContext();
// // // //   const [editMode, setEditMode] = useState(false);
// // // //   const [name, setName] = useState(user?.name || "");
// // // //   const [email, setEmail] = useState(user?.email || "");
// // // //   const [goal, setGoal] = useState(null);
// // // //   const [todayActivity, setTodayActivity] = useState(null);
// // // //   const [targets, setTargets] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const loadData = async () => {
// // // //       try {
// // // //         const goalRes = await getGoal();
// // // //         if (goalRes.data) setGoal(goalRes.data);
// // // //       } catch (err) { console.log("No goal"); }
// // // //       try {
// // // //         const actRes = await getTodayActivity();
// // // //         if (actRes.data.activity) setTodayActivity(actRes.data.activity);
// // // //         if (actRes.data.targets) setTargets(actRes.data.targets);
// // // //       } catch (err) { console.log("No activity"); }
// // // //       setLoading(false);
// // // //     };
// // // //     loadData();
// // // //   }, []);

// // // //   const goalConfig = {
// // // //     "weight-loss": { label: "Weight Loss",     icon: <Flame size={14} />,      color: "#f97316", bg: "rgba(249,115,22,0.15)",  border: "rgba(249,115,22,0.3)" },
// // // //     "weight-gain": { label: "Weight Gain",     icon: <TrendingUp size={14} />, color: "#22c55e", bg: "rgba(34,197,94,0.15)",   border: "rgba(34,197,94,0.3)" },
// // // //     "maintain":    { label: "Maintain Weight", icon: <Scale size={14} />,      color: "#3b82f6", bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.3)" },
// // // //   };

// // // //   const getPercent = (value, target) => {
// // // //     if (!target || target === 0) return 0;
// // // //     return Math.min(Math.round((value / target) * 100), 100);
// // // //   };

// // // //   const currentGoal = goal ? goalConfig[goal.goalType] : null;

// // // //   if (loading) {
// // // //     return (
// // // //       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", flexDirection: "column", gap: "12px" }}>
// // // //         <div style={{ width: "36px", height: "36px", border: "3px solid rgba(99,102,241,0.2)", borderTop: "3px solid #6366f1", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
// // // //         <span style={{ color: "#64748b", fontSize: "14px" }}>Loading profile...</span>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>

// // // //       {/* ── HERO CARD ── */}
// // // //       <div style={{ position: "relative", background: "linear-gradient(135deg, #1e293b, #0f172a)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "20px", padding: "24px", overflow: "hidden" }}>

// // // //         {/* BG Glow */}
// // // //         <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent)", borderRadius: "50%", pointerEvents: "none" }} />

// // // //         <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>

// // // //           {/* Avatar */}
// // // //           <div style={{ position: "relative", flexShrink: 0 }}>
// // // //             <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid rgba(99,102,241,0.4)" }}>
// // // //               <User size={36} color="white" strokeWidth={1.5} />
// // // //             </div>
// // // //             {currentGoal && (
// // // //               <div style={{ position: "absolute", bottom: "2px", right: "2px", width: "14px", height: "14px", borderRadius: "50%", background: currentGoal.color, border: "2px solid #0f172a" }} />
// // // //             )}
// // // //           </div>

// // // //           {/* Info */}
// // // //           <div style={{ flex: 1 }}>
// // // //             {editMode ? (
// // // //               <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
// // // //                 <input
// // // //                   value={name}
// // // //                   onChange={(e) => setName(e.target.value)}
// // // //                   placeholder="Your name"
// // // //                   style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none" }}
// // // //                 />
// // // //                 <input
// // // //                   value={email}
// // // //                   onChange={(e) => setEmail(e.target.value)}
// // // //                   placeholder="Your email"
// // // //                   style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none" }}
// // // //                 />
// // // //               </div>
// // // //             ) : (
// // // //               <>
// // // //                 <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 4px 0" }}>{name || "User Name"}</h1>
// // // //                 <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#64748b", fontSize: "13px", marginBottom: "8px" }}>
// // // //                   <Mail size={13} /><span>{email || "user@email.com"}</span>
// // // //                 </div>
// // // //                 {currentGoal && (
// // // //                   <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, background: currentGoal.bg, color: currentGoal.color, border: `1px solid ${currentGoal.border}` }}>
// // // //                     {currentGoal.icon}<span>{currentGoal.label}</span>
// // // //                   </div>
// // // //                 )}
// // // //               </>
// // // //             )}
// // // //           </div>

// // // //           {/* Edit Button */}
// // // //           <button
// // // //             onClick={() => setEditMode(!editMode)}
// // // //             style={{ padding: "8px 16px", borderRadius: "10px", border: editMode ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(99,102,241,0.4)", background: editMode ? "rgba(34,197,94,0.1)" : "rgba(99,102,241,0.1)", color: editMode ? "#22c55e" : "#818cf8", fontSize: "13px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}
// // // //           >
// // // //             {editMode ? <><Save size={14} />Save</> : <><Edit3 size={14} />Edit</>}
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* ── WEIGHT PROGRESS ROW ── */}
// // // //       {goal && (
// // // //         <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "16px" }}>
// // // //           <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "12px 8px", border: "1px solid rgba(255,255,255,0.06)" }}>
// // // //             <span style={{ fontSize: "11px", color: "#64748b" }}>Current</span>
// // // //             <span style={{ fontSize: "18px", fontWeight: 700, color: "#f1f5f9" }}>{goal.currentWeight} kg</span>
// // // //           </div>
// // // //           <ChevronRight size={20} color="#64748b" />
// // // //           <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", background: "rgba(34,197,94,0.06)", borderRadius: "12px", padding: "12px 8px", border: "1px solid rgba(34,197,94,0.2)" }}>
// // // //             <span style={{ fontSize: "11px", color: "#64748b" }}>Target</span>
// // // //             <span style={{ fontSize: "18px", fontWeight: 700, color: "#22c55e" }}>{goal.targetWeight} kg</span>
// // // //           </div>
// // // //           <ChevronRight size={20} color="#64748b" />
// // // //           <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", background: "rgba(99,102,241,0.06)", borderRadius: "12px", padding: "12px 8px", border: "1px solid rgba(99,102,241,0.2)" }}>
// // // //             <span style={{ fontSize: "11px", color: "#64748b" }}>To Go</span>
// // // //             <span style={{ fontSize: "18px", fontWeight: 700, color: "#818cf8" }}>{Math.abs(goal.currentWeight - goal.targetWeight)} kg</span>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* ── DAILY TARGETS ── */}
// // // //       {goal && (
// // // //         <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "18px" }}>
// // // //           <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
// // // //             <Target size={16} color="#6366f1" />
// // // //             <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#f1f5f9", margin: 0 }}>Daily Targets</h3>
// // // //           </div>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
// // // //             {[
// // // //               { label: "Calories", value: `${goal.dailyCalorieTarget} kcal`, icon: <Flame size={16} color="#fdba74" />, iconBg: "rgba(253,186,116,0.12)", color: "#fdba74", borderColor: "#fdba74" },
// // // //               { label: "Protein",  value: `${goal.dailyProteinTarget}g`,     icon: <Zap size={16} color="#6ee7b7" />,   iconBg: "rgba(110,231,183,0.12)", color: "#6ee7b7", borderColor: "#6ee7b7" },
// // // //               { label: "Water",    value: `${goal.dailyWaterTarget}L`,       icon: <Droplets size={16} color="#7dd3fc" />, iconBg: "rgba(125,211,252,0.12)", color: "#7dd3fc", borderColor: "#7dd3fc" },
// // // //               { label: "Steps",    value: goal.dailyStepTarget?.toLocaleString(), icon: <Footprints size={16} color="#93c5fd" />, iconBg: "rgba(147,197,253,0.12)", color: "#93c5fd", borderColor: "#93c5fd" },
// // // //             ].map((item, i) => (
// // // //               <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${item.borderColor}` }}>
// // // //                 <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // //                   {item.icon}
// // // //                 </div>
// // // //                 <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
// // // //                   <span style={{ fontSize: "11px", color: "#64748b" }}>{item.label}</span>
// // // //                   <span style={{ fontSize: "15px", fontWeight: 700, color: item.color }}>{item.value}</span>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* ── TODAY'S ACTIVITY ── */}
// // // //       {todayActivity && targets && (
// // // //         <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "18px" }}>
// // // //           <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
// // // //             <Activity size={16} color="#6366f1" />
// // // //             <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#f1f5f9", margin: 0 }}>Today's Activity</h3>
// // // //           </div>
// // // //           <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
// // // //             {[
// // // //               { label: "Calories Burned", value: `${todayActivity.caloriesBurned || 0}`, target: `/ ${targets.calories} kcal`, icon: <Flame size={14} color="#fdba74" />, iconBg: "rgba(253,186,116,0.12)", color: "#fdba74", fill: "linear-gradient(90deg, #fdba74, #f97316)", current: todayActivity.caloriesBurned, max: targets.calories },
// // // //               { label: "Protein",         value: `${todayActivity.proteinIntake || 0}g`, target: `/ ${targets.protein}g`,    icon: <Zap size={14} color="#6ee7b7" />,   iconBg: "rgba(110,231,183,0.12)", color: "#6ee7b7", fill: "linear-gradient(90deg, #6ee7b7, #22c55e)", current: todayActivity.proteinIntake, max: targets.protein },
// // // //               { label: "Water",           value: `${todayActivity.waterIntake || 0}L`,  target: `/ ${targets.water}L`,       icon: <Droplets size={14} color="#7dd3fc" />, iconBg: "rgba(125,211,252,0.12)", color: "#7dd3fc", fill: "linear-gradient(90deg, #7dd3fc, #3b82f6)", current: todayActivity.waterIntake, max: targets.water },
// // // //               { label: "Steps",           value: (todayActivity.steps || 0).toLocaleString(), target: `/ ${targets.steps?.toLocaleString()}`, icon: <Footprints size={14} color="#93c5fd" />, iconBg: "rgba(147,197,253,0.12)", color: "#93c5fd", fill: "linear-gradient(90deg, #93c5fd, #6366f1)", current: todayActivity.steps, max: targets.steps },
// // // //             ].map((item, i) => {
// // // //               const pct = getPercent(item.current, item.max);
// // // //               return (
// // // //                 <div key={i}>
// // // //                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
// // // //                     <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // // //                       <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>{item.icon}</div>
// // // //                       <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 500 }}>{item.label}</span>
// // // //                     </div>
// // // //                     <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
// // // //                       <span style={{ fontSize: "16px", fontWeight: 700, color: item.color }}>{item.value}</span>
// // // //                       <span style={{ fontSize: "12px", color: "#475569" }}>{item.target}</span>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // // //                     <div style={{ flex: 1, height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "10px", overflow: "hidden" }}>
// // // //                       <div style={{ height: "100%", borderRadius: "10px", background: item.fill, width: `${pct}%`, transition: "width 0.4s ease" }} />
// // // //                     </div>
// // // //                     <span style={{ fontSize: "12px", color: "#64748b", minWidth: "35px", textAlign: "right" }}>{pct}%</span>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* ── ACHIEVEMENT ── */}
// // // //       {goal && (
// // // //         <div style={{ display: "flex", alignItems: "center", gap: "14px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "14px", padding: "16px" }}>
// // // //           <Award size={22} color="#f59e0b" />
// // // //           <div>
// // // //             <p style={{ fontSize: "14px", fontWeight: 700, color: "#f59e0b", margin: "0 0 2px 0" }}>Keep it up! 🎯</p>
// // // //             <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
// // // //               You are {Math.abs(goal.currentWeight - goal.targetWeight)} kg away from your goal!
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //     </div>
// // // //   );
// // // // };

// // // // export default Profile;


// // // import React, { useState, useEffect } from "react";
// // // import { useAppContext } from "../context/AppContext";
// // // import { getGoal, getTodayActivity } from "../api/auth";
// // // import { User, Mail, Edit3, Save, Flame, Footprints, Droplets, Zap, Target, Scale, TrendingUp, Award, ChevronRight, Activity } from "lucide-react";

// // // const Profile = () => {
// // //   const { user } = useAppContext();
// // //   const [editMode, setEditMode] = useState(false);
// // //   const [name, setName] = useState(user?.name || "");
// // //   const [email, setEmail] = useState(user?.email || "");
// // //   const [goal, setGoal] = useState(null);
// // //   const [todayActivity, setTodayActivity] = useState(null);
// // //   const [targets, setTargets] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const loadData = async () => {
// // //       try { const goalRes = await getGoal(); if (goalRes.data) setGoal(goalRes.data); } catch (err) {}
// // //       try {
// // //         const actRes = await getTodayActivity();
// // //         if (actRes.data.activity) setTodayActivity(actRes.data.activity);
// // //         if (actRes.data.targets) setTargets(actRes.data.targets);
// // //       } catch (err) {}
// // //       setLoading(false);
// // //     };
// // //     loadData();
// // //   }, []);

// // //   const goalConfig = {
// // //     "weight-loss": { label: "Weight Loss",     icon: <Flame size={13} />,      color: "#f97316", bg: "rgba(249,115,22,0.15)",  border: "rgba(249,115,22,0.35)" },
// // //     "weight-gain": { label: "Weight Gain",     icon: <TrendingUp size={13} />, color: "#22c55e", bg: "rgba(34,197,94,0.15)",   border: "rgba(34,197,94,0.35)"  },
// // //     "maintain":    { label: "Maintain Weight", icon: <Scale size={13} />,      color: "#3b82f6", bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.35)" },
// // //   };

// // //   const getPercent = (val, max) => (!max || max === 0) ? 0 : Math.min(Math.round((val / max) * 100), 100);
// // //   const currentGoal = goal ? goalConfig[goal.goalType] : null;

// // //   const S = {
// // //     page:    { minHeight: "100vh", background: "#0f172a", padding: "20px", boxSizing: "border-box" },
// // //     card:    { background: "#1e293b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "20px", marginBottom: "14px" },
// // //     label:   { fontSize: "11px", color: "#64748b", marginBottom: "2px" },
// // //     value:   { fontSize: "15px", fontWeight: 700, color: "#f1f5f9" },
// // //     divider: { height: "1px", background: "rgba(255,255,255,0.06)", margin: "14px 0" },
// // //     secTitle:{ fontSize: "12px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.8px", display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" },
// // //   };

// // //   if (loading) return (
// // //     <div style={{ ...S.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //       <div style={{ width: "32px", height: "32px", border: "3px solid rgba(99,102,241,0.2)", borderTop: "3px solid #6366f1", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
// // //     </div>
// // //   );

// // //   return (
// // //     <div style={S.page}>
// // //       <div style={{ maxWidth: "560px", margin: "0 auto" }}>

// // //         {/* ══ HERO ══ */}
// // //         <div style={{ ...S.card, background: "linear-gradient(145deg, #1e293b, #162032)", border: "1px solid rgba(99,102,241,0.25)", position: "relative", overflow: "hidden" }}>
// // //           <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent)", borderRadius: "50%", pointerEvents: "none" }} />

// // //           <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>

// // //             {/* Avatar */}
// // //             <div style={{ position: "relative", flexShrink: 0 }}>
// // //               <div style={{ width: 70, height: 70, borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid rgba(99,102,241,0.4)" }}>
// // //                 <User size={34} color="white" strokeWidth={1.5} />
// // //               </div>
// // //               {currentGoal && (
// // //                 <div style={{ position: "absolute", bottom: 2, right: 2, width: 13, height: 13, borderRadius: "50%", background: currentGoal.color, border: "2px solid #162032" }} />
// // //               )}
// // //             </div>

// // //             {/* Info */}
// // //             <div style={{ flex: 1 }}>
// // //               {editMode ? (
// // //                 <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
// // //                   <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
// // //                     style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none", width: "100%" }} />
// // //                   <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
// // //                     style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none", width: "100%" }} />
// // //                 </div>
// // //               ) : (
// // //                 <>
// // //                   <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 4px 0" }}>{name || "User Name"}</h2>
// // //                   <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#64748b", fontSize: "13px", marginBottom: "8px" }}>
// // //                     <Mail size={12} /><span>{email || "user@email.com"}</span>
// // //                   </div>
// // //                   {currentGoal && (
// // //                     <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, background: currentGoal.bg, color: currentGoal.color, border: `1px solid ${currentGoal.border}` }}>
// // //                       {currentGoal.icon}<span>{currentGoal.label}</span>
// // //                     </div>
// // //                   )}
// // //                 </>
// // //               )}
// // //             </div>

// // //             {/* Edit Btn */}
// // //             <button onClick={() => setEditMode(!editMode)}
// // //               style={{ padding: "7px 14px", borderRadius: "10px", border: `1px solid ${editMode ? "rgba(34,197,94,0.4)" : "rgba(99,102,241,0.4)"}`, background: editMode ? "rgba(34,197,94,0.1)" : "rgba(99,102,241,0.1)", color: editMode ? "#22c55e" : "#818cf8", fontSize: "13px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
// // //               {editMode ? <><Save size={13} />Save</> : <><Edit3 size={13} />Edit</>}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* ══ WEIGHT PROGRESS ══ */}
// // //         {goal && (
// // //           <div style={{ ...S.card, display: "flex", alignItems: "center", gap: "10px" }}>
// // //             {[
// // //               { label: "Current Weight", value: `${goal.currentWeight} kg`, color: "#f1f5f9", border: "rgba(255,255,255,0.08)" },
// // //               null,
// // //               { label: "Target Weight",  value: `${goal.targetWeight} kg`,  color: "#22c55e", border: "rgba(34,197,94,0.25)" },
// // //               null,
// // //               { label: "Remaining",      value: `${Math.abs(goal.currentWeight - goal.targetWeight)} kg`, color: "#818cf8", border: "rgba(99,102,241,0.25)" },
// // //             ].map((item, i) =>
// // //               item === null ? <ChevronRight key={i} size={18} color="#334155" /> : (
// // //                 <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", padding: "12px 6px", border: `1px solid ${item.border}` }}>
// // //                   <span style={{ fontSize: "10px", color: "#64748b", textAlign: "center" }}>{item.label}</span>
// // //                   <span style={{ fontSize: "16px", fontWeight: 700, color: item.color }}>{item.value}</span>
// // //                 </div>
// // //               )
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* ══ DAILY TARGETS ══ */}
// // //         {goal && (
// // //           <div style={S.card}>
// // //             <div style={S.secTitle}><Target size={14} color="#6366f1" />Daily Targets</div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
// // //               {[
// // //                 { label: "Calories", value: `${goal.dailyCalorieTarget} kcal`, icon: <Flame size={15} color="#fdba74" />,      iconBg: "rgba(253,186,116,0.12)", color: "#fdba74", borderLeft: "#fdba74" },
// // //                 { label: "Protein",  value: `${goal.dailyProteinTarget}g`,     icon: <Zap size={15} color="#6ee7b7" />,         iconBg: "rgba(110,231,183,0.12)", color: "#6ee7b7", borderLeft: "#6ee7b7" },
// // //                 { label: "Water",    value: `${goal.dailyWaterTarget}L`,       icon: <Droplets size={15} color="#7dd3fc" />,    iconBg: "rgba(125,211,252,0.12)", color: "#7dd3fc", borderLeft: "#7dd3fc" },
// // //                 { label: "Steps",    value: goal.dailyStepTarget?.toLocaleString(), icon: <Footprints size={15} color="#93c5fd" />, iconBg: "rgba(147,197,253,0.12)", color: "#93c5fd", borderLeft: "#93c5fd" },
// // //               ].map((item, i) => (
// // //                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${item.borderLeft}` }}>
// // //                   <div style={{ width: 32, height: 32, borderRadius: "8px", background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
// // //                   <div>
// // //                     <div style={S.label}>{item.label}</div>
// // //                     <div style={{ fontSize: "15px", fontWeight: 700, color: item.color }}>{item.value}</div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* ══ TODAY'S ACTIVITY ══ */}
// // //         {todayActivity && targets && (
// // //           <div style={S.card}>
// // //             <div style={S.secTitle}><Activity size={14} color="#6366f1" />Today's Activity</div>
// // //             <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
// // //               {[
// // //                 { label: "Calories Burned", val: todayActivity.caloriesBurned || 0, max: targets.calories, unit: "kcal", icon: <Flame size={13} color="#fdba74" />,      iconBg: "rgba(253,186,116,0.12)", color: "#fdba74", fill: "linear-gradient(90deg,#fdba74,#f97316)" },
// // //                 { label: "Protein",         val: todayActivity.proteinIntake || 0,  max: targets.protein,  unit: "g",    icon: <Zap size={13} color="#6ee7b7" />,         iconBg: "rgba(110,231,183,0.12)", color: "#6ee7b7", fill: "linear-gradient(90deg,#6ee7b7,#22c55e)" },
// // //                 { label: "Water",           val: todayActivity.waterIntake || 0,    max: targets.water,    unit: "L",    icon: <Droplets size={13} color="#7dd3fc" />,    iconBg: "rgba(125,211,252,0.12)", color: "#7dd3fc", fill: "linear-gradient(90deg,#7dd3fc,#3b82f6)" },
// // //                 { label: "Steps",           val: todayActivity.steps || 0,          max: targets.steps,    unit: "",     icon: <Footprints size={13} color="#93c5fd" />,  iconBg: "rgba(147,197,253,0.12)", color: "#93c5fd", fill: "linear-gradient(90deg,#93c5fd,#6366f1)" },
// // //               ].map((item, i) => {
// // //                 const pct = getPercent(item.val, item.max);
// // //                 return (
// // //                   <div key={i}>
// // //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
// // //                       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // //                         <div style={{ width: 26, height: 26, borderRadius: "6px", background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>{item.icon}</div>
// // //                         <span style={{ fontSize: "13px", color: "#94a3b8" }}>{item.label}</span>
// // //                       </div>
// // //                       <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
// // //                         <span style={{ fontSize: "15px", fontWeight: 700, color: item.color }}>{item.val?.toLocaleString()}{item.unit}</span>
// // //                         <span style={{ fontSize: "12px", color: "#475569" }}>/ {item.max?.toLocaleString()}{item.unit}</span>
// // //                       </div>
// // //                     </div>
// // //                     <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // //                       <div style={{ flex: 1, height: "5px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", overflow: "hidden" }}>
// // //                         <div style={{ height: "100%", borderRadius: "10px", background: item.fill, width: `${pct}%`, transition: "width 0.4s ease" }} />
// // //                       </div>
// // //                       <span style={{ fontSize: "11px", color: "#64748b", minWidth: "32px", textAlign: "right" }}>{pct}%</span>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* ══ ACHIEVEMENT ══ */}
// // //         {goal && (
// // //           <div style={{ display: "flex", alignItems: "center", gap: "14px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "14px", padding: "16px", marginBottom: "14px" }}>
// // //             <Award size={22} color="#f59e0b" />
// // //             <div>
// // //               <p style={{ fontSize: "14px", fontWeight: 700, color: "#f59e0b", margin: "0 0 3px 0" }}>Keep it up! 🎯</p>
// // //               <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
// // //                 You are {Math.abs(goal.currentWeight - goal.targetWeight)} kg away from your goal!
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;




// // import React, { useState, useEffect } from "react";
// // import { useAppContext } from "../context/AppContext";
// // import { getGoal, getTodayActivity, getDietPlan } from "../api/auth";
// // import { User, Mail, Edit3, Save, Flame, Footprints, Droplets, Zap, Target, Scale, TrendingUp, Award, ChevronRight, Activity, UtensilsCrossed, Clock } from "lucide-react";

// // const Profile = () => {
// //   const { user } = useAppContext();
// //   const [editMode, setEditMode] = useState(false);
// //   const [name, setName] = useState(user?.name || "");
// //   const [email, setEmail] = useState(user?.email || "");
// //   const [goal, setGoal] = useState(null);
// //   const [todayActivity, setTodayActivity] = useState(null);
// //   const [targets, setTargets] = useState(null);
// //   const [dietPlan, setDietPlan] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const loadData = async () => {
// //       try { const r = await getGoal(); if (r.data) setGoal(r.data); } catch (e) {}
// //       try {
// //         const r = await getTodayActivity();
// //         if (r.data.activity) setTodayActivity(r.data.activity);
// //         if (r.data.targets) setTargets(r.data.targets);
// //       } catch (e) {}
// //       try { const r = await getDietPlan(); if (r.data) setDietPlan(r.data); } catch (e) {}
// //       setLoading(false);
// //     };
// //     loadData();
// //   }, []);

// //   const goalConfig = {
// //     "weight-loss": { label: "Weight Loss",     icon: <Flame size={13} />,      color: "#f97316", bg: "rgba(249,115,22,0.15)",  border: "rgba(249,115,22,0.35)" },
// //     "weight-gain": { label: "Weight Gain",     icon: <TrendingUp size={13} />, color: "#22c55e", bg: "rgba(34,197,94,0.15)",   border: "rgba(34,197,94,0.35)"  },
// //     "maintain":    { label: "Maintain Weight", icon: <Scale size={13} />,      color: "#3b82f6", bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.35)" },
// //   };

// //   const mealEmojis = { Breakfast: "🌅", Lunch: "🍚", Snack: "🥤", Dinner: "🌙" };
// //   const mealColors = { Breakfast: "#f59e0b", Lunch: "#3b82f6", Snack: "#8b5cf6", Dinner: "#ec4899" };

// //   const getPercent = (val, max) => (!max || max === 0) ? 0 : Math.min(Math.round((val / max) * 100), 100);
// //   const currentGoal = goal ? goalConfig[goal.goalType] : null;

// //   // ✅ Brighter label color
// //   const labelColor = "#94a3b8";
// //   const headingColor = "#cbd5e1";

// //   const S = {
// //     page:     { minHeight: "100vh", background: "#0f172a", padding: "20px", boxSizing: "border-box" },
// //     card:     { background: "#1e293b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "20px", marginBottom: "14px" },
// //     secTitle: { fontSize: "13px", fontWeight: 700, color: headingColor, textTransform: "uppercase", letterSpacing: "0.8px", display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" },
// //   };

// //   if (loading) return (
// //     <div style={{ ...S.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
// //       <div style={{ width: "32px", height: "32px", border: "3px solid rgba(99,102,241,0.2)", borderTop: "3px solid #6366f1", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
// //     </div>
// //   );

// //   return (
// //     <div style={S.page}>
// //       <div style={{ maxWidth: "560px", margin: "0 auto" }}>

// //         {/* ══ HERO ══ */}
// //         <div style={{ ...S.card, background: "linear-gradient(145deg, #1e293b, #162032)", border: "1px solid rgba(99,102,241,0.25)", position: "relative", overflow: "hidden" }}>
// //           <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent)", borderRadius: "50%", pointerEvents: "none" }} />
// //           <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
// //             <div style={{ position: "relative", flexShrink: 0 }}>
// //               <div style={{ width: 70, height: 70, borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid rgba(99,102,241,0.4)" }}>
// //                 <User size={34} color="white" strokeWidth={1.5} />
// //               </div>
// //               {currentGoal && <div style={{ position: "absolute", bottom: 2, right: 2, width: 13, height: 13, borderRadius: "50%", background: currentGoal.color, border: "2px solid #162032" }} />}
// //             </div>
// //             <div style={{ flex: 1 }}>
// //               {editMode ? (
// //                 <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
// //                   <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none", width: "100%" }} />
// //                   <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none", width: "100%" }} />
// //                 </div>
// //               ) : (
// //                 <>
// //                   <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 4px 0" }}>{name || "User Name"}</h2>
// //                   <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#94a3b8", fontSize: "13px", marginBottom: "8px" }}>
// //                     <Mail size={12} /><span>{email || "user@email.com"}</span>
// //                   </div>
// //                   {currentGoal && (
// //                     <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, background: currentGoal.bg, color: currentGoal.color, border: `1px solid ${currentGoal.border}` }}>
// //                       {currentGoal.icon}<span>{currentGoal.label}</span>
// //                     </div>
// //                   )}
// //                 </>
// //               )}
// //             </div>
// //             <button onClick={() => setEditMode(!editMode)} style={{ padding: "7px 14px", borderRadius: "10px", border: `1px solid ${editMode ? "rgba(34,197,94,0.4)" : "rgba(99,102,241,0.4)"}`, background: editMode ? "rgba(34,197,94,0.1)" : "rgba(99,102,241,0.1)", color: editMode ? "#22c55e" : "#818cf8", fontSize: "13px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
// //               {editMode ? <><Save size={13} />Save</> : <><Edit3 size={13} />Edit</>}
// //             </button>
// //           </div>
// //         </div>

// //         {/* ══ WEIGHT PROGRESS ══ */}
// //         {goal && (
// //           <div style={{ ...S.card, display: "flex", alignItems: "center", gap: "10px" }}>
// //             {[
// //               { label: "Current Weight", value: `${goal.currentWeight} kg`, color: "#f1f5f9", border: "rgba(255,255,255,0.08)" },
// //               null,
// //               { label: "Target Weight",  value: `${goal.targetWeight} kg`,  color: "#22c55e", border: "rgba(34,197,94,0.25)" },
// //               null,
// //               { label: "Remaining",      value: `${Math.abs(goal.currentWeight - goal.targetWeight)} kg`, color: "#818cf8", border: "rgba(99,102,241,0.25)" },
// //             ].map((item, i) =>
// //               item === null
// //                 ? <ChevronRight key={i} size={18} color="#475569" />
// //                 : (
// //                   <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", padding: "14px 6px", border: `1px solid ${item.border}` }}>
// //                     {/* ✅ Brighter label */}
// //                     <span style={{ fontSize: "11px", color: labelColor, textAlign: "center", fontWeight: 500 }}>{item.label}</span>
// //                     <span style={{ fontSize: "17px", fontWeight: 700, color: item.color }}>{item.value}</span>
// //                   </div>
// //                 )
// //             )}
// //           </div>
// //         )}

// //         {/* ══ DAILY TARGETS ══ */}
// //         {goal && (
// //           <div style={S.card}>
// //             {/* ✅ Brighter heading */}
// //             <div style={S.secTitle}><Target size={14} color="#6366f1" />Daily Targets</div>
// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
// //               {[
// //                 { label: "Calories", value: `${goal.dailyCalorieTarget} kcal`, icon: <Flame size={15} color="#fdba74" />,      iconBg: "rgba(253,186,116,0.12)", color: "#fdba74", bl: "#fdba74" },
// //                 { label: "Protein",  value: `${goal.dailyProteinTarget}g`,     icon: <Zap size={15} color="#6ee7b7" />,         iconBg: "rgba(110,231,183,0.12)", color: "#6ee7b7", bl: "#6ee7b7" },
// //                 { label: "Water",    value: `${goal.dailyWaterTarget}L`,       icon: <Droplets size={15} color="#7dd3fc" />,    iconBg: "rgba(125,211,252,0.12)", color: "#7dd3fc", bl: "#7dd3fc" },
// //                 { label: "Steps",    value: goal.dailyStepTarget?.toLocaleString(), icon: <Footprints size={15} color="#93c5fd" />, iconBg: "rgba(147,197,253,0.12)", color: "#93c5fd", bl: "#93c5fd" },
// //               ].map((item, i) => (
// //                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${item.bl}` }}>
// //                   <div style={{ width: 32, height: 32, borderRadius: "8px", background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
// //                   <div>
// //                     {/* ✅ Brighter label */}
// //                     <div style={{ fontSize: "11px", color: labelColor, marginBottom: "2px", fontWeight: 500 }}>{item.label}</div>
// //                     <div style={{ fontSize: "15px", fontWeight: 700, color: item.color }}>{item.value}</div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* ══ TODAY'S ACTIVITY ══ */}
// //         {todayActivity && targets && (
// //           <div style={S.card}>
// //             <div style={S.secTitle}><Activity size={14} color="#6366f1" />Today's Activity</div>
// //             <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
// //               {[
// //                 { label: "Calories Burned", val: todayActivity.caloriesBurned || 0, max: targets.calories, unit: "kcal", icon: <Flame size={13} color="#fdba74" />,      iconBg: "rgba(253,186,116,0.12)", color: "#fdba74", fill: "linear-gradient(90deg,#fdba74,#f97316)" },
// //                 { label: "Protein",         val: todayActivity.proteinIntake || 0,  max: targets.protein,  unit: "g",    icon: <Zap size={13} color="#6ee7b7" />,         iconBg: "rgba(110,231,183,0.12)", color: "#6ee7b7", fill: "linear-gradient(90deg,#6ee7b7,#22c55e)" },
// //                 { label: "Water",           val: todayActivity.waterIntake || 0,    max: targets.water,    unit: "L",    icon: <Droplets size={13} color="#7dd3fc" />,    iconBg: "rgba(125,211,252,0.12)", color: "#7dd3fc", fill: "linear-gradient(90deg,#7dd3fc,#3b82f6)" },
// //                 { label: "Steps",           val: todayActivity.steps || 0,          max: targets.steps,    unit: "",     icon: <Footprints size={13} color="#93c5fd" />,  iconBg: "rgba(147,197,253,0.12)", color: "#93c5fd", fill: "linear-gradient(90deg,#93c5fd,#6366f1)" },
// //               ].map((item, i) => {
// //                 const pct = getPercent(item.val, item.max);
// //                 return (
// //                   <div key={i}>
// //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
// //                       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //                         <div style={{ width: 26, height: 26, borderRadius: "6px", background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>{item.icon}</div>
// //                         {/* ✅ Brighter label */}
// //                         <span style={{ fontSize: "13px", color: labelColor, fontWeight: 500 }}>{item.label}</span>
// //                       </div>
// //                       <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
// //                         <span style={{ fontSize: "15px", fontWeight: 700, color: item.color }}>{item.val?.toLocaleString()}{item.unit}</span>
// //                         <span style={{ fontSize: "12px", color: "#64748b" }}>/ {item.max?.toLocaleString()}{item.unit}</span>
// //                       </div>
// //                     </div>
// //                     <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //                       <div style={{ flex: 1, height: "5px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", overflow: "hidden" }}>
// //                         <div style={{ height: "100%", borderRadius: "10px", background: item.fill, width: `${pct}%`, transition: "width 0.4s ease" }} />
// //                       </div>
// //                       <span style={{ fontSize: "11px", color: "#64748b", minWidth: "32px", textAlign: "right" }}>{pct}%</span>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         )}

// //         {/* ══ DIET PLAN ══ */}
// //         {dietPlan && (
// //           <div style={S.card}>
// //             <div style={S.secTitle}><UtensilsCrossed size={14} color="#6366f1" />My Diet Plan</div>

// //             {/* Daily Summary */}
// //             <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
// //               {[
// //                 { label: "Calories", value: `${dietPlan.dailyCalories} kcal`, color: "#fdba74" },
// //                 { label: "Protein",  value: `${dietPlan.dailyProtein}g`,      color: "#6ee7b7" },
// //                 { label: "Water",    value: `${dietPlan.dailyWater}L`,        color: "#7dd3fc" },
// //                 { label: "Steps",    value: dietPlan.dailySteps?.toLocaleString(), color: "#93c5fd" },
// //               ].map((item, i) => (
// //                 <div key={i} style={{ flex: 1, minWidth: "80px", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "10px", textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
// //                   <div style={{ fontSize: "15px", fontWeight: 700, color: item.color }}>{item.value}</div>
// //                   <div style={{ fontSize: "11px", color: labelColor, marginTop: "2px", fontWeight: 500 }}>{item.label}</div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Meals */}
// //             <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// //               {dietPlan.meals?.map((meal, i) => {
// //                 const mealColor = mealColors[meal.meal] || "#6366f1";
// //                 return (
// //                   <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${mealColor}`, borderRadius: "10px", padding: "12px 14px" }}>
// //                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
// //                       <span style={{ fontWeight: 700, fontSize: "14px", color: mealColor }}>
// //                         {mealEmojis[meal.meal] || "🍽️"} {meal.meal}
// //                       </span>
// //                       <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
// //                         <span style={{ fontSize: "12px", color: "#fdba74", fontWeight: 600 }}>{meal.calories} kcal</span>
// //                         <span style={{ fontSize: "12px", color: "#6ee7b7", fontWeight: 600 }}>🥩 {meal.protein}g</span>
// //                         <div style={{ display: "flex", alignItems: "center", gap: "3px", color: "#64748b", fontSize: "11px" }}>
// //                           <Clock size={10} />{meal.time}
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <ul style={{ margin: 0, paddingLeft: "16px" }}>
// //                       {meal.foods?.map((food, j) => (
// //                         <li key={j} style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "3px", lineHeight: "1.5" }}>{food}</li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             {/* Tips */}
// //             {dietPlan.tips && (
// //               <div style={{ marginTop: "14px", background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "10px", padding: "12px 14px" }}>
// //                 <p style={{ fontSize: "12px", fontWeight: 700, color: "#818cf8", marginBottom: "8px" }}>Pro Tips</p>
// //                 <ul style={{ margin: 0, paddingLeft: "16px" }}>
// //                   {dietPlan.tips.map((tip, i) => (
// //                     <li key={i} style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "4px" }}>{tip}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* ══ ACHIEVEMENT ══ */}
// //         {goal && (
// //           <div style={{ display: "flex", alignItems: "center", gap: "14px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "14px", padding: "16px", marginBottom: "14px" }}>
// //             <Award size={22} color="#f59e0b" />
// //             <div>
// //               <p style={{ fontSize: "14px", fontWeight: 700, color: "#f59e0b", margin: "0 0 3px 0" }}>Keep it up! 🎯</p>
// //               <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
// //                 You are {Math.abs(goal.currentWeight - goal.targetWeight)} kg away from your goal!
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


// import React, { useState, useEffect } from "react";
// import { useAppContext } from "../context/AppContext";
// import { getGoal, getDietPlan } from "../api/auth";
// import { User, Mail, Edit3, Save, Flame, Footprints, Droplets, Zap, Target, Scale, TrendingUp, Award, ChevronRight, UtensilsCrossed, Clock, ArrowRight } from "lucide-react";

// const Profile = () => {
//   const { user } = useAppContext();
//   const [editMode, setEditMode] = useState(false);
//   const [name, setName] = useState(user?.name || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [goal, setGoal] = useState(null);
//   const [dietPlan, setDietPlan] = useState(null);
//   const [showDiet, setShowDiet] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       try { const r = await getGoal(); if (r.data) setGoal(r.data); } catch (e) {}
//       try { const r = await getDietPlan(); if (r.data) setDietPlan(r.data); } catch (e) {}
//       setLoading(false);
//     };
//     loadData();
//   }, []);

//   const goalConfig = {
//     "weight-loss": { label: "Weight Loss",     icon: <Flame size={13} />,      color: "#f97316", bg: "rgba(249,115,22,0.15)",  border: "rgba(249,115,22,0.35)" },
//     "weight-gain": { label: "Weight Gain",     icon: <TrendingUp size={13} />, color: "#22c55e", bg: "rgba(34,197,94,0.15)",   border: "rgba(34,197,94,0.35)"  },
//     "maintain":    { label: "Maintain Weight", icon: <Scale size={13} />,      color: "#3b82f6", bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.35)" },
//   };

//   const mealEmojis = { Breakfast: "🌅", Lunch: "🍚", Snack: "🥤", Dinner: "🌙" };
//   const mealColors = { Breakfast: "#f59e0b", Lunch: "#3b82f6", Snack: "#8b5cf6", Dinner: "#ec4899" };

//   const currentGoal = goal ? goalConfig[goal.goalType] : null;
//   const labelColor = "#94a3b8";
//   const headingColor = "#cbd5e1";

//   const S = {
//     page:     { minHeight: "100vh", background: "#0f172a", padding: "20px", boxSizing: "border-box" },
//     card:     { background: "#1e293b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "20px", marginBottom: "14px" },
//     secTitle: { fontSize: "13px", fontWeight: 700, color: headingColor, textTransform: "uppercase", letterSpacing: "0.8px", display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" },
//   };

//   if (loading) return (
//     <div style={{ ...S.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <div style={{ width: "32px", height: "32px", border: "3px solid rgba(99,102,241,0.2)", borderTop: "3px solid #6366f1", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
//     </div>
//   );

//   return (
//     <div style={S.page}>
//       <div style={{ maxWidth: "560px", margin: "0 auto" }}>

//         {/* ══ HERO ══ */}
//         <div style={{ ...S.card, background: "linear-gradient(145deg, #1e293b, #162032)", border: "1px solid rgba(99,102,241,0.25)", position: "relative", overflow: "hidden" }}>
//           <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent)", borderRadius: "50%", pointerEvents: "none" }} />
//           <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
//             <div style={{ position: "relative", flexShrink: 0 }}>
//               <div style={{ width: 70, height: 70, borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid rgba(99,102,241,0.4)" }}>
//                 <User size={34} color="white" strokeWidth={1.5} />
//               </div>
//               {currentGoal && <div style={{ position: "absolute", bottom: 2, right: 2, width: 13, height: 13, borderRadius: "50%", background: currentGoal.color, border: "2px solid #162032" }} />}
//             </div>
//             <div style={{ flex: 1 }}>
//               {editMode ? (
//                 <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//                   <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none", width: "100%" }} />
//                   <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none", width: "100%" }} />
//                 </div>
//               ) : (
//                 <>
//                   <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 4px 0" }}>{name || "User Name"}</h2>
//                   <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#94a3b8", fontSize: "13px", marginBottom: "8px" }}>
//                     <Mail size={12} /><span>{email || "user@email.com"}</span>
//                   </div>
//                   {currentGoal && (
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, background: currentGoal.bg, color: currentGoal.color, border: `1px solid ${currentGoal.border}` }}>
//                       {currentGoal.icon}<span>{currentGoal.label}</span>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//             <button onClick={() => setEditMode(!editMode)} style={{ padding: "7px 14px", borderRadius: "10px", border: `1px solid ${editMode ? "rgba(34,197,94,0.4)" : "rgba(99,102,241,0.4)"}`, background: editMode ? "rgba(34,197,94,0.1)" : "rgba(99,102,241,0.1)", color: editMode ? "#22c55e" : "#818cf8", fontSize: "13px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
//               {editMode ? <><Save size={13} />Save</> : <><Edit3 size={13} />Edit</>}
//             </button>
//           </div>
//         </div>

//         {/* ══ WEIGHT PROGRESS ══ */}
//         {goal && (
//           <div style={{ ...S.card, display: "flex", alignItems: "center", gap: "10px" }}>
//             {[
//               { label: "Current Weight", value: `${goal.currentWeight} kg`, color: "#f1f5f9", border: "rgba(255,255,255,0.08)" },
//               null,
//               { label: "Target Weight",  value: `${goal.targetWeight} kg`,  color: "#22c55e", border: "rgba(34,197,94,0.25)" },
//               null,
//               { label: "Remaining",      value: `${Math.abs(goal.currentWeight - goal.targetWeight)} kg`, color: "#818cf8", border: "rgba(99,102,241,0.25)" },
//             ].map((item, i) =>
//               item === null
//                 ? <ChevronRight key={i} size={18} color="#475569" />
//                 : (
//                   <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", padding: "14px 6px", border: `1px solid ${item.border}` }}>
//                     <span style={{ fontSize: "11px", color: labelColor, textAlign: "center", fontWeight: 500 }}>{item.label}</span>
//                     <span style={{ fontSize: "17px", fontWeight: 700, color: item.color }}>{item.value}</span>
//                   </div>
//                 )
//             )}
//           </div>
//         )}

//         {/* ══ DAILY TARGETS ══ */}
//         {goal && (
//           <div style={S.card}>
//             <div style={S.secTitle}><Target size={14} color="#6366f1" />Daily Targets</div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
//               {[
//                 { label: "Calories", value: `${goal.dailyCalorieTarget} kcal`, icon: <Flame size={15} color="#fdba74" />,      iconBg: "rgba(253,186,116,0.12)", color: "#fdba74", bl: "#fdba74" },
//                 { label: "Protein",  value: `${goal.dailyProteinTarget}g`,     icon: <Zap size={15} color="#6ee7b7" />,         iconBg: "rgba(110,231,183,0.12)", color: "#6ee7b7", bl: "#6ee7b7" },
//                 { label: "Water",    value: `${goal.dailyWaterTarget}L`,       icon: <Droplets size={15} color="#7dd3fc" />,    iconBg: "rgba(125,211,252,0.12)", color: "#7dd3fc", bl: "#7dd3fc" },
//                 { label: "Steps",    value: goal.dailyStepTarget?.toLocaleString(), icon: <Footprints size={15} color="#93c5fd" />, iconBg: "rgba(147,197,253,0.12)", color: "#93c5fd", bl: "#93c5fd" },
//               ].map((item, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${item.bl}` }}>
//                   <div style={{ width: 32, height: 32, borderRadius: "8px", background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
//                   <div>
//                     <div style={{ fontSize: "11px", color: labelColor, marginBottom: "2px", fontWeight: 500 }}>{item.label}</div>
//                     <div style={{ fontSize: "15px", fontWeight: 700, color: item.color }}>{item.value}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ══ DIET PLAN BUTTON ══ */}
//         {dietPlan && (
//           <button
//             onClick={() => setShowDiet(!showDiet)}
//             style={{
//               width: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               padding: "16px 20px",
//               marginBottom: "14px",
//               background: showDiet ? "rgba(99,102,241,0.15)" : "#1e293b",
//               border: `1px solid ${showDiet ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.07)"}`,
//               borderRadius: "16px",
//               cursor: "pointer",
//               transition: "all 0.2s ease",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//               <div style={{ width: 40, height: 40, borderRadius: "12px", background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <UtensilsCrossed size={18} color="#818cf8" />
//               </div>
//               <div style={{ textAlign: "left" }}>
//                 <div style={{ fontSize: "15px", fontWeight: 700, color: "#f1f5f9" }}>My Diet Plan</div>
//                 <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>
//                   {dietPlan.dailyCalories} kcal · {dietPlan.meals?.length} meals/day
//                 </div>
//               </div>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//               <span style={{ fontSize: "12px", color: "#818cf8", fontWeight: 600 }}>{showDiet ? "Hide" : "View Plan"}</span>
//               <ArrowRight size={16} color="#818cf8" style={{ transform: showDiet ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
//             </div>
//           </button>
//         )}

//         {/* ══ DIET PLAN EXPANDED ══ */}
//         {dietPlan && showDiet && (
//           <div style={{ ...S.card, marginTop: "-8px" }}>
//             <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
//               {[
//                 { label: "Calories", value: `${dietPlan.dailyCalories} kcal`, color: "#fdba74" },
//                 { label: "Protein",  value: `${dietPlan.dailyProtein}g`,      color: "#6ee7b7" },
//                 { label: "Water",    value: `${dietPlan.dailyWater}L`,        color: "#7dd3fc" },
//                 { label: "Steps",    value: dietPlan.dailySteps?.toLocaleString(), color: "#93c5fd" },
//               ].map((item, i) => (
//                 <div key={i} style={{ flex: 1, minWidth: "80px", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "10px", textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
//                   <div style={{ fontSize: "15px", fontWeight: 700, color: item.color }}>{item.value}</div>
//                   <div style={{ fontSize: "11px", color: labelColor, marginTop: "2px", fontWeight: 500 }}>{item.label}</div>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//               {dietPlan.meals?.map((meal, i) => {
//                 const mealColor = mealColors[meal.meal] || "#6366f1";
//                 return (
//                   <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${mealColor}`, borderRadius: "10px", padding: "12px 14px" }}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
//                       <span style={{ fontWeight: 700, fontSize: "14px", color: mealColor }}>
//                         {mealEmojis[meal.meal] || "🍽️"} {meal.meal}
//                       </span>
//                       <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//                         <span style={{ fontSize: "12px", color: "#fdba74", fontWeight: 600 }}>{meal.calories} kcal</span>
//                         <span style={{ fontSize: "12px", color: "#6ee7b7", fontWeight: 600 }}>🥩 {meal.protein}g</span>
//                         <div style={{ display: "flex", alignItems: "center", gap: "3px", color: "#64748b", fontSize: "11px" }}>
//                           <Clock size={10} />{meal.time}
//                         </div>
//                       </div>
//                     </div>
//                     <ul style={{ margin: 0, paddingLeft: "16px" }}>
//                       {meal.foods?.map((food, j) => (
//                         <li key={j} style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "3px", lineHeight: "1.5" }}>{food}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 );
//               })}
//             </div>

//             {dietPlan.tips && (
//               <div style={{ marginTop: "14px", background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "10px", padding: "12px 14px" }}>
//                 <p style={{ fontSize: "12px", fontWeight: 700, color: "#818cf8", marginBottom: "8px" }}>Pro Tips</p>
//                 <ul style={{ margin: 0, paddingLeft: "16px" }}>
//                   {dietPlan.tips.map((tip, i) => (
//                     <li key={i} style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "4px" }}>{tip}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ══ ACHIEVEMENT ══ */}
//         {goal && (
//           <div style={{ display: "flex", alignItems: "center", gap: "14px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "14px", padding: "16px", marginBottom: "14px" }}>
//             <Award size={22} color="#f59e0b" />
//             <div>
//               <p style={{ fontSize: "14px", fontWeight: 700, color: "#f59e0b", margin: "0 0 3px 0" }}>Keep it up! 🎯</p>
//               <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
//                 You are {Math.abs(goal.currentWeight - goal.targetWeight)} kg away from your goal!
//               </p>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { getGoal, getDietPlan } from "../api/auth";
import { Mail, Edit3, Save, Flame, Footprints, Droplets, Zap, Target, Scale, TrendingUp, Award, ChevronRight, UtensilsCrossed, Clock, ArrowRight } from "lucide-react";

const Profile = () => {
  const { user } = useAppContext();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [goal, setGoal] = useState(null);
  const [dietPlan, setDietPlan] = useState(null);
  const [showDiet, setShowDiet] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try { const r = await getGoal(); if (r.data) setGoal(r.data); } catch (e) {}
      try { const r = await getDietPlan(); if (r.data) setDietPlan(r.data); } catch (e) {}
      setLoading(false);
    };
    loadData();
  }, []);

  const goalConfig = {
    "weight-loss": { label: "Weight Loss",     icon: <Flame size={13} />,      color: "#f97316", bg: "rgba(249,115,22,0.15)",  border: "rgba(249,115,22,0.35)" },
    "weight-gain": { label: "Weight Gain",     icon: <TrendingUp size={13} />, color: "#22c55e", bg: "rgba(34,197,94,0.15)",   border: "rgba(34,197,94,0.35)"  },
    "maintain":    { label: "Maintain Weight", icon: <Scale size={13} />,      color: "#3b82f6", bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.35)" },
  };

  const mealEmojis = { Breakfast: "🌅", Lunch: "🍚", Snack: "🥤", Dinner: "🌙" };
  const mealColors = { Breakfast: "#f59e0b", Lunch: "#3b82f6", Snack: "#8b5cf6", Dinner: "#ec4899" };

  const currentGoal = goal ? goalConfig[goal.goalType] : null;
  const labelColor = "#64748b";

  const S = {
    page: {
      minHeight: "100vh",
      padding: "20px",
      background: "#07051a",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
    },
    blob1: {
      position: "absolute", width: 340, height: 340, borderRadius: "50%",
      background: "rgba(99,62,220,0.18)", top: -80, left: -80,
      filter: "blur(60px)", pointerEvents: "none",
    },
    blob2: {
      position: "absolute", width: 280, height: 280, borderRadius: "50%",
      background: "rgba(219,39,119,0.13)", top: 60, right: -60,
      filter: "blur(55px)", pointerEvents: "none",
    },
    blob3: {
      position: "absolute", width: 240, height: 240, borderRadius: "50%",
      background: "rgba(20,184,166,0.10)", bottom: 80, left: 40,
      filter: "blur(50px)", pointerEvents: "none",
    },
    wrap: {
      maxWidth: 520, margin: "0 auto",
      display: "flex", flexDirection: "column", gap: 14,
      position: "relative", zIndex: 1,
    },
    card: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 14,
      backdropFilter: "blur(8px)",
    },
    secLabel: {
      fontSize: 11, fontWeight: 700, color: "#4a5568",
      textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: 10,
    },
  };

  if (loading) return (
    <div style={{ ...S.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 32, height: 32, border: "3px solid rgba(99,102,241,0.2)", borderTop: "3px solid #6366f1", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
    </div>
  );

  return (
    <div style={S.page}>
      <div style={S.blob1} />
      <div style={S.blob2} />
      <div style={S.blob3} />
      <div style={S.wrap}>

        {/* ══ HERO ══ */}
        <div style={{ ...S.card, overflow: "hidden" }}>
          <div style={{
            height: 88,
            background: "linear-gradient(135deg,#4f46e5,#7c3aed 50%,#db2777)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,0.03) 20px,rgba(255,255,255,0.03) 40px)" }} />
          </div>
          <div style={{ padding: "16px 20px 20px" }}>
            {editMode ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 12px", color: "#f1f5f9", fontSize: 14, outline: "none" }} />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 12px", color: "#f1f5f9", fontSize: 14, outline: "none" }} />
              </div>
            ) : (
              <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 22, fontWeight: 700, color: "#f1f5f9" }}>{name || "User Name"}</span>
                  <button onClick={() => setEditMode(true)}
                    style={{ padding: "7px 16px", borderRadius: 10, border: "1px solid rgba(99,102,241,0.5)", background: "rgba(99,102,241,0.12)", color: "#818cf8", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                    <Edit3 size={12} /> Edit
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#64748b", fontSize: 13, marginBottom: 12 }}>
                  <Mail size={12} />{email || "user@email.com"}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {currentGoal && (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: currentGoal.bg, color: currentGoal.color, border: `1px solid ${currentGoal.border}` }}>
                      {currentGoal.icon}{currentGoal.label}
                    </span>
                  )}
                </div>
              </>
            )}
            {editMode && (
              <button onClick={() => setEditMode(false)}
                style={{ padding: "7px 16px", borderRadius: 10, border: "1px solid rgba(34,197,94,0.4)", background: "rgba(34,197,94,0.1)", color: "#22c55e", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                <Save size={12} /> Save
              </button>
            )}
          </div>
        </div>

        {/* ══ WEIGHT PROGRESS ══ */}
        {goal && (
          <div>
            <div style={S.secLabel}>Weight Progress</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[
                { label: "Current", value: `${goal.currentWeight} kg`, color: "#f1f5f9" },
                { label: "Target",  value: `${goal.targetWeight} kg`,  color: "#22c55e" },
                { label: "Remaining", value: `${Math.abs(goal.currentWeight - goal.targetWeight)} kg`, color: "#818cf8" },
              ].map((item, i) => (
                <div key={i} style={{ ...S.card, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: item.color, marginBottom: 3 }}>{item.value}</div>
                  <div style={{ fontSize: 11, color: labelColor, fontWeight: 500 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ DAILY TARGETS ══ */}
        {goal && (
          <div>
            <div style={S.secLabel}>Daily Targets</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { label: "Calories", value: `${goal.dailyCalorieTarget} kcal`, icon: <Flame size={20} color="#fb923c" />,     iconBg: "rgba(251,146,60,0.12)",  color: "#fb923c" },
                { label: "Protein",  value: `${goal.dailyProteinTarget}g`,     icon: <Zap size={20} color="#6ee7b7" />,        iconBg: "rgba(110,231,183,0.12)", color: "#6ee7b7" },
                { label: "Water",    value: `${goal.dailyWaterTarget}L`,       icon: <Droplets size={20} color="#7dd3fc" />,   iconBg: "rgba(125,211,252,0.12)", color: "#7dd3fc" },
                { label: "Steps",    value: goal.dailyStepTarget?.toLocaleString(), icon: <Footprints size={20} color="#93c5fd" />, iconBg: "rgba(147,197,253,0.12)", color: "#93c5fd" },
              ].map((item, i) => (
                <div key={i} style={{ ...S.card, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: item.color }}>{item.value}</div>
                    <div style={{ fontSize: 11, color: labelColor, marginTop: 2 }}>{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ DIET PLAN BUTTON ══ */}
        {dietPlan && (
          <button onClick={() => setShowDiet(!showDiet)} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px 18px", borderRadius: 16, cursor: "pointer", transition: "all 0.2s",
            background: showDiet ? "rgba(99,102,241,0.12)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${showDiet ? "rgba(99,102,241,0.45)" : "rgba(255,255,255,0.08)"}`,
            backdropFilter: "blur(8px)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(99,102,241,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <UtensilsCrossed size={22} color="#818cf8" />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>My Diet Plan</div>
                <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{dietPlan.dailyCalories} kcal · {dietPlan.meals?.length} meals/day</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#818cf8", fontSize: 13, fontWeight: 600 }}>
              {showDiet ? "Hide" : "View Plan"}
              <ArrowRight size={16} color="#818cf8" style={{ transform: showDiet ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
            </div>
          </button>
        )}

        {/* ══ DIET PLAN EXPANDED ══ */}
        {dietPlan && showDiet && (
          <div style={{ ...S.card, padding: 20, marginTop: -8 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
              {[
                { label: "Calories", value: `${dietPlan.dailyCalories} kcal`, color: "#fdba74" },
                { label: "Protein",  value: `${dietPlan.dailyProtein}g`,      color: "#6ee7b7" },
                { label: "Water",    value: `${dietPlan.dailyWater}L`,        color: "#7dd3fc" },
                { label: "Steps",    value: dietPlan.dailySteps?.toLocaleString(), color: "#93c5fd" },
              ].map((item, i) => (
                <div key={i} style={{ flex: 1, minWidth: 80, background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 10, textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: item.color }}>{item.value}</div>
                  <div style={{ fontSize: 11, color: labelColor, marginTop: 2, fontWeight: 500 }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {dietPlan.meals?.map((meal, i) => {
                const mealColor = mealColors[meal.meal] || "#6366f1";
                return (
                  <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${mealColor}`, borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: mealColor }}>{mealEmojis[meal.meal] || "🍽️"} {meal.meal}</span>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "#fdba74", fontWeight: 600 }}>{meal.calories} kcal</span>
                        <span style={{ fontSize: 12, color: "#6ee7b7", fontWeight: 600 }}>🥩 {meal.protein}g</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 3, color: "#64748b", fontSize: 11 }}>
                          <Clock size={10} />{meal.time}
                        </div>
                      </div>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 16 }}>
                      {meal.foods?.map((food, j) => (
                        <li key={j} style={{ fontSize: 13, color: "#94a3b8", marginBottom: 3, lineHeight: 1.5 }}>{food}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {dietPlan.tips && (
              <div style={{ marginTop: 14, background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 10, padding: "12px 14px" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#818cf8", marginBottom: 8 }}>Pro Tips</p>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {dietPlan.tips.map((tip, i) => (
                    <li key={i} style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4 }}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ══ ACHIEVEMENT ══ */}
        {goal && (
          <div style={{ background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.22)", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14, backdropFilter: "blur(8px)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,158,11,0.13)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Award size={20} color="#f59e0b" />
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b", margin: "0 0 3px 0" }}>Keep it up! 🎯</p>
              <p style={{ fontSize: 13, color: "#78716c", margin: 0 }}>You are {Math.abs(goal.currentWeight - goal.targetWeight)} kg away from your goal!</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;