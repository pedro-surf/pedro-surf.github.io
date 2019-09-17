import React from "react";
import M from "materialize-css";
import SliderItem from "./SliderItem";
export default class Slider extends React.Component {
	componentDidMount() {
		let elems = document.querySelectorAll(".slider");
		M.Slider.init(elems);
	}
	render() {
		return (
			<div className="container">
				<div className="slider">
					<ul className="slides">
						<SliderItem
							source="https://lorempixel.com/580/250/nature/1"
							text="Let's talk about your ideas"
							title="Get in Touch"
							pos="left"
						/>
						<SliderItem
							source="https://lorempixel.com/580/250/nature/2"
							text="Hire a freelancer"
							title="Personal customer support"
							pos="right"
						/>
						<SliderItem
							source="https://lorempixel.com/580/250/nature/3"
							text="See Previous Projects"
							title="Go to Gallery"
							pos="center"
						/>
						<SliderItem
							source="https://lorempixel.com/580/250/nature/4"
							text="See GitHub Profile"
							title=""
							pos="left"
						/>
					</ul>
				</div>
			</div>
		);
	}
}
