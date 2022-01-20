import React from "react";
import styled from "styled-components";

import { screenSize } from "./DetectScreen";

const ImageDetailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  > * {
    display: flex;
    align-items: baseline;
  }

  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    max-width: 100%;
    padding: 1em 2em 2em 2em;
    margin-top: -2em;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    padding: 1em 1em 2em 1em;
  }
`;

const ImageIdentifier = styled.h1`
  font-size: 6rem;
  line-height: 6rem;
  letter-spacing: 0.15em;
  margin: 0;
  color: white;

  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    letter-spacing: 0.1em;
    font-size: 4rem;
  }
`;

const ImageDate = styled.h5`
  margin-top: 1em;
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    margin-top: 0;
  }
`;
const ImageDescription = styled.p``;

const Details = ({ imageData = {} }) => {
  const renderDateFormat = (apiDate) => {
    const dateTaken = new Date(apiDate);
    const dateFormat = { month: "long", day: "numeric", year: "numeric" };
    return dateTaken.toLocaleDateString("en-US", dateFormat);
  };

  return (
    <ImageDetailText>
      <ImageIdentifier>{imageData.identifier}</ImageIdentifier>
      <ImageDate>{renderDateFormat(imageData.date)}</ImageDate>
      <ImageDescription>{imageData.caption}</ImageDescription>
    </ImageDetailText>
  );
};

export default Details;
