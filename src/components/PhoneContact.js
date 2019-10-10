import React, { Component } from "react";

export default class PhoneContact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="phone-contact">
          <div className="container" id="gallery-form">
            <div className="row align-items-center justify-content-center text-center">
              <div
                className="col-10 mx-auto col-md-6 my-3 text-light  mx-auto"
                style={{ "font-size": "1rem" }}
              >
                שלח מספר טלפון שלך ליצירת קשר
                <span className="contact-icon mx-3">
                  <i className="fas fa-phone"></i>
                </span>
              </div>
              <div className="col-10 col-md-6 my-3 text-light">
                <form action="" className="form-inline">
                  <input
                    type="text"
                    className="form-control mx-2"
                    placeholder="מספר טלופן שלך"
                  />
                  <button
                    type="submit"
                    className="btn mx-2 my-2 btn-dark contact-btn mx-auto"
                  >
                    שלח
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
