import React, { useState } from "react";

function UseStateWithArray() {
  const [nums, setNums] = useState([1, 2, 3]);

  const addNumber = () => {
    setNums([...nums, nums.length + 1]);
  };

  const removeLast = () => {
    const filteredNums = nums.filter((num, i) => i !== nums.length - 1);
    setNums(filteredNums);
  };

  // const buggyPushNums = () => {
  //   nums.push(nums.length + 1);
  //   setNums(nums);
  //   console.log(nums);
  // };

  return (
    <div>
      <ul>
        <button onClick={addNumber}>Add number</button>
        <button onClick={removeLast}>Remove number</button>
        {/* <button onClick={buggyPushNums}>Push number</button> */}
        {nums.map((num) => {
          return <li key={num}>{num}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseStateWithArray;
