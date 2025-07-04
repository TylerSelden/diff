import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Rules from "./rules";
import Teams from "./teams";
import { Roles } from "./roles";
import { allRoles } from "../logic.js";

const Dropdowns = ({ players, rolesDisabled, setRolesDisabled }) => {
  return (
    <div className="mt-4">
      <Rules />
      <Teams />
      <Roles players={ players } rolesDisabled={ rolesDisabled } setRolesDisabled={ setRolesDisabled } isSandbox={ false } />
      { Object.entries(allRoles).filter(([key, val]) => val.sandbox).length > 0 && (
        <Roles players={ players } rolesDisabled={ rolesDisabled } setRolesDisabled={ setRolesDisabled } isSandbox={ true } />
      )}
    </div>
  );
}

export default Dropdowns;
