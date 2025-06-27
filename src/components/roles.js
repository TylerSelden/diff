import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import { allRoles } from "../logic.js";

const RoleInfo = ({ roleData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const playerCount = () => {
    if (roleData.minPlayers === 0 && roleData.maxPlayers === Infinity) return "N/A";
    if (roleData.minPlayers === 0) return `≤${roleData.maxPlayers}`;
    if (roleData.maxPlayers === Infinity) return `≥${roleData.minPlayers}`;
    return `${roleData.minPlayers} - ${roleData.maxPlayers}`;
  }

  return (
    <div className="ps-4 pt-2 pb-3">
      <p><strong>Team:</strong> {roleData.team}</p>
      <p><strong>Objective:</strong> {roleData.objective}</p>
      <p><strong>Kills:</strong> {roleData.kills}</p>
      <p><strong>Revives:</strong> {roleData.revives}</p>
      <p><strong>Notes:</strong> {roleData.notes}</p>

      <div className="col mb-1 mt-4 me-4 rounded bg-white">
        <button
          className="btn w-100 py-3 d-flex justify-content-between align-items-center"
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="fw-bold">More Details</span>
          <span className="d-flex">{dropdownOpen ? (<FaCaretDown />) : (<FaCaretRight />)}</span>
        </button>
        {dropdownOpen && (
          <div className="p-4 pt-2 pb-2">
            <p><strong>Required Players:</strong> {playerCount()}</p>
            <p><strong>Is Fallback Role:</strong> {roleData.isFallback ? "Yes" : "No"}</p>
            <p><strong>Unique:</strong> {roleData.unique ? "Yes" : "No"}</p>
            <p><strong>Rarity:</strong> {roleData.bounces}</p>
            {roleData.dependencies.length > 0 && (
              <div>
                <strong>Dependencies:</strong>
                <ul>
                  {roleData.dependencies.map(dep => (
                    <li key={dep}>{allRoles[dep].name}</li>
                  ))}
                </ul>
              </div>
            )}
            {roleData.isDependency && (
              <p><strong>Dependency of:</strong> {allRoles[roleData.dependencyOf].name}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

const Roles = ({ players }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visibleRole, setVisibleRole] = useState("");
  const [rolesDisabled, setRolesDisabled] = useState([]);


  const switchIsDisabled = (role) => {
    const roleData = allRoles[role];
    if (roleData.required || roleData.isDependency) return true;
    if (players.length < roleData.minPlayers || players.length > roleData.maxPlayers) return true;

    const oneFallbackLeft = Object.entries(allRoles).filter(([name, role]) => role.isFallback && !rolesDisabled.includes(name)).length === 1;
    if (!rolesDisabled.includes(role) && roleData.isFallback && oneFallbackLeft) return true;

    return false;
  }

  const switchIsOn = (role) => {
    const roleData = allRoles[role];
    if (roleData.isDependency && !switchIsOn(roleData.dependencyOf)) return false;
    if (players.length < roleData.minPlayers || players.length > roleData.maxPlayers) return false;
    if (rolesDisabled.includes(role)) return false;
    return true;
  }


  return (
    <div className="col mt-2 mb-1 rounded bg-white">
      <button
        className="btn w-100 py-3 d-flex justify-content-between align-items-center"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="fw-bold">Roles</span>
        <span className="d-flex">{dropdownOpen ? (<FaCaretDown />) : (<FaCaretRight />)}</span>
      </button>

      {dropdownOpen && (
        <div className="p-3 pt-0">
          {Object.entries(allRoles).map(([role, roleData]) => (
            <div className="col mt-2 mb-1 rounded bg-light" key={role}>
              <button
                className="btn w-100 py-3 d-flex justify-content-between align-items-center"
                type="button"
                onClick={() => setVisibleRole(visibleRole === role ? "" : role)}
              >
                <span className="fw-bold">
                  {roleData.required && <span className="text-danger">*</span>}
                  {roleData.name}
                </span>
                <div className="d-flex align-items-center">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={switchIsOn(role)}
                      disabled={switchIsDisabled(role)}
                      onClick={(evt) => evt.stopPropagation()}
                      onChange={(evt) => {
                        if (rolesDisabled.includes(role)) {
                          setRolesDisabled(rolesDisabled.filter(r => r !== role));
                        } else {
                          setRolesDisabled([...rolesDisabled, role]);
                        }
                      }}
                    />
                  </div>
                  <span className="d-flex">{visibleRole === role ? (<FaCaretDown />) : (<FaCaretRight />)}</span>
                </div>
              </button>

              {visibleRole === role && (
                <RoleInfo roleData={roleData} />
              )}
            </div>
          ))}

          <p className="text-primary mt-4">* indicates a required role</p>
        </div>
      )}
    </div>
  );
}

export default Roles;
