import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg text-center">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                  Begin with your <span className="text-indigo-500">Task</span>
                </h1>

                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Add you daily tasks via this{" "}
                  <span className="font-medium text-indigo-500">Web App</span>
                </p>

                <div className="flex flex-col justify-center mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                  <Link to="/signup">
                    <button className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">
                      Register Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md"
                src="/home1.jpg"
                alt="Home"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
