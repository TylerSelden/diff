import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import Menu from "./menu";
import Game from "./game";
import { allRoles } from "./logic.js";

export default function App() {
  const [players, setPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem("diffPlayers");
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });
  const [rolesEnabled, setRolesEnabled] = useState(() => {
    const savedRolesEnabled = localStorage.getItem("diffRolesEnabled");
    return savedRolesEnabled ? JSON.parse(savedRolesEnabled) : Object.entries(allRoles).filter(([key, val]) => !val.sandbox).map(([key, val]) => key);
  });

  useEffect(() => {
    localStorage.setItem("diffPlayers", JSON.stringify(players));
  }, [players]);
  useEffect(() => {
    localStorage.setItem("diffRolesEnabled", JSON.stringify(rolesEnabled));
  }, [rolesEnabled]);

  return (
    <BrowserRouter basename="/diff">
      <Routes>
        <Route path="/" element={<Menu players={players} setPlayers={setPlayers} rolesEnabled={rolesEnabled} setRolesEnabled={setRolesEnabled} />} />
        <Route path="/game" element={<Game players={players} rolesEnabled={rolesEnabled} setRolesEnabled={setRolesEnabled} />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
