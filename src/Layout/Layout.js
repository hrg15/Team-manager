import React from "react";
import AddTeam from "../Containers/AddTeam/AddTeam";
import ShowTeam from "../Components/ShowTeams/ShowTeam";
import "./layout.css";

const Layout = ({ allteams, deleteTeamHandler, addTeamHadler }) => {
  return (
    <React.Fragment>
      <div className="addTeam">
        <h1>Add team</h1>
        <AddTeam teamAdder={addTeamHadler} />
      </div>

      <div className="showTeam">
        <h1>All teams</h1>
        <ShowTeam deleteTeam={deleteTeamHandler} teams={allteams} />
      </div>
    </React.Fragment>
  );
};

export default Layout;
