import React, {useState, useEffect} from "react";

const Pokemon = ({name, url}) => {
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImagen(data.sprites.front_default));
  }, [url]);

  return ( 
    <li>
      <img 
      width={200}
      src={imagen}
      alt={name} />
      <h2>{name}</h2>
    </li>
   );
}
 
export default Pokemon;