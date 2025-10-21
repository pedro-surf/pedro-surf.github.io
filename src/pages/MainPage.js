import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import M from "materialize-css";
import ToolTip from "../components/ToolTip";
import Toggler from "../components/Toggler";
import HorizontalCard from "../components/HorizontalCard";
import ListItem from "../components/ListItem";
export default class MainPage extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  dataSet = ["Redis", "Django", "Visual Studio", "PHP"];
  append = this.dataSet.map((el, i) => <ListItem txt={el} txtColor="red" />);
  render() {
    return (
      <>
        <div className="main-container">
          <span>
            <em>Oh, a guest! Welcome — glad you’re here.</em>
          </span>

          <div className="row">
            <div className="col s12 m6">
              <ToolTip
                tTipText="Front-end"
                pos="bottom"
                tTipBtn={
                  <span style={{ cursor: "pointer" }}>
                    <i className="medium material-icons">collections</i>
                    <i className="medium material-icons">color_lens</i>
                  </span>
                }
              />
              <ToolTip
                tTipText="Back-end"
                pos="bottom"
                tTipBtn={
                  <span style={{ cursor: "pointer" }}>
                    <i className="medium material-icons">build</i>
                    <i className="medium material-icons">code</i>
                  </span>
                }
              />
              <h2 className="white-text left-align">
                Hello! Pedro Silveira, Senior Software Engineer at your
                service.
              </h2>
            </div>
            <div className="col s12 m6">
              <Toggler
                color=" text-darken-4 yellow	"
                icn="assignment_ind"
                btn="About me"
                html={
                  <ul className="collection">
                    <Link
                      to="/contact"
                      className="collection-item blue-text text-darken-3"
                    >
                      <i className="tiny material-icons">feedback</i>
                      {"  "} Contact
                    </Link>
                    <Link
                      to="/cv"
                      className="valign-wrapper collection-item blue-text text-darken-3"
                    >
                      <i className="tiny material-icons">spa</i>
                      {"  "}Skills
                    </Link>
                    <Link
                      to="/letter"
                      className="collection-item blue-text text-darken-3"
                    >
                      <i className="tiny material-icons">markunread</i>
                      {"  "} Cover Letter
                    </Link>
                    <Link
                      className="collection-item blue-text text-darken-3"
                      to="/scholar"
                    >
                      <i className="tiny material-icons">school</i>
                      {"  "}
                      Scholar info
                    </Link>
                  </ul>
                }
              />

              <Toggler
                icn="dashboard"
                btn="Some of my recent projects"
                color="green lighten-2 "
                html={
                  <div className="container">
                    <ul className="collection">
                      <ListItem
                        target="_blank"
                        to="http://www.luxurypresence.com"
                        icn="real_estate_agent"
                        txt="Luxury Presence"
                        txtColor="text-darken-4 black"
                        pointer
                      />
                      <ListItem
                        target="_blank"
                        to="https://essexsoftware.com/batch-pdf-merger/"
                        icn="picture_as_pdf"
                        txt="Batch PDF Merger"
                        txtColor="text-darken-4 blue"
                        pointer
                      />
                      <ListItem
                        target="_blank"
                        to="http://www.casasparana.com.br"
                        icn="construction"
                        txt="Casas Paraná"
                        txtColor="text-darken-3 red"
                        pointer
                      />
                      <ListItem
                        target="_blank"
                        to="http://www.3senergias.com.br/"
                        icn="lightbulb_circle"
                        txt="3S Website"
                        txtColor="text-darken-4 green"
                        pointer
                      />

                      <ListItem
                        pointer
                        to="https://github.com/ldseinhardt/moodle-dashboard"
                        target="_blank"
                        icn="school"
                        txt="Moodle Chrome Extension"
                        txtColor="text-darken-3 green"
                      />
                      <ListItem
                        pointer
                        to="https://github.com/factn/resilience-app"
                        target="_blank"
                        icn="healing"
                        txt="MutualAid.World (Open-Source)"
                        txtColor="text-darken-3 grey"
                      />

                      <ListItem
                        pointer
                        to="https://vestidasdebranco.com.br"
                        target="_blank"
                        icn="storefront"
                        txt="Vestidas de Branco"
                        txtColor="text-darken-3 orange"
                      />

                      <ListItem
                        pointer
                        to="https://debuth.com"
                        target="_blank"
                        icn="emoji_symbols"
                        txt="Debuth"
                        txtColor="text-darken-3 purple"
                      />
                    </ul>
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <h3 className="flow-text left-align">
                Experienced with React, Node.js, and SQL-based backends.
              </h3>
              <h4 className="flow-text left-align">
                Currently wrapping up my studies and pursuiting my Computer
                Engineering degree at
                <ToolTip
                  tTipText="Universidade Federal de Santa Catarina"
                  // pos="top"
                  tTipBtn={
                    <ListItem
                      target="_blank"
                      to="https://ufsc.br/"
                      txt="UFSC"
                      txtColor="text-darken-4 yellow"
                      pointer
                    />
                  }
                />
              </h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row flow-text ">
            <ListItem
              target="_blank"
              to="https://www.github.com/pedro-surf"
              icn="commit"
              txt="GitHub"
              txtColor="text-darken-4 yellow"
              pointer
            />
            <ListItem
              target="_blank"
              to="https://www.linkedin.com/in/pedro-surf"
              icn="flip_to_front"
              txt="LinkedIn"
              txtColor="text-accent-2 blue"
              pointer
            />
          </div>
          <h2
            className="grey-text text-darken-2"
            style={{ marginBottom: "3rem" }}
          >
            My mission is...
          </h2>
          <div className="row">
            <div className="col s12 m6">
              <HorizontalCard
                img={
                  <span className="valign-wrapper">
                    <i className="large material-icons">
                      sentiment_satisfied_alt
                    </i>
                  </span>
                }
                txtHead={"To build a fair and equal world,  "}
                txt="Helping people and their businesses thrive—just as others once did for me. Enjoying the process and keeping a smile along the way."
                link1={"Cover Letter"}
                link1To={"/letter"}
                title="as a Human"
              />{" "}
            </div>

            <div className="col s12 m6">
              {" "}
              <HorizontalCard
                img={
                  <span>
                    <i className="large material-icons">code</i>
                  </span>
                }
                txtHead={"I am committed to  "}
                txt="Exploring emerging technologies, optimizing tool choices for efficient solutions, and collaborating across product, engineering and design to deliver high-quality products."
                link1="My Skills"
                link1To={"/cv"}
                title="as a Software Engineer"
              />{" "}
            </div>
          </div>
          <div className="row">
            <h2 className="grey-text text-darken-2"> This project uses: </h2>
            <ul className="collection-item active text-darken-4">
              <ListItem
                target="_blank"
                to="https://github.com/facebook/react"
                icn="center_focus_weak"
                txt="React"
                txtColor="text-darken-4 yellow"
              />
              <ListItem
                target="_blank"
                to="https://materializecss.com/"
                icn="border_color"
                txt="Materialize"
                txtColor="text-darken-4 red"
              />
            </ul>
          </div>
        </div>
      </>
    );
  }
}
