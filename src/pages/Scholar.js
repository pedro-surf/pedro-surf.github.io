import React from "react";
import { Link } from "react-router-dom";
export default function Scholar(props) {
  return (
    <div className="container" style={{ textAlign: "justify", color: "blue" }}>
      <h3 className="center-align">Scholar Information</h3>
      <div className="row">
        <div className="col s12 center-align">
          <Link className="btn" style={{ margin: "0.5rem" }} to="/">
            Back to Main Page
          </Link>
        </div>
      </div>

      <div style={{ padding: "0.2rem" }} className="row center-align">
        <div className="col s12 m6 red lighten-4">
          <div style={{ padding: "0.2rem" }} className="card hoverable">
            <span className="card-title">In Progress</span>{" "}
            <div className="card-content">
              {" "}
              <i className="medium material-icons">school</i>{" "}
              <span className="flow-text">Computer Engineering</span> at UFSC
              <div className="progress">
                <div className="determinate" style={{ width: "70%" }}>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m6 red lighten-4">
          <div style={{ padding: "0.2rem" }} className="card hoverable">
            <span className="card-title green-text">completed</span>
            <div className="card-content">
              {" "}
              <span>
                {" "}
                <i className="material-icons">check</i>High School
              </span>{" "}
              <div className="progress">
                <div className="determinate" style={{ width: "100%" }}>
                  {" "}
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "0.2rem" }} className="card hoverable">
            <span className="card-title">evasion</span>
            <div className="card-content">
              <span>
                {" "}
                <i className=" material-icons">blur_off</i>Energy Engineering
              </span>{" "}
              <div className="progress">
                <div className="determinate" style={{ width: "44%" }}>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
