import React, { useEffect, useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function useWelcome() {
  const [text, setText] = useState("");
  const getRandom = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    const randomText = data[getRandomInt(0, data.length)].title;
    setText(randomText);
  };

  useEffect(() => {
    getRandom();
  }, []);

  return text;
}
