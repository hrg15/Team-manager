import React from "react";
import UsersBox from "./userBox/UserBox";
import "./users.css";

const Users = ({ allUsers, deleteUser }) => {
  return (
    <div className="users">
      {allUsers.map((user, index) => (
        <UsersBox
          key={Math.random()}
          id={index}
          user={user}
          name={user.userName}
          field={user.userField}
          age={user.userAge}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
};

export default Users;
