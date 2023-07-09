import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { useDispatch } from 'react-redux';
import { create } from '../action/userAction';
const CreateUser = ({ modelopened, setModelOpened }) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [domain, setDomain] = useState('');
    const dispatch= useDispatch()

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(create(first_name,last_name,email,gender,domain));
        setFirstName("") 
        setLastName("")
        setEmail("")
        setDomain("")
        setGender("") 
        setModelOpened(false);
       }
       
  return (
    <div>
      <Modal
        show={modelopened}
        onHide={() => {
          setModelOpened(false);
        }}
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Create User</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
        <input
          type="text"
          placeholder=" First Name"
          value={first_name}
          className="form-control"
          onChange={(e) => setFirstName(e.target.value)}
        />
        </div>

        <div className="mb-3">
         <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          className="form-control"
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="mb-3">
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Domain:
          <select value={domain} onChange={(e) => setDomain(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Finance</option>
            <option value="female">Marketing</option>
            <option value="other">Sales</option>
            <option value="other">Management</option>
            <option value="other">IT</option>
            <option value="other">UI Designing</option>
          </select>
        </label>
        </div> 
        <button type="submit" className="btn btn-primary">
               create user
              </button>
          </form> 
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CreateUser