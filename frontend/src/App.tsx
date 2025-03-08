import { useEffect, useState } from "react";
import "./App.css";

type Team = {
  school: string;
  name: string;
  city: string;
  state: string;
};

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/CollegeBasketballTeams.json") // Ensure `teams.json` is in `public/`
      .then((response) => response.json())
      .then((data) => setTeams(data.teams))
      .catch((error) => console.error("Error loading teams:", error));
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>NCAA Basketball Teams</h1>
        <p>
          Explore all NCAA basketball teams with their mascots and locations.
        </p>
      </header>

      {/* Team List */}
      <div className="team-list">
        {teams.length > 0 ? (
          teams.map((team) => (
            <div key={team.school} className="team-card">
              <h2>{team.school}</h2>
              <h3>Mascot: {team.name}</h3>
              <p>
                Location: {team.city}, {team.state}
              </p>
              <br></br>
            </div>
          ))
        ) : (
          <p>Loading teams...</p>
        )}
      </div>
    </div>
  );
}

export default App;

/* VIDEO NOTES

import "./App.css";
  const bandArray = [
    {Name : "Dire Straights", members : "Maya, Will, Brynn", formed : 2023},
    {Name : "REM", members : "Chad, Teri, John, Jesse", formed : 2000},
    {Name : "Collective Soul", members : "Mary, Luke, Nick", formed : 2003}];

function Welcome() {
  return (
    <h1>Criminally Underrated Bands</h1>
  );
}

function Band({Name, members, formed} : {Name: string; members : string; formed : number}) {


  return (
    <>
      <img />
      <h2>{Name}</h2>
      <h3>Orginal Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList() {

  return (
    <>
      {
        bandArray.map((singleBand) => (
          < Band {...singleBand} />
        ))
      }
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
*/
