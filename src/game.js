import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import { dealRoles } from "./logic.js";

import Header from "./components/header";
import Footer from "./components/footer";

const Game = ({ players }) => {
  const nav = useNavigate();

  const [roles, setRoles] = useState(() => {
    return Object.fromEntries(players.map(player => [player, {}]))
  });

  useEffect(() => {
    if (players.length < 3) return nav("/");
  }, [players, nav]);

  useEffect(() => {
    const assignedRoles = dealRoles(players);
    console.log(assignedRoles);
    setRoles(assignedRoles);
  }, [players]);

  return (
    <>
      <Header />
      <div className="container mt-5 p-4 bg-light text-dark rounded">
        <h3 className="mb-4">View Player Roles</h3>

        <div className="row">
          <div className="col mb-4">
            <div className="alert alert-warning mb-3" role="alert">
              Player roles are only viewable once. Make sure you remember yours and click the "Hide" button before passing the device to the next player.
            </div>

            <ul className="list-group">
              {players.map((player, index) => (
                <li key={index} className="list-group-item py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="me-2 overflow-scroll">{player}: {roles[player].name}</span>
                    <button
                      className="btn btn-primary btn-sm"
                    >
                      Show Role
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button
            className="btn btn-secondary text-white me-2"
            onClick={() => nav("/")}
          >
            Back
          </button>
          <button
            className="btn btn-info text-white"
          >
            Play Again
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Game;
