import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import CoverLetter from "./pages/CoverLetter";
import Contact from "./pages/Contact";
import Scholar from "./pages/Scholar";
import Resume from "./pages/Resume";
import ComponentsPage from "./pages/ComponentsPage";
import MainPage from "./pages/MainPage";
class App extends Component {
	render() {
		return (
			<div
				className="App"
				style={{
					marginTop: "0px",
					height: `${window.innerHeight}px`,
					top: "0rem",
				}}
			>
				<Router basename={window.location.pathname || ""}>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/letter" component={CoverLetter} />
					<Route exact path="/components" component={ComponentsPage} />
					<Route exact path="/scholar" component={Scholar} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/cv" component={Resume} />
				</Router>
			</div>
		);
	}
}

export default App;
