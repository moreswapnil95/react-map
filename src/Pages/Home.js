import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {  

  const [token, setToken] = useState("");
  const [array ,setArray] =useState([]);

  // const navigate = useNavigate();

  useEffect(()=>{
    const sessionToken = JSON.parse(localStorage.getItem('loggedInUser'));
    setToken(sessionToken);

    const storedUsers = JSON.parse(localStorage.getItem('users'));
    setArray(storedUsers);
  },[])

  const [data,setData] = useState({
    city:"",
    location:"",
    name:"",
    lat:0,
    long:0
  })

  const handleInput=(e)=>{
    const {name,value} = e.target;

    setData({
      ...data,[name]:value
    });

  }
  // console.log(data);
  
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    const index = array.findIndex((item)=>item.email === token.email);
    // console.log(index);

    if(index !== -1){
      const updatedDashboard ={
        ...array[index],
        dashboard:[...array[index].dashboard,data]
      }
      const updateArray = [...array];
      updateArray[index] = updatedDashboard;
      setArray(updateArray);
      localStorage.setItem("users",JSON.stringify(updateArray));
      
      localStorage.setItem("dashboard",JSON.stringify(updateArray[index].dashboard));

      
    }
    navigate('/dashboard');
  }

  return (
   <>
    {
      !token ?
      <>
      <h1 className='text-center text-danger'>You Did Not logIn</h1>
      </>
      :
      <div className='container mt-4'>

        <div className="row justify-content-center box-shadow">

          <div className='col-lg-6 col-md-8 col-10 shadow p-3'>

          <h2 className='text-center text-primary' >FORM</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="select1">
          <Form.Label className='text-danger fw-bold'>City:-</Form.Label>
          <Form.Control
            as="select"
           name='city'
           value={data.city}
           onChange={handleInput}
           required
          >
            <option value="">-- Select an City --</option>
            <option value="Pune">Pune</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="select2" className='mt-2'>
          <Form.Label className='text-danger fw-bold'>Locations:-</Form.Label>
          <Form.Control
            as="select"
            name='location'
            value={data.location}
            onChange={handleInput}
            required
          >
            <option value="">-- Select an Location --</option>
            <option value="Khadki">Khadki</option>
            <option value="Khadadi">Khadadi</option>
            <option value="Pimple Saudagar">Pimple Saudagar</option>
            <option value="Hinjewadi">Hinjewadi</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="input1" className='mt-2'>
          <Form.Label className='text-danger fw-bold'>Project Name:-</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name='name'
            value={data.name}
            onChange={handleInput}
            required
          />
        </Form.Group>

        <Form.Group controlId="input2" className='mt-2'>
          <Form.Label className='text-danger fw-bold'>Latitude:-</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Latitude"
            name='lat'
            value={data.lat}
            onChange={handleInput}
            required
          />
        </Form.Group>

        <Form.Group controlId="input3" className='mt-2'>
          <Form.Label className='text-danger fw-bold'>Longitude:-</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter input 3"
            name='long'
            value={data.long}
            onChange={handleInput}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-2 w-100'>
          Submit
        </Button>
      </Form>

          </div>

        </div>

      </div>
    }
   </>
  )
}

export default Home