import React from "react";
import useWelcome from "./Hooks/useWelcome";

export default function Welcome() {
  const welcome = useWelcome();
  console.log(process.env.NODE_ENV);
  return (
    <>
      <h1 style={{ background: "red", color: "#fff" }}>{welcome}</h1>
      <h1 style={{ background: "yellow", color: "#fff" }}>{welcome}</h1>
    </>
  );
}
