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
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 550,
    width: 800,
  },
}));

export const StudentForm = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.root}>
      <Grid container spacing={5} justifyContent="center">
        <Paper className={classes.paper} elevation={3}>
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
            <br />
            <Grid item xs={12}>
              <TextField
                id="filled-basic"
                label="Email"
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
            <br />

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
            <br />
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Contact Number"
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
            <br />

            <Grid item xs={12}>
              <Dropdown
                options={props.Courses}
                value={props.course}
                onChange={props.setCourse}
                placeholder="Program Name"
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <MultiSelect
                options={props.options}
                value={props.selectedValue}
                onChange={props.setSelectedValue}
                labelledBy="ProgramName"
              />
            </Grid>

            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={props.onClick}
              disabled={props.disabled}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
