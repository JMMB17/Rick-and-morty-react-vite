import { useState, useEffect } from "react";
import Character from "./Character";

function NavPage({page, setPage}){
    return <div className="d-flex justify-content-between align-items-center">
        <p>
            pagina {page}
        </p>
        <button onClick={()=>{
            setPage(page+1) 
        }} className="btn btn-primary btn-sm">Pagina 2</button>
    </div>
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character?page=" + page);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);// Se coloca page para que se actualice la pagina cada que este valor cambie
  return (
    <div className="container">
         {/* Al componente NavPage toca pasarle los valores de page y setPage para que puede modificarlos con el evento onClick */}
        <NavPage page={page} setPage={setPage}/>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-3" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
