import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EarthList from "../components/EarthList";
import { Context } from "../context/Store";
import DateSelect from "../components/DateSelect";

const PageContainer = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/earth-bg.jpg);
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  /* display: flex;
  justify-content: center; */
  /* position: absolute;
  bottom: 1em; */
`;

const StyledButton = styled.button`
  padding: 0.7em 4em;
  background-color: transparent;
  color: white;
  border: white 0.1em solid;
  border-radius: 2em;
  font-weight: 700;
  font-size: 2em;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`;
const IntroText = styled.h3``;
const AppNameText = styled.h1``;
const DateContainer = styled.div`
  margin: 10% 0 2em 0;
`;
const Landing = () => {
  const { imageData, dateTaken } = useContext(Context);
  const [data, setData] = imageData;
  const [searchDate, setSearchDate] = dateTaken;

  const fetchData = () => {
    (async () => {
      await EarthList(searchDate).then((items) => {
        console.log("items", items.data);
        setData(items.data);
      });
    })();
  };
  console.log("date", searchDate);
  return (
    <PageContainer>
      <WelcomeContainer>
        <IntroText>Welcome to</IntroText>
        <AppNameText>Spacestagram</AppNameText>
      </WelcomeContainer>
      <DateContainer>
        <DateSelect />
      </DateContainer>
      <ButtonContainer>
        <Link to="/spacestagram/home">
          <StyledButton onClick={() => fetchData()}>search</StyledButton>
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
};

export default Landing;
