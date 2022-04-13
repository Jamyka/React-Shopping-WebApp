import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Login() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [phone, setPhoneNumber] = useState("");

  let [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
    phone: null,
  });

  let submitHandler = (e) => {
    e.preventDefault();

    let result = validateForm();
    if (result) {
      let values = { username, email, password, phone };
    } else {
    }
  };

  let validateForm = () => {
    let errors = {};
    //
    if (username.length <= 3 || !/^[A-Za-z]+$/.test(username)) {
      errors.username =
        "Username length must be greater than 3 chars and only chars";
    }
    if (email.length === 0) {
      errors.email = "Enter Valid Email";
    }
    if (password.length <= 3) {
      errors.password =
        "Password length must be greater than 4 Capital and Lower case and only chars";
    }
    // /^[0][1-9]\d{9}$|^[1-9]\d{9}$/.test(phone)
    if (phone.length < 11 || !/^[0-9]+$/.test(phone)) {
      errors.phone = "Phone Number length must be 11 digits and only digits";
    }

    setErrors(errors);

    return Object.keys(errors).length !== 0 ? false : true;
  };

  let getUsernameValue = (e) => {
    setUsername(e.target.value);
  };
  let getEmailValue = (e) => {
    setEmail(e.target.value);
  };
  let getPasswordValue = (e) => {
    setPassword(e.target.value);
  };
  let getPhoneValue = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Container className="m-5 p-5">
      <Form onSubmit={submitHandler}>
        <h2 className="text-center">Login</h2>

        <Form.Group
          className="mb-3 justify-content-start align-items-start d-flex flex-column"
          controlId="formBasicUserName"
        >
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => getUsernameValue(event)}
          />
          <Form.Text className="text-danger">{errors.username}</Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3 justify-content-start align-items-start d-flex flex-column"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => getEmailValue(event)}
          />
          <Form.Text className="text-danger">{errors.email}</Form.Text>
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          className="mt-3 justify-content-start align-items-start d-flex flex-column"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => getPasswordValue(event)}
          />
        </Form.Group>
        <Form.Text className="text-danger  justify-content-start align-items-start d-flex flex-column">
          {errors.password}
        </Form.Text>

        <Form.Group
          className="my-3 justify-content-start align-items-start d-flex flex-column"
          controlId="formBasicPhone"
        >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(event) => getPhoneValue(event)}
          />
          <Form.Text className="text-danger">{errors.phone}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
