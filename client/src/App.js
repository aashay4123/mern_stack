import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
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

        <Route path="/editCourse/:id" exact component={AddCourseForm} />
        <Route path="/editStudent/:id" exact component={AddStudentForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(Routes);
