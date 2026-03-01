/* Routes to Functions

Main file.

Antony Wiegand, Mcmaster, 2026*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Start.jsx";
import Setup from "./Setup.jsx";
import Game from "./Game.jsx";
import Dashboard from "./Dashboard.jsx";
import Guidebook from "./Guidebook.jsx";

// RUN npm run dev (from inside Webapp folder, needs access to package.json)

export default function App() {
  /* 
  Input: None
  1. Connects all routes to functions.
  Output: Routes to functions
  */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/game" element={<Game />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guidebook" element={<Guidebook />} />
      </Routes>
    </BrowserRouter>
  );
}