
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;


/*Rules are not followed*/
/*import React, { useState } from 'react';

const Counter = () => {
  if (someCondition) {
    const [count, setCount] = useState(0); // Violation: useState inside a condition
  }

  for (let i = 0; i < 5; i++) {
    const [count, setCount] = useState(0); // Violation: useState inside a loop
  }

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;*/
