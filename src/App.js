import "./App.css";
import { useState } from "react";

const unshuffled = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const shuffled = unshuffled
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

function App() {
  const [selected, addToSelected] = useState([]);

  return (
    <div className="App">
      <div className="Box-container">
        {shuffled.map((k) => {
          return (
            <div
              className={`Box ${selected.includes(k) && "Box-selected"}`}
              key={k}
              onClick={() => addToSelected([...selected, k])}
            >
              {k}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
