import React from "react";
import Input from "./Input";

export default function Form() {
  return (
    <div>
      <Input type={"email"} label={"Email"} name={"email"} />
      <Input type={"number"} label={"Phone"} name={"phone"} />
    </div>
  );
}
