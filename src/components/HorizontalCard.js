import React from "react";

const HorizontalCard = props => (
	<div className="col s12 m7">
		<h2 className="header">Horizontal Card</h2>
		<div className="card horizontal">
			<div className="card-image">{props.img}</div>
			<div className="card-stacked">
				<div className="card-content">
					<p>{props.txt}</p>
				</div>

				<a href={props.link1To}>{props.link1 ? props.link1 : ""}</a>
				<a href={props.link2To}>{props.link2 ? props.link2 : ""}</a>
			</div>
		</div>
	</div>
);

export default HorizontalCard;
