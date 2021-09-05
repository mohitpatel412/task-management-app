import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteTodo } from "../../actions/todoActions";
function TodoCard({ todo, setCurrentId }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin.userData);
  return (
    <div className="lg:w-1/2">
      <div className="mx-4 my-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src={
            todo.selectedFile ||
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          }
          alt="Images"
        />

        <div className="items-center px-6 py-3 bg-gray-900">
          {/* <svg
            className="w-6 h-6 text-white fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
            />
          </svg> */}

          <h1 className="mx-3 text-lg font-semibold text-white">
            {todo.title}
          </h1>

          <div className="mx-3 font-semibold text-white">
            {moment(todo.updatedAt).fromNow()}
          </div>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {todo.creator}
            {/* <p>{moment(todo.createdAt).fromNow()}</p> */}
          </h1>

          <p
            className="py-2 text-gray-700 dark:text-gray-400"
            style={{ fontSize: todo.fontSize }}
          >
            {todo.description}
          </p>

          <div className="flex flex-row justify-between px-2">
            <div>
              <button
                onClick={() => setCurrentId(todo._id)}
                className="px-4 inline-flex align-middle items-center py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700"
                style={{ backgroundColor: "#00dbd0" }}
              >
                <span>
                  <img src="/edit1.png" className="w-4 h-4 mr-2" alt="Edit" />
                </span>{" "}
                <span>Edit</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => dispatch(deleteTodo(todo._id, userInfo))}
                className="px-4 inline-flex items-center py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700"
                style={{ backgroundColor: "#00dbd0" }}
              >
                <img src="/delete1.png" className="w-4 h-4 mr-2" alt="Delete" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
