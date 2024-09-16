import useTable from "../../services/useTable.js";
import TodoTask from "../TodoTask/TodoTask.js";
import "./Table.css";

export default function Table({ searchQuery }) {
  const {
    currentTodos,
    filteredData,
    nextPage,
    prevPage,
    currentPage,
    indexOfLastTodo,
  } = useTable(searchQuery);

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
