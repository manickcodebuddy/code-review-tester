import React, { FC } from "react";
interface TodoCardProps {
  children: string;
}
const TodoCard: FC<TodoCardProps> = ({ children }) => {
  return <div className="p-4 rounded border bg-gray-300">{children}</div>;
};

export default TodoCard;
