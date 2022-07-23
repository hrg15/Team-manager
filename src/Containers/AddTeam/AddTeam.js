import React, { Component } from "react";
import "./addTeam.css";
import Users from "../../Components/users/Users";
import AddUser from "../../Components/addUser/AddUser";
import TeamFlex from "../../Components/teamFlex/TeamFlex";
import ErrorMssage from "../../Ui/ErrorMassage/ErrorMessage";

export default class AddTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      teamName: "",
      data: {
        userName: "",
        userField: "",
        userAge: "",
        userId: 1,
      },
      users: [],
    };
  }
  addUser = () => {
    this.setState((prevState) => ({
      users: [...prevState.users, this.state.data],
    }));
  };
  deleteUserHandler = (id) => {
    let user = this.state.users.filter((e) => e !== id);
    this.setState({ users: user });
  };
  teamNameAdder = (value) => {
    this.setState({ teamName: value });
  };
  addUserData = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      case "userField":
        this.setState((prevState) => ({
          data: { ...prevState.data, userField: e.target.value },
        }));
        break;
      case "userAge":
        this.setState((prevState) => ({
          data: { ...prevState.data, userAge: e.target.value },
        }));
        break;
      case "userName":
        this.setState((prevState) => ({
          data: { ...prevState.data, userName: e.target.value },
        }));
        break;
      default:
        return;
    }
  };
  render() {
    return (
      <div className="addForm">
        <TeamFlex
          teamNameHandler={this.teamNameAdder}
          teamAdder={() => this.props.teamAdder(this.state)}
        />
        <div className="members">
          <AddUser
            addUserData={this.addUserData}
            addUserHandler={this.addUser}
          />
          {this.state.message ? (
            <ErrorMssage message={this.state.message} />
          ) : null}
          <Users
            deleteUser={this.deleteUserHandler}
            allUsers={this.state.users}
          />
        </div>
      </div>
    );
  }
}
