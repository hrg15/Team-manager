import React from "react";
import { IconContext } from "react-icons";
import { TiDelete } from "react-icons/ti";
const UsersBox = ({ id, name, age, field, deleteUser, user }) => {
  return (
    <ul>
      <li>{id}</li>
      <li>Name: {name}</li>
      <li>Field: {field}</li>
      <li>Age: {age}</li>
      <li>
        <IconContext.Provider value={{ color: "#e41749", size: "25px" }}>
          <div className="delUser" onClick={() => deleteUser(user)}>
            <TiDelete />
          </div>
        </IconContext.Provider>
      </li>
    </ul>
  );
};

export default UsersBox;
