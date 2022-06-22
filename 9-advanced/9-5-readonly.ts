{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = "jaja"; // 수정하지 못하게 해야함 -> readonly 사용
  }
}
