import React from "react";
function ToolTip(props) {
	return (
		<span
			className={`tooltipped ${props.color}-text`}
			data-position={props.pos}
			data-tooltip={props.tTipText}
		>
			{props.tTipBtn}
		</span>
	);
}
export default ToolTip;
