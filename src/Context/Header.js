import React, { useContext } from "react";
import { MyContext } from "./ContextDemo";

export default function Header() {
  const context = useContext(MyContext);

  const { theme } = context.data;

  const { setTheme } = context.action;

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleToggle}>Toggle</button>
    </header>
  );
}
