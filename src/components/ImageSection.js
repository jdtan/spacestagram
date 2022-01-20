import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/fontawesome-free-solid";
import { faHeart as linedHeart } from "@fortawesome/fontawesome-free-regular";
import { Context } from "../context/Store";
import { HeartFilled, HeartOutlined, CloseOutlined } from "@ant-design/icons";

const ImageContainer = styled.img`
  width: auto;
  height: 100%;
  /* padding-left: 5em; */
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
`;

const ImageDetailContainer = styled.div`
  padding: 1em 5em 1em 3em;
  height: 20em;
  display: flex;
  position: relative;
  /* justify-content: center; */
`;

const ImageDetailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  /* align-items: flex-end; */
  > * {
    display: flex;
    align-items: baseline;
  }
`;

const ImageIdentifier = styled.h1`
  font-size: 6rem;
  line-height: 6rem;
  letter-spacing: 0.15em;
  margin: 0;
  color: white;
`;

const ImageDate = styled.h5`
  margin-top: 1em;
`;
const ImageDescription = styled.p``;

const TextTag = styled.p`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 800;
  margin: 0;
  font-style: italic;
  opacity: 0.5;
  padding-right: 0.7em;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 100%;
  font-size: 4rem;
`;

const IconContainer = styled.div`
  position: absolute;
  z-index: 20;
  inset: 2em 2em auto auto;
  /* margin-right: 0.7em; */
`;

const ButtonContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  > * {
    margin: -2em 0.5em 2em 0.5em;
  }
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: white 0.15em solid;
  min-width: 7.6em;
`;
const CloseButton = styled.button`
  background-color: transparent;
  border: white 0.15em solid;
  color: white;
`;

const ImageSection = ({ imageIndex = 0, handleClose }) => {
  const { imageData } = useContext(Context);
  const [data, setData] = imageData;

  const extractDate = (apiDate, index) => {
    return apiDate.split(" ")[0].split("-")[index];
  };

  const renderDateFormat = (apiDate) => {
    const dateTaken = new Date(apiDate);
    const dateFormat = { month: "long", day: "numeric", year: "numeric" };
    console.log(typeof apiDate);
    return dateTaken.toLocaleDateString("en-US", dateFormat);
  };

  const handleHeartClick = (index) => {
    const newData = [...data];
    console.log("in handle heart click", imageIndex);
    if (typeof newData[imageIndex].isFavourite === undefined) {
      newData[imageIndex].isFavourite = false;
    }
    console.log("new data", newData[imageIndex]);
    console.log(
      typeof newData[imageIndex].isFavourite === undefined ||
        newData[imageIndex].isFavourite === false
    );
    newData[imageIndex].isFavourite = !newData[imageIndex].isFavourite;
    console.log("data in heart", data);
    // console.log(data);
    console.log("new data to set", newData);
    setData(newData);
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
        <ImageDetailText>
          <ImageIdentifier>{data[imageIndex].identifier}</ImageIdentifier>
          <ImageDate>{renderDateFormat(data[imageIndex].date)}</ImageDate>
          <ImageDescription>{data[imageIndex].caption}</ImageDescription>
        </ImageDetailText>
      </ImageDetailContainer>
      <ButtonContainer>
        <LikeButton onClick={() => handleHeartClick(imageIndex)}>
          {data[imageIndex].isFavourite ? (
            <>
              <HeartFilled style={{ color: "red", marginRight: "0.3em" }} />
              unlike
            </>
          ) : (
            <>
              <HeartOutlined style={{ marginRight: "0.7em" }} /> like
            </>
          )}
        </LikeButton>
        <CloseButton onClick={() => handleClose()}>close</CloseButton>
      </ButtonContainer>
    </ExpandableContainer>
  );
};

export default ImageSection;
