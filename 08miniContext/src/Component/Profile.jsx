import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="">
        <p>please login</p>
      </div>
    );
  return <div className="bg-slate-500">Welcome {user.username}</div>;
}

export default Profile;
