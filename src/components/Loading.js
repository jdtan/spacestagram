import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  justify-content: center;
`;

const LoadingText = styled.h2`
  color: black;
  font-weight: 400;
`;
const RotateAnimation = keyframes`
    from{ transform: rotate(-360deg); }
    to{ transform: rotate(360deg); 
  }`;

const LoadingImage = styled.img`
  width: 10em;
  height: 10em;

  animation: ${RotateAnimation} 10s linear 0s infinite;
`;

const LoadingEarth = () => (
  <LoadingContainer>
    <LoadingImage
      src={`${process.env.PUBLIC_URL}/earth-loading.png`}
      alt="Loading..."
    />
    <LoadingText>LOADING..</LoadingText>
  </LoadingContainer>
);

export default LoadingEarth;
