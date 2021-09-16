import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  const dramas = {
    thriller: [
      {
        name: "Taxi Driver (2021)",
        ratings: "9.8/10"
      },
      {
        name: "Mr Sunshine (2018)",
        ratings: "9/10"
      }
    ],
    romance: [
      {
        name: "Moon Lovers: Scarlet Heart Ryeo (2016)",
        ratings: "9.5/10"
      },
      {
        name: "True Beauty (2020)",
        ratings: "8/10"
      }
    ],
    comedy: [
      {
        name: "Eulachacha Waikiki (2018)",
        ratings: "8.5/10"
      },
      {
        name: "Strong woman Do Bong Soon (2017)",
        ratings: "8/10"
      }
    ]
  };

  var [dramaName, setDrama] = useState("thriller");

  function clickHandler(dramaName) {
    setDrama(dramaName);
  }

  console.log(Object.keys(dramas));
  return (
    <div className="App">
      <h1>🎭 myDramaList</h1>
      {Object.keys(dramas).map(function (genre) {
        return <button onClick={() => clickHandler(genre)}>{genre}</button>;
      })}
      <hr />
      <div>
        {dramas[dramaName].map((itemName) => {
          //console.log(itemName.name)
          return (
            <li>
              <span style={{ fontWeight: "bold" }}>{itemName.name}</span>
              <br />
              <span style={{ fontSize: "1rem" }}>{itemName.ratings}</span>
            </li>
          );
        })}
      </div>
    </div>
  );
}
