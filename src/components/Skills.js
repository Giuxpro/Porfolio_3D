import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section>
      <section className="skill" id="skills">
          <Container>
              <Row>
                  <Col>
                    <div className="skill-bx">
                          <h2>
                              Soft Skills
                          </h2>
                          <p>Values ​​are not defined by your words but by your actions.</p>
                          <Carousel responsive={responsive} infinite={true} className="skill-slider">
                              <div className="item">
                                  <img src={meter1} alt="Img1"/>
                                  <h5>Teamwork</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Img2"/>
                                  <h5>Ability to Communicate</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Img3"/>
                                  <h5>Self Learning</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="Img1"/>
                                  <h5>Proactive</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Img1"/>
                                  <h5>Work Under Pressure</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Img1"/>
                                  <h5>Solving Problems</h5>
                              </div>
                              
                          </Carousel>
                    </div>
                  </Col>
              </Row>
          </Container>
          <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
      </section>
      <section className="skill tech-skills" >
        <Container>
            <Row>
                <Col>
                   <div className="skill-bx">
                        <h2>
                          Technical Skills
                        </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Img1"/>
                                <h5>Web Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Img2"/>
                                <h5>Web Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Img3"/>
                                <h5>Web Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Img1"/>
                                <h5>Web Developer</h5>
                            </div>
                            
                        </Carousel>
                   </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
      </section>
    </section>
  )
}
