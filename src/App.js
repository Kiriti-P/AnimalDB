import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Search from "./components/search/Search";
import CurrentAnimal from "./components/current-animal/current-animal";

function App() {
  const [chosenAnimal, setChosenAnimal] = useState(null);
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    setChosenAnimal(searchData);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {chosenAnimal && <CurrentAnimal data={chosenAnimal} />}
      </div>
      <div className="icons8-home">
        <a href="https://icons8.com">Logo from icons8.com</a>
      </div>
    </div>
  );
}

export default App;
