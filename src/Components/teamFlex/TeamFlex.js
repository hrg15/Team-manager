import React from "react";
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";
import "./teamFlex.css";

const teamFlex = ({ teamNameHandler, teamAdder }) => {
  return (
    <div className="teamFlex">
      <div className="teamName">
        <Input
          inputLable={"Team name"}
          inputHolder={"Your team name"}
          inputName={"teamName"}
          inputOnchange={(e) => teamNameHandler(e.target.value)}
        />
      </div>
      <div className="addBtn">
        <Button onAdd={teamAdder} text={"Add team"} />
      </div>
    </div>
  );
};

export default teamFlex;
