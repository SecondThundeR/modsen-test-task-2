import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import App from "./App.tsx";

import "./index.css";

import { FIREBASE_CONFIG } from "./constants/firebaseConfig.ts";

const firebaseApp = initializeApp(FIREBASE_CONFIG);

console.log(firebaseApp);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
