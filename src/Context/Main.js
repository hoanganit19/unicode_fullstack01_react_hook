import React, { useContext } from "react";
import Header from "./Header";
import ChildCom from "./ChildCom";
import "./Main.css";
import { MyContext } from "./ContextDemo";
import clsx from "clsx";

export default function Main() {
  const context = useContext(MyContext);

  const { theme } = context.data;

  return (
    <div className={clsx("main", "theme-" + theme)}>
      <div className="container">
        <Header />
        <ChildCom />
      </div>
    </div>
  );
}
