import React, { useState, useContext } from "react";
import { Context } from "../context/Store";
import styled from "styled-components";
import DatePicker from "react-date-picker";
import "./DateSelect.css";

const SelectContainer = styled.div`
  /* position: absolute;
  inset: auto 5em 3em 5em; */
  display: flex;
  justify-content: center;
`;

const DateSelect = () => {
  const { dateTaken } = useContext(Context);
  const [searchDate, setSearchDate] = dateTaken;
  const [value, onChange] = useState(new Date());
  // console.log("value", value.toISOString().slice(0, 10)); // yyy-mm-dd

  const formatDate = (dateObj) => {
    return dateObj.toISOString().slice(0, 10);
  };

  const handleChange = (value) => {
    onChange(value);
    setSearchDate(formatDate(value));
  };
  return (
    <SelectContainer>
      <DatePicker
        onChange={(value) => handleChange(value)}
        value={value}
        clearIcon={null}
        calendarIcon={null}
        maxDate={new Date()}
        minDate={new Date("2015-06-13")}
      />
    </SelectContainer>
  );
};

export default DateSelect;
