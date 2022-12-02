import React, { useId } from "react";

export default function Input({ label, name, type }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label> <br />
      <input type={type} id={id} name={name} placeholder={label} />
    </div>
  );
}
