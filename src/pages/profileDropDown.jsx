// import React, { useState } from "react";
// import { User, Settings, LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";

// const ProfileDropdown = () => {
//   const [open, setOpen] = useState(false);

//   const { logout } = useAppContext();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div className="profile-container">

//       {/* Profile Button */}
//       <button
//         className="profile-btn"
//         onClick={() => setOpen(!open)}
//       >
//         <User size={22} />
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div className="dropdown-menu">

//           <button
//             className="dropdown-item"
//             onClick={() => navigate("/profile")}
//           >
//             <User size={18} />
//             Profile
//           </button>

//           <button
//             className="dropdown-item"
//             onClick={() => navigate("/settings")}
//           >
//             <Settings size={18} />
//             Settings
//           </button>

//           <button
//             className="dropdown-item logout"
//             onClick={handleLogout}
//           >
//             <LogOut size={18} />
//             Logout
//           </button>

//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../../context/AppContext";
// import { User, Settings, LogOut } from "lucide-react";

// const Header = ({ title, onMenuClick, sidebarOpen }) => {
//   const navigate = useNavigate();
//   const { user, logout } = useAppContext();

//   const [open, setOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     setOpen(false);
//     navigate("/login");
//   };

//   return (
//     <header className="header">

//       {/* LEFT SIDE */}
//       <div className="header-left">
//         <button className="menu-toggle" onClick={onMenuClick}>
//           {sidebarOpen ? (
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M6 6L18 18M6 18L18 6"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           ) : (
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M3 6H21M3 12H21M3 18H21"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           )}
//         </button>

//         <h1 className="page-title">{title}</h1>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="header-right">

//         {/* PROFILE */}
//         <div className="header-profile" style={{ position: "relative" }}>

//           {/* ICON */}
//           <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M20 21C20 17.7 16.9 15 13 15C9.1 15 6 17.7 6 21M13 11C14.7 11 16 9.7 16 8C16 6.3 14.7 5 13 5C11.3 5 10 6.3 10 8C10 9.7 11.3 11 13 11Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>

//           {/* DROPDOWN */}
//           {open && (
//             <div className="dropdown-menu">

//               {user ? (
//                 <>
//                   <div
//                     className="dropdown-item"
//                     onClick={() => {
//                       navigate("/profile");
//                       setOpen(false);
//                     }}
//                   >
//                     <User size={18} />
//                     Profile
//                   </div>

//                   <div
//                     className="dropdown-item"
//                     onClick={() => {
//                       navigate("/settings");
//                       setOpen(false);
//                     }}
//                   >
//                     <Settings size={18} />
//                     Settings
//                   </div>

//                   <div
//                     className="dropdown-item logout"
//                     onClick={handleLogout}
//                   >
//                     <LogOut size={18} />
//                     Logout
//                   </div>
//                 </>
//               ) : (
//                 <div
//                   className="dropdown-item"
//                   onClick={() => {
//                     navigate("/login");
//                     setOpen(false);
//                   }}
//                 >
//                   <User size={18} />
//                   Login / Sign Up
//                 </div>
//               )}

//             </div>
//           )}

//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { User, Settings, LogOut } from "lucide-react";

const Header = ({ title, onMenuClick, sidebarOpen }) => {
  const navigate = useNavigate();
  const { user, logout } = useAppContext();

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* CLOSE DROPDOWN WHEN CLICK OUTSIDE */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="header">

      {/* LEFT SIDE */}
      <div className="header-left">

        <button className="menu-toggle" onClick={onMenuClick}>
          {sidebarOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <h1 className="page-title">{title}</h1>

      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">

        {/* PROFILE */}
        <div
          className="header-profile"
          ref={dropdownRef}
          style={{ position: "relative" }}
        >

          {/* PROFILE BUTTON */}
          <button
            className="profile-btn"
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21C20 17.7 16.9 15 13 15C9.1 15 6 17.7 6 21M13 11C14.7 11 16 9.7 16 8C16 6.3 14.7 5 13 5C11.3 5 10 6.3 10 8C10 9.7 11.3 11 13 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

  {/* DROPDOWN */}
{open && (
  <div className="dropdown-menu">

    {user ? (
      <>
        {/* PROFILE */}
        <div
          className="dropdown-item"
          onClick={() => {
            navigate("/profile");
            setOpen(false);
          }}
        >
          <User size={18} />
          Profile
        </div>

        {/* SETTINGS */}
        <div
          className="dropdown-item"
          onClick={() => {
            navigate("/settings");
            setOpen(false);
          }}
        >
          <Settings size={18} />
          Settings
        </div>

        {/* LOGOUT */}
        <div
          className="dropdown-item logout"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </div>

        {/* CANCEL */}
        <div
          className="dropdown-item cancel"
          onClick={() => setOpen(false)}
        >
          ✕ Cancel
        </div>
      </>
    ) : (
      <>
        {/* LOGIN */}
        <div
          className="dropdown-item"
          onClick={() => {
            navigate("/login");
            setOpen(false);
          }}
        >
          <User size={18} />
          Login / Sign Up
        </div>

        {/* CANCEL */}
     {/* CANCEL BUTTON */}
<div
  className="dropdown-item cancel-btn"
  onClick={() => setOpen(false)}
>
  Cancel
</div>
      </>
    )}

  </div>
)}

        </div>

      </div>

    </header>
  );
};

export default Header;