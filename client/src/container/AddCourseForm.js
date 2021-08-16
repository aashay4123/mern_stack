import React, { useState } from "react";
import { CourseForm } from "../component/CourseForm";
import axios from "axios";

const AddCourseForm = () => {
  const [name, setName] = useState("");
  const [credits, setCredits] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [errors, setError] = useState({});

  const onClick = async (e) => {
    e.preventDefault();
    let body = {
      name,
      credits,
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
      case "credits":
        setCredits(event.target.value);
        if (!event.target.value) errors.credits = "Required";
        else if (event.target.value) {
          let pattern = new RegExp("^[0-9]");
          if (!pattern.test(event.target.value)) {
            errors.credits = "*Please enter valid number";
          } else if (event.target.value > 3) {
            errors.credits = "Credit should not be mpre than 3";
          } else errors.credits = null;
        } else errors.credits = null;
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <CourseForm
        onClick={onClick}
        handleChange={handleChange}
        credits={credits}
        name={name}
        errors={errors}
      />
    </div>
  );
};
export default AddCourseForm;
