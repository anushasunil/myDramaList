import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  const dramas = {
    thriller: [
      {
        name: "Taxi Driver (2021)",
        description:
          "Based on real crimes cases, Rainbow Taxi Company provides revenge-seeking services to the people who lost their loved ones as victims to horrendous crimes. ",
        ratings: "⭐9.8/10"
      },
      {
        name: "Sky Castle (2018)",
        description:
          "The story revolves around 4 women living in luxurious residential complex named Sky Castle, potraying the jealousy,egoism and betrayal among themselves under the mask, as they compete to get their children accepted in Seoul National University by 'any' means.",
        ratings: "⭐9/10"
      },
      {
        name: "Kingdom (2019)",
        description:
          "The prince is kept in dark about his highness' whereabout, his investigation led him to a mysterious plague which resurrects the dead.He fights his way to unveil the truth behind this brutality.",
        ratings: "⭐9/10"
      }
    ],
    romance: [
      {
        name: "When My Love Blooms (2020)",
        description:
          "Yoon Ji Soo and Han Jae Hyeon accidently reunite after 26 years, as they take us to a rollercoaster ride of emotions, the drama beautifully blends their memories of being each others interests in their college days with the present.",
        ratings: "⭐10/10"
      },
      {
        name: "Moon Lovers: Scarlet Heart Ryeo (2016)",
        description:
          "Go Ha jin, who was at the rock bottom of her life, travels 1000 years back in Goryeo dynasty, gets entangled in the brutality of royal kingdom.",
        ratings: "⭐9.5/10"
      },
      {
        name: "True Beauty (2020)",
        description:
          "Based on the webtoon with same title, Im Joo Kyung is a high-schooler, bullied because of her looks hides this past under her makeup skills as no one could figure out her secret from the after-makeup results",
        ratings: "⭐8/10"
      }
    ],
    comedy: [
      {
        name: "Eulachacha Waikiki (2018)",
        description:
          "If you are super bored in life, give it a watch. You'll die laughing. The drama revolves around 'daily' life incident of 3 friends living together, running a not-so-success guesthouse.",
        ratings: "⭐8.5/10"
      },
      {
        name: "Strong woman Do Bong Soon (2017)",
        description:
          "Better known for breaking stereotypes of all romance-themed kdramas. Do Bong Soon was born with superpowers and she's hired by a CEO, to be his bodyguard",
        ratings: "⭐8/10"
      },
      {
        name: "Weightlifting fairy Kim Bok Joo(2017)",
        description:
          "Drama revolves around rookie weightlifter Kim Bok Joo and her friends at National Sports Academy",
        ratings: "⭐8/10"
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
              <span style={{ fontSize: "1rem" }}>{itemName.description}</span>
              <br />
              <span style={{ fontSize: "1rem" }}>{itemName.ratings}</span>
            </li>
          );
        })}
      </div>
    </div>
  );
}
