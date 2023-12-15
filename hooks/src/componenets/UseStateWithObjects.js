import React, { useState } from "react";

function UseStateWithObjects() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
        />
        <input
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
        />
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default UseStateWithObjects;
