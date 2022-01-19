import React, { useState, useContext } from "react";
import { Context } from "../context/Store";
import styled from "styled-components";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import DateAdapter from "@mui/lab/AdapterMoment";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import DatePicker from "react-date-picker";
import "./DateSelect.css";

const SelectContainer = styled.div`
  /* position: absolute;
  inset: auto 5em 3em 5em; */
  display: flex;
  justify-content: center;
`;

const StyledSelect = styled(Select)``;

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
      />
    </SelectContainer>
  );
};

export default DateSelect;
