

// // import React, { useState, useEffect } from "react";
// // import { getTodayActivity, saveActivity } from "../api/auth";
// // import { useLocalStorage } from "../hooks/useLocalStorage";
// // import axios from "axios";
// // import "../styles/ProteinCounter.css";

// // const BASE = "http://localhost:5000/api";

// // const getDefaultUnit = (type) => {
// //   if (type === "piece")  return "piece";
// //   if (type === "liter")  return "glass";
// //   return "kg";
// // };

// // const ProteinCounter = () => {
// //   const [foodItems, setFoodItems]               = useLocalStorage("foodItems", []);
// //   const [foodName, setFoodName]                 = useState("");
// //   const [foodQuantity, setFoodQuantity]         = useState("1");
// //   const [quantityType, setQuantityType]         = useState("piece");
// //   const [calorieTarget, setCalorieTarget]       = useState(null);
// //   const [proteinTarget, setProteinTarget]       = useState(null);
// //   const [foodDatabase, setFoodDatabase]         = useState({});
// //   const [suggestions, setSuggestions]           = useState([]);
// //   const [selectedFoodData, setSelectedFoodData] = useState(null);

// //   /* Load targets */
// //   useEffect(() => {
// //     const loadTargets = async () => {
// //       try {
// //         const res     = await getTodayActivity();
// //         const targets = res.data?.targets;
// //         if (targets?.calories) setCalorieTarget(targets.calories);
// //         if (targets?.protein)  setProteinTarget(targets.protein);
// //       } catch (err) {
// //         console.log("No targets yet");
// //       }
// //     };
// //     loadTargets();
// //   }, []);

// //   /* Load foods */
// //   useEffect(() => {
// //     const loadFoods = async () => {
// //       try {
// //         const res = await axios.get(`${BASE}/food`);
// //         const db  = {};
// //         res.data.forEach((f) => {
// //           db[f.name.toLowerCase()] = {
// //             calories: f.calories,
// //             protein:  f.protein,
// //             type:     f.type,
// //           };
// //         });
// //         setFoodDatabase(db);
// //       } catch (err) {
// //         console.error("Foods load failed", err);
// //       }
// //     };
// //     loadFoods();
// //   }, []);

// //   const totalCalories = foodItems.reduce((sum, i) => sum + i.calories, 0);
// //   const totalProtein  = foodItems.reduce((sum, i) => sum + i.protein,  0);

