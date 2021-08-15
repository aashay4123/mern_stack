/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Multiselect from "multiselect-react-dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const StudentForm = (props) => {
  const classes = useStyles();
  const onSelect = (selectedList, selectedItem) => {};

  const onRemove = (selectedList, removedItem) => {};
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Name"
        value={props.name}
        onChange={(e) => props.handleChange(e, "name")}
      />
      {<div style={{ color: "red", textAlign: "center" }}>{errors.name}</div>}
      <TextField
        id="filled-basic"
        label="email"
        variant="filled"
        value={props.email}
        onChange={(e) => props.handleChange(e, "email")}
      />
      {<div style={{ color: "red", textAlign: "center" }}>{errors.email}</div>}
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        value={props.age}
        onChange={(e) => props.handleChange(e, "age")}
      />
      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        value={props.number}
        onChange={(e) => props.handleChange(e, "number")}
      />

      <Multiselect
        options={props.options} // Options to display in the dropdown
        selectedValues={props.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="program" // Property name to display in the dropdown options
      />
      {
        <div style={{ color: "red", textAlign: "center" }}>
          {props.errors.age}
        </div>
      }
      <Button variant="contained" color="primary" onClick={props.onClick}>
        Submit
      </Button>
    </form>
  );
};
