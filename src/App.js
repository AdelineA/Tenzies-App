import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }
  function rollDice() {
    setDice(allNewDice());
  }
  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <div className="bg-blue-900 box-border ml-36 p-10 mt-20 w-[50%] ">
      <div className="bg-blue-100 p-10 h-1/2 w-full">
        <div className="flex flex-wrap gap-4 ">{diceElements}</div>
        <button
          onClick={rollDice}
          className="bg-blue-600 text-xl text-white rounded-md font-semibold ml-36 px-3 py-2 mt-10"
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
}

export default App;
