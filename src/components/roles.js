import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import { allRoles, roleIsEnabled } from "../logic.js";

const RoleInfo = ({ roleData, isModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const playerCount = () => {
    if (roleData.minPlayers === 0 && roleData.maxPlayers === Infinity) return "N/A";
    if (roleData.minPlayers === 0) return `≤${ roleData.maxPlayers }`;
    if (roleData.maxPlayers === Infinity) return `≥${ roleData.minPlayers }`;
    return `${ roleData.minPlayers} - ${roleData.maxPlayers }`;
  }

  return (
    <div className="px-4 pt-2 pb-3">
      <p><strong>Team:</strong> { roleData.team }</p>
      <p><strong>Objective:</strong> { roleData.objective }</p>
      <p><strong>Kills:</strong> { roleData.kills }</p>
      <p><strong>Revives:</strong> { roleData.revives }</p>
      <p><strong>Notes:</strong> { roleData.notes }</p>
      { console.log(roleData.customCode !== undefined) }
      { roleData.customCode && (
        isModal ? (
          <p><strong>{ roleData.customCode.result[0] }:</strong> { roleData.customCode.result[1] }</p>
        ) : (
          <p><strong>Custom Code:</strong> { roleData.customCode.reason }</p>
        )
      )}

      <div className={`col mb-1 mt-4 rounded bg-${ isModal ? "light" : "white" }`}>
        <button
          className="btn w-100 py-3 d-flex justify-content-between align-items-center"
          type="button"
          onClick={ () => setDropdownOpen(!dropdownOpen) }
        >
          <span className="fw-bold">More Details</span>
          <span className="d-flex">{ dropdownOpen ? (<FaCaretDown />) : (<FaCaretRight />) }</span>
        </button>
        { dropdownOpen && (
          <div className="p-4 pt-2 pb-2">
            <p><strong>Required Players:</strong> { playerCount() }</p>
            <p><strong>Is Fallback Role:</strong> { roleData.isFallback ? "Yes" : "No" }</p>
            <p><strong>Unique:</strong> { roleData.unique ? "Yes" : "No" }</p>
            <p><strong>Rarity:</strong> { roleData.bounces }</p>
            { roleData.dependencies.length > 0 && (
              <div>
                <strong>Dependencies:</strong>
                <ul>
                  {roleData.dependencies.map(dep => (
                    <li key={ dep }>{ allRoles[dep].name }</li>
                  ))}
                </ul>
              </div>
            )}
            {roleData.isDependency && (
              <p><strong>Dependency of:</strong> { allRoles[roleData.dependencyOf].name }</p>
            )}
            <p><strong>Is Sandbox Role:</strong> { roleData.sandbox ? "Yes" : "No" }</p>
          </div>
        )}
      </div>
    </div>
  )
}

const Roles = ({ players, rolesDisabled, setRolesDisabled }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visibleRole, setVisibleRole] = useState("");

  const switchIsDisabled = (role) => {
    const roleData = allRoles[role];
    if (roleData.required || roleData.isDependency) return true;
    if (players.length < roleData.minPlayers || players.length > roleData.maxPlayers) return true;

    const oneFallbackLeft = Object.entries(allRoles).filter(([name, role]) => role.isFallback && !rolesDisabled.includes(name)).length === 1;
    if (!rolesDisabled.includes(role) && roleData.isFallback && oneFallbackLeft) return true;

    return false;
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
                  <div className="form-check form-switch midswitch d-flex align-items-center">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      checked={roleIsEnabled(rolesDisabled, players.length, role)}
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

          <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mt-4 mb-2">
            <p className="text-primary m-0">* indicates a required role</p>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-secondary text-white me-2"
                onClick={() => setRolesDisabled(Object.keys(allRoles).filter(role => !switchIsDisabled(role)))}
              >
                Disable All
              </button>
              <button
                className="btn btn-info"
                onClick={() => setRolesDisabled([])}
              >
                Enable All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { RoleInfo, Roles };
