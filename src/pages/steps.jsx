

// // import React, { useState, useEffect } from "react";
// // import { getTodayActivity, saveActivity } from "../api/auth";
// // import "../styles/global1.css";

// // const Steps = () => {
// //   const [steps, setSteps] = useState(0);
// //   const [goal, setGoal] = useState(0);
// //   const [saved, setSaved] = useState(false);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const load = async () => {
// //       try {
// //         const res = await getTodayActivity();

// //         if (res.data.activity) {
// //           setSteps(res.data.activity.steps || 0);
// //         }

// //         if (res.data.targets) {
// //           setGoal(res.data.targets.steps ?? 0);
// //         }
// //       } catch (err) {
// //         console.log("No data yet");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     load();
// //   }, []);

// //   // ✅ FIX: goal na ho tab 10000 default use karo
// //   const defaultGoal = 10000;
// //   const percentage =
// //     goal > 0
// //       ? Math.min((steps / goal) * 100, 100)
// //       : Math.min((steps / defaultGoal) * 100, 100);

// //   const saveSteps = async (newSteps) => {
// //     setSaved(false);
// //     try {
// //       const res = await getTodayActivity();
// //       const current = res.data.activity || {};
// //       await saveActivity({ ...current, steps: newSteps });
// //       setSaved(true);
// //       setTimeout(() => setSaved(false), 2000);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const addSteps = (value) => {
// //     const newVal = steps + value;
// //     setSteps(newVal);
// //     saveSteps(newVal);
// //   };

// //   const handleInput = (e) => {
// //     const val = Number(e.target.value);
// //     setSteps(val);
// //     saveSteps(val);
// //   };

// //   const resetSteps = () => {
// //     setSteps(0);
// //     saveSteps(0);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="activity-loading">
// //         <div className="activity-loading-spinner" />
// //         <span>Loading...</span>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="step-main">
// //       <div className="steps-card1">

// //         <div className="card-top">
// //           <div className="left-content">
// //             <h2 className="card-title">Steps Today</h2>

// //             <div className="steps-number">
// //               {steps.toLocaleString()}
// //               <span>
// //                 {goal > 0 ? ` / ${goal.toLocaleString()}` : " / No Goal"}
// //               </span>
// //             </div>

// //             <p className="steps-target">
// //               {goal > 0 ? `${Math.round(percentage)}% completed` : "Please set your goal"}
// //             </p>

// //             {saved && <p className="saved-text">✅ Saved Successfully</p>}
// //           </div>

// //           <div className="card-icon-s">👟</div>
// //         </div>

// //         <input
// //           type="number"
// //           className="steps-input"
// //           placeholder="Enter your steps"
// //           value={steps}
// //           onChange={handleInput}
// //         />

// //         <div className="progress-bar">
// //           <div className="progress-fill" style={{ width: `${percentage}%` }} />
// //         </div>

// //         <div className="status-text">
// //           <span>
// //             {goal > 0
// //               ? `${steps.toLocaleString()} / ${goal.toLocaleString()}`
// //               : `${steps.toLocaleString()} steps`}
// //           </span>
// //           <span>{Math.round(percentage)}%</span>
// //         </div>

// //         <div className="button-group">
// //           <button onClick={() => addSteps(500)}>+500</button>
// //           <button onClick={() => addSteps(1000)}>+1000</button>
// //           <button onClick={resetSteps} className="reset-btn">Reset</button>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Steps;



// import React, { useState, useEffect } from "react";
// import { getTodayActivity, saveActivity } from "../api/auth";
// import "../styles/global1.css";

// const Steps = () => {
//   const [steps, setSteps] = useState(0);
//   const [goal, setGoal] = useState(0);
//   const [saved, setSaved] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await getTodayActivity();
//         if (res.data.activity) {
//           setSteps(res.data.activity.steps || 0);
//         }
//         if (res.data.targets) {
//           setGoal(res.data.targets.steps ?? 0);
//         }
//       } catch (err) {
//         console.log("No data yet");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   const defaultGoal = 10000;
//   const percentage =
//     goal > 0
//       ? Math.min((steps / goal) * 100, 100)
//       : Math.min((steps / defaultGoal) * 100, 100);

//   const saveSteps = async (newSteps) => {
//     setSaved(false);
//     try {
//       const res = await getTodayActivity();
//       const current = res.data.activity || {};
//       await saveActivity({ ...current, steps: newSteps });
//       setSaved(true);
//       setTimeout(() => setSaved(false), 2000);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const addSteps = (value) => {
//     const newVal = steps + value;
//     setSteps(newVal);
//     saveSteps(newVal);
//   };

//   const handleInput = (e) => {
//     const val = Number(e.target.value);
//     setSteps(val);
//     saveSteps(val);
//   };

//   const resetSteps = () => {
//     setSteps(0);
//     saveSteps(0);
//   };

//   if (loading) {
//     return (
//       <div className="activity-loading">
//         <div className="activity-loading-spinner" />
//         <span>Loading...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="step-main">
//       <div className="steps-card1">

