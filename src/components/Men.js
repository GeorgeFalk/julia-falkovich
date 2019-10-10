import React, { Component } from "react";
import TitleUnderline from "./TitleUnderline";

export default class Men extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="py-5 px-5 logo-res">
            <h2 className="logo-font logo-res" style={{ "font-size": "5rem" }}>
              Julia Falkovich
            </h2>
            <h1 className="intro-text-res">
              חיפה, רחוב נורדאו 19
              <span>
                <i class="fas fa-map-marked-alt mx-3"></i>
              </span>
            </h1>

            <TitleUnderline />
            <p>0559-888-336</p>
            <p className="muted ">
              אנו מזמנים אתכם לבקר אצלנו בסטודיו לעיצוב שיער ואיפור מקצועי לכל
              אירוע ולקבל חוייה מדהימה מיחס אישי כלפי כל לקוח
            </p>
            <div className="row">
              <div className="col-10 mx-auto mb-3">
                <div className="img-container ">
                  <img
                    src="../img/m1.jpg"
                    className="img-fluid gallery-item-border"
                  ></img>
                </div>
              </div>
            </div>

            <p className="lead text-muted ">
              התמחות רבה בתספורת גברים! שירותי ברבר, תספורות, צביעת שיער. תספורת
              זקן ועוד... יועץ וליווי אישי
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
