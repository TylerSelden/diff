import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <h4 className="pb-2 ps-1 pe-3 mb-3 border-bottom border-dark w-auto d-inline-block">
      {props.children}
    </h4>
  )
}
const SubHeader = (props) => {
  return (
    <h5 className="pb-2 ps-1 pe-3 mb-2 w-auto d-inline-block">
      {props.children}
    </h5>
  )
}
const Paragraph = (props) => {
  return (
    <p className="px-3 mb-5">
      {props.children}
    </p>
  )
}

export { Header, SubHeader, Paragraph };
