import "./App.css";
import { useState } from "react";

import Axios from "axios";
export default function App() {
  const [value, setValue] = useState("");
  const fetchValue = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setValue(res.data[0].excuse);
      }
    );
  };
  return (
    <div className="App">
      <h1>Excuse App</h1>
      <h3>Generate an excuse for different occasion</h3>
      <button
        onClick={() => {
          fetchValue("office");
        }}
      >
        Office
      </button>

      <button
        onClick={() => {
          fetchValue("party");
        }}
      >
        Party
      </button>

      <button
        onClick={() => {
          fetchValue("family");
        }}
      >
        Family
      </button>

      <button
        onClick={() => {
          fetchValue("funny");
        }}
      >
        Funny
      </button>

      <button
        onClick={() => {
          fetchValue("gaming");
        }}
      >
        Gaming
      </button>

      <button
        onClick={() => {
          fetchValue("developers");
        }}
      >
        Developers
      </button>

      <p>{value}</p>

      <div>
      <footer>Designed by Mata O'seeker || 2023</footer>
      </div>
    </div>
  );
}
