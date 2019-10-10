import React, { Component } from "react";
import TitleUnderline from "./TitleUnderline";
import sr from "./ScrollReveal";

export default class extends Component {
  state = {
    images: ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g6.jpg", "g5.jpg"]
  };

  componentDidMount = () => {
    const config_left = {
      origin: "left",
      duration: 2500,
      delay: 150,
      distance: "300px",
      scale: 1,
      easing: "ease"
    };

    const config_right = {
      origin: "right",
      duration: 2000,
      delay: 150,
      distance: "100px",
      scale: 1,
      easing: "ease"
    };

    sr.reveal(this.refs.boxleft, config_left);
    sr.reveal(this.refs.boxright, config_right);
  };

  render() {
    return (
      <section id="gallery-section" className="">
        <div className="container-fluid">
          <div className="row mx-5">
            <div className="col text-center my-0">
              <p
                className="logo-font mb-0 text-center mx-auto logo-res"
                style={{ "font-size": "3rem" }}
              >
                Julia Falkovich
              </p>
              <h1 className="">גלריה</h1>
              <TitleUnderline />
              <p>
                לשער הדוגמאות מוזמנים לבקר באתר{" "}
                <a href={"//www.facebook.com/JuliaFalkovichBS"} target="_blank">
                  הפייסבוק
                </a>
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            {/* Featured image */}
            <div className="col-10 col-lg-6 mx-auto pl-lg-5">
              <div className="img-featured-container">
                <img
                  src="../img/f1.jpg"
                  alt=""
                  ref="boxleft"
                  className="img-fluid img-featured gallery-item-border"
                />
                <div className="featured-img-info" style={{ width: "30%" }}>
                  <p className="logo-font text-light text-center mb-0">
                    Julia Falkovich
                  </p>
                  0559-888-336
                </div>
              </div>
            </div>
            {/* Thumbs images */}
            <div className="col-10 col-lg-6 mx-auto pr-lg-5">
              <div className="row align-items-center" ref="boxright">
                {this.state.images.map(image => {
                  return (
                    <div className="col-lg-4 my-lg-2 my-3 ">
                      <div className="img-featured-container">
                        <img
                          src={"../img/" + image}
                          className="img-fluid gallery-item-border "
                        ></img>
                        <div className="featured-img-info text-center p-0">
                          <p className="logo-font text-light text-center mb-0">
                            Julia Falkovich
                          </p>
                          0559-888-336
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
