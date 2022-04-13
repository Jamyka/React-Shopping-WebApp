import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  increaseAction,
  decreaseAction,
} from "../Redux/actions/counterActions";
function MyNavbar(props) {
  let { counter, increase, decrease } = props;

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <NavLink className="m-3" to="/home">
              Home
            </NavLink>
            <NavLink className="m-3" to="/login">
              Login
            </NavLink>
            <NavLink className="m-3" to="/users">
              Users
            </NavLink>
            {/* <NavLink href="#">Profile</NavLink> */}
            <Button variant="outline-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span className="px-2">{counter}</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
