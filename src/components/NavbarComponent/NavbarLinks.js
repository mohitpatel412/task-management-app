import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions/userActions";
import { useHistory } from "react-router";

function NavLinks({ colorchange }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.userLogin.userData);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <NavLink
        exact
        to="/"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "black",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
          Home
        </h1>
      </NavLink>

      <NavLink
        exact
        to="/todo"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "black",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
          To Do
        </h1>
      </NavLink>

      {userData ? (
        <div className="inline-flex">
          <div className="mx-2">Welcome, {userInfo.name}</div>
          <button
            onClick={() => {
              dispatch(signout());
              history.push("/login");
            }}
            className="px-4 mx-2 inline-flex items-center py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700"
            style={{ backgroundColor: "#00dbd0" }}
          >
            <span>Logout</span>
          </button>
        </div>
      ) : (
        <div className="inline-flex">
          <NavLink
            exact
            to="/login"
            activeClassName=""
            className="navbar-link-hover"
            activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            onClick={scrollToTop}
          >
            <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
              Login
            </h1>
          </NavLink>

          <NavLink
            exact
            to="/signup"
            activeClassName=""
            className="navbar-link-hover"
            activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            onClick={scrollToTop}
          >
            <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
              SignUp
            </h1>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default NavLinks;
