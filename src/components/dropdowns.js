import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Rules from "./rules";
import Teams from "./teams";
import Roles from "./roles";

const Dropdowns = ({ players, rolesDisabled, setRolesDisabled }) => {
  return (
    <div className="mt-4">
      <Rules />
      <Teams />
      <Roles players={ players } rolesDisabled={rolesDisabled} setRolesDisabled={setRolesDisabled} />
    </div>
  );
}

export default Dropdowns;
