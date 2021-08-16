import React, { useState } from "react";
import Buttons from "../component/Buttons";
import StudentTable from "../component/StudentTable";
import CourseTable from "../component/CourseTable";
import StudentCourseTable from "../component/StudentCourseTable";
const Home = () => {
  const [state, setState] = useState("student");
  let render = null;
  switch (state) {
    case "student":
      render = <StudentTable />;
      break;
    case "course":
      render = <CourseTable />;
      break;
    case "studentCourse":
      render = <StudentCourseTable />;
      break;
    default:
      break;
  }
  return (
    <div>
      <div className="" style={{ margin: "20px" }}>
        <Buttons state={state} setState={setState} />
      </div>
      <div className="" style={{ margin: "20px" }}>
        {render}
      </div>
    </div>
  );
};
export default Home;
