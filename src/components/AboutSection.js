import React, { Component } from "react";
import TitleUnderline from "./TitleUnderline";
import sr from "./ScrollReveal";

export default class AboutSection extends Component {
  componentDidMount = () => {
    const config_left = {
      origin: "left",
      duration: 2500,
      delay: 150,
      distance: "800px",
      scale: 1,
      easing: "ease"
    };

    const config_right = {
      origin: "right",
      duration: 2000,
      distance: "50px",
      easing: "ease"
    };

    sr.reveal(this.refs.box1, config_left);
    sr.reveal(this.refs.box2, config_right);
  };
  render() {
    return (
      <React.Fragment>
        <section id="about-section" className="py-5">
          <div className="container my-5">
            <div className="row align-items-center">
              <div className="col-10 col-md-6 mx-auto ">
                <div className="card img-left ">
                  <div className="img-container">
                    <img
                      src="../img/h2.jpg"
                      alt=""
                      className="card-img-top"
                      ref="box1"
                    />
                  </div>
                  <div className="card-body">
                    <h1 className="logo-font text-center">Julia Falkovich</h1>
                    <p className="text-muted lead text-center">
                      אצלנו תזכו לקבל שרות פרימיום ולצאת זוהרים ומאושרים, וכמו
                      כל מי שנכנס אלינו למספרה – תהפכו בין רגע ללקוחות קבועים
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-10 col-md-6 mx-auto my-3 text-center">
                <h3 className="logo-font" style={{ "font-size": "3rem" }}>
                  About Us
                </h3>
                <h1 className="">?ומה ניתן לקבל</h1>
                <TitleUnderline />
                <div className="text-muted lead mt-3 text-center ">
                  <p>תספורות נשים, גברים וילדים לכל גיל</p>
                  <p>איפור ותסרוקות לכל אירוע </p>
                  <p>רק החומרים איכותיים והחדישים ביותר הקיימים בשוק</p>
                  <p> טכניקות מודרניות לעיצוב וטיפול בשיער</p>
                  <p>ייעוץ אישי בכל הנוגע לטיפול בשיער </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
