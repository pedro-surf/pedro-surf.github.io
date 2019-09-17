import React from "react";
import { Link } from "react-router-dom";
function CoverLetter(props) {
	return (
		<div>
			<p className="flow-text">
				This is cover letter page.
				<Link className="btn " to="/">
					Back to Main Page
				</Link>
			</p>
		</div>
	);
}

export default CoverLetter;
