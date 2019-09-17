import React from "react";
import { Link } from "react-router-dom";
import bg from "./bg.jpeg";
import "../App.css";
import M from "materialize-css";
import Slider from "../components/Slider";
import ToolTip from "../components/ToolTip";
import Toggler from "../components/Toggler";
import ListItem from "../components/ListItem";
export default class MainPage extends React.Component {
	componentDidMount() {
		M.AutoInit();
	}

	dataSet = ["Redis", "Django", "Visual Studio", "PHP"];
	render() {
		return (
			<div className="psyk">
				<div className="darker">
					<header className="App-header">
						<p className="flow-text">
							Greetings! <em>It is nice to have you here.</em> I am Pedro
							Silveira. Built with the {"  "}
							<span>
								<ToolTip
									tTipBtn="M"
									pos="top"
									tTipText="Mongoose"
									color="text-darken-3 green"
								></ToolTip>
								<ToolTip
									color="green"
									tTipBtn="E"
									pos="bottom"
									tTipText="Express"
								></ToolTip>
								<ToolTip
									tTipBtn="R"
									pos="top"
									tTipText="React"
									color="text-darken-2 blue"
								></ToolTip>
								<ToolTip tTipBtn="N" pos="bottom" tTipText="Node.js"></ToolTip>{" "}
								stack.{" "}
							</span>
						</p>
					</header>
					<div className="row">
						<div className="col s6">
							<Toggler
								color="blue accent-1"
								icn="developer_mode"
								btn="Social Links"
								html={
									<div class="container">
										<ul className="collection">
											<ListItem
												icn="flare"
												txt="GitHub"
												txtColor="text-darken-4 yellow"
											/>
											<ListItem
												icn="flip_to_front"
												txt="LinkedIn"
												txtColor="text-accent-2 blue"
											/>
											<ListItem
												icn="folder_shared"
												txt="Facebook"
												txtColor="text-darken-4 blue"
											/>
										</ul>
									</div>
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
												txt="Energy Company Website"
												txtColor="text-darken-4 red"
											/>

											<ListItem
												txt="CoffeeScript Moodle Plugin"
												txtColor=" darken-1 amber"
											/>
										</ul>
									</div>
								}
							/>
						</div>
						<div className="col s12 m6">
							<Toggler
								color="lighten-3 purple "
								icn="developer_mode"
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
										<li
											className="collection-item active"
											style={{ fontSize: "0.8rem" }}
										>
											This project uses:
										</li>
										<ListItem
											icn="center_focus_weak"
											txt="React"
											txtColor="text-darken-4 yellow"
										/>
										<ListItem
											icn="border_color"
											txt="Materialize"
											txtColor="text-darken-4 red"
										/>
									</ul>
								}
							/>

							<Toggler
								color=" text-darken-4 yellow	"
								icn="center_focus_weak"
								btn="Other Skills"
								html={this.dataSet.map((el, i) => (
									<ListItem txt={el} txtColor="red" />
								))}
							/>
						</div>
					</div>

					<Toggler
						color=" text-darken-4 yellow	"
						icn="center_focus_weak"
						btn="Little Components Showcase"
						html={<ListItem txt="Slider Gallery" txtColor="darken-2 blue" />}
					/>

					<div className="container">
						<div className="row">
							<div className="carousel">
								<a className="carousel-item" href="#one!" alt="">
									<img
										class="materialboxed"
										src="https://lorempixel.com/250/250/nature/1"
										alt=""
									/>
								</a>
								<a className="carousel-item" href="#two!" alt="">
									<img alt="" src="https://lorempixel.com/250/250/nature/5" />
								</a>
								<a className="carousel-item" href="#three!" alt="">
									<img alt="" src="https://lorempixel.com/250/250/nature/2" />
								</a>
								<a className="carousel-item" href="#four!" alt="">
									<img src="https://lorempixel.com/250/250/nature/3" />
								</a>
								<a className="carousel-item" href="#five!" alt="">
									<img src="https://lorempixel.com/250/250/nature/4" />
								</a>
							</div>
						</div>

						<Slider />
					</div>
				</div>
			</div>
		);
	}
}
