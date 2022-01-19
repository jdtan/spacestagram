import React, { useState, useEffect } from "react";
import axios from "axios";

const EarthList = async (dateArray) => {
  console.log("datearray", dateArray);

  const path = `https://api.nasa.gov/EPIC/api/natural/date/${dateArray}?api_key=`;
  const apiKey = "ZppcmftJOzzNpnWmT6nfRWBWaum5pMPqYeDWcHFH";

  console.log("after loading", path + apiKey);
  try {
    const resp = await axios.get(path + apiKey);
    console.log("resp data", resp.data);
    return resp;
  } catch (err) {
    console.err(err);
  }
};

export default EarthList;
