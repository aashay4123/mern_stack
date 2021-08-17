import React, { useState, useEffect } from "react";
import Buttons from "../component/Buttons";
import StudentTable from "../component/StudentTable";
import CourseTable from "../component/CourseTable";
import axios from "axios";
import { SearchBar } from "../utils/SearchBar";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import download from "../utils/logo.jpeg";
import { makeStyles } from "@material-ui/core/styles";
const Home = () => {
  const [state, setState] = useState("student");
  const [courseNameList, setcourseNameList] = useState([]);
  const [studentNameList, setstudentNameList] = useState([]);
  const [studentValues, setstudentValues] = useState([]);
  const [courseValues, setcourseValues] = useState([]);

  let render = null;

  const classes = makeStyles((theme) => ({
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

  const changeState = (state) => {
    setState(state);
  };
  const deleteItem = async (e, item_id, type) => {
    e.stopPropagation();
    let isConf = window.confirm("Are you sure you want to delete ?");
    if (isConf) {
      if (type === "student") await axios.delete(`/api/student/${item_id}`);
      else if (type === "course") await axios.delete(`/api/course/${item_id}`);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let cNameList = [];
    let sNameList = [];
    const course = await axios.get("http://localhost:8000/api/course");
    const student = await axios.get("http://localhost:8000/api/student");

    if (course && course.status === 200) {
      if (course.data.data.data && course.data.data.data.length > 0) {
        setcourseValues(course.data.data.data);
        cNameList = Array.from(
          new Set(course.data.data.data.map((o) => o.name)),
        );
        console.log("123354", cNameList);
        setcourseNameList(cNameList);
      }
    }
    if (student && student.status === 200) {
      if (student.data.data.data && student.data.data.data.length > 0) {
        setstudentValues(student.data.data.data);

        sNameList = Array.from(
          new Set(student.data.data.data.map((o) => o.name)),
        );

        console.log("123354", sNameList);
        setstudentNameList(sNameList);
      }
    }
  }, []);
  console.log(studentValues);
  if (studentValues.length > 0) {
    switch (state) {
      case "student":
        render = (
          <StudentTable
            nameList={studentNameList}
            setSearchValues={setstudentValues}
            list={studentValues}
          />
        );
        break;
      case "course":
        render = (
          <CourseTable
            nameList={courseNameList}
            setSearchValues={setcourseValues}
            list={courseValues}
          />
        );
        break;

      default:
        break;
    }
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="" style={{ margin: "20px" }}>
            <img
              src={download}
              alt="Stevens Logo"
              width="1200"
              height="200"
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="" style={{ margin: "20px" }}>
            <Buttons state={state} setState={changeState} />
          </div>
        </Grid>
        <br />
        <Grid item xs={12}>
          <div className="" style={{ margin: "20px" }}>
            {render}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
