import React from "react";
import { Link } from "react-router-dom";

const HorizontalCard = ({
  title,
  img,
  txtHead,
  txt,
  link1To,
  link1,
  link2To,
  link2,
}) => (
  <div className="col s12">
    <div style={{ height: "350px" }} className="card">
      <h4 className="header grey-text text-darken-2">{title}</h4>
      <div style={{ justifyContent: "center", display: "flex" }} className="card-image">{img}</div>
      <div className="card-stacked">
        <div className="card-content">
          <p className="black-text">
            <span className="flow-text">{txtHead} </span>
            {txt}
          </p>
        </div>

        <Link className="flow-text" to={link1To}>
          {link1 ? link1 : ""}
        </Link>
        <Link to={link2To}>{link2 ? link2 : ""}</Link>
      </div>
    </div>
  </div>
);

export default HorizontalCard;
