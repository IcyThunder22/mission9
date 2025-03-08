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
