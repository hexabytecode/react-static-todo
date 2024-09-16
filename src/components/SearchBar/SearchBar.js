import "./SearchBar.css"; // Import search bar styles

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <input className="search-bar" type="text" placeholder="Search tasks..." />
    </div>
  );
}
