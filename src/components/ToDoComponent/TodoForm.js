import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { updateTodo, createTodo } from "../../actions/todoActions";

function TodoForm({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  const todo = useSelector((state) =>
    currentId ? state.todos.find((p) => p._id === currentId) : null
  );
  const userInfo = useSelector((state) => state.userLogin.userData);
  useEffect(() => {
    if (todo) setPostData(todo);
  }, [todo]);

  //   const userData = JSON.parse(localStorage.getItem("userData"));

  const [postData, setPostData] = useState({
    title: "",
    creator: "",
    description: "",
    fontSize: 16,
    selectedFile: "",
  });
  //   console.log(currentId);
  const handleTodoForm = (e) => {
    e.preventDefault();
    if (
      postData.title !== "" &&
      postData.creator !== "" &&
      postData.description !== "" &&
      postData.fontSize !== 0 &&
      postData.selectedFile
    ) {
      if (currentId) {
        dispatch(
          updateTodo(
            currentId,
            postData.title,
            postData.creator,
            postData.description,
            postData.fontSize,
            postData.selectedFile,
            userInfo
          )
        );
      } else {
        dispatch(createTodo(postData, userInfo));
      }
      clear();
    } else {
      alert("Fill all the details");
    }
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      description: "",
      fontSize: null,
      selectedFile: "",
    });
  };

  //   useEffect(() => {
  //     if (userData) {
  //       window.location.href = "/todo";
  //     }
  //   });
  return (
    <div className="sticky top-10">
      <div className="flex justify-center mx-auto items-center align-middle md:mt-0 mt-12">
        <form>
          <div className="flex flex-col font-bold items-center md:ml-6 md:px-12 lg:px-0 lg:ml-0">
            <div className="text-2xl lg:text-4xl mb-3 lg:mb-6 text-black">
              Todo Form
            </div>

            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/title.png" className="w-8 h-8" alt="User" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter Title"
                  type="text"
                  value={postData.title}
                  onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/creator.png" className="w-8 h-8" alt="Password" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter Creator"
                  type="text"
                  value={postData.creator}
                  onChange={(e) =>
                    setPostData({ ...postData, creator: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img
                src="/product-description.png"
                className="w-8 h-8"
                alt="Password"
              />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter description"
                  type="text"
                  value={postData.description}
                  onChange={(e) =>
                    setPostData({ ...postData, description: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/font-size.png" className="w-8 h-8" alt="Font Size" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter font size (6-52)"
                  type="number"
                  min={6}
                  max={52}
                  value={postData.fontSize}
                  onChange={(e) =>
                    setPostData({ ...postData, fontSize: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex items-center rounded-full px-4 py-1 mx-auto my-2">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>

            <div
              onClick={handleTodoForm}
              className="text-white w-full bg-blue-500 py-2 rounded-lg cursor-pointer mt-5 md:mt-2 lg:mt-5 text-center"
              style={{ backgroundColor: "#00dbd0" }}
            >
              <button type="submit" className="font-bold outline-none">
                Create Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
