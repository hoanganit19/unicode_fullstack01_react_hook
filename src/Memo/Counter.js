import React, { useState, useCallback } from "react";
import Button from "./Button";
import Content from "./Content";
import useColor from "../Hooks/useColor";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [background] = useColor();
  let handleIncrement = () => {
    setCount((count) => count + 1);
    /*
    this.setState(prevState=>({ count: prevstate.count + 1}))
    */
  };

  handleIncrement = useCallback(handleIncrement, []);
  /*
  useCallback sẽ kiểm tra xem hàm đã được tạo trước đó hay chưa?
  - Nếu tạo rồi => Sử dụng hàm đã tạo trước đó
  - Nếu chưa tạo => Tạo mới hàm
  */

  return (
    <div style={{ background: background }}>
      <h1>Count: {count}</h1>
      {/* <Content count={count} /> */}
      <Button onIncrement={handleIncrement} />
    </div>
  );
}
