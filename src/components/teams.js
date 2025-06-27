import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import { SubHeader } from "./dropdown-components";
import { teams } from "../logic.js";

const Teams = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <div className="p-3 row">
          {Object.entries(teams).map(([teamName, teamInfo]) => (
            <div key={teamName} className="col-12 col-md-6 mb-2">
              <div className="card h-100 bg-light border-0">
                <div className="card-body">
                  <h5 className="card-title mb-4">{teamName}</h5>
                  <p className="card-text ps-3 mb-3"><strong>Objective:</strong> {teamInfo.objective}</p>
                  <p className="card-text ps-3 mb-2"><strong>Members:</strong> {teamInfo.roles.join(", ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Teams;
