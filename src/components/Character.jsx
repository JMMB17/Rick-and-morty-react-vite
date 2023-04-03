function Character({character}) { //Importante colocar {character} para evitar errores
  return (
    <div className="text-center p-5">
        <h2>{character.id}. {character.name}</h2>
        <img className="img-fluid rounded-pill" src={character.image}></img>
        <p>EL origen es: {character.origin.name}</p>
    </div>
  )
}

export default Character
