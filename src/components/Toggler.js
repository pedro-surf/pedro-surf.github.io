import React from "react";

function Toggler({ icn, btn, color, html }) {
  return (
    <ul
      style={{ border: "0px none black" }}
      className="black-text collapsible hoverable"
    >
      <li>
        <div className={`collapsible-header ${color}-text valign-wrapper`}>
          <i className="tiny material-icons">{icn}</i>
          <span className="flow-text">{btn}</span>
        </div>
        {html && (
          <div
            style={{ border: "0px none black" }}
            className="collapsible-body"
          >
            {html}
          </div>
        )}
      </li>
    </ul>
  );
}

export default Toggler;
