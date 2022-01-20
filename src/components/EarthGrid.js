import React, { useState, useContext } from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

import { Context } from "../context/Store";
import DetectScreen, { screenSize } from "./DetectScreen";
import ImageSection from "./ImageSection";
import Details from "./ImageDetails";
import LikeComponent from "./LikeComponent";

const StyledImage = styled.img`
  border-radius: 1em;
  height: 11em;
  width: auto;
  margin: 0.5em;
  :hover {
    transform: scale(1.02);
  }
`;
const FormatGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 36%;
  margin: auto;
  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    width: 36em;
  }
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    width: 100%;
  }
`;

const Divider = styled.div`
  border-bottom: #113952 0.25em solid;
  min-width: 10em;
  max-width: 100%;
  margin: 0 25% 1em 25%;
  color: #113952;
  text-align: right;
  padding-right: 0.5em;
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    margin: 0 1em 1em 1em;
  }
`;

const GridContainer = styled.div``;

const TabletContainer = styled.div`
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
  }
`;

const EarthCard = styled.div`
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    position: relative;
    background-color: black;
    margin: 0.5em auto;
    max-width: 100%;
    min-width: 10em;
    width: 30em;
    border-radius: 2em;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    width: 19em;
  }
`;

const HeartIconContainer = styled.div`
  position: absolute;
  inset: 1.5em 1.5em auto auto;
  z-index: 100;
`;

const EarthGrid = () => {
  const { imageData, dateTaken } = useContext(Context);
  const [data, setData] = imageData;
  const [visible, setVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState(0);

  const isTablet = DetectScreen(810);

  const handleModalClick = (index) => {
    setVisible(true);
    setClickedImage(index);
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  const extractDate = (apiDate, index) => {
    return apiDate.split(" ")[0].split("-")[index];
  };
  const formatDate = (apiDate) => {
    return apiDate.split(" ")[0];
  };

  return (
    <GridContainer>
      <Divider>{`Captured On: ${data[0] && formatDate(data[0].date)}`}</Divider>
      <FormatGrid>
        {data.map((item, index) => (
          <EarthCard key={index}>
            <TabletContainer>
              <StyledImage
                src={
                  "https://epic.gsfc.nasa.gov/archive/natural/" +
                  extractDate(item.date, 0) +
                  "/" +
                  extractDate(item.date, 1) +
                  "/" +
                  extractDate(item.date, 2) +
                  "/png/" +
                  item.image +
                  ".png"
                }
                alt="img"
                onClick={!isTablet && (() => handleModalClick(index))}
              />
            </TabletContainer>
            {isTablet && (
              <>
                <Details imageData={item} />
                <HeartIconContainer>
                  <LikeComponent index={index} />
                </HeartIconContainer>
              </>
            )}
          </EarthCard>
        ))}
        <Modal open={visible} onClose={() => handleModalClose()}>
          <ImageSection
            imageIndex={clickedImage}
            handleClose={() => handleModalClose()}
          />
        </Modal>
      </FormatGrid>
    </GridContainer>
  );
};

export default EarthGrid;
