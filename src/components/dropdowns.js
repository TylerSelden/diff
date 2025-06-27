import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import Rules from "./rules";
import Teams from "./teams";

const Dropdowns = () => {
  return (
    <div className="container mt-4">
      <Rules />
      <Teams />
    </div>
  );
}

export default Dropdowns;
