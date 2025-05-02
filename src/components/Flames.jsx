import React from "react";
import { useState } from "react";
const Flames = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [ans, setAns] = useState("");
  const handlechange1 = (e) => {
    setValue1(e.target.value);
  };
  const handlechange2 = (e) => {
    setValue2(e.target.value);
  };
  const calculate = () => {
    let string1 = value1;
    let string2 = value2;
    let res1 = "";
    let res2 = "";
    for (let i = 0; i < string1.length; i++) {
      if (!string2.includes(string1[i])) {
        res1 = res1 + string1[i];
      }
    }
    for (let i = 0; i < string2.length; i++) {
      if (!string1.includes(string2[i])) {
        res2 = res2 + string2[i];
      }
    }
    let totalLength = res1.length + res2.length;
    let modLength = totalLength % 6;
    const map = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };
    setAns(map[modLength]);
  };
  const clear = () => {
    setValue1("");
    setValue2("");
    setAns("");
  };
  return (
    <div>
      <input
        type="text"
        data-testid="input1"
        name="name1"
        placeholder="Enter the first name"
        value={value1}
        onChange={handlechange1}
      />
      <input
        type="text"
        data-testid="input2"
        name="name2"
        placeholder="Enter the seciond name"
        value={value2}
        onChange={handlechange2}
      />
      <button data-testid="calculate_relationship" onClick={calculate}>
        calculate_relationship
      </button>
      <button data-testid="clear" onClick={clear}>
        clear
      </button>
      <h3 data-testid="answer">{ans}</h3>
    </div>
  );
};

export default Flames;
