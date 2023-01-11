import { useState } from 'react';

const Button = (props: any) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Test02 = (props: any) => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(1);

  const handleClick = () => {
    setSelected(selected + 1);
  };

  const showAnecdotes = () => {
    const arr = [];

    for (let i = 0; i < selected; i++) {
      arr.push(anecdotes[i]);
    }

    return arr.map((el, index) => <div key={index}>{el}</div>);
  };

  return (
    <>
      {showAnecdotes()}
      <Button onClick={() => handleClick()} text={'next'}></Button>
    </>
  );
};

export default Test02;
