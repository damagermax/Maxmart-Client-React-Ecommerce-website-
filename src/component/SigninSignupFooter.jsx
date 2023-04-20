import React from "react";

const SigninSignupFooter = () => {
  return (
    <footer className="border-t w-full py-6 mt-8">
      <div>
        <ul className="flex gap-4 text-[0.7rem] text-blue-600 mx-auto  justify-center">
          <li>
            <a href="#">Conditions of Use</a>
          </li>
          <li>
            <a href="#"> Privacy Notice</a>
          </li>
          <li>
            <a href="#"> Help</a>
          </li>
        </ul>

        <p className="text-[0.7rem]  text-center mt-3">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default SigninSignupFooter;
