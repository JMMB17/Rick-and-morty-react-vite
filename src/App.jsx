import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center py-5">Lista de personajes de rick and morty</h1>
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
