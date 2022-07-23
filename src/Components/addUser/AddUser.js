import React from "react";
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";
import "./addUser.css";

const addUser = ({ addUserData, addUserHandler }) => {
  return (
    <div className="addUser">
      <div className="useradd">
        <Input
          inputLable={"Member name"}
          inputHolder={"Member name"}
          inputName={"userName"}
          isReqired={true}
          inputOnchange={(e) => addUserData(e)}
        />
      </div>
      <div className="userage">
        <Input
          inputLable={"Age"}
          inputType={"number"}
          inputHolder={25}
          inputName={"userAge"}
          inputMin={10}
          inputMax={100}
          inputOnchange={(e) => addUserData(e)}
        />
      </div>
      <div className="userfield">
        <Input
          inputLable={"Field"}
          inputHolder={"Seo, python ..."}
          inputName={"userField"}
          inputOnchange={(e) => addUserData(e)}
        />
      </div>
      <Button onAdd={addUserHandler} text={"Add member"} />
    </div>
  );
};

export default addUser;
