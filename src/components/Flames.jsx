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
    let totalLength = 0;
    const hash_map1 = new Map();
    const hash_map2 = new Map();

    for (let i = 0; i < value1.length; i++) {
      if (!hash_map1.has(value1[i])) {
        hash_map1.set(value1[i], 0);
      }
      hash_map1.set(value1[i], hash_map1.get(value1[i]) + 1);
    }

    for (let i = 0; i < value2.length; i++) {
      if (!hash_map2.has(value2[i])) {
        hash_map2.set(value2[i], 0);
      }
      hash_map2.set(value2[i], hash_map2.get(value2[i]) + 1);
    }
    let arr1 = value1.split("");
    let arr2 = value2.split("");
    let arr = arr1.concat(arr2);
    let hash_set = new Set(arr);
    for (let key of hash_set) {
      if (hash_map1.has(key) && hash_map2.has(key)) {
        totalLength += Math.abs(hash_map1.get(key) - hash_map2.get(key));
      } else if (hash_map1.has(key)) {
        totalLength += hash_map1.get(key);
      } else {
        totalLength += hash_map2.get(key);
      }
    }

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
        placeholder="Enter the second name"
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
