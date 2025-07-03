import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { RoleInfo } from "./roles";

const AlertModal = ({ title, message, onClose }) => {
  const [show, setShow] = useState(false)
  const [animate, setAnimate] = useState(false);
  const animationDelay = 50;

  useEffect(() => {
    if (title && message) {
      setShow(true);
      setTimeout(() => setAnimate(true), animationDelay);
    } else {
      setShow(false);
    }
  }, [title, message]);

  const closeModal = (evt) => {
    if (evt.target !== evt.currentTarget) return;
    setAnimate(false);
    setTimeout(() => onClose(), 101);
  }

  return (
    <div
      className={`modal fade ${show ? "d-block" : ""} ${animate ? "show" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      onClick={ closeModal }
    >
      <div className="modal-dialog px-2 px-sm-0 modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>
          <div className="modal-body">
            <p className="my-2">{message}</p>
          </div>
          <div className="modal-footer py-2">
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

const RoleModal = ({ player, assignedRoles, onClose }) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [roleData, setRoleData] = useState(null);
  const animationDelay = 50;

  useEffect(() => {
    if (player) {
      setRoleData(assignedRoles[player]);
      setShow(true);
      setTimeout(() => setAnimate(true), animationDelay);
    } else {
      setShow(false);
    }
  }, [player, roleData, assignedRoles]);

  const closeModal = (evt) => {
    if (evt.target !== evt.currentTarget) return;
    setAnimate(false);
    setTimeout(() => onClose(), 101);
  }

  return (
    <div
      className={`modal fade ${show ? "d-block" : ""} ${animate ? "show" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      onClick={ closeModal }
    >
      { player && roleData && (
        <div className="modal-dialog px-2 px-sm-0 modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><strong>The { roleData.name }</strong></h5>
            </div>
            <div className="modal-body px-0 py-1">
              <RoleInfo
                roleData={ roleData }
                isModal={ true }
              />
            </div>
            <div className="modal-footer py-2">
              <button
                className="btn btn-primary"
                onClick={ closeModal }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export { AlertModal, RoleModal };
