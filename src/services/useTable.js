import { useState, useEffect } from "react";
import filterTodoData from "./helper";
import getTodoData from "./api";

export default function useTable(searchQuery) {
  const [todoData, setTodoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredData.slice(indexOfFirstTodo, indexOfLastTodo);

  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  function prevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }
  
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

  return {
    currentTodos,
    filteredData,
    nextPage,
    prevPage,
    currentPage,
    indexOfLastTodo,
  };
}
