import React from 'react';
import './App.css';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const Hello = (props: HelloType) => {
//   return (
//     <div>
//       <p>Hello world {props.name}</p>
//     </div>
//   );
// };

// type HelloType = {
//   name?: string;
//   age?: number;
// };

// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//       <Hello name="abc" age={12}></Hello>
//     </div>
//   );
// };

const Display = (props: any) => {
  return <h1>Count: {props.count}</h1>;
};

const Button = (props: any) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const History = (props: any) => {
  if (props.allClicks.length === 0) {
    return <h1>The app is used by pressing the buttons</h1>;
  }
  return <h1>Button press history: {props.allClicks.join(' ')}</h1>;
};

const LRDisplay = (props: any) => {
  return (
    <>
      <h1>Left: {props.lRCount.left}</h1>
      <h1>Right: {props.lRCount.right}</h1>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const [lRCount, lRSetCount] = useState({
    left: 0,
    right: 0,
  });

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([] as any[]);

  const increaseByOne = () => setCount(count + 1);

  const decreaseByOne = () => setCount(count - 1);

  const setToZero = () => setCount(0);

  const setToValue = (newValue: any) => () => {
    setCount(newValue);
  };

  const leftIncreaseByOne = () => {
    lRSetCount({ ...lRCount, left: lRCount.left + 1 });

    // unexpected result
    // lRCount.left ++;
    // lRSetCount(lRCount)
  };

  const rightIncreaseByOne = () => {
    lRSetCount({ ...lRCount, right: lRCount.right + 1 });
  };

  const handleLeftClick = () => {
    // console.log(allClicks.push('1'));
    allClicks.push('L');
    setAll(allClicks);
    setLeft(left + 1);
  };

  const handleRightClick= () => () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  const hello = (who: string) => () => {
    console.log('hello', who);
  };

  return (
    <>
      <Display count={count}></Display>
      <button onClick={setToValue(1000)}>thousand</button>
      <Button onClick={() => setToZero} text={'Reset'}></Button>
      <button onClick={() => decreaseByOne()}>-</button>
      <button onClick={() => increaseByOne()}>+</button>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <hr />
      <LRDisplay lRCount={lRCount}></LRDisplay>
      <button onClick={() => leftIncreaseByOne()}> Left + </button>
      <button onClick={() => rightIncreaseByOne()}> Right + </button>
      <hr />
      <History allClicks={allClicks}></History>
      <Button onClick={handleLeftClick} text={'Left'}></Button>
      <button onClick={handleRightClick()}>Right</button>
      <hr />
      <button onClick={hello('me')}>button</button>
    </>
  );
};

export default App;
