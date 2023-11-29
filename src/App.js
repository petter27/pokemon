
import React, {useState, useEffect} from "react";
import Pokemon from "./components/Pokemon";
import Titulo from "./components/Titulo";
import Footer from "./components/Footer";
import Filtro from "./components/Filtro";


function App() {
  const [pokemons, setPokemons] = useState([]);

  const API_URL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      setPokemons(data.results);
    });
  }, []);

   const filtrarPokemons = (event) => {
    const texto = event.target.value.toLowerCase();

    if(texto === "") return limpiarFiltro();

    const filtrados = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(texto);
    });
    setPokemons(filtrados);
  };

  const limpiarFiltro = () => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      setPokemons(data.results);
    });
  };

  return (
    <div className="App">
      <Titulo text="Pokedex" />
      <Filtro filtrarPokemons={filtrarPokemons} />
      <ul className="contenedor">
        {
          pokemons.map(pokemon => {
            return <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          })
        }
      </ul>
        <Footer author="Pedro Pacheco" year="2023" git="https://github.com/petter27" />
    </div>
  );
}

export default App;
