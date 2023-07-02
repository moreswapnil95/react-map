import React from 'react';
import { Table } from 'react-bootstrap';

const TableComponent = ({data}) => {
  console.log(data);
  return (
    <div className='mt-5'>
      <h2 className='text-center text-success mb-4' ><u>List View Table</u></h2>

      <Table striped bordered hover className='listview w-75 mx-auto'>
      <thead>
        <tr>
          <th>City</th>
          <th>Location</th>
          <th>Project Name</th>
          <th>Coordinates</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((x,i)=>{
            return(
              <tr>
                <td>{x.city}</td>
                <td>{x.location}</td>
                <td>{x.name}</td>
                <td>{x.lat},{x.long}</td>
                
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    </div>
  )
}

export default TableComponent