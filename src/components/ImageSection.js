import React, { useContext } from "react";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { Context } from "../context/Store";
import { screenSize } from "./DetectScreen";
import Details from "./ImageDetails";
import LikeComponent from "./LikeComponent";

const ImageContainer = styled.img`
  width: auto;
  height: 100%;
`;

const ExpandableContainer = styled.div`
  position: relative;
  background-color: black;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2em;
  min-width: min-content;
  margin: auto;
  margin-top: 10%;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 22px 70px 4px;

  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    margin-top: 20%;
  }
`;

const ImageDetailContainer = styled.div`
  padding: 1em 5em 1em 3em;
  height: 20em;
  display: flex;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  z-index: 20;
  inset: 2em 2em auto auto;
`;

const ButtonContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  > * {
    margin: -2em 0.5em 2em 0.5em;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: white 0.15em solid;
  color: white;
`;
const HeartIconContainer = styled.div``;
const ImageSection = ({ imageIndex = 0, handleClose }) => {
  const { imageData } = useContext(Context);
  const [data, setData] = imageData;

  const extractDate = (apiDate, index) => {
    return apiDate.split(" ")[0].split("-")[index];
  };

  return (
    <ExpandableContainer>
      <IconContainer onClick={() => handleClose()}>
        <CloseOutlined style={{ fontSize: "1.5em" }} />
      </IconContainer>
      <ImageDetailContainer>
        <ImageContainer
          src={
            "https://epic.gsfc.nasa.gov/archive/natural/" +
            extractDate(data[imageIndex].date, 0) +
            "/" +
            extractDate(data[imageIndex].date, 1) +
            "/" +
            extractDate(data[imageIndex].date, 2) +
            "/png/" +
            data[imageIndex].image +
            ".png"
          }
          alt="img"
        />
        <Details imageData={data[imageIndex]} />
      </ImageDetailContainer>
      <ButtonContainer>
        <LikeComponent index={imageIndex} />
        <CloseButton onClick={() => handleClose()}>close</CloseButton>
      </ButtonContainer>
    </ExpandableContainer>
  );
};

export default ImageSection;
