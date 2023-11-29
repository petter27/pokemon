import React from 'react'

const Filtro = ({filtrarPokemons}) => {
  return (<div className="filtro">
  <input type="text" onChange={filtrarPokemons} placeholder="Buscar Pokemon" />
</div>);
}
 
export default Filtro;