import React from "react";
import { NavLink } from "react-router-dom";

const Authnav = () => (
  <div>
    <NavLink to="/register" exact>
      Registration
    </NavLink>
    <NavLink to="/login" exact>
      Login
    </NavLink>
  </div>
);

export default Authnav;
