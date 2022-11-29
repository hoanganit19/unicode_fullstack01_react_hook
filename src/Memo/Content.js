import React, { memo } from "react";

function Content() {
  console.log("re-render");
  return <div>Content</div>;
}

export default memo(Content); //dựa vào props
