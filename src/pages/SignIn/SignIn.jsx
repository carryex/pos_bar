import React, { useState } from "react";

import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import { ReactComponent as Logo } from "../../assets/logo_coffeebot.svg";

import "./SignIn.scss";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { email, password } = state;
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="sign-in">
      <div className="container">
        <div className="logo-container">
          <Logo className="logo"/>
        </div>
        <form onSubmit={handleSubmit}>
          {/* here goas FormInput and buttons*/}
          <FormInput
            type="email"
            name="email"
            label="email"
            value={state.email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={state.password}
            handleChange={handleChange}
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign in</CustomButton>
          </div>
          <div className="button">
            <CustomButton type="submit">Registration</CustomButton>
          </div>
          <a className="forgot_password" href="/">Forgot password?</a>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
