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
            <Link style={{ marginTop: ".5rem" }} to="/" className="btn">
              {" "}
              Back to Main Page
            </Link>
          </div>

          <div className="col s12">
            <Toggler
              color="yellow lighten-3 "
              icn="code"
              btn="Software Engineering"
              html={
                <ul className="collection">
                  <Toggler
                    color="deep-orange lighten-4 "
                    icn="view_timeline"
                    btn="Monitoring, Security, Scalability"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="Datadog"
                          txtColor="text-darken-3 deep-orange"
                        />

                        <ListItem
                          txt="Mezmo"
                          txtColor="text-darken-3 deep-orange"
                        />

                        <ListItem
                          txt="Hashing Algorithms, Cryptography, Bcrypt"
                          txtColor="text-darken-4 yellow"
                        />

                        <ListItem
                          txt="Helmet.js"
                          txtColor="text-darken-4 yellow"
                        />

                        <ListItem
                          txt="Passport"
                          txtColor="text-darken-4 yellow"
                        />
                      </ul>
                    }
                  />
                  <Toggler
                    color="red accent-1 "
                    icn="dns"
                    btn="Back-End"
                    html={
                      <>
                        <Toggler
                          color="purple lighten-4 "
                          icn="dataset"
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
                          icn="javascript"
                          btn="Node.js"
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
                                txt="Authentication, JWT, Passport"
                                txtColor="text-darken-3 green"
                              />

                              <ListItem
                                txt="Socket.io"
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
                          btn="Messaging, Queues, Event-Driven"
                          icn="low_priority"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="SQS, SNS"
                                txtColor="text-darken-3 green"
                              />
                              <ListItem
                                txt="Kafka"
                                txtColor="text-darken-3 green"
                              />
                            </ul>
                          }
                        />
                        <Toggler
                          color="yellow lighten-2 "
                          icn="cloud"
                          btn="Serverless, Lambdas"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Serverless framework"
                                txtColor="text-darken-3 blue"
                              />
                              <ListItem
                                txt="State machines"
                                txtColor="text-darken-3 blue"
                              />
                            </ul>
                          }
                        />
                        <Toggler
                          color="blue lighten-2 "
                          icn="schema"
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
                          color="red darken-2 "
                          icn="data_object"
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
                          color="gray lighten-2 "
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
                    icn="call_to_action"
                    btn="Front-End"
                    html={
                      <>
                        <Toggler
                          color="blue lighten-5 "
                          icn="web"
                          btn="React"
                          html={
                            <ul className="collection">
                              <ListItem
                                txt="Next.js, Gatsby, Vite"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                              <ListItem
                                txt="Hooks, Context"
                                txtColor="lighten-3 text-darken-4 purple"
                              />

                              <ListItem
                                txt="Single SPA / Microfrontends"
                                txtColor="lighten-3 text-darken-4 purple"
                              />
                            </ul>
                          }
                        />
                        <Toggler
                          color="purple lighten-4 "
                          icn="design_services"
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
                    color="green lighten-4 "
                    icn="foundation"
                    btn="Architecture"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="Microservices"
                          txtColor="text-darken-3 green"
                        />
                        <ListItem
                          txt="Monorepo"
                          txtColor="text-darken-3 green"
                        />
                        <ListItem
                          txt="Monolith"
                          txtColor="text-darken-3 green"
                        />
                        <ListItem
                          txt="Serverless"
                          txtColor="text-darken-3 green"
                        />
                        <ListItem
                          txt="Distributed Systems"
                          txtColor="text-darken-3 green"
                        />
                      </ul>
                    }
                  />
                  <Toggler
                    color="green lighten-2 "
                    icn="lan"
                    btn="Infrastructure, DevOps, CI/CD"
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
                          txt="ArgoCD, Jenkins, GitLab CI"
                          txtColor="text-darken-3 green"
                        />

                        <ListItem
                          txt="Webpack, Rollup"
                          txtColor="text-darken-3 green"
                        />

                        <ListItem
                          txt="Docker, Docker Compose"
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
                  <Toggler
                    color="blue lighten-2 "
                    icn="checklist"
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

                        <ListItem
                          txt="Mocha, Chai"
                          txtColor="text-darken-4 yellow"
                        />
                      </ul>
                    }
                  />
                  <Toggler
                    color="purple lighten-4 "
                    icn="widgets"
                    btn="Desktop & Mobile"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="Electron.js Desktop Applications"
                          txtColor="lighten-3 text-darken-4 purple"
                        />

                        <ListItem
                          txt="React Native"
                          txtColor="lighten-3 text-darken-4 purple"
                        />

                        <ListItem
                          txt="Installer, Packager, Updater"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                        <ListItem
                          txt="Publishing, Deployment"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                        <ListItem
                          txt="Windows, Linux, macOS, iOS, Android"
                          txtColor="lighten-3 text-darken-4 purple"
                        />

                        <ListItem
                          txt="Cross-Platform"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                      </ul>
                    }
                  />
                  <Toggler
                    color="deep-orange lighten-4 "
                    icn="developer_mode"
                    btn="Low-Level / Embedded"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="C, C++, Assembly"
                          txtColor="text-darken-4 deep-orange"
                        />
                        <ListItem
                          txt="Arduino, ESP32, Raspberry Pi"
                          txtColor="text-darken-4 deep-orange"
                        />
                        <ListItem
                          txt="IoT, Tensorflow Lite, Edge Impulse"
                          txtColor="text-darken-4 deep-orange"
                        />
                      </ul>
                    }
                  />
                </ul>
              }
            />
            <Toggler
              color="blue accent-3 "
              icn="model_training"
              btn="AI"
              html={
                <>
                  <Toggler
                    color="green lighten-2 "
                    icn="settings_input_component"
                    btn="Machine Learning"
                    html={
                      <ul className="collection">
                        <ListItem txt="RAG" txtColor="text-darken-3 green" />
                        <ListItem
                          txt="Model Training"
                          txtColor="text-darken-3 green"
                        />
                        <ListItem
                          txt="Tensorflow, PyTorch"
                          txtColor="text-darken-3 green"
                        />
                        <ListItem
                          txt="Edge AI, Edge Impulse"
                          txtColor="text-darken-3 green"
                        />
                        <ListItem
                          txt="Hugging Face"
                          txtColor="text-darken-3 green"
                        />
                        <ListItem txt="NLP" txtColor="text-darken-3 green" />
                        <ListItem
                          txt="Computer Vision"
                          txtColor="text-darken-3 green"
                        />
                      </ul>
                    }
                  />
                  <Toggler
                    color="purple lighten-4 "
                    icn="support_agent"
                    btn="Agents, Prompt Engineering"
                    html={
                      <ul className="collection">
                        <ListItem
                          txt="Worked with Devin, Claude, OpenAI"
                          txtColor="lighten-3 text-darken-4 purple"
                        />
                        <ListItem
                          txt="Windsurf, Cursor"
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
