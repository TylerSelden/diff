import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import Menu from "./menu";
import Game from "./game";

export default function App() {
  const [players, setPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem("diffPlayers");
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });
  const [rolesDisabled, setRolesDisabled] = useState(() => {
    const savedRolesDisabled = localStorage.getItem("diffRolesDisabled");
    return savedRolesDisabled ? JSON.parse(savedRolesDisabled) : [];
  });

  useEffect(() => {
    localStorage.setItem("diffPlayers", JSON.stringify(players));
  }, [players]);
  useEffect(() => {
    localStorage.setItem("diffRolesDisabled", JSON.stringify(rolesDisabled));
  }, [rolesDisabled]);

  return (
    <BrowserRouter basename="/diff">
      <Routes>
        <Route path="/" element={<Menu players={players} setPlayers={setPlayers} rolesDisabled={rolesDisabled} setRolesDisabled={setRolesDisabled} />} />
        <Route path="/game" element={<Game players={players} rolesDisabled={rolesDisabled} setRolesDisabled={setRolesDisabled} />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
