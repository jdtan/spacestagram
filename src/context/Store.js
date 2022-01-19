import React, { useState, createContext, useContext } from "react";

export const Context = createContext();

const DataStore = (props) => {
  const [data, setData] = useState([]);
  const [searchDate, setSearchDate] = useState([]);
  const contextValue = {
    imageData: [data, setData],
    dateTaken: [searchDate, setSearchDate],
  };
  return <Context.Provider value={contextValue} {...props} />;
};

// const useContextData = () => useContext(Context);

// export { DataStore, useContextData };
export default DataStore;
