export default function filterTodoData(todoData, searchQuery) {
  return todoData.filter((todo) => todo.title.includes(searchQuery));
}
