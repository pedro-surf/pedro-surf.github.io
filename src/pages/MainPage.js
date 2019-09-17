import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import bg2 from "./img/plants.jpeg";
import bg1 from "./img/foods.jpeg";
import M from "materialize-css";
import CarouselItem from "../components/CarouselItem";
import Slider from "../components/Slider";
import ToolTip from "../components/ToolTip";
import Toggler from "../components/Toggler";
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
				<div className="darker">
					<header className="App-header">
						<p className="flow-text text-lighten-4 grey-text">
							Greetings! <em>It is nice to have you here.</em>
						</p>
					</header>
					<div className="row">
						<div className="col s6">
							<h1
								style={{ marginTop: "0rem" }}
								className="white-text left-align"
							>
								I'm Pedro Silveira, web developer. This project was at first
								built with the {"  "}
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
									stack. However, this version, available for GitHub Pages,
									consists of a front-end application only.{" "}
								</span>
							</h1>
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
						</div>
					</div>
					<Toggler
						color="lighten-3 red	"
						icn="center_focus_weak"
						btn="Little Components Showcase"
						html={
							<div>
								<Slider />
							</div>
						}
					/>{" "}
					<div className="carousel">
						<CarouselItem imgSrc={bg1} />
						<CarouselItem imgSrc={bg2} />
						<CarouselItem imgSrc={bg2} />
					</div>
					<div className="row"></div>
				</div>
			</div>
		);
	}
}
