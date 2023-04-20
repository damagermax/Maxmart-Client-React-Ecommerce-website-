import React from "react";

const SignIn = () => {
  return (
    <div className=" px-[1rem] ">
      <h2 className=" font-roboto  text-[1.3rem] lg:text-[1.5rem] sm:hidden">
        Welcome
      </h2>

      <div className="bg-white mt-2 py-2 px-4  sm:p-4 rounded-md border className= font-semibold text-[0.9rem] sm:text-[0.75rem] sm:w-[360px] mx-auto">
        <p className="sm:text-[1.5rem]">
          Sign in{" "}
          <span className="text-[0.75rem] sm:hidden">
            Alrady have an account?
          </span>
        </p>

        <form action="" className="mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder=""
            className="rounded-[.2rem] border w-full p-3 sm:py-[0.4rem] mt-1 mb-4  font-normal"
            id="email"
            name="email"
          />

          <div className="flex justify-between">
            <label htmlFor="password">Password</label>
            <a href="" className="text-[0.75rem] font-normal text-blue-600">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            placeholder="At least 6 characters"
            className="rounded-[.2rem] border w-full p-3 sm:py-[0.4rem] mt-1 mb-4  font-normal"
            id="password"
            name="password"
          />

          <div className=" flex  justify-between">
            <div className="flex items-center sm:hidden">
              <input
                type="checkbox"
                name="sPassword"
                id="sPassword"
                className="w-[1.3rem] h-[1.3rem]"
              />
              <label
                htmlFor="sPassword"
                className="text-[0.75rem] font-normal ml-4"
              >
                Show password
              </label>
            </div>
            <a
              href=""
              className="text-[0.75rem] sm:hidden font-normal text-blue-600"
            >
              Forgot password?
            </a>
          </div>
        </form>
        <button
          className="mt-6 sm:mt-0 w-full bg-yellow-400 py-3 sm:py-[0.4rem] font-medium 
           text-gray-800 rounded-[0.25rem]  border border-gray-400 sm:mb-4"
        >
          Sign in
        </button>
        <p className="mt-3 font-normal">
          By creating an account, you agree to Digitic's{" "}
          <span className="text-blue-600">
            <a href="#">Condition of Use</a>
          </span>{" "}
          and{" "}
          <span className="text-blue-600">
            <a href="#">Privacy Notice.</a>
          </span>
        </p>

        <hr className=" my-6 mx-10" />

        <p className="mt-3 font-normal">
          New to Digitic?{" "}
          <span className="text-blue-600">
            <a href="#">Sign up</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
