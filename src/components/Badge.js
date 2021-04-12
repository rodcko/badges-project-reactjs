import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://secure.gravatar.com/avatar/a2d1c6738a16234e1c63f2d637c23130"
            alt="Avatar"
          />
          <h1>
            Rodrigo <br /> Hernandez
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Software Architect</h3>
          <div>@rodcko_</div>
        </div>

        <div class="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
