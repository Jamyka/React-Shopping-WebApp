export default function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "INCREASE") return { counter: state.counter + 1 };
  if (action.type === "DECREASE") return { counter: state.counter - 1 };

  return state;
}
