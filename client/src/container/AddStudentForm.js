import React, { useState, useEffect } from "react";
import { StudentForm } from "../component/StudentForm";
import axios from "axios";
import { program as options } from "../utils/options";
import { Courses } from "../utils/options";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const [course, setCourse] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [errors, setError] = useState({});
  const [disabled, setdisabled] = useState(true);

  useEffect(() => {}, []);

  const onClick = async (e) => {
    e.preventDefault();
    let courseId = [];
    // eslint-disable-next-line array-callback-return
    selectedValue.map((item) => {
      courseId.push(item.label);
    });

    let body = {
      name,
      age,
      email,
      mobileNumber: number,
      program: course.label,
      courseId,
    };
    console.log(body);
    if (body) await axios.post("http://localhost:8000/api/student", body);
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
      default:
        break;
    }
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
        selectedValue={selectedValue}
        options={options}
        setSelectedValue={setSelectedValue}
        Courses={Courses}
        course={course}
        disabled={disabled}
        setCourse={setCourse}
      />
    </div>
  );
};
export default AddStudentForm;
