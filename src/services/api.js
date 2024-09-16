import axios from "axios";

export default async function getTodoData() {
  try {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
}
