import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import Menu from "./menu";

export default function App() {
  const [players, setPlayers] = useState([]);

  return (
    <BrowserRouter basename="/diff">
      <Routes>
        <Route path="/" element={<Menu players={players} setPlayers={setPlayers} />} />
        <Route path="/game" element={<h1>Game Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
