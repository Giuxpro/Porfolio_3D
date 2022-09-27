import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, demo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={require(`../assets/img/${imgUrl}`)} alt="imgUrl"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="Live-Demo-container"><a className="Live-Demo" href={demo} target="_blank">Live Demo</a></div>
        </div>
      </div>
    </Col>
  )
}
