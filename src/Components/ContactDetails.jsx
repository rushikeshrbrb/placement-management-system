import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Alert } from 'react-bootstrap';
import './contactdetails.css';

export default function ContactDetails() {
  const [contacts, setContacts] = useState([]);
  const [email, setEmail] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Fetch all contacts when the component mounts
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8090/getAllContacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        console.error('Failed to fetch contacts');
      }
    } catch (error) {
      console.error('Error fetching contacts', error);
    }
  };

  const fetchContactByEmail = async () => {
    try {
      const response = await fetch(`http://localhost:8090/contactbyemail/${email}`);
      if (response.ok) {
        const data = await response.json();
        setContacts(data ? [data] : []);
        setNotFound(!data); // Set notFound to true if data is not present
      } else {
        console.error('Failed to fetch contact by email');
        setNotFound(true); // Set notFound to true if there is an error
      }
    } catch (error) {
      console.error('Error fetching contact by email', error);
      setNotFound(true); // Set notFound to true if there is an error
    }
  };
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setNotFound(false); // Reset notFound when the email changes
  };

  return (
    <Container className='head123'>
      <h1>Contact Us Details Below:: </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email address :</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Button variant="primary" className="mb-5" onClick={fetchContactByEmail}>
          Fetch Contact by Email
        </Button>
      </Form>

      {notFound && <Alert variant="warning">Email not found</Alert>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Contact ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.contact_id}>
              <td>{contact.contact_id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
