import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const Login = () => {

  const [login,setLogin] = useState({
    email:"",
    password:""
  });

  const handleInput=(e)=>{
    const {name,value} = e.target;

    setLogin({
      ...login,
      [name]:value
    })
  }

  const navigate = useNavigate();

  const handleLogin =(e)=>{

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers.find(
      (storedUser)=> storedUser.email === login.email
    );

    if(user){
      if(user.password === login.password){

      localStorage.setItem('loggedInUser',JSON.stringify(user));
      localStorage.setItem('dashboard',JSON.stringify(user.dashboard));
      // window.location.reload();
      setLogin({
        email:"",
        password:""
      })

      navigate('/');
      }
      else{
        e.preventDefault();
        alert("Invalid Password");
      }
    }
    else{
      // e.preventDefault();
      alert("Email not exists Please Register");
      navigate('/register');
    }
  }



  return (
    <div className='container mt-4 '>

        <div className="row justify-content-center box-shadow">

            <div className="col-lg-6 col-md-8 col-10 shadow p-3">
                
            <h2 className='text-center'>Login</h2>
      <Form className='' onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>Email address:-</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className='mb-3'
            name='email'
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
            onChange={handleInput}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='w-100 '>
          Login
        </Button>
      </Form>

      <p className='text-center m-0'>OR</p>

      <p className='d-lg-flex'>
      <GoogleLoginButton className='w-lg-50 '/>
      <FacebookLoginButton className='w-lg-50'/>
      </p>

      <p className='text-center'> 
        Not registered yet?{' '}
        <Link to={'/register'}>
          Create an account
        </Link>
        .
      </p>

            </div>

        </div>


    </div>

    
  )
}

export default Login