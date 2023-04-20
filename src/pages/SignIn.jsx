import React from "react";
import SignInForm from "../component/SignInForm";
import SigninSignupFooter from "../component/SigninSignupFooter";

const SignIn = () => {
  return (
    <div className="pt-6">
      <SignInForm />

      <SigninSignupFooter />
    </div>
  );
};

export default SignIn;
