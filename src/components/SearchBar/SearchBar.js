import { useState } from "react";
import "./SearchBar.css"; // Import search bar styles

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="text"
        onChange={handleSearch}
        placeholder="Search tasks..."
      />
    </div>
  );
}
