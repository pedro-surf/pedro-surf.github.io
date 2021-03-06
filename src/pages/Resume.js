import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import Toggler from "../components/Toggler";
import ListItem from "../components/ListItem";
import "../App.css";

export default class Resume extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="skills">
        <div className="darker">
          <div className="row">
            <span>
              <Link to="/" className="btn">
                {" "}
                Back to Main Page
              </Link>
            </span>
          </div>

          <div className="col s12">
            <Toggler
              color="yellow lighten-3 "
              icn="developer_mode"
              btn="Fullstack JavaScript"
              html={
                <ul className="collection">
                  <Toggler
                    color="blue lighten-2 "
                    icn="developer_mode"
                    btn="Front-End"
                    html={
                      <span>
                        <ListItem
                          txt="Publish & Fix Websites, Apps"
                          txtColor="text-darken-3 indigo"
                        />
                        <ListItem
                          txt="React, React Native"
                          txtColor="text-darken-3 indigo"
                        />

                        <ListItem
                          txt="Vue, Angular (basics)"
                          txtColor="text-darken-3 indigo"
                        />
                        <ListItem
                          txt="jQuery, DOM"
                          txtColor="text-darken-3 indigo"
                        />
                      </span>
                    }
                  />
                  <Toggler
                    color="red accent-1 "
                    icn="developer_mode"
                    btn="Back-End"
                    html={
                      <span>
                        <ListItem
                          txt="Mocha, Chai"
                          txtColor="text-darken-4 yellow"
                        />

                        <ListItem
                          txt="Helmet"
                          txtColor="text-darken-4 yellow"
                        />

                        <ListItem
                          txt="Node.js, Express"
                          txtColor="text-darken-4 yellow"
                        />

                        <ListItem txt="Redis" txtColor="text-darken-4 yellow" />

                        <ListItem
                          txt="Passport"
                          txtColor="text-darken-4 yellow"
                        />

                        <ListItem
                          txt="BCrypt"
                          txtColor="text-darken-4 yellow"
                        />
                      </span>
                    }
                  />
                </ul>
              }
            />
          </div>
          <div className="col s12">
            <Toggler
              color="purple lighten-4 "
              icn="developer_mode"
              btn="CSS"
              html={
                <ul className="collection">
                  <ListItem
                    txt="Styled Components"
                    txtColor="lighten-3 text-darken-4 purple"
                  />
                  <ListItem
                    txt="Material UI and Bootstrap"
                    txtColor="lighten-3 text-darken-4 purple"
                  />

                  <ListItem
                    txt="SASS and LESS"
                    txtColor="lighten-3 text-darken-4 purple"
                  />

                  <ListItem
                    txt="Animate.css"
                    txtColor="lighten-3 text-darken-4 purple"
                  />

                  <ListItem
                    txt="Grid, Flexbox"
                    txtColor="lighten-3 text-darken-4 purple"
                  />
                </ul>
              }
            />
          </div>
          <div className="col s12">
            <Toggler
              color="green lighten-2 "
              icn="developer_mode"
              btn="Web DevOps"
              html={
                <ul className="collection">
                  <ListItem txt="Git" txtColor="text-darken-3 green" />

                  <ListItem
                    txt="Redis (basic)"
                    txtColor="text-darken-3 green"
                  />

                  <ListItem txt="Grunt, Gulp" txtColor="text-darken-3 green" />

                  <ListItem
                    txt="Webpack and Babel"
                    txtColor="text-darken-3 green"
                  />

                  <ListItem
                    txt="Swagger, Postman"
                    txtColor="text-darken-3 green"
                  />

                  <ListItem
                    txt="Docker (basics)"
                    txtColor="text-darken-3 green"
                  />
                  <ListItem
                    txt="Heroku, AWS, Netlify (basics)"
                    txtColor="text-darken-3 green"
                  />
                  <ListItem
                    txt="Visual Studio and C#"
                    txtColor="text-darken-3 green"
                  />
                  <ListItem txt="HTML5" txtColor="text-darken-3 green" />
                  <ListItem
                    txt="Elixir, Phoenix (basics)"
                    txtColor="text-darken-3 green"
                  />

                  <ListItem txt="Apache" txtColor="text-darken-3 green" />

                  <ListItem txt="JWT" txtColor="text-darken-3 green" />
                  <ListItem txt="Dev Tools" txtColor="text-darken-3 green" />

                  <ListItem txt="TLS" txtColor="text-darken-3 green" />
                  <ListItem
                    txt="SMTP with PHPMailer"
                    txtColor="text-darken-3 green"
                  />
                </ul>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
