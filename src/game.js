import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import { dealRoles } from "./logic.js";

import { AlertModal, RoleModal } from "./components/modals";
import Header from "./components/header";
import Dropdowns from "./components/dropdowns";
import Footer from "./components/footer";

const Game = ({ players, rolesEnabled, setRolesEnabled }) => {
  const nav = useNavigate();
  const [visiblePlayer, setVisiblePlayer] = useState("");
  const [buttonsDisabled, setButtonsDisabled] = useState([]);
  const [alert, setAlert] = useState({ title: "", message: "", onClose: () => {} });
  const [assignedRoles, setAssignedRoles] = useState(() => {
    return Object.fromEntries(players.map(player => [player, {}]))
  });

  const resetRoles = () => {
    setAlert({ title: "", message: "", onClose: () => {} });
    setAssignedRoles(dealRoles(players, rolesEnabled));
    setButtonsDisabled([]);
  };

  const playAgain = () => {
    setAlert({
      title: "Game Reset",
      message: "The game has been restarted. All roles have been reassigned.",
      onClose: resetRoles
    });
  }

  useEffect(() => {
    if (players.length < 3) return nav("/");
  }, [players, nav]);

  useEffect(() => {
    setAssignedRoles(dealRoles(players, rolesEnabled));
  }, [players, rolesEnabled]);

  return (
    <>
      <Header />
      <div className="container mt-5 p-4 bg-light text-dark rounded">
        <h3 className="mb-4">View Player Roles</h3>

        <div className="row">
          <div className="col mb-4">
            <div className="alert alert-warning mb-3" role="alert">
              Player roles are only viewable once. Make sure you remember yours and click the "Close" button before passing the device to the next player.
            </div>

            <ul className="list-group">
              {players.map((player, index) => (
                <li key={index} className="list-group-item py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="me-2 overflow-scroll">{player}</span>
                    <button
                      className="btn btn-primary btn-sm"
                      type="button"
                      disabled={buttonsDisabled.includes(player)}
                      onClick={() => {
                        setVisiblePlayer(player);
                        setButtonsDisabled(prev => [...prev, player]);
                      }}
                    >
                      { buttonsDisabled.includes(player) ? "Ready" : "View Role" }
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
            onClick={ playAgain }
          >
            Play Again
          </button>
        </div>
        <Dropdowns players={ players } rolesEnabled={rolesEnabled} setRolesEnabled={setRolesEnabled} />
      </div>
      <AlertModal
        title={ alert.title }
        message={ alert.message }
        onClose={ alert.onClose }
      />
      <RoleModal
        player={ visiblePlayer }
        assignedRoles={ assignedRoles }
        onClose={() => setVisiblePlayer("")}
        setAlert={ setAlert }
      />
      <Footer />
    </>
  );
}

export default Game;
