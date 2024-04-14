import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>GitHub korisničko ime</Form.Label>
        <Form.Control
          type="text"
          placeholder="Unesite korisničko ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Potvrdi
      </Button>
    </Form>
  );
};

export default UsernameForm;
