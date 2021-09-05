import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "../LoginComponent/Login";
import Navbar from "../NavbarComponent/Navbar";
import Register from "../RegisterComponent/Register";
import Todo from "../ToDoComponent/Todo";
import PrivateRoute from "../PrivateRoute";
import Home from "../HomeComponent/Home";
function Main() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
          <PrivateRoute exact path="/todo" component={Todo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Main;
