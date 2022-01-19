import React, { useState, useEffect, useContext } from "react";
// import "./App.css";
// import styled from "styled-components";

// import { Context } from "./context/Store";
// import LoadingEarth from "./components/Loading";
// import EarthList from "./components/EarthList";
// import ImageSection from "./components/ImageSection";
// import EarthGrid from "./components/EarthGrid";

import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
  // const { imageData } = useContext(Context);
  // const [data, setData] = imageData;
  // console.log("after context", data);
  // // const { data, setData } = useContextData();
  // // const [data, setData] = useState(null);
  // // const [error, setError] = useState(null);
  // // const [loading, setLoading] = useState(null);
  // // const [imageDate, setImageDate] = useState([]);
  // // const path = "https://api.nasa.gov/EPIC/api/natural/images?api_key=";
  // // const apiKey = "ZppcmftJOzzNpnWmT6nfRWBWaum5pMPqYeDWcHFH";

  // useEffect(() => {
  //   (async () => {
  //     await EarthList().then((items) => {
  //       console.log("items", items.data);
  //       setData(items.data);
  //     });
  //   })();
  // }, []);

  // // console.log("data data", data);

  // // const extractDate = (apiDate, index) => {
  // //   return apiDate.split(" ")[0].split("-")[index];
  // // };

  // const isEmpty = (dataObj) => Object.keys(dataObj).length === 0;

  // let picDate = [];
  // return (
  //   <div className="App">
  //     Spacestagram
  //     <div>
  //       {/* {console.log(loading, data)} */}
  //       {console.log("check", data, isEmpty(data))}
  //       {isEmpty(data) ? (
  //         <LoadingEarth />
  //       ) : (
  //         <>
  //           <EarthGrid />

  //           {/* <img
  //             src={
  //               "https://epic.gsfc.nasa.gov/archive/natural/2022/01/17/png/" +
  //               data[0].image +
  //               ".png"
  //             }
  //             style={{ width: "200px", height: "auto" }}
  //             alt="img"
  //             onClick={(value) => handleModalClick(value)}
  //           />
  //           <Modal open={visible} onClose={() => handleModalClose()}>
  //             <ImageSection
  //               imageIndex={1}  // todo pass in index of clicked earth
  //               handleClose={() => handleModalClose()}
  //             />
  //           </Modal> */}
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );
}

export default App;
