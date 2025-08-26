import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Family Chat App | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
