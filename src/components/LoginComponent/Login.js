import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignin } from "../../actions/userActions";
import { useHistory } from "react-router";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const userData = JSON.parse(localStorage.getItem("userData"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(userSignin(email, password));
      setEmail("");
      setPassword("");
    } else {
      alert("Fill all the details");
    }
  };

  return (
    <div className="flex flex-wrap mx-12 py-12 items-center align-middle justify-center">
      <div className="w-full md:w-1/2">
        <img src="/loginimg.png" alt="Login" />
      </div>
      <div className="md:w-1/2 w-full flex justify-center mx-auto items-center align-middle md:mt-0 mt-12">
        <form>
          <div className="flex flex-col font-bold items-center md:ml-6 md:px-12 lg:px-0 lg:ml-0">
            <div className="text-2xl lg:text-4xl mb-3 lg:mb-6 text-black">
              Login....
            </div>

            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/user.png" className="w-8 h-8" alt="User" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/padlock.png" className="w-8 h-8" alt="Password" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter your Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div
              onClick={(e) => {
                handleLogin(e);
                history.push("/todo");
              }}
              className="text-white w-full bg-blue-500 py-2 rounded-lg cursor-pointer mt-5 md:mt-2 lg:mt-5 text-center"
              style={{ backgroundColor: "#00dbd0" }}
            >
              <button type="submit" className="font-bold outline-none">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
