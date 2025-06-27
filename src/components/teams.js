import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import { SubHeader } from "./dropdown-components";
import { getTeams } from "../logic.js";

const Teams = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const teams = getTeams();

  return (
    <div className="col mt-2 mb-1 rounded bg-white">
      <button
        className="btn w-100 py-3 d-flex justify-content-between align-items-center"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="fw-bold">All Teams</span>
        <span className="d-flex">{dropdownOpen ? (<FaCaretDown />) : (<FaCaretRight />)}</span>
      </button>

      {dropdownOpen && (
        <div className="p-3">
          {Object.entries(teams).map(([teamName, teamInfo]) => (
            <div key={teamName}>
              <SubHeader>{teamName}:</SubHeader>
              <p className="ps-4 mb-2"><strong>Objective:</strong> {teamInfo.objective}</p>
              <p className="ps-4 mb-4"><strong>Roles:</strong> {teamInfo.roles.join(", ")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Teams;
