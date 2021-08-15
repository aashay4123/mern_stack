import React, { useState } from "react";
import { StudentForm } from "../component/StudentForm";
import axios from "axios";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [options, setOptions] = useState([
    { name: "Option 1️⃣", id: 1 },
    { name: "Option 2️⃣", id: 2 },
  ]);
  const [selectedValues, setSelectedValues] = useState([
    { name: "Option 1️⃣", id: 1 },
    { name: "Option 2️⃣", id: 2 },
  ]);
  // const [program, setProgram] = useState(null);

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
    // await axios.post("/api/", body);
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
        selectedValues={selectedValues}
        options={options}
      />
    </div>
  );
};
export default AddStudentForm;
