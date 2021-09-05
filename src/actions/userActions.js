import axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const userRegister =
  (name, email, password, confirmPassword) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { name, email, password, confirmPassword },
    });
    try {
      const { data } = await axios.post(
        "https://staging-todo-app.herokuapp.com/api/register",
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userData", JSON.stringify(data));
      window.location.href = "/todo";
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const userSignin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(
      "https://staging-todo-app.herokuapp.com/api/signin",
      {
        email,
        password,
      }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userData", JSON.stringify(data));
    window.location.href = "/todo";
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userData");
  dispatch({ type: USER_SIGNOUT });
};
