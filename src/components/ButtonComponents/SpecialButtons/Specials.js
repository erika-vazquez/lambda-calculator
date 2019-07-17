import React from "react";
import {useState} from "react"; //+++ import for useState hook +++

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import {specials} from '../../../data';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <div className="specials">{specialState.map((specials)=>SpecialButton(specials))}</div>
    </div>
  );
};
//+++ export+++
export default Specials;