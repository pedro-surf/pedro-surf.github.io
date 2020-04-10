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
      <div className="psyk">
        <span>
          <em> Greetings! It's nice to have you here.</em>
        </span>

        <div className="row">
          <div className="col s12 m6" style={{ cursor: "pointer" }}>
            <ToolTip
              tTipText="Front-end"
              pos="bottom"
              tTipBtn={
                <span>
                  <i className="medium material-icons">collections</i>
                  <i className="medium material-icons">color_lens</i>
                </span>
              }
            />
            <ToolTip
              tTipText="Back-end"
              pos="bottom"
              tTipBtn={
                <span>
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
                  <li className="collection-item active">This project uses:</li>
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
              btn="Recent Projects"
              color="green lighten-2 "
              html={
                <div className="container">
                  <ul className="collection">
                    <ListItem
                      target="_blank"
                      to="http://www.3senergias.com.br/"
                      icn="battery_charging_full"
                      txt="Energy Company Website"
                      txtColor="text-darken-4 red"
                    />

                    <ListItem
                      to="https://github.com/ldseinhardt/moodle-dashboard"
                      target="_blank"
                      icn="school"
                      txt="CoffeeScript Moodle Plugin"
                      txtColor=" darken-1 amber"
                    />
                  </ul>
                </div>
              }
            />
            {/*<Link
								className="collection-item blue-text text-darken-3"
								to="/components"
							>
								<Toggler
									color="lighten-3 red	"
									icn="center_focus_weak"
									btn="Slider Galleries from Materialize"
									html={<div></div>}
								/>{" "}
							</Link>*/}
          </div>
        </div>
        <div className="row">
          <p className="flow-text">
            I'm a Computer Engineering student at
            <ListItem
              target="_blank"
              to="https://ufsc.br/"
              txt="UFSC"
              txtColor="text-darken-4 yellow"
              pointer
            />
          </p>
          <p className="flow-text">
              I work mainly with the {"  "}
            <span style={{ cursor: "pointer", fontSize: '34px' }}>
              <ToolTip
                tTipBtn="M"
                pos="top"
                tTipText="Mongoose"
                color="text-darken-3 white"
              ></ToolTip>
              <ToolTip
                color="text-darken-3 yellow"
                tTipBtn="E"
                pos="bottom"
                tTipText="Express"
              ></ToolTip>
              <ToolTip
                tTipBtn="R"
                pos="top"
                tTipText="React"
                color="white"
              ></ToolTip>
              <ToolTip
                color="text-darken-3 yellow"
                tTipBtn="N"
                pos="bottom"
                tTipText="Node.js"
              ></ToolTip>{" "}
            </span>
            stack. Find me on social media and connect.
          </p>
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
        </div>
        <div className="row">
          <div className="col s12 m6">
            <HorizontalCard
              img={
                <span className="valign-wrapper">
                  <i className="large material-icons">code</i>
                </span>
              }
              txtHead={"To build a fair and equal world,  "}
              txt="having fun and helping people, the same way they did once for me."
			  link2={"Cover Letter"}
              link2To={"/letter"}
              link1={"Contact Me"}
              link1To={"/contact"}
              title="Mission"
            />{" "}
          </div>

          <div className="col s12 m6">
            {" "}
            <HorizontalCard
              img={
                <span>
                  <i className="large material-icons">school</i>
                </span>
              }
              txtHead={"As a developer I'm always pushing "}
              txt="myself to learn new technologies and find the best option to deliver solutions for a task. My efforts are to be able to learn any stack/tool used in a project, to properly work with designers and other Devs."
              link1={"Check Skills"}
              link1To={"/cv"}
              title="Developer"
            />{" "}
          </div>
        </div>
      </div>
    );
  }
}
