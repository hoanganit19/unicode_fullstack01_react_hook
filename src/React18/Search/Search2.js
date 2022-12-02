import React, { useState, startTransition, useTransition } from "react";
import data from "./data.json";

const { customers } = data;

export default function Search2() {
  const [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleChangeValue = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };

  return (
    <div>
      <input
        type={"search"}
        placeholder="Từ khóa..."
        onChange={handleChangeValue}
      />
      <hr />
      {isPending ? (
        <p>Search...</p>
      ) : (
        customers.map((customer, index) => {
          //console.log(keyword);
          const highlight = {};
          if (keyword !== "") {
            if (customer.indexOf(keyword) >= 0) {
              highlight.background = "yellow";
            }
          }
          return (
            <p style={highlight} key={index}>
              {customer}
            </p>
          );
        })
      )}
    </div>
  );
}
