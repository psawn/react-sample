import React from 'react';
import { useState } from 'react';

const Display = (props: any) => {
  return (
    <p>
      {props.text} : {props.count}
    </p>
  );
};

const Button = (props: any) => {
  return (
    <>
      <button onClick={props.onClick} className=''>{props.text}</button>
    </>
  );
};

const Test01 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseByOne = (stateName: number) => {
    switch (stateName) {
      case good:
        setGood(good + 1);
        break;
      case neutral:
        setNeutral(neutral + 1);
        break;
      case bad:
        setBad(bad + 1);
        break;
    }
  };

  return (
    <div>
      <h1>Exercise1-6</h1>
      <h3>give feedback</h3>
      <Button onClick={() => increaseByOne(good)} text={'good'}></Button>
      <Button onClick={() => increaseByOne(neutral)} text={'neutral'}></Button>
      <Button onClick={() => increaseByOne(bad)} text={'bad'}></Button>
      <p>statistics</p>
      <Display count={good} text={'good'}></Display>
      <Display count={neutral} text={'neutral'}></Display>
      <Display count={bad} text={'bad'}></Display>
    </div>
  );
};

export default Test01;
