import React from "react";
import axios from "axios";

const EarthList = async (dateArray) => {
  const path = `https://api.nasa.gov/EPIC/api/natural/date/${dateArray}?api_key=`;
  const apiKey = "ZppcmftJOzzNpnWmT6nfRWBWaum5pMPqYeDWcHFH";

  try {
    const resp = await axios.get(path + apiKey);
    return resp;
  } catch (err) {
    console.err(err);
  }
};

export default EarthList;
