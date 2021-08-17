import React, { useState, useEffect } from "react";
import { StudentForm } from "../component/StudentForm";
import axios from "axios";
import { program as options } from "../utils/options";
import { toast } from "react-toastify";
const AddStudentForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [selectedCourses, setselectedCourses] = useState([]);
  const [program, setprogram] = useState("");
  const [allCourses, setallCourses] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [errors, setError] = useState({});
  const [disabled, setdisabled] = useState(true);
  const id = window.location.pathname && window.location.pathname.split("/")[2];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (id) {
      const res = await axios.get(`http://localhost:8000/api/student/${id}`);
      if (res.data && res.status === 200) {
        const data = res.data.data.data[0];
        setName(data.name);
        setprogram({ label: data.program, value: 3 });
        setEmail(data.email);
        setNumber(data.mobileNumber);
        let selectedData =
          data.courseId &&
          data.courseId.map((course) => {
            return { label: course.name, value: course._id };
          });
        setselectedCourses(selectedData);
      }
    }
    const courses = await axios.get("http://localhost:8000/api/course");

    if (courses && courses.status === 200) {
      if (courses.data.data.data && courses.data.data.data.length > 0) {
        let list = courses.data.data.data;
        let finalList = list.map((course) => {
          return { label: course.name, value: course._id };
        });
        setallCourses(finalList);
      }
    }
  }, [id]);

  const onClick = async (e) => {
    setdisabled(true);
    e.preventDefault();
    let courseId = [];
    // eslint-disable-next-line array-callback-return
    selectedCourses.map((item) => {
      courseId.push(item.value);
    });

    let body = {
      name,
      age,
      email,
      mobileNumber: number,
      program: program.label,
      courseId,
    };
    if (body.name && body.email && body.mobileNumber && body.program) {
      if (id)
        await axios.patch(`http://localhost:8000/api/student/${id}`, body);
      else await axios.post("http://localhost:8000/api/student", body);
      toast.success("program successfully added");
      window.location.replace("/");
    } else {
      toast.error("Please fill the complete form");
    }
  };
  const handleChange = (event, setValue) => {
    switch (setValue) {
      case "name":
        setName(event.target.value);
        if (!event.target.value) {
          errors.name = "Required";
          setdisabled(true);
        } else {
          errors.name = null;
          setdisabled(false);
        }
        break;
      case "age":
        setAge(event.target.value);

        if (!event.target.value) errors.age = "Required";
        else if (event.target.value) {
          let pattern = new RegExp("^[0-9]");
          if (!pattern.test(event.target.value)) {
            errors.age = "*Please enter valid number";
            setdisabled(true);
          } else {
            errors.age = null;
            setdisabled(false);
          }
        } else {
          errors.age = null;
          setdisabled(false);
        }
        break;
      case "email":
        setEmail(event.target.value);
        if (!event.target.value) {
          errors.email = "Required";
          setdisabled(true);
        } else if (event.target.value) {
          let pattern = /\S+@\S+\.\S+/;
          if (!pattern.test(event.target.value)) {
            errors.email = "*Please enter valid email";
            setdisabled(true);
          } else {
            errors.email = null;
            setdisabled(false);
          }
        } else {
          errors.email = null;
          setdisabled(false);
        }
        break;
      case "number":
        setNumber(event.target.value);
        if (!event.target.value) {
          errors.number = "Required";
          setdisabled(true);
        } else if (event.target.value) {
          let pattern = new RegExp("^[0-9]");
          if (!pattern.test(event.target.value)) {
            errors.number = "*Please enter valid number";
            setdisabled(true);
          } else if (event.target.value.length !== 10) {
            errors.number = "*phone number invalid";
            setdisabled(true);
          } else {
            errors.number = null;
            setdisabled(false);
          }
        } else {
          errors.number = null;
          setdisabled(false);
        }
        break;
      case "selectedCourses":
        if (!selectedCourses.length > 0) {
          errors.selectedCourses = "*Please select a course";
          setdisabled(true);
        } else setdisabled(false);
        break;
      default:
        break;
    }
  };
  const changeSeletedCourse = (data) => {
    setselectedCourses(data);
    handleChange(null, "selectedCourses");
  };
  return (
    <div>
      <StudentForm
        handleChange={handleChange}
        onClick={onClick}
        name={name}
        age={age}
        email={email}
        number={number}
        errors={errors}
        selectedCourses={selectedCourses}
        options={options}
        setselectedCourses={changeSeletedCourse}
        allCourses={allCourses}
        program={program}
        disabled={disabled}
        setprogram={setprogram}
      />
    </div>
  );
};
export default AddStudentForm;
