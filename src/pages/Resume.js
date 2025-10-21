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
              btn="Software Engineering"
              html={
                <ul className="collection">
                  <Toggler
                    color="red accent-1 "
                    icn="developer_mode"
                    btn="Back-End"
                    html={
                      <>
                        <Toggler
                          color="purple lighten-4 "
                          icn="developer_mode"
                          btn="Database"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="PostgreSQL"
                                txtColor="lighten-3 text-darken-4 purple"
                              />

                              <ListItem
                                txt="MySQL"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                              <ListItem
                                txt="MongoDB"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                              <ListItem
                                txt="Redis"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                            </ul>
                          }
                        />
                        <Toggler
                          color="green lighten-2 "
                          icn="developer_mode"
                          btn="NodeJS"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="NestJS"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Express"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Passport"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="JWT"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Socket.io"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="GraphQL"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Helmet"
                                txtColor="text-darken-3 green"
                              />
                            </ul>
                          }
                        />
                        <Toggler
                          color="blue lighten-2 "
                          icn="developer_mode"
                          btn="Serverless / Lambda"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Serverless framework"
                                txtColor="text-darken-3 blue"
                              />
                              <ListItem
                                txt="State machine"
                                txtColor="text-darken-3 blue"
                              />
                            </ul>
                          }
                        />
                        <Toggler
                          color="blue lighten-2 "
                          icn="developer_mode"
                          btn="GraphQL"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Apollo"
                                txtColor="text-darken-3 blue"
                              />
                              <ListItem
                                txt="Federated"
                                txtColor="text-darken-3 blue"
                              />
                              <ListItem
                                txt="Relay"
                                txtColor="text-darken-3 blue"
                              />
                            </ul>
                          }
                        />
                        <Toggler
                          color="blue lighten-2 "
                          icn="developer_mode"
                          btn="ORM"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Sequelize"
                                txtColor="text-darken-3 blue"
                              />
                              <ListItem
                                txt="Prisma"
                                txtColor="text-darken-3 blue"
                              />
                              <ListItem
                                txt="TypeORM"
                                txtColor="text-darken-3 blue"
                              />
                            </ul>
                          }
                        />
                        <Toggler
                          color="green lighten-2 "
                          icn="developer_mode"
                          btn="DevOps"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Kubernetes"
                                txtColor="text-darken-3 green"
                              />
                              <ListItem
                                txt="CI/CD (Travis, CircleCI, Github Actions)"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Architecture (microservices, monorepo, monolith)"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="ArgoCD, Jenkins, GitLab CI"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Webpack, Rollup"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Docker (basics)"
                                txtColor="text-darken-3 green"
                              />
                              <ListItem
                                txt="AWS, Heroku, Vercel, GCloud, Netlify"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Nginx, Traefik"
                                txtColor="text-darken-3 green"
                              />
                            </ul>
                          }
                        />
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

                          <ListItem
                            txt="Redis"
                            txtColor="text-darken-4 yellow"
                          />

                          <ListItem
                            txt="Passport"
                            txtColor="text-darken-4 yellow"
                          />

                          <ListItem
                            txt="BCrypt"
                            txtColor="text-darken-4 yellow"
                          />
                        </span>
                        <Toggler
                          color="blue lighten-2 "
                          icn="developer_mode"
                          btn="Other"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Elixir, Phoenix (basics)"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Apache"
                                txtColor="text-darken-3 green"
                              />
                              <ListItem
                                txt="TLS"
                                txtColor="text-darken-3 green"
                              />
                              <ListItem
                                txt="SMTP with PHPMailer"
                                txtColor="text-darken-3 green"
                              />
                            </ul>
                          }
                        />
                      </>
                    }
                  />
                  <Toggler
                    color="blue lighten-2 "
                    icn="developer_mode"
                    btn="Front-End"
                    html={
                      <>
                        <Toggler
                          color="purple lighten-4 "
                          icn="developer_mode"
                          btn="React"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Next.js"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                              <ListItem
                                txt="React, React Native"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                              <ListItem
                                txt="Hooks, Context"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                            </ul>
                          }
                        />

                        <Toggler
                          color="purple lighten-4 "
                          icn="developer_mode"
                          btn="CSS"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Styled Components, Styled System"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                              <ListItem
                                txt="Bootstrap, Tailwind, Material UI"
                                txtColor="lighten-3 text-darken-4 purple"
                              />

                              <ListItem
                                txt="SASS, LESS"
                                txtColor="lighten-3 text-darken-4 purple"
                              />

                              <ListItem
                                txt="Animate.css"
                                txtColor="lighten-3 text-darken-4 purple"
                              />

                              <ListItem
                                txt="Grid, Flexbox, Responsivity"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                            </ul>
                          }
                        />
                        <span>
                          <ListItem
                            txt="Vue, Angular (basics)"
                            txtColor="text-darken-3 indigo"
                          />
                          <ListItem
                            txt="jQuery, DOM"
                            txtColor="text-darken-3 indigo"
                          />
                        </span>
                      </>
                    }
                  />
                  <Toggler
                    color="blue lighten-2 "
                    icn="developer_mode"
                    btn="Testing, QA Automation"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="Playwright"
                          txtColor="text-darken-3 blue"
                        />
                        <ListItem txt="Jest" txtColor="text-darken-3 blue" />
                        <ListItem
                          txt="Postman, Insomnia"
                          txtColor="text-darken-3 green"
                        />
                      </ul>
                    }
                  />
                  <Toggler
                    color="purple lighten-4 "
                    icn="developer_mode"
                    btn="Electron"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="Desktop Apps"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                        <ListItem
                          txt="Installer, Packager, Updater"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                        <ListItem
                          txt="Windows, Linux, macOS"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                      </ul>
                    }
                  />
                </ul>
              }
            />
            <Toggler
              color="blue accent-3 "
              icn="developer_mode"
              btn="AI"
              html={
                <>
                  <Toggler
                    color="green lighten-2 "
                    icn="developer_mode"
                    btn="Machine Learning"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="RAG (basic)"
                          txtColor="text-darken-3 green"
                        />
                      </ul>
                    }
                  />
                  <Toggler
                    color="purple lighten-4 "
                    icn="developer_mode"
                    btn="Agents, Prompt Engineering"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="Prompt Engineering"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                        <ListItem
                          txt="Worked with Devin, Claude, ChatGPT"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                      </ul>
                    }
                  />
                </>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
