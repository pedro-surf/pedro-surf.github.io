import React from "react";

const ListItem = props => (
	<a
		href={props.to || ""}
		rel="noopener noreferrer"
		target={props.target}
		className={`collection-item ${props.txtColor}-text waves-effect`}
		style={{ cursor: props.pointer ? 'pointer' : 'initial',
	padding: '0.6em' }}
	>
		{props.icn ? <i className="tiny material-icons">{props.icn}</i> : ""}
		{"  "}
		{props.txt}
	</a>
);

export default ListItem;
