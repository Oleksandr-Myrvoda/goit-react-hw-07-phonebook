import React from "react";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img stc={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
