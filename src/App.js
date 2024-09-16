import SearchBar from "./components/SearchBar/SearchBar";
import Table from "./components/Table/Table";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(q) {
    setSearchQuery(q);
  }

  return (
    <div className="app-container">
      <header>
        <h1 className="app-title">React Static Todo</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <Table searchQuery={searchQuery} />
    </div>
  );
}
