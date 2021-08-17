import React, { useState, useEffect } from "react";
import Buttons from "../component/Buttons";
import StudentTable from "../component/StudentTable";
import CourseTable from "../component/CourseTable";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { SearchBar } from "../utils/SearchBar";
import { Grid } from "@material-ui/core";
import download from "../utils/logo.jpeg";
import { toast } from "react-toastify";

const Home = (props) => {
  const [state, setState] = useState("student");
  const [courseNameList, setcourseNameList] = useState([]);
  const [studentNameList, setstudentNameList] = useState([]);
  const [studentValues, setstudentValues] = useState([]);
  const [allstudentValues, setAllstudentValues] = useState([]);
  const [courseValues, setcourseValues] = useState([]);
  const [allcourseValues, setAllcourseValues] = useState([]);

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
      if (type === "student")
        await axios.delete(`http://localhost:8000/api/student/${item_id}`);
      else if (type === "course")
        await axios.delete(`http://localhost:8000/api/course/${item_id}`);
      window.location.reload();
      toast.success("course deleted successfully");
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (props.location && props.location.state && props.location.state.newState)
      setState(props.location.state.newState);

    let cNameList = [];
    let sNameList = [];
    const student = await axios.get("http://localhost:8000/api/student");
    const course = await axios.get("http://localhost:8000/api/course");

    if (course && course.status === 200) {
      if (course.data.data.data && course.data.data.data.length > 0) {
        setcourseValues(course.data.data.data);
        setAllcourseValues(course.data.data.data);
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
        setAllstudentValues(student.data.data.data);

        sNameList = Array.from(
          new Set(student.data.data.data.map((o) => o.name)),
        );

        console.log("123354", sNameList);
        setstudentNameList(sNameList);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (studentValues.length > 0) {
    switch (state) {
      case "student":
        render = (
          <StudentTable
            rows={studentValues}
            deleteItem={deleteItem}
            allstudentValues={allstudentValues}
          />
        );
        break;
      case "course":
        render = (
          <CourseTable
            rows={courseValues}
            deleteItem={deleteItem}
            allcourseValues={allcourseValues}
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
          <img
            src={download}
            alt="Stevens Logo"
            style={{ width: "300px", float: "center" }}
          />
        </Grid>
        <Grid item xs={12}>
          <div className="" style={{ margin: "0px" }}>
            <Buttons state={state} setState={changeState} />
          </div>
        </Grid>
        <br />
        <Grid item xs={5} justifyContent="center"></Grid>
        <Grid item xs={7} justifyContent="center">
          <SearchBar
            role={state}
            list={state === "student" ? allstudentValues : allcourseValues}
            nameList={state === "student" ? studentNameList : courseNameList}
            style={{ width: "1000px" }}
            searchName={(newlist) => {
              state === "student"
                ? setstudentValues(newlist)
                : setcourseValues(newlist);
            }}
          />
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
