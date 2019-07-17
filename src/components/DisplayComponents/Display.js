import React from "react";
import NumberButton from '../ButtonComponents/NumberButtons/NumberButton';
import Numbers from "../ButtonComponents/NumberButtons/Numbers";

const Display = () => {
  return <div>
  {/* Display any props data here */}
  <div className='display'>{Numbers.numberState}</div>
  </div>;
};

export default Display;