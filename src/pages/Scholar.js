import React from "react";

export default function Scholar(props) {
	return (
		<div className="container">
			<h3 className="center-align">Scholar Information</h3>
			<div style={{ padding: "0.2rem" }} className="row center-align">
				<div className="col s12 m6 red lighten-4">
					<div style={{ padding: "0.2rem" }} className="card hoverable">
						<div>current</div> <i className="medium material-icons">school</i>{" "}
						<span className="flow-text">Computer Engineering</span> at UFSC
						<div className="progress">
							<div className="determinate" style={{ width: "70%" }}>
								{" "}
							</div>
						</div>
					</div>
				</div>
				<div className="col s12 m6 red lighten-4">
					<div className="right-align">previous</div>
					<div style={{ padding: "0.2rem" }} className="card hoverable">
						<span>
							{" "}
							<i className="material-icons">check</i>High School
						</span>{" "}
						<div className="progress">
							<div className="determinate" style={{ width: "100%" }}>
								{" "}
							</div>
						</div>
					</div>
					<div style={{ padding: "0.2rem" }} className="card hoverable">
						<span>
							{" "}
							<i className=" material-icons">blur_off</i>Energy Engineering
						</span>{" "}
						<div className="progress">
							<div className="determinate" style={{ width: "44%" }}>
								{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
