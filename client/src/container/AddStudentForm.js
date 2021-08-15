import React, { useState } from "react";
import { StudentForm } from "../component/StudentForm";
import axios from "axios";
import { program as options } from "../utils/options";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);

  const [selectedValue, setSelectedValue] = useState([]);

  // const [program, setProgram] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [errors, setError] = useState({});

  const onClick = async (e) => {
    e.preventDefault();
    let body = {
      name,
      age,
      email,
      number,
      // program,
    };
    await axios.post("/api/", body);
  };
  const handleChange = (event, setValue) => {
    switch (setValue) {
      case "name":
        setName(event.target.value);
        if (!event.target.value) errors.name = "Required";
        else errors.name = null;
        break;
      case "age":
        setAge(event.target.value);

        if (!event.target.value) errors.name = "Required";
        else errors.age = null;
        break;
      case "email":
        setEmail(event.target.value);
        if (!event.target.value) errors.email = "Required";
        else if (event.target.value) {
          let pattern = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
          if (!pattern.test(event.target.value)) {
            errors.email = "*Please enter valid email";
          }
        } else errors.name = null;
        break;
      case "number":
        setNumber(event.target.value);
        if (!event.target.value) errors.number = "Required";
        else if (event.target.value) {
          if (!event.target.value.length === 10) {
            errors.email = "*Please enter valid Number";
          }
        } else errors.name = null;
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
      />
    </div>
  );
};
export default AddStudentForm;
