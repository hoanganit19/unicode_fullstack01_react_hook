import React from "react";
import clsx from "clsx";

export default function TodoItem({
  name,
  isCompleted,
  onDeleteTodo,
  onCompletedTodo,
}) {
  return (
    <div className={clsx("todos--item d-flex", isCompleted && "completed")}>
      <input
        type={"checkbox"}
        onChange={onCompletedTodo}
        checked={isCompleted}
      />
      <span className="mx-2">{name}</span>
      <a href="#" onClick={onDeleteTodo}>
        Xóa
      </a>
    </div>
  );
}
