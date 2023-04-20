import React from "react";
import SignupForm from "../component/SignupForm";
import SigninSignupFooter from "../component/SigninSignupFooter";

const SignUp = () => {
  return (
    <div className="pt-6">
      <SignupForm />
      <SigninSignupFooter />
    </div>
  );
};

export default SignUp;
