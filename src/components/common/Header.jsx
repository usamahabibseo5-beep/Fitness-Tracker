


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../../context/AppContext";

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
//               {/* <path
//                 d="M6 6L18 18M6 18L18 6"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               /> */}
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

//         {/* Notification */}
//         <div className="header-notifications">
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M15 17H20L18.5 15.5C18.2 15.2 18 14.8 18 14.4V11C18 8.2 16.2 6 13.7 5.2C13.9 4.8 14 4.4 14 4C14 3.4 13.6 3 13 3C12.4 3 12 3.4 12 4C12 4.4 12.1 4.8 12.3 5.2C9.8 6 8 8.2 8 11V14.4C8 14.8 7.8 15.2 7.5 15.5L6 17H11M15 17V18C15 19.1 14.1 20 13 20C11.9 20 11 19.1 11 18V17"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>

//         {/* PROFILE */}
//         <div className="header-profile" style={{ position: "relative" }}>

//           {/* Icon */}
//           <div
//             style={{ cursor: "pointer" }}
//             onClick={() => setOpen(!open)}
//           >
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

//               {user && (
//                 <>
//                   <div
//                     className="dropdown-item"
//                     onClick={() => {
//                       navigate("/profile");
//                       setOpen(false);
//                     }}
//                   >
//                     Profile
//                   </div>

//                   <div
//                     className="dropdown-item"
//                     onClick={() => {
//                       navigate("/settings");
//                       setOpen(false);
//                     }}
//                   >
//                     Settings
//                   </div>

//                   <div
//                     className="dropdown-item logout"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </div>
//                 </>
//               )}

//               {!user && (
//                 <div
//                   className="dropdown-item"
//                   onClick={() => {
//                     navigate("/login");
//                     setOpen(false);
//                   }}
//                 >
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






// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useAppContext } from "../../context/AppContext";

// // const Header = ({ title, onMenuClick, sidebarOpen }) => {
// //   const navigate = useNavigate();
// //   const { user, logout } = useAppContext();

// //   const [open, setOpen] = useState(false);

// //   return (
// //     <header className={`header ${sidebarOpen ? "sidebar-active" : ""}`}>
      
// //       <div className="header-left">
        
// //         <button className="menu-toggle" onClick={onMenuClick}>
          
// //           {sidebarOpen ? (
// //             <span className="close-icon">✕</span>
// //           ) : (
// //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// //               <path
// //                 d="M3 6H21M3 12H21M3 18H21"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //                 strokeLinecap="round"
// //               />
// //             </svg>
// //           )}

// //         </button>

// //         <h1 className="page-title">{title}</h1>

// //       </div>

// //       {/* Hide right side when sidebar open */}
// //       {!sidebarOpen && (
// //         <div className="header-right">

// //           {/* Notification */}
// //           <div className="header-notifications">
// //             🔔
// //           </div>

// //           {/* Profile */}
// //           <div
// //             className="header-profile"
// //             style={{ cursor: "pointer", position: "relative" }}
// //           >

// //             <div onClick={() => setOpen(!open)}>
// //               👤
// //             </div>

// //             {open && (
// //               <div className="dropdown-menu">

// //                 {!user && (
// //                   <div onClick={() => navigate("/login")}>
// //                     Login / Sign Up
// //                   </div>
// //                 )}

// //                 {user && (
// //                   <div onClick={logout}>
// //                     Logout
// //                   </div>
// //                 )}

// //               </div>
// //             )}

// //           </div>

// //         </div>
// //       )}

// //     </header>
// //   );
// // };

// // export default Header;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { getUnreadCount } from "../../api/auth";

const Header = ({ title, onMenuClick, sidebarOpen }) => {
  const navigate = useNavigate();
  const { user, logout } = useAppContext();

  const [open, setOpen]     = useState(false);
  const [unread, setUnread] = useState(0);

  // ✅ Unread count fetch karo
  useEffect(() => {
    if (!user) return;
    const fetchUnread = async () => {
      try {
        const res = await getUnreadCount();
        setUnread(res.data.count || 0);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUnread();
    // ✅ Har 1 minute mein refresh
    const interval = setInterval(fetchUnread, 60000);
    return () => clearInterval(interval);
  }, [user]);

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

        {/* ✅ Notification Bell — click se page open, badge unread count */}
        <div
          className="header-notifications"
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => navigate("/notifications")}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 17H20L18.5 15.5C18.2 15.2 18 14.8 18 14.4V11C18 8.2 16.2 6 13.7 5.2C13.9 4.8 14 4.4 14 4C14 3.4 13.6 3 13 3C12.4 3 12 3.4 12 4C12 4.4 12.1 4.8 12.3 5.2C9.8 6 8 8.2 8 11V14.4C8 14.8 7.8 15.2 7.5 15.5L6 17H11M15 17V18C15 19.1 14.1 20 13 20C11.9 20 11 19.1 11 18V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* ✅ Unread badge */}
          {unread > 0 && (
            <span style={{
              position:   "absolute",
              top:        "-6px",
              right:      "-6px",
              background: "#f97316",
              color:      "#fff",
              fontSize:   "10px",
              fontWeight: 700,
              minWidth:   "18px",
              height:     "18px",
              display:    "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              padding:    "0 4px",
            }}>
              {unread > 99 ? "99+" : unread}
            </span>
          )}
        </div>

        {/* PROFILE */}
        <div className="header-profile" style={{ position: "relative" }}>
          <div style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21C20 17.7 16.9 15 13 15C9.1 15 6 17.7 6 21M13 11C14.7 11 16 9.7 16 8C16 6.3 14.7 5 13 5C11.3 5 10 6.3 10 8C10 9.7 11.3 11 13 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className="dropdown-menu">
              {user && (
                <>
                  <div className="dropdown-item" onClick={() => { navigate("/profile");  setOpen(false); }}>Profile</div>
                  <div className="dropdown-item" onClick={() => { navigate("/settings"); setOpen(false); }}>Settings</div>
                  <div className="dropdown-item logout" onClick={handleLogout}>Logout</div>
                </>
              )}
              {!user && (
                <div className="dropdown-item" onClick={() => { navigate("/login"); setOpen(false); }}>
                  Login / Sign Up
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;