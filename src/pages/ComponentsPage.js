import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import CarouselGallery from "../components/CarouselGallery";
import Slider from "../components/Slider";

export default class ComponentsPage extends React.Component {
	componentDidMount() {
		M.AutoInit();
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<Link className="btn " to="/">
						Back to Main Page
					</Link>
				</div>
				<div className="row">
					<div className="col s12">
						<div className="flow-text">Carousel</div>
						<CarouselGallery />
					</div>
				</div>{" "}
				<div className="row">
					{" "}
					<div className="flow-text">Carousel</div>
					<Slider />
				</div>
			</div>
		);
	}
}
