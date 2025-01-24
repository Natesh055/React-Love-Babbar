import React, { useState } from 'react'; // Add useState import

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p id="para">You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Counter;
