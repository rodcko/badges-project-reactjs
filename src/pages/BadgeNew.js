import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Rodrigo"
                lastName="Hernandez"
                twitter="rodcko_"
                jobTitle="Software Architect"
                avatarUrl="https://secure.gravatar.com/avatar/a2d1c6738a16234e1c63f2d637c23130"
              ></Badge>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
