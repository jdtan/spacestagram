import React from "react";
import styled from "styled-components";

import { screenSize } from "./DetectScreen";

const StyledName = styled.h1`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0.4em 0 0.2em 0;
  font-size: 10rem;
  line-height: 10rem;

  @media only screen and (max-width: ${screenSize["mobile"]}) {
    font-size: 7rem;
    line-height: 7rem;
  }
`;

const Name = () => {
  return <StyledName>spacestagram</StyledName>;
};

export default Name;
