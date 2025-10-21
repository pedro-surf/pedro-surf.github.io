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
  <div
    style={{ minHeight: "425px", display: "flex", flexDirection: "column" }}
    className="valign-wrapper card-panel hoverable"
  >
    <h4 className="header grey-text text-darken-3">{title}</h4>
    <div className="card-image">{img}</div>
    <div className="card-content">
      <span
        style={{
          minHeight: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="flow-text"
      >
        {txtHead}{" "}
      </span>
      <p
        className=" black-text"
        style={{ minHeight: "100px" }}
      >
        {txt}
      </p>

      <Link className="flow-text" style={{ marginTop: "auto" }} to={link1To}>
        {link1 ? link1 : ""}
      </Link>
      <Link to={link2To}>{link2 ? link2 : ""}</Link>
    </div>
  </div>
);

export default HorizontalCard;
