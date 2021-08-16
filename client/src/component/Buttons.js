import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "center",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.setState("student")}
        >
          Students
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.setState("course")}
        >
          Courses
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.setState("studentCourse")}
        >
          Student Course Load
        </Button>
      </div>
      {props.state === "student" ? (
        <Button
          onClick={() => {
            window.location.replace("/addStudent");
          }}
          variant="contained"
          style={{ float: "right" }}
        >
          Add Students
        </Button>
      ) : (
        <Button
          onClick={() => {
            window.location.replace("/addCourse");
          }}
          variant="contained"
          style={{ float: "right" }}
        >
          Add Course
        </Button>
      )}
    </Fragment>
  );
}
