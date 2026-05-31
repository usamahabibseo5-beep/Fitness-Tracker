


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from "../../images-logo/logo-2.png";

// const SidebarNew = ({ isOpen, onClose }) => {
//   const location = useLocation();

//   const menuItems = [
//     { path: '/', label: 'Home', icon: '🏠' },
//     // { path: '/protein', label: 'Calories', icon: '🔥' },
//     { path: '/protein', label: 'Calories &Protein Counter', icon: '🍽️' },
//     { path: '/activity', label: 'Activity', icon: '🏃' },
//     { path: '/bmi', label: 'BMI', icon: '⚖️' },
//     { path: '/water', label: 'Water', icon: '💧' },
//      { path: '/steps', label: 'Steps', icon: '👟' },
//     { path: '/progress', label: 'Progress', icon: '📊' },
    
//   ];

//   return (
//     <aside className={`sb-container ${isOpen ? "sb-open" : ""}`}>

//       {/* Header */}
//       <div className="sb-header">
//         <img src={logo} alt="logo" className="sb-logo" />

//         <button className="sb-close-btn" onClick={onClose}>
//           ✕
//         </button>
//       </div>

//       {/* Nav */}
//       <nav className="sb-nav">
//         {menuItems.map((item) => {
//           const isActive = location.pathname === item.path;

//           return (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`sb-item ${isActive ? "sb-active" : ""}`}
//             >
//               <span className="sb-icon">{item.icon}</span>
//               <span className="sb-text">{item.label}</span>
//             </Link>
//           );
//         })}
//       </nav>

//     </aside>
//   );
// };

// export default SidebarNew;


import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Home,
  Flame,
  Activity,
  Scale,
  Droplets,
  Footprints,
  BarChart3,
  X,
} from "lucide-react";

import logo from "../../images-logo/logo-2.png";

const SidebarNew = ({ isOpen, onClose }) => {

  const location = useLocation();

  const menuItems = [
    {
      path: "/",
      label: "Home",
      icon: Home,
    },

    {
      path: "/protein",
      label: "Calories & Protein",
      icon: Flame,
    },

    {
      path: "/activity",
      label: "Activity",
      icon: Activity,
    },

    {
      path: "/bmi",
      label: "BMI",
      icon: Scale,
    },

    {
      path: "/water",
      label: "Water",
      icon: Droplets,
    },

    {
      path: "/steps",
      label: "Steps",
      icon: Footprints,
    },

    {
      path: "/progress",
      label: "Progress",
      icon: BarChart3,
    },
  ];

  return (

    <aside className={`sb-container ${isOpen ? "sb-open" : ""}`}>

      {/* HEADER */}
      <div className="sb-header">

        <img
          src={logo}
          alt="Fitness Logo"
          className="sb-logo"
        />

        <button
          className="sb-close-btn1"
          onClick={onClose}
        >
          <X size={22} strokeWidth={2.5} />
        </button>

      </div>

      {/* NAVIGATION */}
      <nav className="sb-nav">

        {menuItems.map((item) => {

          const isActive =
            location.pathname === item.path;

          const Icon = item.icon;

          return (

            <Link
              key={item.path}
              to={item.path}
              className={`sb-item ${
                isActive ? "sb-active" : ""
              }`}
            >

              <div className="sb-icon">
                <Icon
                  size={20}
                  strokeWidth={2.2}
                />
              </div>

              <span className="sb-text">
                {item.label}
              </span>

            </Link>

          );
        })}

      </nav>

    </aside>
  );
};

export default SidebarNew;