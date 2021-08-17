import React, { useState, useEffect } from "react";
import { CourseForm } from "../component/CourseForm";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourseForm = (props) => {
  const [name, setName] = useState("");
  const [credits, setCredits] = useState(null);
  const id = window.location.pathname && window.location.pathname.split("/")[2];

  // eslint-disable-next-line no-unused-vars
  const [errors, setError] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (id) {
      const res = await axios.get(`http://localhost:8000/api/course/${id}`);
      console.log("object", res);
      if (res.data && res.status === 200) {
        const data = res.data.data.data[0];
        setName(data.name);
        setCredits(data.credits);
      }
    }
  }, [id]);
  const onClick = async (e) => {
    e.preventDefault();
    let body = {
      name,
      credits,
    };
    if (body.name && body.credits) {
      if (id) await axios.patch(`http://localhost:8000/api/course/${id}`, body);
      else await axios.post("http://localhost:8000/api/course", body);
      toast.success("Course successfully added");
      props.history.push({
        pathname: "/",
        state: {
          newState: "course",
        },
      });
    } else {
      toast.error("Please fill the complete form");
    }
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
