import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const {id} = useParams();
  const[values, setValues] = useState({
    firstName:'',
    lastName:'',
    phoneNumber:'',
    age:''
  })
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://64d9e02de947d30a260a6a16.mockapi.io/contacts/'+id)
    .then(res => {
      setValues(res.data);
    })
    .catch(err => console.log(err));
  }, [])

    const handleUpdate = (event) => {
      event.preventDefault()
      axios.put('https://64d9e02de947d30a260a6a16.mockapi.io/contacts/' +id, values)
      .then(res => {
        alert("Contact Updated");
        navigate('/')
      })
    }

  return(
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Edit Contact</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor='name'>First Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter First Name'
            value={values.firstName} onChange={e => setValues({...values, firstName: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor='name'>Last Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Last Name'
            value={values.lastName} onChange={e => setValues({...values, lastName: e.target.value})}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='name'>Phone Number :</label>
            <input type="number" name='phone' className='form-control' placeholder='Enter Phone Number'
            value={values.phoneNumber} onChange={e => setValues({...values, phoneNumber: e.target.value})}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='name'>Age:</label>
            <input type="number" name='name' className='form-control' placeholder='Enter Your Age'
            value={values.age} onChange={e => setValues({...values, age: e.target.value})}/>
          </div>
          <div className='mb-3'>
          <label htmlFor='name'>Image URL :</label>
            <input type='text'  name="file" className='form-control' placeholder="Enter Image URL" 
            value={values.imageUrl} onChange={e => setValues({...values, imageUrl: e.target.value})}/>
          </div>
          <button className='btn btn-success'>Update</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>

  )
}

export default Update;