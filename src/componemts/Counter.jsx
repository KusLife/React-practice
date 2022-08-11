import React, { useState } from 'react';
function Counter() {
  let [cuonter, setCounter] = useState(0);
  let [value, setValue] = useState('Some text');

  function incriment() {
    setCounter(() => (cuonter += 1));
  }
  function dicriment() {
    setCounter(() => (cuonter -= 1));
  }

  return (
    <div className="Counter">
      <h1>{cuonter}</h1>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={incriment}>Incriment</button>
      <button onClick={dicriment}>Dicriment</button>
    </div>
  );
}



export default Counter;
