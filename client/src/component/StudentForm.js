/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MultiSelect from "react-multi-select-component";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    root: {
      flexGrow: 1,
      margin: theme.spacing(3),
      width: "25ch",
      alignContent: "center",
      justifyContent: "center",
    },
    paper: {
      padding: theme.spacing(20),
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: 500,
      width: 800,
    },
  },
}));

export const StudentForm = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Grid container spacing={3}>
      <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid item xs={12}>
            <TextField
              id="standard-basic"
              label="Name"
              value={props.name}
              onChange={(e) => props.handleChange(e, "name")}
            />

            {
              <div style={{ color: "red", textAlign: "center" }}>
                {props.errors.name}
              </div>
            }
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-basic"
              label="email"
              variant="filled"
              value={props.email}
              onChange={(e) => props.handleChange(e, "email")}
            />

            {
              <div style={{ color: "red", textAlign: "center" }}>
                {props.errors.email}
              </div>
            }
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={props.age}
              onChange={(e) => props.handleChange(e, "age")}
            />
            {
              <div style={{ color: "red", textAlign: "center" }}>
                {props.errors.age}
              </div>
            }
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              value={props.number}
              onChange={(e) => props.handleChange(e, "number")}
            />
            {
              <div style={{ color: "red", textAlign: "center" }}>
                {props.errors.number}
              </div>
            }
          </Grid>

          <Grid item xs={12}>
            <MultiSelect
              options={props.options}
              value={props.selectedValue}
              onChange={props.setSelectedValue}
              labelledBy="Select"
            />
          </Grid>
          <Grid item xs={12}>
            <Dropdown
              // options={options}
              onChange={this._onSelect}
              // value={defaultOption}
              placeholder="Select an option"
            />
            ;
          </Grid>
          <Button variant="contained" color="primary" onClick={props.onClick}>
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
