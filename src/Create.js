import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import axios from "axios";

function Create() {
  const[values, setValues] = useState({
    firstName:'',
    lastName:'',
    phoneNumber:'',
    age:'',
    imageUrl:''
  })
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://64d9e02de947d30a260a6a16.mockapi.io/contacts/', values)
    .then(res => {
      console.log(res);
      navigate('/')
    })
    .catch(err => console.log(err));
  }

  return(
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Create New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label htmlFor='name'>First Name:</label>
          <input type='text' name='name' className='form-control' placeholder='Enter First Name'
          onChange={e => setValues({...values, firstName: e.target.value})}/>
        </div>
        <div className='mb-2'>
          <label htmlFor='name'>Last Name:</label>
          <input type='text' name='name' className='form-control' placeholder='Enter Last Name'
          onChange={e => setValues({...values, lastName: e.target.value})}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='name'>Phone Number :</label>
          <input type="number" name='phone' className='form-control' placeholder='Enter Phone Number'
          onChange={e => setValues({...values, phoneNumber: e.target.value})}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='name'>Age:</label>
          <input type="number" name='name' className='form-control' placeholder='Enter Your Age'
          onChange={e => setValues({...values, age: e.target.value})}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='name'>Image URL :</label>
          <input type = "text" name='file' className='form-control' placeholder='Enter Image URL'
          onChange={e => setValues({...values, imageUrl: e.target.value})}/>
        </div>
        <button className='btn btn-success'>Submit</button>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
      </div>
    </div>

  )
}

export default Create;