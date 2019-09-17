import React from "react";

function Toggler(props) {
	return (
		<ul className="collapsible hoverable">
			<li>
				<div className={`collapsible-header ${props.color}-text`}>
					<i className="material-icons">{props.icn}</i>
					{props.btn}
				</div>
				<div className="collapsible-body">{props.html}</div>
			</li>
		</ul>
	);
}

export default Toggler;