//         <div className="card-top">
//           <div className="left-content">
//             <h2 className="card-title">Steps Today</h2>

//             <div className="steps-number">
//               {steps.toLocaleString()}
//               <span>
//                 {goal > 0 ? ` / ${goal.toLocaleString()}` : " / No Goal"}
//               </span>
//             </div>

//             <p className="steps-target">
//               {goal > 0
//                 ? `${Math.round(percentage)}% completed`
//                 : "Please set your goal"}
//             </p>

//             {saved && <p className="saved-text">✅ Saved Successfully</p>}
//           </div>

//           <div className="card-icon-s">👟</div>
//         </div>

//         <input
//           type="number"
//           className="steps-input"
//           placeholder="Enter your steps"
//           value={steps}
//           onChange={handleInput}
//         />

//         {/* PROGRESS BAR — inline styles */}
//         <div
//           style={{
//             width: "100%",
//             height: "18px",
//             marginTop: "35px",
//             background: "rgba(255,255,255,0.1)",
//             borderRadius: "999px",
//             overflow: "hidden",
//             boxShadow: "inset 0 2px 6px rgba(0,0,0,0.4)",
//           }}
//         >
//           <div
//             style={{
//               width: `${percentage}%`,
//               height: "100%",
//               borderRadius: "999px",
//               background: "linear-gradient(90deg, #2563eb, #38bdf8, #7dd3fc)",
//               boxShadow: "0 0 14px rgba(56,189,248,0.8)",
//               transition: "width 0.6s ease",
//             }}
//           />
//         </div>

//         <div className="status-text">
//           <span>
//             {goal > 0
//               ? `${steps.toLocaleString()} / ${goal.toLocaleString()}`
//               : `${steps.toLocaleString()} steps`}
//           </span>
//           <span>{Math.round(percentage)}%</span>
//         </div>

//         <div className="button-group">
//           <button onClick={() => addSteps(500)}>+500</button>
//           <button onClick={() => addSteps(1000)}>+1000</button>
//           <button onClick={resetSteps} className="reset-btn">Reset</button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Steps;


import React, { useState, useEffect } from "react";
import { getTodayActivity, saveActivity } from "../api/auth";
import "../styles/global1.css";

const Steps = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(0);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getTodayActivity();
        if (res.data.activity) {
          setSteps(res.data.activity.steps || 0);
        }
        if (res.data.targets) {
          setGoal(res.data.targets.steps ?? 0);
        }
      } catch (err) {
        console.log("No data yet");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const defaultGoal = 10000;
  const activeGoal = goal > 0 ? goal : defaultGoal;
  const percentage = Math.min((steps / activeGoal) * 100, 100);

  const saveSteps = async (newSteps) => {
    setSaved(false);
    try {
      const res = await getTodayActivity();
      const current = res.data.activity || {};
      await saveActivity({ ...current, steps: newSteps });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const addSteps = (value) => {
    const newVal = steps + value;
    setSteps(newVal);
    saveSteps(newVal);
  };

  const resetSteps = () => {
    setSteps(0);
    saveSteps(0);
  };

  if (loading) {
    return (
      <div className="activity-loading">
        <div className="activity-loading-spinner" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="step-main">

      {/* CARD — Water wali style */}
      <div className="steps-card1">

        <div className="card-top">
          <div className="left-content">

            <h2 className="card-title">Steps Today</h2>

            <div className="steps-number">
              {steps.toLocaleString()}
              <span>
                {goal > 0 ? ` / ${goal.toLocaleString()}` : " / No Goal"}
              </span>
            </div>

            <p className="steps-target">
              {steps.toLocaleString()} / {activeGoal.toLocaleString()} steps
            </p>

          </div>

          <div className="card-icon-s">👟</div>
        </div>

        {/* PROGRESS BAR */}
        <div
          style={{
            width: "100%",
            height: "14px",
            marginTop: "28px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${percentage}%`,
              height: "100%",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #2563eb, #38bdf8, #7dd3fc)",
              boxShadow: "0 0 10px rgba(56,189,248,0.7)",
              transition: "width 0.6s ease",
            }}
          />
        </div>

        {/* GOAL + PERCENTAGE */}
        <div className="status-text" style={{ marginTop: "12px" }}>
          <span>Goal: {activeGoal.toLocaleString()} steps/day</span>
          <span>{Math.round(percentage)}%</span>
        </div>

        {saved && (
          <p className="saved-text" style={{ marginTop: "8px" }}>
            ✅ Saved Successfully
          </p>
        )}

      </div>

      {/* BUTTONS — card ke bahar, Water wali style */}
      <div className="button-group">
        <button onClick={() => addSteps(500)}>+500</button>
        <button onClick={() => addSteps(1000)}>+1000</button>
        <button onClick={resetSteps} className="reset-btn">Reset</button>
      </div>

    </div>
  );
};

export default Steps;