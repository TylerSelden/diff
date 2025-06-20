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

  useEffect(() => {
    localStorage.setItem("diffPlayers", JSON.stringify(players));
  }, [players]);

  return (
    <BrowserRouter basename="/diff">
      <Routes>
        <Route path="/" element={<Menu players={players} setPlayers={setPlayers} />} />
        <Route path="/game" element={<Game players={players} />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
