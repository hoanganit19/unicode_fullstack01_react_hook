import React, { memo } from "react";

function Button({ onIncrement }) {
  console.log("re-render");
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

export default memo(Button);
