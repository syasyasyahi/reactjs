import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Form, FormLabel, FormControl, FormGroup } from "react-bootstrap";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        navigate ("/user");
      } 
    } catch (error) {
       setError(error.response.data.message || "Login Failed");
      console.log(error.error);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: "25rem", padding: "20px" }}>
        <h3 className="text-center mb-3">Login Form</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              placeholder="Insert your Email"
              required
              onChange={function (e) {
                setEmail(e.target.value);
              }}
            ></FormControl>
          </Form.Group>
          <FormGroup className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Insert your password"
              required
              onChange={function (e) {
                setPassword(e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};
export default LoginPage;
