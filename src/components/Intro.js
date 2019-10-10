import React, { Component } from "react";
import TitleUnderline from "./TitleUnderline";

export default class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="">
            <h2
              className="logo-font text-center logo-res"
              style={{ "font-size": "5rem" }}
            >
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
            <p className="muted small-res">
              אנו מזמנים אתכם לבקר אצלנו בסטודיו לעיצוב שיער ואיפור מקצועי לכל
              אירוע ולקבל חוייה מדהימה מיחס אישי כלפי כל לקוח
            </p>
            <div className="row">
              <div className="col-10 mx-auto mb-3">
                <div className="img-container ">
                  <img
                    src="../img/h3.jpg"
                    className="img-fluid gallery-item-border"
                  ></img>
                </div>
              </div>
            </div>

            <p className="lead text-muted small-res">
              ג'וליה פלקוביץ' היא מעצבת שיער ומאפרת מקצועית בעלת ניסיון רב ועשיר
              עם יכולת לספק שירות מקצועי ואישי לכל רצון של לקוח
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
