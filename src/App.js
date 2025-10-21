import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import CoverLetter from "./pages/CoverLetter";
import Contact from "./pages/Contact";
import Scholar from "./pages/Scholar";
import Resume from "./pages/Resume";
import MainPage from "./pages/MainPage";
import ScrollToTop from "./ScrollToTop";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/letter" component={CoverLetter} />
          <Route exact path="/scholar" component={Scholar} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cv" component={Resume} />
        </Router>
      </div>
    );
  }
}

export default App;
