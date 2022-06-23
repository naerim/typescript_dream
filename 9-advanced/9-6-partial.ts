{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "row";
  };
  // 부분적으로 업데이트할때 Partial 타입 사용하기
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(todo, { priority: "row" });
  console.log(updated);
}
