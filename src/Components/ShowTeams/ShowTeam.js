import React, { Component } from "react";
import "./showTeam.css";
import TeamBox from "./TeamBox/TeamBox";

export default class ShowTeam extends Component {
  render() {
    return (
      <div className="teams">
        {this.props.teams.map((team) => (
          <TeamBox
            key={Math.random()}
            teamName={team.teamName}
            users={team.users.length}
            team={team}
            deleteTeam={this.props.deleteTeam}
          />
        ))}
      </div>
    );
  }
}
