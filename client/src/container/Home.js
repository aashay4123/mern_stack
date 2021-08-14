import React from "react";
import Buttons from "../component/Buttons";
import StudentTable from "../component/StudentTable";
import CourseTable from "../component/CourseTable";
import StudentCourseTable from "../component/StudentCourseTable";
const Home = () => {
  return (
    <div>
      <div className="" style={{ margin: "20px" }}>
        <Buttons />
      </div>
      <div className="" style={{ margin: "20px" }}>
        <StudentTable />
        <CourseTable />
        <StudentCourseTable />
      </div>
    </div>
  );
};
export default Home;
