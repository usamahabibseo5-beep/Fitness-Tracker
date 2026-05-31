// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles/globals.css';
// import { AppProvider } from './context/AppContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// import { AppProvider } from './context/AppContext'; 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// import "./styles/index.css";
// root.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { AppProvider } from './context/AppContext';
// import "./styles/index.css";

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { AppProvider } from "./context/AppContext";
// import "./styles/index.css";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <AppProvider>
//     <App />
//   </AppProvider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import "./styles/index.css";
import "./styles/globals.css";

// ✅ Yeh add karo - har baar fresh start
localStorage.removeItem("token");
localStorage.removeItem("user");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);