import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Intro from "./Intro";
import Men from "./Men";
import Women from "./Women";
import sr from "./ScrollReveal";
import IntroInfoFooter from "./IntroInfoFooter";
import styled from "styled-components";
import Makeup from "./Makeup";

export default class IntroSection extends Component {
  componentDidMount = () => {
    const config_top = {
      origin: "top",
      duration: 2500,
      delay: 150,
      distance: "600px",
      scale: 1,
      easing: "ease"
    };

    const config_right = {
      origin: "right",
      duration: 1000,
      distance: "50px",

      easing: "ease"
    };

    sr.reveal(this.refs.box1, config_top);
    sr.reveal(this.refs.box2, config_right);
  };

  render() {
    return (
      <React.Fragment>
        <section id="intro-section">
          <div className="container-fluid">
            <div className="row align-items-center ">
              <div className="col-lg-5 text-center intro-info d-flex align-items-center justify-content-center">
                <div ref="box1">
                  <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route path="/men" component={Men} />
                    <Route path="/women" component={Women} />
                    <Route path="/makeup" component={Makeup} />
                    <Route component={Intro} />
                  </Switch>
                </div>
                <IntroInfoFooter />
              </div>

              <div className="col-lg-7 info-bg-img" ref="box">
                <IntroImgFooter>
                  <div className="py-2 text-center">
                    <div>חוויה</div>
                    <div>מושלמת</div>
                  </div>
                </IntroImgFooter>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const IntroImgFooter = styled.div`
  background: var(--mainDark);
  color: white
  position: absolute;
  bottom: 0;
  left: 0;
  width: 15%;
 
`;
