import React from "react";
import { Link } from "react-router-dom";

const HorizontalCard = props => (
	<div className="col s12">
		<h4 className="header">{props.title}</h4>
		<div className="card horizontal">
			<div className="card-image">{props.img}</div>
			<div className="card-stacked">
				<div className="card-content">
					<p style={{ color: "black" }}>
						{" "}
						<span className="flow-text">{props.txtHead} </span>
						{props.txt}
					</p>
				</div>

				<Link className="flow-text" to={props.link1To}>{props.link1 ? props.link1 : ""}</Link>
				<Link to={props.link2To}>{props.link2 ? props.link2 : ""}</Link>
			</div>
		</div>
	</div>
);

export default HorizontalCard;
