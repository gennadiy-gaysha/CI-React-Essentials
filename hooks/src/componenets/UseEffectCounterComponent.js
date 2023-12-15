import React, { useState } from "react";
import UseEffectCounter from "./UseEffectCounter.js";

function UseEffectCounterComponent() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(() => !display)}>Toggle display</button>
      {display && <UseEffectCounter />}
    </div>
  );
}

export default UseEffectCounterComponent;
