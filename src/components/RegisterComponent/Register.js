import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userRegister } from "../../actions/userActions";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const userInfo = useSelector((state) => state.userLogin.userData);
  //   useEffect(() => {
  //     if (userInfo) {
  //       history.push("/todo");
  //     }
  //   });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (password !== confirmPassword) {
        alert("Password and Confirm Password are not same");
        history.push("/signup");
        return;
      } else {
        dispatch(userRegister(name, email, password, confirmPassword));
        setName("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");
        history.push("/todo");
      }
    } else {
      alert("Fill all the details");
    }
  };

  return (
    <div className="flex flex-wrap mx-12 py-12">
      <div className="w-full md:w-1/2">
        <img src="/loginimg.png" alt="Register" />
      </div>
      <div className="md:w-1/2 w-full flex justify-center mx-auto items-center align-middle md:mt-0 mt-12">
        <form>
          <div className="flex flex-col font-bold items-center md:ml-6 md:px-12 lg:px-0 lg:ml-0">
            <div className="text-2xl lg:text-4xl mb-3 lg:mb-6 text-black">
              SignUp....
            </div>

            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/user.png" className="w-8 h-8" alt="User" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter your Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/padlock1.png" className="w-8 h-8" alt="Password" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Confirm your Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div
              onClick={handleRegister}
              className="text-white w-full bg-blue-500 py-2 rounded-lg cursor-pointer mt-5 md:mt-2 lg:mt-5 text-center"
              style={{ backgroundColor: "#00dbd0" }}
            >
              <button type="submit" className="font-bold outline-none">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
