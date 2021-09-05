import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../../actions/todoActions";

function Todo() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin.userData);
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchTodos(userInfo));
    }
  }, [userInfo, dispatch]);
  const todos = useSelector((state) => state.todos);
  //   console.log(todos);
  //   console.log(todos.data);
  return (
    <div className="py-6">
      <div className="flex flex-wrap">
        <div className="lg:w-2/5">
          <TodoForm currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="lg:w-3/5">
          {!todos ? (
            <div>Nothing Here. Add your Todo</div>
          ) : (
            <div className="flex flex-wrap">
              {todos.map((todo) => (
                <TodoCard
                  key={todo._id}
                  todo={todo}
                  setCurrentId={setCurrentId}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
