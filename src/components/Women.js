import React, { Component } from "react";
import TitleUnderline from "./TitleUnderline";

export default class Women extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="py-5 px-5" style={{ "margin-top": "-120px" }}>
            <h2 className="logo-font" style={{ "font-size": "5rem" }}>
              Julia Falkovich
            </h2>
            <h1>
              חיפה, רחוב נורדאו 19
              <span>
                <i class="fas fa-map-marked-alt mx-3"></i>
              </span>
            </h1>

            <TitleUnderline />
            <p className="muted ">
              אנו מזמנים אתכם לבקר אצלנו בסטודיו לעיצוב שיער ואיפור מקצועי לכל
              אירוע ולקבל חוייה מדהימה מיחס אישי כלפי כל לקוח
            </p>
            <div className="row">
              <div className="col-10 mx-auto mb-3">
                <div className="img-container ">
                  <img
                    src="../img/women.jpg"
                    className="img-fluid gallery-item-border"
                  ></img>
                </div>
              </div>
            </div>

            <p className="lead text-muted ">
              את מוזמנת להתפנק עם לוק החדש והורס ולאהוב את שיער שלך מחדש! עם
              השרותים כגון צבעים לשיער, גוונים לשיער, שטיפות, הבהרות, סלסולים,
              טיפולי שיער,תסרוקת מכל סוג, תוספות שיער ועוד.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}