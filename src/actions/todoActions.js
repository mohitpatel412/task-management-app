// import axios from "axios";
// import * as api from "../api/api";
import axios from "axios";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/todoConstants";

export const fetchTodos = (userInfo) => async (dispatch) => {
  // console.log(userInfo.token);
  try {
    const data = await axios.get("http://localhost:1027/todos", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    // console.log(data.data);

    dispatch({ type: FETCH_ALL, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = (todo, userInfo) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:1027/todos", todo, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo =
  (id, title, creator, description, fontSize, selectedFile, userInfo) =>
  async (dispatch) => {
    // console.log(id);
    try {
      const { data } = await axios.put(
        `http://localhost:1027/todos/${id}`,

        {
          title: title,
          creator: creator,
          description: description,
          fontSize: fontSize,
          selectedFile: selectedFile,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteTodo = (id, userInfo) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:1027/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
