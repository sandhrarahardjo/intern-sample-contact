import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [records, setRecords] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://64d9e02de947d30a260a6a16.mockapi.io/contacts/')
    .then(res => setRecords(res.data))
    .catch(err => console.log(err));
  }, [])
  
  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete this contact?");
    if(confirm) {
      axios.delete('https://64d9e02de947d30a260a6a16.mockapi.io/contacts/' +id)
      .then(res => {
        navigate("/");
      })
      .catch(err => console.log(err));
    }
  }

  return(
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>Contacts</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to='/create' className='btn btn-success'>Create Contact</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { records.length > 0 ? <>{
              records.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.firstName} {data.lastName}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.age}</td>
                  <td>
                    <Link to={`/read/${data.id}`} className='btn btn-sm btn-info me-2'>Details</Link>
                    <Link to={`/update/${data.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                    <button onClick={e => handleDelete(data.id)} className='btn btn-sm btn-danger'>Delete</button>
                  </td>
                </tr> 
              ))
              } </> :
                <tr className="no_record text-center">
                  <td>
                    <h4>No Data Found</h4>
                  </td>
                </tr> 
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;