import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { Context } from "../context/Store";
import LoadingEarth from "../components/Loading";
import EarthList from "../components/EarthList";
// import ImageSection from "./components/ImageSection";
import EarthGrid from "../components/EarthGrid";
import Name from "../components/Name";
import Footer from "../components/Footer";

const DisplayImages = styled.div`
  width: 100%;
`;
const PageContent = styled.div``;
const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Home = () => {
  const { imageData, dateTaken, loadState } = useContext(Context);
  const [data, setData] = imageData;
  const [searchDate, setSearchDate] = dateTaken;
  const [loading, setLoading] = loadState;

  useEffect(() => {
    (async () => {
      setLoading(true);
      await EarthList(searchDate).then((items) => {
        console.log("items", items.data);
        setData(items.data);
        setLoading(false);
      });
    })();
  }, []);

  console.log("after context", data);

  const isEmpty = (dataObj) => Object.keys(dataObj).length === 0;

  let picDate = [];
  return (
    <MainPage>
      <PageContent>
        <Name />
        {loading ? (
          <LoadingEarth />
        ) : (
          <DisplayImages>
            <EarthGrid />
          </DisplayImages>
        )}
      </PageContent>
      <Footer />
    </MainPage>
  );
};

export default Home;
