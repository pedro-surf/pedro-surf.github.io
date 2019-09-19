import React from "react";

function Toggler(props) {
	return (
		<ul
			style={{ border: "0px none black" }}
			className="black-text collapsible hoverable"
		>
			<li>
				<div className={`collapsible-header ${props.color}-text`}>
					<i className="material-icons">{props.icn}</i>
					{props.btn}
				</div>
				<div style={{ border: "0px none black" }} className="collapsible-body">
					{props.html}
				</div>
			</li>
		</ul>
	);
}

export default Toggler;
