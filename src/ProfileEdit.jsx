import React from "react";
import { Link } from "react-router-dom";

export const ProfileEdit = () => {
  return (
    <div className="form">
      <h2>Profile</h2>
      <div className="mini2">
        <div className="var_name">Full name:</div>
        <input type="text" />
        <div className="var_name">Day Of Birth:</div>
        <input type="text" />
        <div className="var_name">Email:</div>
        <input type="text" />
        <div className="var_name">Phone:</div>
        <input type="text" />
      </div>
      <div className="btm">
        <button className="spc-btn">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: 15 }}
          >
            Update
          </Link>
        </button>
        <button className="rht-btn">Cancel</button>
        {/* </div> */}
      </div>
    </div>
  );
};
