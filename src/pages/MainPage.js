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
					<div className="col s12 m6">
						<ToolTip
							tTipText="Design"
							pos="bottom"
							tTipBtn={
								<span>
									<i className="medium material-icons">collections</i>
									<i className="medium material-icons">color_lens</i>
								</span>
							}
						/>
						<ToolTip
							tTipText="Software Engineering and Code!"
							pos="bottom"
							tTipBtn={
								<span>
									<i className="medium material-icons">build</i>
									<i className="medium material-icons">code</i>
								</span>
							}
						/>
						<h2 className="white-text left-align">
							I'm Pedro Silveira, web developer. At your service.{" "}
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
						<Toggler
							color="blue accent-1"
							icn="device_hub"
							btn="Social Links"
							html={
								<div className="container">
									<ul className="collection">
										<ListItem
											target="_blank"
											to="https://www.github.com/pedro-surf"
											icn="flare"
											txt="GitHub"
											txtColor="text-darken-4 yellow"
										/>
										<ListItem
											target="_blank"
											to="https://www.linkedin.com/in/pedro-surf"
											icn="flip_to_front"
											txt="LinkedIn"
											txtColor="text-accent-2 blue"
										/>
										<ListItem
											target="_blank"
											to="https://www.facebook.com/pedrosilveira97"
											icn="folder_shared"
											txt="Facebook"
											txtColor="text-darken-4 blue"
										/>
									</ul>
								</div>
							}
						/>

						<Link
							className="collection-item blue-text text-darken-3"
							to="/components"
						>
							<Toggler
								color="lighten-3 red	"
								icn="center_focus_weak"
								btn="Slider Galleries from Materialize"
								html={<div></div>}
							/>{" "}
						</Link>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<p className="flow-text">
							Currently, I work mainly with the {"  "}
							<span>
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
								stack. Besides freelancing, I'm also looking for a remote
								position (part or full-time) within this stack. This SPA was
								built with <em>create-react-app</em> and published on GitHub
								Pages in Sep 17th, 2019.
							</span>
						</p>
					</div>
					<div className="row">
						<div className="col s12 m6">
							<HorizontalCard
								img={
									<span className="valign-wrapper">
										<i className="large material-icons">code</i>
									</span>
								}
								txtHead={"To work hard and seriously  "}
								txt="to master new techs and figure out what's the best option to deliver solutions for each faced issue. Learn any stack/tool used in a project, in order to work properly with other developers."
								link2={"Check Skills"}
								link2To={"/cv"}
								link1={"Contact Me"}
								link1To={"/contact"}
								title="Goals"
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
								txtHead={"Engineering is a long career, but "}
								txt="I want to get a job. That will help me improve and grow as a developer. Real, industry-level projects are much more exciting than small projects for freelancing/studying. Feel free to contact me."
								link1={"Check Skills"}
								link1To={"/cv"}
								link2={"Read Cover Letter"}
								link2To={"/letter"}
								title="Hire Me"
							/>{" "}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
