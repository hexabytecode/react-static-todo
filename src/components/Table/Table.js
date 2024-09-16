import { useState, useEffect } from "react";
import getTodoData from "../../services/api.js";
import TodoTask from "../TodoTask/TodoTask.js";

export default function Table() {
  const [todoData, setTodoData] = useState([]);

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

  return (
    <table>
      <thead>
        <tr>
          <th>Completed</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {todoData.map((todo) => {
          return <TodoTask todo={todo} />;
        })}
      </tbody>
    </table>
  );
}
