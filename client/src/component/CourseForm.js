import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
    width: "25ch",
    alignContent: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const CourseForm = (props) => {
  const classes = useStyles();
  const [courseName, setCourseName] = useState("");
  const [credits, setCredits] = useState(null);
  const [errors, setError] = useState({});
  const onClick = () => {};
  const handleChange = (event, setValue) => {
    setValue(event.target.value);
    switch (setValue) {
      case setCourseName:
        if (!event.target.value) errors.name = "Required";
        else errors.name = null;
        break;
      case setCredits:
        if (!event.target.value) errors.name = "Required";
        else errors.age = null;
        break;
     
        break;
      default:
        break;
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TextField id="standard-basic" label="Course Name" />
            <TextField id="filled-basic" label="Credits" variant="filled" />
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
};
