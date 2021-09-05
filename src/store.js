import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userTodos } from "./reducers/todoReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

const initialState = {
  userLogin: {
    userData: localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : [],
  },
  todos: [],
};
const reducer = combineReducers({
  userLogin: userSigninReducer,
  userSignUp: userRegisterReducer,
  todos: userTodos,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
