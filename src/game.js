import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import { dealRoles } from "./logic.js";

import Header from "./components/header";
import Dropdowns from "./components/dropdowns";
import Footer from "./components/footer";

const Game = ({ players, rolesDisabled, setRolesDisabled }) => {
  const nav = useNavigate();
  const [visiblePlayer, setVisiblePlayer] = useState("");
  const [buttonsDisabled, setButtonsDisabled] = useState([]);
  const [alert, setAlert] = useState({ title: "", message: "", onClose: () => {} });
  const [roles, setRoles] = useState(() => {
    return Object.fromEntries(players.map(player => [player, {}]))
  });

  const playAgain = () => {
    setAlert({
      title: "Game Reset",
      message: "The game has been restarted. All roles have been reassigned.",
      onClose: () => {
        setAlert({ title: "", message: "", onClose: () => {} });
        const assignedRoles = dealRoles(players, rolesDisabled);
        setRoles(assignedRoles);
        setButtonsDisabled([]);
      }
    })
  }

  useEffect(() => {
    if (players.length < 3) return nav("/");
  }, [players, nav]);

  useEffect(() => {
    const assignedRoles = dealRoles(players, rolesDisabled);
    setRoles(assignedRoles);
  }, [players, rolesDisabled]);

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
        <Dropdowns players={ players } rolesDisabled={rolesDisabled} setRolesDisabled={setRolesDisabled} />
      </div>
      <RoleModal
        player={visiblePlayer}
        role={roles[visiblePlayer]}
        onClose={() => setVisiblePlayer("")}
      />
      <AlertModal
        title={alert.title}
        message={alert.message}
        onClose={ alert.onClose }
      />
      <Footer />
    </>
  );
}

const AlertModal = ({ title, message, onClose }) => {
  const [show, setShow] = useState(false)
  const [animate, setAnimate] = useState(false);
  const animationDelay = 101;

  useEffect(() => {
    if (title && message) {
      setShow(true);
      setTimeout(() => setAnimate(true), animationDelay);
    } else {
      setShow(false);
    }
  }, [title, message]);

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => onClose(), animationDelay);
  }

  return (
    <div
      className={`modal fade ${show ? "d-block" : ""} ${animate ? "show" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      onClick={ closeModal }
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-info"
              onClick={ closeModal }
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoleModal = ({ player, role, onClose }) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const animationDelay = 101;

  useEffect(() => {
    if (player) {
      setShow(true);
      setTimeout(() => setAnimate(true), animationDelay);
    } else {
      setShow(false);
    }
  }, [player, role]);

  const closeModal = (evt) => {
    if (evt.target !== evt.currentTarget) return;
    setAnimate(false);
    setTimeout(() => onClose(), animationDelay);
  }

  return (
    <div
      className={`modal fade ${show ? "d-block" : ""} ${animate ? "show" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      onClick={ closeModal }
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Role</h5>
          </div>
          <div className="modal-body">
            <p><strong>{player}</strong>, your role is:</p>
            <p>{role?.name || "Unknown Role"}</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={ closeModal }
            >
              Hide Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
