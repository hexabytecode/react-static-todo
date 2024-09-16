import { useState, useEffect } from "react";
import getTodoData from "../../services/api.js";
import TodoTask from "../TodoTask/TodoTask.js";
import "./Table.css";

export default function Table() {
  const [todoData, setTodoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTodoData();
        setTodoData(data);
      } catch (e) {
        alert(e);
      }
    }

    fetchData();
  }, []);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todoData.slice(indexOfFirstTodo, indexOfLastTodo);

  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);
  const prevPage = () =>
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));

  return (
    <div className="table-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th colSpan="2">Task List</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.map((todo) => (
            <TodoTask key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ⬅️
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastTodo >= todoData.length}
        >
          ➡️
        </button>
      </div>
    </div>
  );
}
