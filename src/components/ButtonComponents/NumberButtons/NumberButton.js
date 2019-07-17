import React from "react";
import {useState} from "react"; //+++ import for useState hook +++


const NumberButton = (numbers) => {
  const [numButtonState, setButtonState] = useState(0); //

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={()=>console.log(numbers)}>{numbers}</button>
    </>
  );
};
export default NumberButton;