import React, { Component } from "react";
import Fade from "react-reveal";
import { Accordion, Card, Button, Image } from "react-bootstrap";

let id = 0;

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <Accordion key={id} className="columns portfolio-item">
          <div className="item-wrap">
          <a href={projects.url}>
            <Image alt={projects.title} src={projectImage} href={projects.url}/>
            </a>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={id}
                style={{ textAlign: "center" }}
              >
                <Button variant='link' size='lg' className='mb-1' block>{projects.title}</Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={id++}>
                <div style={{ textAlign: "center" }}>{projects.category}</div>
              </Accordion.Collapse>
            
          </div>
        </Accordion>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Accomplishments</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
