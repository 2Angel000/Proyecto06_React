import "./App.css";
import { useEffect, useState } from "react";
import Chiste from "./Chiste";

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=3";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        lectura.results.map((persona) => {
          setDatos((persActual)=>
            [...persActual,<div key={persona.email}>
              <div>
                {persona.name.first} {persona.name.last}
              </div>
              <div>
                <img src={persona.picture.large} alt="Persona" />
              </div>
            </div>]
          )
          console.log(persona.name.first)
        })
        // setNombre(`${lectura.results[0].name.first}
        //            ${lectura.results[0].name.last}`)
        // setImagen(`${lectura.results[0].picture.large}`)
      })
      .catch(() => console.log("mal"));
  }, []);

  return (
    <>
      <Chiste/>
      <br /><br /><br /><br />
      <h1>Ganadores: </h1>
      {datos}
    </>
  );
}

export default App;
