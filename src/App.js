import SearchBar from "./components/SearchBar/SearchBar";
import Table from "./components/Table/Table";
import "./App.css"; // Import global styles

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1 className="app-title">React Static Todo</h1>
      </header>
      <SearchBar />
      <Table />
    </div>
  );
}
