import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import Footer from "./components/footer";

const Menu = ({ players, setPlayers }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (evt) => {
    if (evt.key !== "Enter") return;
    evt.preventDefault();
    addPlayer();
  }

  const addPlayer = () => {
    const name = inputValue.trim();
    if (name !== "" && !players.includes(name)) {
      setPlayers([...players, name]);
      setInputValue("");
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5 p-4 bg-light text-dark rounded">
        <h3 className="mb-4">Step 1: Enter Player Names</h3>

        <div className="row g-2 flex-column flex-sm-row align-items-stretch mb-5">
          <input
            type="text"
            className="form-control col py-2"
            placeholder="Enter Player Name"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            value={inputValue}
          ></input>
          <div className="col-auto ms-sm-1 d-flex justify-content-center">
            <button
              className="btn btn-primary"
              onClick={addPlayer}
            >
              Add Player
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col mb-4">
            <h5 className="mb-3">Players:</h5>
            {players.length === 0 ? (
              <div className="alert alert-info mb-0" role="alert">
                No players added yet.
              </div>
            ) : (
              <>
                <ul className="list-group">
                {players.map((player, index) => (
                  <li key={index} className="list-group-item py-3">
                    <div className="d-flex justify-content-between align-items-center">
                    <span className="me-2 overflow-scroll">{player}</span>
                    <button
                      className="btn btn-primary btn-sm float-end rounded-square d-flex justify-content-center align-items-center"
                      onClick={() => setPlayers(players.filter((p) => p !== player))}
                    >&#8211;</button>
                    </div>
                  </li>
                ))}
              </ul>
              {players.length < 6 && (
                players.length < 3 ? (
                  <div className="alert alert-danger mt-3 mb-0" role="alert">
                    A minimum of 3 players is required to start the game.
                  </div>
                ) : (
                  <div className="alert alert-warning mt-3 mb-0" role="alert">
                    Recommended game size is 6+ players.
                  </div>
                )
              )}
              </>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-success text-white"
            disabled={players.length < 3}
          >
            Start Game
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
