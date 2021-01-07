import React from "react";

import CustomButton from "../../components/CustomButton/CustomButton";

import "./Restoran.scss";

const Restoran = () => {
  return (
    <div className="restoran">
      <div className="header">
        <div className="user-name">
          <span>UserName</span>
        </div>
        <div className="menu">
          <span>Menu</span>
        </div>
      </div>
      <div className="container">
        <div className="buttons">
          <CustomButton type="submit">Create new order</CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Restoran;
