import axios from "axios";
export default function usersAction() {
  let data = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return {
    type: "USERS-LIST",
    payload: data,
  };
}
