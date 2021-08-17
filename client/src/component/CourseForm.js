import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 300,
    width: 300,
  },
}));

export const CourseForm = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justifyContent="center">
        <Paper className={classes.paper} elevation={3}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Course Name"
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
            <br />
            <Grid item xs={12}>
              <TextField
                id="filled-basic"
                label="Credits"
                variant="filled"
                value={props.credits}
                onChange={(e) => props.handleChange(e, "credits")}
              />
              {
                <div style={{ color: "red", textAlign: "center" }}>
                  {props.errors.credits}
                </div>
              }
            </Grid>
            <br />
            <Button variant="contained" color="primary" onClick={props.onClick}>
              Submit
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Back
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
