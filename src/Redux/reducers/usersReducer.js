export default function usersReducer(state = [], action) {
  if (action.type === "USERS-LIST") return action.payload;
  return state;
}
