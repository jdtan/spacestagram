import React, { useContext } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { Context } from "../context/Store";
import DetectScreenType from "./DetectScreen";

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: white 0.15em solid;
  min-width: 7.6em;
`;

const LikeComponent = ({ index = "" }) => {
  const { imageData } = useContext(Context);
  const [data, setData] = imageData;

  const isTablet = DetectScreenType(810);

  const handleHeartClick = (index) => {
    const newData = [...data];
    if (typeof newData[index].isFavourite === undefined) {
      newData[index].isFavourite = false;
    }
    newData[index].isFavourite = !newData[index].isFavourite;
    setData(newData);
  };
  return (
    <>
      {isTablet ? (
        <div onClick={() => handleHeartClick(index)}>
          {data[index].isFavourite ? (
            <>
              <HeartFilled style={{ color: "red", fontSize: "2em" }} />
            </>
          ) : (
            <>
              <HeartOutlined style={{ fontSize: "2em" }} />
            </>
          )}
        </div>
      ) : (
        <LikeButton onClick={() => handleHeartClick(index)}>
          {data[index].isFavourite ? (
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
      )}
    </>
  );
};

export default LikeComponent;
