{/*

Antony Wiegand, Mcmaster, 2026*/}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Start.jsx";
import Setup from "./Setup.jsx";
import Game from "./Game.jsx";
import Dashboard from "./Dashboard.jsx";
import Guidebook from "./Guidebook.jsx";

// RUN npm run dev (from inside Webapp folder, needs access to package.json)

export default function App() {
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