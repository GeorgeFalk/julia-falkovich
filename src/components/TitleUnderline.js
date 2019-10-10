import styled from "styled-components";

import React, { Component } from "react";

export default class TitleUnderline extends Component {
  render() {
    return (
      <Underline>
        <UnderlineCenter />
      </Underline>
    );
  }
}

const Underline = styled.div`
  width: 12rem;
  height: 0.3rem;
  margin: 10px auto;
  position: relative;
  border-radius: 2rem;
  background: grey;
`;

const UnderlineCenter = styled.div`
  position: absolute;
  height: 0.6rem;
  background: var(--mainDark);
  width: 50%;
  left: 50%;
  margin-left: -25%;
  top: -2.5px;
  border-radius: 1rem;
`;
