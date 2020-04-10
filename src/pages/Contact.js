import React from "react";
import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";
function Contact(props) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "1rem" }}>
        {" "}
        <Link className="btn" to="/">
          Back to Main Page
        </Link>{" "}
        <Link className="btn green" to="/cv">
          Skill/Techs
        </Link>{" "}
        <Link className="btn red" to="/scholar">
          Scholar information
        </Link>{" "}
        <Link className="btn blue" to="/letter">
          Cover Letter
        </Link>
      </div>
      <h2 className="black-text">Contact Page</h2>
      <div className="row">
        <div className="col s4">
          <ul className="collection">
            <ListItem txtColor="black" icn="alternate_email" txt="E-mail" />
            <ListItem txt="GitHub" txtColor="black" icn="account_box" />
            <ListItem txt="LinkedIn" txtColor="black" icn="business_center" />
          </ul>
        </div>
        <div className="col s8">
          <ul className="collection">
            <ListItem
              to="mailto:pedroaki.55@gmail.com"
			  txt="pedroaki.55@gmail.com"
			  pointer
            />
            <ListItem
              target="_blank"
              to="http://www.github.com/pedro-surf"
              txt="http://www.github.com/pedro-surf"
			  pointer
			/>
            <ListItem
              target="_blank"
              to="http://www.linkedin.com/in/pedro-surf"
              txt="http://www.linkedin.com/in/pedro-surf"
			  pointer
			/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
