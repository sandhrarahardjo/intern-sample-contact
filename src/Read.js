import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Read(){
  const [records, setRecords] = useState([])
  const {id} = useParams();
  useEffect(() => {
    axios.get('https://64d9e02de947d30a260a6a16.mockapi.io/contacts/' + id)
    .then(res => setRecords(res.data))
    .catch(err => console.log(err));
  }, [])
  
  return(
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Contact Details</h3>
        <div className='mb-2'>
          <strong>Name : {records.firstName} {records.lastName}</strong>
        </div>
        <div className='mb-2'>
          <strong>Phone Number : {records.phoneNumber}</strong>
        </div>
        <div className='mb-3'>
          <strong>Age : {records.age}</strong>
        </div>
        <div>
        <img src={records.imageUrl} width='50%' alt='picture' />
        </div>
        <Link to ={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to ="/" className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>
  )
}

export default Read;