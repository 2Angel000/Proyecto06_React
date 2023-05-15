import React, { useState, useEffect } from "react";

export default function Chiste() {
  const [chiste, setChiste] = useState();

  const otro = () => {
    const url = "https://v2.jokeapi.dev/joke/Any?lang=es";
    const peticion = fetch(url);

    peticion
      .then((datos) => datos.json())
      .then((lectura) =>
        setChiste(
          <div key={lectura.id}>
            <div>{lectura.setup}</div>
            <br />
            <br />
            <div>{lectura.joke}</div>
            <div>{lectura.delivery}</div>
          </div>
        )
      )
      .catch(console.log);
  };

  useEffect(() => {
    otro();
  }, []);

  return (
    <>
      <div>
        <h2>Chistes</h2>
        {chiste}
        <br /> <br />
        <button onClick={otro}> Otro Chiste</button>
        <br /> <br />
        <br /> <br />
      </div>
    </>
  );
}
