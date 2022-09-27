import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projects1 from "./Data/Data1.json"
import projects2 from "./Data/Data2.json"
import projects3 from "./Data/Data3.json"

export const Projects = () => {

  // const projects = [
  //   {
  //     title: "AndresGiuseppe",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //     demo : "https://www.andresgiusepperemax.com/"
  //   },
  //   {
  //     title: "Pokemons Api Web",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //     demo : "https://pi-pokemons-plum.vercel.app/"
  //   },
  //   {
  //     title: "Henry Match",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //     demo : "https://henry-front.vercel.app/"
  //   },
  //   {
  //     title: "Movies Web",
  //     description: "Design & Development",
  //     imgUrl: projImg4,
  //     demo : "https://giudev-movieweb.netlify.app/"
  //   },
  //   {
  //     title: "Porfolio Demo",
  //     description: "Design & Development",
  //     imgUrl: projImg5,
  //     demo : "https://giu-web.netlify.app/"
  //   },
  //   {
  //     title: "Giux Games Web",
  //     description: "Design & Development",
  //     imgUrl: projImg6,
  //     demo : "https://pi-video-games-rho.vercel.app/"
  //   },
    
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Recent projects in which I have participated</p>
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Some challenges I did and I found them interesting</p>
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Some small practice projects</p>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="colorSharp2"></img>
    </section>
  )
}