import React, { useState } from "react";

import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import "./Login.scss";

const Login = () => {
  const [state, setState] = useState({
    pin: "",
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
  };

  return (
    <div className="login">
      <div className="container">
        <div class="title">
          <h2>Enter the pin code of the employee</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="password"
            name="pin"
            label="pin"
            value={state.pin}
            handleChange={handleChange}
            required
          />

          <div className="button">
            <CustomButton type="submit">Sign in</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
