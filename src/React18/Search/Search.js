import React, { useState, useTransition, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";

export default function Search() {
  const [pending, startTransition] = useTransition();
  const [keyword, setKeyword] = useState("");

  const handleSearch = async (e) => {
    const keyword = e.target.value;
    const res = await fetch("http://localhost:3004/products?q=" + keyword);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <div>
      {/* <input
        type={"search"}
        name="keyword"
        placeholder="Từ khóa..."
        onChange={handleChangeValue}
      /> */}

      <DebounceInput
        element={"input"}
        type="search"
        debounceTimeout={1000}
        onChange={handleSearch}
        placeholder="Nhập từ khóa..."
      />
    </div>
  );
}
