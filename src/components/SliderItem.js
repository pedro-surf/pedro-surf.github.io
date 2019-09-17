import React from "react";
function SliderItem(props) {
	let classes = `caption ${props.pos}-align`;
	return (
		<li>
			<img src={props.source} />
			<div className={classes}>
				<h3>{props.title}</h3>
				<h5 class="light grey-text text-lighten-3">{props.text}</h5>
			</div>
		</li>
	);
}
export default SliderItem;
