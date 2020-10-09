import React, { useState } from 'react';

const MockContent = ({initialCount = 0, title = ''}) => {
  const [waffle, setWaffle] = useState(initialCount);
  return (
    <div>
      <h1>{`${title}'s Numer of Clicks: ${waffle}`}</h1>
      <button onClick={() => setWaffle(waffle + 1)}>Click Me</button>
    </div>
  );
};

export default MockContent;