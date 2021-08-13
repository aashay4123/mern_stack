import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./container/Home";
import AddStudentForm from "./container/AddStudentForm";
import AddCourseForm from "./container/AddCourseForm";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addStudent" exact component={AddStudentForm} />
        <Route path="/addCourse" exact component={AddCourseForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
