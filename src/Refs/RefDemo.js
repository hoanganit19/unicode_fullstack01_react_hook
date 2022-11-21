import React, { useRef, useEffect } from "react";
import Input from "./Input";

export default function RefDemo() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    inputRef.current.style.border = "1px solid red";
  };

  return (
    <div>
      <Input ref={inputRef} name="An" />
      <button type="button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
