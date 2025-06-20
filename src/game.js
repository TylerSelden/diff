import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

const Game = ({ players }) => {
  const nav = useNavigate();

  const [roles, setRoles] = useState({});

  return (
    <>
      <Header />
      <div className="container mt-5 p-4 bg-light text-dark rounded">
        <h3 className="mb-4">View Player Roles</h3>

        <div className="row">
          <div className="col mb-4">
            <ul className="list-group">
              {players.map((player, index) => (
                <li key={index} className="list-group-item py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="me-2 overflow-scroll">{player}</span>
                    <button
                      className="btn btn-primary btn-sm"
                    >
                      Show Role
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="alert alert-warning mt-3 mb-0" role="alert">
              Player roles are only viewable once. Make sure you remember yours and click the "Hide" button before passing the device to the next player.
            </div>
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
            disabled={players.length < 3}
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
