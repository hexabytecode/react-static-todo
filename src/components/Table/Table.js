import { useState, useEffect } from "react";
import getTodoData from "../../services/api.js";
import TodoTask from "../TodoTask/TodoTask.js";
import filterTodoData from "../../services/helper.js";
import "./Table.css";

export default function Table({ searchQuery }) {
  const [todoData, setTodoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTodoData();
        setTodoData(data);
        setFilteredData(data);
      } catch (e) {
        alert(e);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = filterTodoData(todoData, searchQuery);
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchQuery, todoData]);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredData.slice(indexOfFirstTodo, indexOfLastTodo);

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="table-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th colSpan="2">Task List</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.length > 0 ? (
            currentTodos.map((todo) => <TodoTask key={todo.id} todo={todo} />)
          ) : (
            <TodoTask todo={null} />
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ⬅️
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastTodo >= filteredData.length}
        >
          ➡️
        </button>
      </div>
    </div>
  );
}
