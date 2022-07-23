import React, { Component } from "react";
import "./app.css";
import Layout from "../Layout/Layout";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }
  addTeamHadler = (team) => {
    this.setState((prevState) => ({ teams: [...prevState.teams, team] }));
  };

  deleteTeamHandler = (id) => {
    // this.setState(this.state.teams.filter((el) => el.teamId !== id));
    let team = this.state.teams.filter((el) => el !== id);
    this.setState({ teams: team });
  };

  render() {
    return (
      <div className="container">
        <Layout
          allteams={this.state.teams}
          addTeamHadler={this.addTeamHadler}
          deleteTeamHandler={this.deleteTeamHandler}
        />
      </div>
    );
  }
}
