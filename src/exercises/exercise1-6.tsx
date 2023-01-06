import { useState } from 'react';

const DisplayRow = (props: any) => {
  return <p>{isNaN(props.count) ? 0 : props.count}</p>;
};

const getAverage = (good: number, neutral: number, bad: number) => {
  const average = good - bad;
  return average / (good + neutral + bad);
};

const getPositive = (good: number, neutral: number, bad: number) => {
  return good / (good + neutral + bad);
};

const Display = (props: any) => {
  const { good, neutral, bad } = props;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <h1>No feedback</h1>;
  }

  return (
    <>
      <table className={'table table-bordered'}>
        <colgroup>
          <col className="col-md-5" />
          <col className="col-md-7" />
        </colgroup>
        <tbody>
          <tr>
            <th>good</th>
            <th>
              <DisplayRow count={good}></DisplayRow>
            </th>
          </tr>
          <tr>
            <th>neutral</th>
            <th>
              <DisplayRow count={neutral}></DisplayRow>
            </th>
          </tr>
          <tr>
            <th>bad</th>
            <th>
              <DisplayRow count={bad}></DisplayRow>
            </th>
          </tr>
          <tr>
            <th>good</th>
            <th>
              <DisplayRow count={good}></DisplayRow>
            </th>
          </tr>
          <tr>
            <th>average</th>
            <th>
              <DisplayRow count={getAverage(good, neutral, bad)}></DisplayRow>
            </th>
          </tr>
          <tr>
            <th>positive</th>
            <th>
              <DisplayRow count={getPositive(good, neutral, bad)}></DisplayRow>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = (props: any) => {
  return (
    <button onClick={props.onClick} className={'rounded m-1'}>
      {props.text}
    </button>
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
    <div className={'p-3'}>
      <h1>Exercise1-6</h1>
      <h3>give feedback</h3>
      <Button onClick={() => increaseByOne(good)} text={'good'}></Button>
      <Button onClick={() => increaseByOne(neutral)} text={'neutral'}></Button>
      <Button onClick={() => increaseByOne(bad)} text={'bad'}></Button>
      <h3>statistics</h3>
      <Display good={good} neutral={neutral} bad={bad}></Display>
    </div>
  );
};

export default Test01;
