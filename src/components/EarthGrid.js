import React, { useState, useContext } from "react";
import styled from "styled-components";
import ImageSection from "./ImageSection";
import Modal from "@mui/material/Modal";
import { Context } from "../context/Store";

const EarthGrid = () => {
  const { imageData } = useContext(Context);
  const [data, setData] = imageData;
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
  console.log("earth grid data", data);
  return (
    <>
      {console.log("data bj", data)}
      {data.map((item, index) => (
        <img
          style={{ height: "200px", width: "auto" }}
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
    </>
  );
};

export default EarthGrid;
