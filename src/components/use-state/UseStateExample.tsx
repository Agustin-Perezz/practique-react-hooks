/*
 - the state is the memory of the component
 - the state allows to us retain the data between renders and a setter function
 - the setter function allows us to update the state and tigger a re-render
 - we can pass a pure function as initial state, it will be called only once
 - example: const [todos, setTodos] = useState(createInitialTodos);
 - when we call setState, the updated value is accesible in the next render, not in the current.
*/

import { useState } from 'react';

export const UseStateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span data-cy="counter-title">Count is: {count}</span>
      <button
        data-cy="increment-button"
        className="ml-2 p-2 bg-slate-700 rounded-md hover:bg-slate-500"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};
