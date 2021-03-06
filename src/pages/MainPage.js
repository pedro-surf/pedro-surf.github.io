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
        <div className="psyk">
          <span>
            <em> Oh, a guest! Welcome, it's nice to have you here.</em>
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
                Hello! Pedro Silveira, web developer. At your service.{" "}
              </h2>
            </div>
            <div className="col s12 m6">
              <Toggler
                color=" text-darken-4 yellow	"
                icn="assignment_ind"
                btn="About me"
                html={
                  <ul className="collection">
                    <Link to="/contact" className="collection-item red-text">
                      <i className="tiny material-icons">feedback</i>
                      {"  "} Contact
                    </Link>
                    <Link to="/cv" className="collection-item red-text">
                      <i className="tiny material-icons">spa</i>
                      {"  "}Skills
                    </Link>
                    <Link to="/letter" className="collection-item red-text">
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
                    <li className="collection-item active">
                      This project uses:
                    </li>
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
                }
              />

              <Toggler
                icn="dashboard"
                btn="Projects I've worked on recently"
                color="green lighten-2 "
                html={
                  <div className="container">
                    <ul className="collection">
                      <ListItem
                        target="_blank"
                        to="http://www.3senergias.com.br/"
                        icn="battery_charging_full"
                        txt="3S Website"
                        txtColor="text-darken-4 red"
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
                        txt="MutualAid.World Open-Source App"
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
              <a
                className="collection-item blue-text text-darken-3"
                href="https://www.github.com/pedro-surf/My_Javascript_Articlepedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Toggler
                  color="lighten-3 red	"
                  icn="center_focus_weak"
                  btn={
                    <ToolTip
                      tTipText="Go to GitHub Repository"
                      pos="bottom"
                      tTipBtn="Programming Articles"
                    />
                  }
                />{" "}
              </a>
            </div>
          </div>
          <div className="row">
            <p className="flow-text">
              I'm a Computer Engineering student at
              <ToolTip
                tTipText="Universidade Federal de Santa Catarina"
                pos="top"
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
            </p>
            <p className="flow-text">
              I work mainly with the {"  "}
              <span style={{ cursor: "pointer", fontSize: "34px" }}>
                <ToolTip
                  tTipBtn="M"
                  pos="top"
                  tTipText="Mongoose"
                  color="text-accent-2 blue"
                ></ToolTip>
                <ToolTip
                  color="text-darken-3 yellow"
                  tTipBtn="E"
                  pos="top"
                  tTipText="Express"
                ></ToolTip>
                <ToolTip
                  tTipBtn="R"
                  pos="top"
                  tTipText="React"
                  color="text-accent-2 blue"
                ></ToolTip>
                <ToolTip
                  color="text-darken-3 yellow"
                  tTipBtn="N"
                  pos="top"
                  tTipText="Node.js"
                ></ToolTip>{" "}
              </span>
              stack.
            </p>
          </div>
        </div>
        <div className="container">
        <div className="row flow-text ">
              <ListItem
                target="_blank"
                to="https://www.github.com/pedro-surf"
                icn="flare"
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
              <ListItem
                target="_blank"
                to="https://www.facebook.com/pedrosilveira97"
                icn="folder_shared"
                txt="Facebook"
                txtColor="text-darken-4 blue"
                pointer
              />
            </div>
          <h2 className="grey-text text-darken-2">My mission is...</h2>
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
                txt="being able to help people the same way they once did for me. Having fun, meanwhile. Smile is great and so is enjoying life, right?"
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
                txtHead={"I'm pushing efforts "}
                txt="to learn new technologies, search the best options to deliver solutions, understand stack/tools in use to work with designers and other Devs."
                link1={"Check Skills"}
                link1To={"/cv"}
                title="as a Dev"
              />{" "}
            </div>
          </div>
        </div>
      </>
    );
  }
}
