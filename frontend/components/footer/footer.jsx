import React from "react";

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-holder-left">
          <a className="footer-logo-title" href="#/">
            <img
              height="40"
              width="40"
              alt="logo"
              className="logo"
              src={window.favicon}
            />

            <span className="footer-trails">MyTrails</span>
          </a>
        </div>
        <div className="footer-holder-right">
          <div className="prof-links">
            <a href="https://github.com/gevorkia/trails">
              <img
                height="50"
                width="50"
                alt="github"
                className="github"
                src={window.github}
              />
            </a>
            <a href="https://www.linkedin.com/in/liligevorkian/">
              <img
                height="50"
                width="50"
                alt="linkedin"
                className="linkedin"
                src={window.linkedin}
              />
            </a>
          </div>
        </div>
      </div>
    );
}


export default Footer;