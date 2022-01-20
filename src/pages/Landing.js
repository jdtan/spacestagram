import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import DateSelect from "../components/DateSelect";

const PageContainer = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/earth-bg.jpg);
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div``;

const StyledButton = styled.button`
  padding: 0.7em 4em;
  background-color: transparent;
  color: #113952;
  border: #113952 0.1em solid;
  border-radius: 2em;
  font-weight: 700;
  font-size: 2em;
  :hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
`;
const IntroText = styled.h3``;
const AppNameText = styled.h1`
  font-size: 14rem;
  color: white;
  text-transform: uppercase;
  margin-top: 0;
`;
const DateContainer = styled.div`
  margin: 0.5em 0 2em 0;
`;

const ActionContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  padding: 2em 8em;
  border-radius: 2em;
`;

const Landing = () => {
  return (
    <PageContainer>
      <WelcomeContainer>
        <IntroText>Welcome to</IntroText>
        <AppNameText>Spacestagram</AppNameText>
      </WelcomeContainer>
      <ActionContainer>
        <DateContainer>
          <DateSelect />
        </DateContainer>
        <ButtonContainer>
          <Link to="/spacestagram/home">
            <StyledButton>search</StyledButton>
          </Link>
        </ButtonContainer>
      </ActionContainer>
    </PageContainer>
  );
};

export default Landing;
