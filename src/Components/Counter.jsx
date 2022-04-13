import React from "react";
import { connect } from "react-redux";
import {
  increaseAction,
  decreaseAction,
} from "../Redux/actions/counterActions";

function Counter(props) {
  let { counter, increase, decrease } = props;
  return (
    <div>
      <button
        className="btn btn-success mx-3 justify-content-center align-items-center flex-column"
        onClick={increase}
        style={{ height: 20 }}
      >
        +
      </button>
      {counter}
      <button
        className="btn btn-danger mx-3 justify-content-center align-items-center flex-column"
        onClick={decrease}
        style={{ height: 20 }}
      >
        -
      </button>
    </div>
  );
}
let mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increaseAction),
    decrease: () => dispatch(decreaseAction),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
