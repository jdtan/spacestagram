import React, { useState, useContext } from "react";
import styled from "styled-components";
import ImageSection from "./ImageSection";
import Modal from "@mui/material/Modal";
import { Context } from "../context/Store";

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
`;

const Divider = styled.div`
  /* height: ; */
  border-bottom: #113952 0.25em solid;
  /* background-color: #113952; */
  min-width: 20em;
  max-width: 100%;
  margin: 0 25% 1em 25%;
  color: #113952;
  text-align: right;
  padding-right: 0.5em;
`;

const GridContainer = styled.div``;

const EarthGrid = () => {
  const { imageData, dateTaken } = useContext(Context);
  const [data, setData] = imageData;
  const [searchDate, setSearchDate] = dateTaken;
  const [visible, setVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState(0);

  const handleModalClick = (index) => {
    // console.log("clicked image", value);
    setVisible(true);
    setClickedImage(index);
    // console.log("index", index);
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
  console.log("earth grid date", searchDate);
  return (
    <GridContainer>
      <Divider>{`Created On: ${data[0] && formatDate(data[0].date)}`}</Divider>
      <FormatGrid>
        {console.log("data bj", data)}
        {data.map((item, index) => (
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
            onClick={() => handleModalClick(index)}
          />
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
