import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { allRoles } from "../logic.js";

const Rules = () => {
  return (
    <div className="col mb-4">
      <ul className="list-group">
        {Object.entries(allRoles).map(([key, role]) => (
          <li key={key} className="list-group-item py-3">
            <div className="d-flex justify-content-between align-items-center">
              <span className="me-2 overflow-scroll">{role.name}</span>
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
  );
}

export default Rules;
