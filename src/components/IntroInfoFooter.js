import React, { Component } from "react";
import styled from "styled-components";

export default class IntroInfoFooter extends Component {
  slogs = [
    { title: "שרות", type: "VIP" },
    { title: "מחיר", type: "הוגן" },
    { title: "גישה", type: "אישית" },
    { title: "לווי", type: "לאחר הטיפול" }
  ];

  render() {
    return (
      <Footer>
        <div className="d-flex justify-content-around py-2 text-white">
          {this.slogs.map(slog => {
            return (
              <div>
                <div>{slog.title} </div>
                <div> {slog.type}</div>
              </div>
            );
          })}
        </div>
      </Footer>
    );
  }
}

const Footer = styled.div`
  background: var(--mainDark);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
