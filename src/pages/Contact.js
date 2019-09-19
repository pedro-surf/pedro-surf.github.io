import React from "react";
import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";
function Contact(props) {
	return (
		<div className="container">
			<div className="row" style={{ marginTop: "1rem" }}>
				{" "}
				<Link className="btn" to="/">
					Back to Main Page
				</Link>{" "}
				<Link className="btn green" to="/cv">
					Go to Resume
				</Link>{" "}
				<Link className="btn red" to="/scholar">
					See my Scholar info
				</Link>{" "}
				<Link className="btn blue" to="/letter">
					Read Cover Letter
				</Link>
			</div>

			<div className="row">
				<div className="col s6">
					<ul className="collection">
						<ListItem txt="E-mail" />
						<ListItem txt="GitHub" />
						<ListItem txt="LinkedIn" />
					</ul>
				</div>
				<div className="col s6">
					<ul className="collection">
						<ListItem txt="pedroaki.55@gmail.com" />
						<ListItem
							target="_blank"
							to="http://www.github.com/pedro-surf"
							txt="http://www.github.com/pedro-surf"
						/>
						<ListItem
							target="_blank"
							to="http://www.linkedin.com/in/pedro-surf"
							txt="http://www.linkedin.com/in/pedro-surf"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Contact;
