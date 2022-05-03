import React, {useState} from 'react';  
import Form from 'react-bootstrap/Form';  
import Container from 'react-bootstrap/Container';  
import Button from 'react-bootstrap/Button';  
import { useNavigate } from 'react-router-dom';

const StudentRegistration = (props) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  
  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstName(firstname);
  };
  
  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastName(lastname);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const studentSignup = () => {
    props.studentSignup({ 
      username: username, 
      email: email, 
      first_name:firstname, 
      last_name:lastname, 
      password: password });
      let path = "/student/feed"; 
      navigate(path);
  };
  return (
    <Container>
      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={onChangeUsername}
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={onChangeEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fisrt Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Fisrt Name"
            value={firstname}
            onChange={onChangeFirstname}
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={lastname}
            onChange={onChangeLastname}
          />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={onChangePassword}
          />
        </Form.Group>
        <Button variant="primary" onClick={studentSignup}>
          Register
        </Button>
      </Form>
    </Container>
  );
};
export default  StudentRegistration;  
