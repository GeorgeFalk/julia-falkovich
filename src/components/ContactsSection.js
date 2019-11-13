import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <section id="contacts">
        <div className="container pt-4">
          <div className="row">
            <div className="col-10 mx-auto col-lg-6">
              <div className="embed-responsive embed-responsive-16by9 map">
                <iframe
                  className="embed-responsive-item "
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.3698109999727!2d34.996792315560945!3d32.80896508966218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4dc7f1e3d5%3A0x9bbe532bf643b1e1!2sNordau%20St%2019%2C%20Haifa!5e0!3m2!1sen!2sil!4v1570005909019!5m2!1sen!2sil"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
            <div className="col-10 mx-auto col-lg-6 text-center contacts-info d-flex flex-column justify-content-center">
              <h1 className="logo-font text-capitalize mt-2">
                julia falkovich
              </h1>
              <p>מוזמנים להגיע אלינו</p>
              <p>כתובת: חיפה, נורדאו 19</p>
              <p>בתאום מראש בטלפון 0559888336</p>
            </div>
          </div>
        </div>
        <div className="row copyright text-center">
          <div className="col-12 mx-auto mt-3">
            <h3 style={{ "font-size": "1.1rem" }}>
              (c) Developed by{" "}
              <a href={"http://george-falkovich.com/"} target="_blank">
                George Falkovich
              </a>
            </h3>
          </div>
        </div>
      </section>
    );
  }
}
