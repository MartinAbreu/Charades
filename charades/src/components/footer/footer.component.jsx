import React from "react";

import "./footer.style.scss";

const Footer = () => (
  <footer className="footer-wrap">
    <span>
      Charades game developed by the father/daughter duo{" "}
      <a
        href="https://github.com/brolz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Martin Abreu
      </a>{" "}
      &{" "}
      <a
        href="https://github.com/brianaabreu"
        target="_blank"
        rel="noopener noreferrer"
      >
        Briana Abreu
      </a>
    </span>
  </footer>
);

export default Footer;
