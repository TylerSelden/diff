import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import Rules from "./rules";
import Teams from "./teams";
import Roles from "./roles";

const Dropdowns = ({ players }) => {
  return (
    <div className="mt-4">
      <Rules />
      <Teams />
      <Roles players={ players }/>
    </div>
  );
}

export default Dropdowns;
