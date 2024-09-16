export default function TodoTask({ todo: { title, completed } }) {
  return (
    <tr>
      <td>{completed ? "✅" : "☑️"}</td>
      <td>{title}</td>
    </tr>
  );
}
