import "./styles.css";

import React, { useCallback, useState } from "react";
// useCallback - I am going to wrap a function and cause the rerender of the child component only if there is a changed in the passed state variable to the child component
// useCallback(fn, [dependency array])
// Memoize this fn whatever is passed to me 
// I will not reconstruct this function again and again
// instead I will keep the original with me so that 
// the child retriggers don't happen
// I will change the reference only if the dependecy array changes
export default function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} onClick={incrementCount} />
    </div>
  );
}
// but here React.memo is not working because the function is getting recreated again and again
// so we need to use useCallback
// useCallback(fn, [dependency array])
// prevProps currentProps
// reference of it has changed from the prev reference
// Retrigger child component also
// prevProps != currProps
// memo(fn){
// if(prevProps != currProps){
//   re-render
// }

const ChildComponent = React.memo(function ChildComponent({ count, onClick }) {
  console.log("child component is rendering");
  return (
    <div>
      <h2>This is a child component.</h2>
      <button onClick={onClick}>Increment</button>
      <h4>Count: {count}</h4>
    </div>
  );
});

// React.memo - I am going to wrap a component and cause the rerender of the child component only if there is a changed in the passed state variable to the child component
// React.memo(component)
