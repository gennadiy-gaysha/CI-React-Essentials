import React, { useState, useEffect } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("count 1 effect");
    document.title = count;
  }, [count]);

  // React Strict Mode (see index.js) is a tool designed for highlighting potential problems in an application during development. It introduces additional checks and warnings to help developers catch common mistakes and improve the overall code quality.

  // In React Strict Mode, certain functions, including render methods and effects (such as those inside useEffect), are intentionally called twice. This behavior is not specific to your code but is a deliberate aspect of React Strict Mode.

  // The purpose of this double-invocation is to help developers identify side effects that may be causing unintended consequences or that are not pure. Running them twice in development mode can expose potential issues and make it easier to catch bugs early in the development process.

  useEffect(() => {
    console.log("create timer");
    const interval = setInterval(() => {
      console.log("interval executed");
      setTime((time) => time + 1);
    }, 1000);
    // Cleanup function to clear the interval when the component is unmounted or when dependencies change

    // "When a component unmounts, React automatically invokes any cleanup functions defined in the useEffect" is a general rule in React. It applies to all components that use the useEffect hook with a cleanup function.
    // When a React component mounts, the useEffect hook is called with its effect function.
    // If the effect function returns a cleanup function, React stores it for later use.
    // Unmounting:
    // When the component is unmounted (removed from the DOM), React automatically invokes the cleanup function (if one was returned by the effect function).
    // Dependency Changes:
    // If the useEffect has dependencies specified in the dependency array and any of those dependencies change, React will also invoke the cleanup function before re-running the effect.
    return () => {
      console.log("cleaning up");
      clearInterval(interval);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts

  // const [count2, setCount2] = useState(0);`
  // useEffect(() => {
  //   console.log("count 2 effect");
  //   document.title = count2;
  // }, [count2]);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment count ({count})
      </button>
      {/* <button onClick={() => setCount2((count2) => count2 + 1)}>
        Increment count ({count2})
      </button> */}
      <h2>Time is {time}</h2>
    </div>
  );
}

export default UseEffectCounter;
