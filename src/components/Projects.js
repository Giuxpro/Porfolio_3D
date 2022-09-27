import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/AndresWeb.png";
import projImg2 from "../assets/img/Pokemonweb.png";
import projImg3 from "../assets/img/HM.png";
import projImg4 from "../assets/img/MovieApp.png";
import projImg5 from "../assets/img/porfolioDemo.png";
import projImg6 from "../assets/img/vidGame.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projects from "./Data/Data1.json"

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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                      <Row>
                        {
                          projects.map((project, index) => {
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
                      <p>More relevants projects soom.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More relevants projects soom.</p>
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