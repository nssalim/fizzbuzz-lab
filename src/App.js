import {useState, useEffect} from "react";
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const [output, setOutput] = useState(0);
  const [guess, setGuess] = useState(0);

  const increment = (event) => {
    setNumber(number + 1);
  }

  const newGuess = (event) => {
    setGuess(event.target.value);
  }

  useEffect(()=>{
      if (number % 3 === 0 && number % 5 === 0){
        setOutput("fizzbuzz")
      }
      else if (number % 3 === 0){
        setOutput("fizz");
      }
      else if (number % 5 === 0){
        setOutput("buzz");
      }
      else {
        setOutput("Nothing to see here!")
      }

  }, [number]);

  return (
    <>
      <h1>Fizzbuzz game</h1>
      <p>{number}</p>
      <p>Output: {output}</p>
      <button onClick={increment}>+</button>

      <input type="text" placeholder="Your guess" value={guess} />
      <button type="submit" onClick={newGuess}>Check</button>
    </>
  );
}

export default App;
