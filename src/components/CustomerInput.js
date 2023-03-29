import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

const CustomerInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const onAdd = async () => {
    try {
      await db.collection("customer").add({
        custName: name,
        custEmail: email,
        custPhone: phone,
        custAddress: address,
      });
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(name, email, phone, address);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    navigate("/");
  };

  return (
    <Container>
      <h2>Add Customer</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name'
          />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Enter phone'
          />
        </Form.Group>

        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            as='textarea'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter address'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CustomerInput;
