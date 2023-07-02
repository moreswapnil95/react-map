import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [register,setRegister] = useState({
    email:"",
    password:"",
    dashboard:[]
  });

  const navigate =useNavigate();

  const handleInput =(e)=>{
    const {name,value} = e.target;

    setRegister({
      ...register,[name]:value
    });
  }
  // console.log(register);

  const handleRegister=(e)=>{

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = storedUsers.some((user) => user.email === register.email);

    if(userExists){
      e.preventDefault();
      alert("User already exists");
    }
    else{
      storedUsers.push(register);
      localStorage.setItem('users',JSON.stringify(storedUsers));

      setRegister({
        email:"",
        password:"",
        dashboard:[]
      });

      alert("Registration Successfull");

      navigate("/login");
    }
  }



  return (
    
    <div className='container mt-4 '>

        <div className="row justify-content-center box-shadow">

            <div className="col-lg-6 col-md-8 col-10 shadow p-3">
                
            <h2 className='text-center'>SignUp</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="email" >
          <Form.Label>Email address:-</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className='mb-3'
            name='email'
            value={register.email}
            onChange={handleInput}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:-</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className='mb-3'
            name='password'
            value={register.password}
            onChange={handleInput}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='mb-3 w-100'>
          Register
        </Button>
      </Form>

      <p className='text-center'>
        Already have an account? <Link to="/login">Login</Link>.
      </p>

            </div>

        </div>


    </div>
  )
}

export default Register