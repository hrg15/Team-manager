import React from "react";

const TeamBox = ({ teamName, users, deleteTeam, team }) => {
  return (
    <ul>
      <li>Team Name:{teamName}</li>
      <li>Number of users:{users}</li>
      <li>
        <button onClick={() => deleteTeam(team)}>delete</button>
      </li>
    </ul>
  );
};

export default TeamBox;