// //   const syncToActivity = async (calories, protein) => {
// //     try {
// //       const res     = await getTodayActivity();
// //       const current = res.data.activity || {};
// //       await saveActivity({
// //         ...current,
// //         caloriesBurned: Math.round(calories),
// //         proteinIntake:  Math.round(protein),
// //       });
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleFoodNameChange = async (val) => {
// //     setFoodName(val);
// //     setSelectedFoodData(null);

// //     if (val.length >= 2) {
// //       try {
// //         const res = await axios.get(`${BASE}/food/search?q=${val}`);
// //         setSuggestions(res.data.slice(0, 6));
// //       } catch (err) {
// //         setSuggestions([]);
// //       }
// //     } else {
// //       setSuggestions([]);
// //     }

// //     const food = foodDatabase[val.toLowerCase()];
// //     if (food) {
// //       setSelectedFoodData(food);
// //       setQuantityType(getDefaultUnit(food.type));
// //       setSuggestions([]);
// //     }
// //   };

// //   const selectSuggestion = (item) => {
// //     setFoodName(item.name);
// //     setSelectedFoodData({ calories: item.calories, protein: item.protein, type: item.type });
// //     setQuantityType(getDefaultUnit(item.type));
// //     setSuggestions([]);
// //   };

// //   /* Convert quantity to liters */
// //   const getQuantityInLiters = (qty, unit) => {
// //     switch (unit) {
// //       case "liter":  return qty;
// //       case "ml":     return qty / 1000;
// //       case "glass":  return (qty * 250)  / 1000;
// //       case "cup":    return (qty * 150)  / 1000;
// //       case "bottle": return (qty * 500)  / 1000;
// //       case "mug":    return (qty * 300)  / 1000;
// //       default:       return qty;
// //     }
// //   };

// //   const handleAddFood = () => {
// //     const food = selectedFoodData || foodDatabase[foodName.toLowerCase()];
// //     if (!food) return alert("Food not found. Please select from suggestions.");

// //     let quantity = parseFloat(foodQuantity);
// //     if (isNaN(quantity) || quantity <= 0) return alert("Enter a valid quantity.");

// //     if (food.type === "weight" && quantityType === "g")
// //       quantity = quantity / 1000;

// //     if (food.type === "liter")
// //       quantity = getQuantityInLiters(quantity, quantityType);

// //     const newItem = {
// //       id:          Date.now(),
// //       name:        foodName.charAt(0).toUpperCase() + foodName.slice(1).toLowerCase(),
// //       quantity:    foodQuantity,
// //       quantityType,
// //       calories:    food.calories * quantity,
// //       protein:     food.protein  * quantity,
// //     };

// //     const newItems    = [...foodItems, newItem];
// //     setFoodItems(newItems);

// //     const newCalories = newItems.reduce((s, i) => s + i.calories, 0);
// //     const newProtein  = newItems.reduce((s, i) => s + i.protein,  0);
// //     syncToActivity(newCalories, newProtein);

// //     setFoodName("");
// //     setFoodQuantity("1");
// //     setQuantityType("piece");
// //     setSelectedFoodData(null);
// //     setSuggestions([]);
// //   };

// //   const handleDeleteFood = (id) => {
// //     const newItems    = foodItems.filter((i) => i.id !== id);
// //     setFoodItems(newItems);
// //     const newCalories = newItems.reduce((s, i) => s + i.calories, 0);
// //     const newProtein  = newItems.reduce((s, i) => s + i.protein,  0);
// //     syncToActivity(newCalories, newProtein);
// //   };

// //   const calPercent     = calorieTarget ? Math.min(Math.round((totalCalories / calorieTarget) * 100), 100) : 0;
// //   const proteinPercent = proteinTarget ? Math.min(Math.round((totalProtein  / proteinTarget)  * 100), 100) : 0;

// //   return (
// //     <div className="nutrition-wrapper">

// //       {/* FORM */}
// //       <div className="nutrition-form-card">
// //         <h2 className="nutrition-heading">Add Your Food</h2>

// //         <div className="nutrition-input-grid">

// //           {/* Food name + suggestions */}
// //           <div style={{ position: "relative" }}>
// //             <input
// //               type="text"
// //               placeholder="Search food (e.g. Chicken, Egg, Oats)"
// //               value={foodName}
// //               onChange={(e) => handleFoodNameChange(e.target.value)}
// //               className="nutrition-input"
// //               autoComplete="off"
// //             />
// //             {suggestions.length > 0 && (
// //               <div className="nutrition-suggestions">
// //                 {suggestions.map((item) => (
// //                   <div
// //                     key={item.id}
// //                     className="nutrition-suggestion-item"
// //                     onClick={() => selectSuggestion(item)}
// //                   >
// //                     <span>{item.name}</span>
// //                     <span className="nutrition-suggestion-meta">
// //                       {item.calories} kcal · {item.protein}g protein · per {item.type === "weight" ? "100g" : item.type}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Quantity + unit */}
// //           <div className="nutrition-quantity-wrapper">
// //             <input
// //               type="number"
// //               placeholder="Quantity"
// //               value={foodQuantity}
// //               min="1"
// //               onChange={(e) => setFoodQuantity(e.target.value)}
// //               className="nutrition-input"
// //             />

// //             {selectedFoodData?.type === "weight" && (
// //               <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
// //                 <option value="kg">Kg</option>
// //                 <option value="g">Gram</option>
// //               </select>
// //             )}

// //             {selectedFoodData?.type === "liter" && (
// //               <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
// //                 <option value="glass">Glass (250ml)</option>
// //                 <option value="cup">Cup (150ml)</option>
// //                 <option value="mug">Mug (300ml)</option>
// //                 <option value="bottle">Bottle (500ml)</option>
// //                 <option value="ml">ml</option>
// //                 <option value="liter">Liter</option>
// //               </select>
// //             )}

// //             {selectedFoodData?.type === "piece" && (
// //               <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
// //                 <option value="piece">Piece</option>
// //               </select>
// //             )}

// //             {!selectedFoodData && (
// //               <select className="nutrition-select" disabled>
// //                 <option>Unit</option>
// //               </select>
// //             )}
// //           </div>

// //           <button onClick={handleAddFood} className="nutrition-add-btn">
// //             Add Food
// //           </button>
// //         </div>

// //         <p className="nutrition-example-text">
// //           Try: <strong>Egg</strong>, <strong>Chicken</strong>, <strong>Oats</strong>,
// //           <strong> Milk</strong>, <strong>Rice</strong>, <strong>Banana</strong>, <strong>Roti</strong>...
// //         </p>
// //       </div>

// //       {/* TARGETS */}
// //       <div className="nutrition-targets-grid">
// //         <div className="nutrition-target-card">
// //           <div className="nutrition-target-top">
// //             <span className="nutrition-target-label">Calories</span>
// //             <span className="nutrition-target-percent calorie-color">{calPercent}%</span>
// //           </div>
// //           <div className="nutrition-target-values">
// //             <span className="calorie-color">{Math.round(totalCalories)} kcal</span>
// //             <span className="nutrition-target-slash">/ {calorieTarget ?? "Not set"} kcal</span>
// //           </div>
// //           <div className="nutrition-progress-track">
// //             <div className="nutrition-progress-fill calorie-fill" style={{ width: `${calPercent}%` }} />
// //           </div>
// //         </div>

// //         <div className="nutrition-target-card">
// //           <div className="nutrition-target-top">
// //             <span className="nutrition-target-label">Protein</span>
// //             <span className="nutrition-target-percent protein-color">{proteinPercent}%</span>
// //           </div>
// //           <div className="nutrition-target-values">
// //             <span className="protein-color">{totalProtein.toFixed(1)}g</span>
// //             <span className="nutrition-target-slash">/ {proteinTarget ?? "Not set"}g</span>
// //           </div>
// //           <div className="nutrition-progress-track">
// //             <div className="nutrition-progress-fill protein-fill" style={{ width: `${proteinPercent}%` }} />
// //           </div>
// //         </div>
// //       </div>

// //       {/* FOOD LIST */}
// //       <div className="nutrition-food-list-card">
// //         <h3 className="nutrition-heading">Today's Foods</h3>
// //         {foodItems.length === 0 ? (
// //           <p className="nutrition-empty-message">No food added yet</p>
// //         ) : (
// //           <div className="nutrition-food-items">
// //             {foodItems.map((food) => (
// //               <div key={food.id} className="nutrition-food-item">
// //                 <div className="nutrition-food-details">
// //                   <strong>{food.name} ({food.quantity} {food.quantityType})</strong>
// //                   <span>{Math.round(food.calories)} kcal • {food.protein.toFixed(1)}g protein</span>
// //                 </div>
// //                 <button className="nutrition-delete-btn" onClick={() => handleDeleteFood(food.id)}>✕</button>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //     </div>
// //   );
// // };

// // export default ProteinCounter;



// import React, { useState, useEffect } from "react";
// import { getTodayActivity, saveActivity } from "../api/auth";
// import { useLocalStorage } from "../hooks/useLocalStorage";
// import axios from "axios";
// import "../styles/ProteinCounter.css";

// const BASE = "http://localhost:5000/api";

// const getDefaultUnit = (type) => {
//   if (type === "piece") return "piece";
//   if (type === "liter") return "glass";
//   return "kg";
// };

// const ProteinCounter = () => {
//   const [foodItems, setFoodItems]               = useLocalStorage("foodItems", []);
//   const [foodName, setFoodName]                 = useState("");
//   const [foodQuantity, setFoodQuantity]         = useState("1");
//   const [quantityType, setQuantityType]         = useState("piece");
//   const [calorieTarget, setCalorieTarget]       = useState(null);
//   const [proteinTarget, setProteinTarget]       = useState(null);
//   const [foodDatabase, setFoodDatabase]         = useState({});
//   const [suggestions, setSuggestions]           = useState([]);
//   const [selectedFoodData, setSelectedFoodData] = useState(null);

//   useEffect(() => {
//     const loadTargets = async () => {
//       try {
//         const res     = await getTodayActivity();
//         const targets = res.data?.targets;
//         if (targets?.calories) setCalorieTarget(targets.calories);
//         if (targets?.protein)  setProteinTarget(targets.protein);
//       } catch (err) {
//         console.log("No targets yet");
//       }
//     };
//     loadTargets();
//   }, []);

//   useEffect(() => {
//     const loadFoods = async () => {
//       try {
//         const res = await axios.get(`${BASE}/food`);
//         const db  = {};
//         res.data.forEach((f) => {
//           db[f.name.toLowerCase()] = {
//             calories: f.calories,
//             protein:  f.protein,
//             type:     f.type,
//           };
//         });
//         setFoodDatabase(db);
//       } catch (err) {
//         console.error("Foods load failed", err);
//       }
//     };
//     loadFoods();
//   }, []);

//   const totalCalories = foodItems.reduce((sum, i) => sum + i.calories, 0);
//   const totalProtein  = foodItems.reduce((sum, i) => sum + i.protein,  0);

//   const syncToActivity = async (calories, protein) => {
//     try {
//       const res     = await getTodayActivity();
//       const current = res.data.activity || {};
//       await saveActivity({
//         ...current,
//         caloriesBurned: Math.round(calories),
//         proteinIntake:  Math.round(protein),
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleFoodNameChange = async (val) => {
//     setFoodName(val);
//     setSelectedFoodData(null);

//     if (val.length >= 2) {
//       try {
//         const res = await axios.get(`${BASE}/food/search?q=${val}`);
//         setSuggestions(res.data.slice(0, 6));
//       } catch (err) {
//         setSuggestions([]);
//       }
//     } else {
//       setSuggestions([]);
//     }

//     const food = foodDatabase[val.toLowerCase()];
//     if (food) {
//       setSelectedFoodData(food);
//       setQuantityType(getDefaultUnit(food.type));
//       setSuggestions([]);
//     }
//   };

//   const selectSuggestion = (item) => {
//     setFoodName(item.name);
//     setSelectedFoodData({ calories: item.calories, protein: item.protein, type: item.type });
//     setQuantityType(getDefaultUnit(item.type));
//     setSuggestions([]);
//   };

//   const getQuantityInLiters = (qty, unit) => {
//     switch (unit) {
//       case "liter":  return qty;
//       case "ml":     return qty / 1000;
//       case "glass":  return (qty * 250)  / 1000;
//       case "cup":    return (qty * 150)  / 1000;
//       case "bottle": return (qty * 500)  / 1000;
//       case "mug":    return (qty * 300)  / 1000;
//       default:       return qty;
//     }
//   };

//   const handleAddFood = () => {
//     const food = selectedFoodData || foodDatabase[foodName.toLowerCase()];
//     if (!food) return alert("Food not found. Please select from suggestions.");

//     let quantity = parseFloat(foodQuantity);
//     if (isNaN(quantity) || quantity <= 0) return alert("Enter a valid quantity.");

//     if (food.type === "weight" && quantityType === "g")
//       quantity = quantity / 1000;

//     if (food.type === "liter")
//       quantity = getQuantityInLiters(quantity, quantityType);

//     const newItem = {
//       id:          Date.now(),
//       name:        foodName.charAt(0).toUpperCase() + foodName.slice(1).toLowerCase(),
//       quantity:    foodQuantity,
//       quantityType,
//       calories:    food.calories * quantity,
//       protein:     food.protein  * quantity,
//     };

//     const newItems    = [...foodItems, newItem];
//     setFoodItems(newItems);

//     const newCalories = newItems.reduce((s, i) => s + i.calories, 0);
//     const newProtein  = newItems.reduce((s, i) => s + i.protein,  0);
//     syncToActivity(newCalories, newProtein);

//     setFoodName("");
//     setFoodQuantity("1");
//     setQuantityType("piece");
//     setSelectedFoodData(null);
//     setSuggestions([]);
//   };

//   const handleDeleteFood = (id) => {
//     const newItems    = foodItems.filter((i) => i.id !== id);
//     setFoodItems(newItems);
//     const newCalories = newItems.reduce((s, i) => s + i.calories, 0);
//     const newProtein  = newItems.reduce((s, i) => s + i.protein,  0);
//     syncToActivity(newCalories, newProtein);
//   };

//   const calPercent     = calorieTarget ? Math.min(Math.round((totalCalories / calorieTarget) * 100), 100) : 0;
//   const proteinPercent = proteinTarget ? Math.min(Math.round((totalProtein  / proteinTarget)  * 100), 100) : 0;

//   return (
//     <div className="nutrition-wrapper">

//       {/* FORM */}
//       <div className="nutrition-form-card">
//         <h2 className="nutrition-heading">Add Your Food</h2>

//         <div className="nutrition-input-grid">

//           {/* Food name + suggestions */}
//           <div style={{ position: "relative" }}>
//             <input
//               type="text"
//               placeholder="Search food (e.g. Chicken, Egg, Oats)"
//               value={foodName}
//               onChange={(e) => handleFoodNameChange(e.target.value)}
//               className="nutrition-input"
//               autoComplete="off"
//             />
//             {suggestions.length > 0 && (
//               <div className="nutrition-suggestions">
//                 {suggestions.map((item) => (
//                   <div
//                     key={item.id}
//                     className="nutrition-suggestion-item"
//                     onClick={() => selectSuggestion(item)}
//                   >
//                     <span>{item.name}</span>
//                     <span className="nutrition-suggestion-meta">
//                       {item.calories} kcal · {item.protein}g protein · per {item.type === "weight" ? "100g" : item.type}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Quantity + unit */}
//           <div className="nutrition-quantity-wrapper">
//             <input
//               type="number"
//               placeholder="Quantity"
//               value={foodQuantity}
//               min="1"
//               onChange={(e) => setFoodQuantity(e.target.value)}
//               className="nutrition-input"
//             />

//             {selectedFoodData?.type === "weight" && (
//               <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
//                 <option value="kg">Kg</option>
//                 <option value="g">Gram</option>
//               </select>
//             )}

//             {selectedFoodData?.type === "liter" && (
//               <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
//                 <option value="glass">Glass (250ml)</option>
//                 <option value="cup">Cup (150ml)</option>
//                 <option value="mug">Mug (300ml)</option>
//                 <option value="bottle">Bottle (500ml)</option>
//                 <option value="ml">ml</option>
//                 <option value="liter">Liter</option>
//               </select>
//             )}

//             {selectedFoodData?.type === "piece" && (
//               <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
//                 <option value="piece">Piece</option>
//               </select>
//             )}

//             {!selectedFoodData && (
//               <select className="nutrition-select" disabled>
//                 <option>Unit</option>
//               </select>
//             )}
//           </div>

//           {/* ✅ FIX: type="button" prevents any implicit form submission or select bleed */}
//           <button type="button" onClick={handleAddFood} className="nutrition-add-btn">
//             Add Food
//           </button>
//         </div>

//         <p className="nutrition-example-text">
//           Try: <strong>Egg</strong>, <strong>Chicken</strong>, <strong>Oats</strong>,
//           <strong> Milk</strong>, <strong>Rice</strong>, <strong>Banana</strong>, <strong>Roti</strong>...
//         </p>
//       </div>

//       {/* TARGETS */}
//       <div className="nutrition-targets-grid">
//         <div className="nutrition-target-card">
//           <div className="nutrition-target-top">
//             <span className="nutrition-target-label">Calories</span>
//             <span className="nutrition-target-percent calorie-color">{calPercent}%</span>
//           </div>
//           <div className="nutrition-target-values">
//             <span className="calorie-color">{Math.round(totalCalories)} kcal</span>
//             {/* ✅ FIX: was `{calorieTarget ?? "Not set"} kcal` */}
//             <span className="nutrition-target-slash">
//               / {calorieTarget ? `${calorieTarget} kcal` : "Not set"}
//             </span>
//           </div>
//           <div className="nutrition-progress-track">
//             <div className="nutrition-progress-fill calorie-fill" style={{ width: `${calPercent}%` }} />
//           </div>
//         </div>

//         <div className="nutrition-target-card">
//           <div className="nutrition-target-top">
//             <span className="nutrition-target-label">Protein</span>
//             <span className="nutrition-target-percent protein-color">{proteinPercent}%</span>
//           </div>
//           <div className="nutrition-target-values">
//             <span className="protein-color">{totalProtein.toFixed(1)}g</span>
//             {/* ✅ FIX: was `{proteinTarget ?? "Not set"}g` → rendered "Not setg" */}
//             <span className="nutrition-target-slash">
//               / {proteinTarget ? `${proteinTarget}g` : "Not set"}
//             </span>
//           </div>
//           <div className="nutrition-progress-track">
//             <div className="nutrition-progress-fill protein-fill" style={{ width: `${proteinPercent}%` }} />
//           </div>
//         </div>
//       </div>

//       {/* FOOD LIST */}
//       <div className="nutrition-food-list-card">
//         <h3 className="nutrition-heading">Today's Foods</h3>
//         {foodItems.length === 0 ? (
//           <p className="nutrition-empty-message">No food added yet</p>
//         ) : (
//           <div className="nutrition-food-items">
//             {foodItems.map((food) => (
//               <div key={food.id} className="nutrition-food-item">
//                 <div className="nutrition-food-details">
//                   <strong>{food.name} ({food.quantity} {food.quantityType})</strong>
//                   <span>{Math.round(food.calories)} kcal • {food.protein.toFixed(1)}g protein</span>
//                 </div>
//                 <button type="button" className="nutrition-delete-btn" onClick={() => handleDeleteFood(food.id)}>✕</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//     </div>
//   );
// };

// export default ProteinCounter;


import React, { useState, useEffect } from "react";
import { getTodayActivity, saveActivity } from "../api/auth";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";
import "../styles/ProteinCounter.css";

const BASE = "http://localhost:5000/api";

// ✅ FIXED: now accepts food name to distinguish milk vs juice
const getDefaultUnit = (type, name = "") => {
  if (type === "piece") return "piece";
  if (type === "liter") {
    const n = name.toLowerCase();
    if (n.includes("milk") || n.includes("doodh") || n.includes("lassi")) return "liter";
    return "glass"; // juice, water, drinks → glass (250ml)
  }
  return "kg";
};

const ProteinCounter = () => {
  const [foodItems, setFoodItems]               = useLocalStorage("foodItems", []);
  const [foodName, setFoodName]                 = useState("");
  const [foodQuantity, setFoodQuantity]         = useState("1");
  const [quantityType, setQuantityType]         = useState("piece");
  const [calorieTarget, setCalorieTarget]       = useState(null);
  const [proteinTarget, setProteinTarget]       = useState(null);
  const [foodDatabase, setFoodDatabase]         = useState({});
  const [suggestions, setSuggestions]           = useState([]);
  const [selectedFoodData, setSelectedFoodData] = useState(null);

  useEffect(() => {
    const loadTargets = async () => {
      try {
        const res     = await getTodayActivity();
        const targets = res.data?.targets;
        if (targets?.calories) setCalorieTarget(targets.calories);
        if (targets?.protein)  setProteinTarget(targets.protein);
      } catch (err) {
        console.log("No targets yet");
      }
    };
    loadTargets();
  }, []);

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const res = await axios.get(`${BASE}/food`);
        const db  = {};
        res.data.forEach((f) => {
          db[f.name.toLowerCase()] = {
            calories: f.calories,
            protein:  f.protein,
            type:     f.type,
          };
        });
        setFoodDatabase(db);
      } catch (err) {
        console.error("Foods load failed", err);
      }
    };
    loadFoods();
  }, []);

  const totalCalories = foodItems.reduce((sum, i) => sum + i.calories, 0);
  const totalProtein  = foodItems.reduce((sum, i) => sum + i.protein,  0);

  const syncToActivity = async (calories, protein) => {
    try {
      const res     = await getTodayActivity();
      const current = res.data.activity || {};
      await saveActivity({
        ...current,
        caloriesBurned: Math.round(calories),
        proteinIntake:  Math.round(protein),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleFoodNameChange = async (val) => {
    setFoodName(val);
    setSelectedFoodData(null);

    if (val.length >= 2) {
      try {
        const res = await axios.get(`${BASE}/food/search?q=${val}`);
        setSuggestions(res.data.slice(0, 6));
      } catch (err) {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }

    const food = foodDatabase[val.toLowerCase()];
    if (food) {
      setSelectedFoodData(food);
      setQuantityType(getDefaultUnit(food.type, val)); // ✅ pass name
      setSuggestions([]);
    }
  };

  // ✅ FIXED: pass item.name so milk gets "liter", juice gets "glass"
  const selectSuggestion = (item) => {
    setFoodName(item.name);
    setSelectedFoodData({ calories: item.calories, protein: item.protein, type: item.type });
    setQuantityType(getDefaultUnit(item.type, item.name)); // ✅ pass name
    setSuggestions([]);
  };

  const getQuantityInLiters = (qty, unit) => {
    switch (unit) {
      case "liter":  return qty;
      case "ml":     return qty / 1000;
      case "glass":  return (qty * 250)  / 1000;
      case "cup":    return (qty * 150)  / 1000;
      case "bottle": return (qty * 500)  / 1000;
      case "mug":    return (qty * 300)  / 1000;
      default:       return qty;
    }
  };

  const handleAddFood = () => {
    const food = selectedFoodData || foodDatabase[foodName.toLowerCase()];
    if (!food) return alert("Food not found. Please select from suggestions.");

    let quantity = parseFloat(foodQuantity);
    if (isNaN(quantity) || quantity <= 0) return alert("Enter a valid quantity.");

    if (food.type === "weight" && quantityType === "g")
      quantity = quantity / 1000;

    if (food.type === "liter")
      quantity = getQuantityInLiters(quantity, quantityType);

    const newItem = {
      id:          Date.now(),
      name:        foodName.charAt(0).toUpperCase() + foodName.slice(1).toLowerCase(),
      quantity:    foodQuantity,
      quantityType,
      calories:    food.calories * quantity,
      protein:     food.protein  * quantity,
    };

    const newItems    = [...foodItems, newItem];
    setFoodItems(newItems);

    const newCalories = newItems.reduce((s, i) => s + i.calories, 0);
    const newProtein  = newItems.reduce((s, i) => s + i.protein,  0);
    syncToActivity(newCalories, newProtein);

    setFoodName("");
    setFoodQuantity("1");
    setQuantityType("piece");
    setSelectedFoodData(null);
    setSuggestions([]);
  };

  const handleDeleteFood = (id) => {
    const newItems    = foodItems.filter((i) => i.id !== id);
    setFoodItems(newItems);
    const newCalories = newItems.reduce((s, i) => s + i.calories, 0);
    const newProtein  = newItems.reduce((s, i) => s + i.protein,  0);
    syncToActivity(newCalories, newProtein);
  };

  const calPercent     = calorieTarget ? Math.min(Math.round((totalCalories / calorieTarget) * 100), 100) : 0;
  const proteinPercent = proteinTarget ? Math.min(Math.round((totalProtein  / proteinTarget)  * 100), 100) : 0;

  return (
    <div className="nutrition-wrapper">

      {/* FORM */}
      <div className="nutrition-form-card">
        <h2 className="nutrition-heading">Add Your Food</h2>

        <div className="nutrition-input-grid">

          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search food (e.g. Chicken, Egg, Oats)"
              value={foodName}
              onChange={(e) => handleFoodNameChange(e.target.value)}
              className="nutrition-input"
              autoComplete="off"
            />
            {suggestions.length > 0 && (
              <div className="nutrition-suggestions">
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    className="nutrition-suggestion-item"
                    onClick={() => selectSuggestion(item)}
                  >
                    <span>{item.name}</span>
                    <span className="nutrition-suggestion-meta">
                      {item.calories} kcal · {item.protein}g protein · per{" "}
                      {item.type === "weight" ? "100g" : item.type === "liter" ? "liter" : "piece"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="nutrition-quantity-wrapper">
            <input
              type="number"
              placeholder="Quantity"
              value={foodQuantity}
              min="1"
              onChange={(e) => setFoodQuantity(e.target.value)}
              className="nutrition-input"
            />

            {selectedFoodData?.type === "weight" && (
              <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
                <option value="kg">Kg</option>
                <option value="g">Gram</option>
              </select>
            )}

            {selectedFoodData?.type === "liter" && (
              <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
                <option value="glass">Glass (250ml)</option>
                <option value="cup">Cup (150ml)</option>
                <option value="mug">Mug (300ml)</option>
                <option value="bottle">Bottle (500ml)</option>
                <option value="ml">ml</option>
                <option value="liter">Liter</option>
              </select>
            )}

            {selectedFoodData?.type === "piece" && (
              <select value={quantityType} onChange={(e) => setQuantityType(e.target.value)} className="nutrition-select">
                <option value="piece">Piece</option>
              </select>
            )}

            {!selectedFoodData && (
              <select className="nutrition-select" disabled>
                <option>Unit</option>
              </select>
            )}
          </div>

          <button type="button" onClick={handleAddFood} className="nutrition-add-btn">
            Add Food
          </button>
        </div>

        <p className="nutrition-example-text">
          Try: <strong>Egg</strong>, <strong>Chicken</strong>, <strong>Oats</strong>,
          <strong> Milk</strong>, <strong>Rice</strong>, <strong>Banana</strong>, <strong>Roti</strong>...
        </p>
      </div>

      {/* TARGETS */}
      <div className="nutrition-targets-grid">
        <div className="nutrition-target-card">
          <div className="nutrition-target-top">
            <span className="nutrition-target-label">Calories</span>
            <span className="nutrition-target-percent calorie-color">{calPercent}%</span>
          </div>
          <div className="nutrition-target-values">
            <span className="calorie-color">{Math.round(totalCalories)} kcal</span>
            <span className="nutrition-target-slash">
              / {calorieTarget ? `${calorieTarget} kcal` : "Not set"}
            </span>
          </div>
          <div className="nutrition-progress-track">
            <div className="nutrition-progress-fill calorie-fill" style={{ width: `${calPercent}%` }} />
          </div>
        </div>

        <div className="nutrition-target-card">
          <div className="nutrition-target-top">
            <span className="nutrition-target-label">Protein</span>
            <span className="nutrition-target-percent protein-color">{proteinPercent}%</span>
          </div>
          <div className="nutrition-target-values">
            <span className="protein-color">{totalProtein.toFixed(1)}g</span>
            <span className="nutrition-target-slash">
              / {proteinTarget ? `${proteinTarget}g` : "Not set"}
            </span>
          </div>
          <div className="nutrition-progress-track">
            <div className="nutrition-progress-fill protein-fill" style={{ width: `${proteinPercent}%` }} />
          </div>
        </div>
      </div>

      {/* FOOD LIST */}
      <div className="nutrition-food-list-card">
        <h3 className="nutrition-heading">Today's Foods</h3>
        {foodItems.length === 0 ? (
          <p className="nutrition-empty-message">No food added yet</p>
        ) : (
          <div className="nutrition-food-items">
            {foodItems.map((food) => (
              <div key={food.id} className="nutrition-food-item">
                <div className="nutrition-food-details">
                  <strong>{food.name} ({food.quantity} {food.quantityType})</strong>
                  <span>{Math.round(food.calories)} kcal • {food.protein.toFixed(1)}g protein</span>
                </div>
                <button type="button" className="nutrition-delete-btn" onClick={() => handleDeleteFood(food.id)}>✕</button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default ProteinCounter;