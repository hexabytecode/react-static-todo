export default function TodoTask({ todo }) {
  if (!todo) {
    return (
      <tr>
        <td colSpan="2">No tasks available</td>
      </tr>
    );
  }

  const { title, completed } = todo;

  return (
    <tr>
      <td>{completed ? "✅" : "☑️"}</td>
      <td>{title}</td>
    </tr>
  );
}
