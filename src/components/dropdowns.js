import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Rules from "./rules";
import Teams from "./teams";
import { Roles } from "./roles";
import { allRoles } from "../logic.js";

const Dropdowns = ({ players, rolesEnabled, setRolesEnabled }) => {
  return (
    <div className="mt-4">
      <Rules />
      <Teams />
      <Roles players={ players } rolesEnabled={ rolesEnabled } setRolesEnabled={ setRolesEnabled } isSandbox={ false } />
      { Object.entries(allRoles).filter(([key, val]) => val.sandbox).length > 0 && (
        <Roles players={ players } rolesEnabled={ rolesEnabled } setRolesEnabled={ setRolesEnabled } isSandbox={ true } />
      )}
    </div>
  );
}

export default Dropdowns;
