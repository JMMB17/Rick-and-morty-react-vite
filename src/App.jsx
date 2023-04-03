import { useEffect, useState } from "react";
import Character from "./components/Character";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Lista de personajes de rick and morty</h1>
      <CharacterList />
      <h1>
        
      </h1>
    </div>
  );
}

export default App;
