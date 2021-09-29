import "./styles.css";
import React, { useState } from "react";

const playerRecord = {
  Ronaldo: [
    { type: "International Trophies", noOfTrophies: "2" },
    { type: "Club Trophies", noOfTrophies: "32" },
    { type: "FIFA World cup", noOfTrophies: "4" }
  ],
  Messi: [
    { type: "International Trophies", noOfTrophies: "1" },
    { type: "Club Trophies", noOfTrophies: "35" },
    { type: "FIFA World cup", noOfTrophies: "3" }
  ],
  Iniesta: [
    { type: "International Trophies", noOfTrophies: "3" },
    { type: "Club Trophies", noOfTrophies: "34" },
    { type: "FIFA World cup", noOfTrophies: "3" }
  ],
  Alves: [
    { type: "International Trophies", noOfTrophies: "4" },
    { type: "Club Trophies", noOfTrophies: "38" },
    { type: "FIFA World cup", noOfTrophies: "3" }
  ]
};

export default function App() {
  const [playerName, setPlayerName] = useState("Ronaldo");
  function playerClickHandler(playerName) {
    setPlayerName(playerName);
  }

  return (
    <div className="App">
      <h1
        style={{
          padding: "3rem 2rem 0rem"
        }}
      >
        ⚽Football Players record
      </h1>
      <p
        style={{
          fontSize: "small"
        }}
      >
        Some famous footballers record. Select the player name to get started
      </p>

      <div>
        {Object.keys(playerRecord).map((playerName) => (
          <button
            onClick={() => playerClickHandler(playerName)}
            style={{
              cursor: "pointer",
              background: "#c4b7a6",
              borderRadius: "0.4rem",
              padding: "0.5rem  1rem",
              border: "1.2px solid black",
              margin: "1rem 0.4rem"
            }}
          >
            {playerName}
          </button>
        ))}
      </div>
      <hr />
      <div>
        {playerRecord[playerName].map((trophy) => (
          <li
            key={trophy.type}
            style={{
              width: "40%",
              maxWidth: "300px",
              textAlign: "center",
              listStyle: "none",
              padding: "1rem ",
              border: "solid 1px black",
              backgroundColor: "#e6e2d3",
              borderRadius: "0.3rem",
              // margin:"auto",
              margin: "1rem auto",
              marginTop: "2rem"
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "large"
              }}
            >
              {trophy.type}
            </div>
            <div>{trophy.noOfTrophies}</div>
          </li>
        ))}
      </div>
    </div>
  );
}
