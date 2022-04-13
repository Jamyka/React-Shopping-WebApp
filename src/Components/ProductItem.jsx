import React, { useState } from "react";
import { connect } from "react-redux";
import {
  increaseAction,
  decreaseAction,
} from "../Redux/actions/counterActions";

function ProductItem({ index, product, increase, decrease }) {
  let [count, setConunt] = useState(0);

  return (
    <>
      <tr>
        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
          {index + 1}
        </td>
        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
          {product.title}
        </td>
        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
          <img
            src={product.imageUrl}
            alt="product imag"
            style={{ width: "100px" }}
          />
        </td>
        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
          {product.price}
        </td>
        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
          {product.quantity}
        </td>
        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
          <div>
            <button
              className="btn btn-success mx-3 justify-content-center align-items-center flex-column"
              onClick={() => {
                setConunt((count = count + 1));
                increase();
              }}
              style={{ height: 20 }}
            >
              +
            </button>
            {count}
            <button
              className="btn btn-danger mx-3 justify-content-center align-items-center flex-column"
              onClick={() => {
                if (count > 0) {
                  setConunt((count = count - 1));
                  decrease();
                } else {
                  setConunt(0);
                }
              }}
              style={{ height: 20 }}
            >
              -
            </button>
          </div>
        </td>
        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
          <button className="btn btn-success">Buy Now</button>
        </td>
      </tr>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
