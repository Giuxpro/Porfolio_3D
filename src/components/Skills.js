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
    <section id="skills">
      <section className="skill" >
          <Container>
              {/* <Row>
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
              </Row> */}
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
                        <p>The only long-term competitive ability, is the ability to learn, but this alone becomes nothing without the opportunity</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" style={{height:"100px", width:"100px"}} alt="html"/></a>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Img2"/> */}
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" style={{height:"100px", width:"100px"}} alt="css"/></a>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter3} alt="Img3"/> */}
                                <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" style={{height:"100px", width:"100px"}} alt="javascript"/></a>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" style={{height:"100px", width:"100px"}} alt="typescript"/></a>
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" style={{height:"100px", width:"100px"}} alt="react"/></a>
                                <h5>React.JS</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png" style={{height:"100px", width:"100px"}} alt="redux"/></a>
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/480/nodejs.png" style={{height:"100px", width:"100px"}} alt="Node.js"/></a>
                                <h5>Node.JS</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png" style={{height:"100px", width:"100px"}} alt="Express"/></a>
                                <h5>Express.JS</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://sequelize.org/" target="_blank" rel="noreferrer"><img width="40px" src="https://s2.qwant.com/thumbr/0x380/f/1/def6e5a6cedacd5856251aeaef7e52119bf19a4f70ada987080f4a3db8e074/sequelize-logo-png-transparent.png?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fsequelize-logo-png-transparent.png&q=0&b=1&p=0&a=0" style={{height:"100px", width:"100px"}} alt="sequelize"/></a>
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png" style={{height:"100px", width:"100px"}} alt="postgreSql"/></a>
                                <h5>PostgreSql</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://stickersllamita.com/wp-content/uploads/2022/02/MongoDB.png" style={{height:"100px", width:"100px"}} alt="MongoDB"/></a>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" style={{height:"100px", width:"100px"}} alt="bootstrap"/></a>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://github.com/" target="_blank" rel="noreferrer"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" style={{height:"100px", width:"100px"}} alt="github"/></a>
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Img1"/> */}
                                <a href="https://wordpress.com/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174881.png" style={{height:"100px", width:"100px"}} alt="wordpress"/></a>
                                <h5>WordPress</h5>
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
