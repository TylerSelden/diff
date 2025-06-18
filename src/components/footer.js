import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <p className="text-light">&copy; {new Date().getFullYear()} Different Tag, All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
