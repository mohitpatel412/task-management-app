import axios from "axios";

const url = "http://localhost:1027/todos";

const userInfo = JSON.parse(localStorage.getItem("userData"));
// console.log(userInfo.token);

export const fetchTodos = () => {
  //   console.log("fetchTodos");
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  });
};
export const createTodo = (newPost) =>
  axios.post(url, newPost, {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
      "Content-Type": "application/json",
    },
  });
export const updateTodo = (id, updatedPost) =>
  axios.patch(
    `${url}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    },
    updatedPost
  );
export const deleteTodo = (id) => {
  axios.delete(`${url}/${id}`, {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
      "Content-Type": "application/json",
    },
  });
  //   console.log(`${url}/${id}`);
};
