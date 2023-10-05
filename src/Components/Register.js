import React, { useContext } from 'react'
import { DataContext } from '../Context.js/DataContext';

const Register = () => {
  const {handleSubmit, id, setId, name, setName,pass, setPass, email, setEmail ,phone, setPhone, country, setCountry,
    address, setAddress, showModal2, closeModal2, hanldeBack} = useContext(DataContext)

  return (
    <div>
    { showModal2 && (

<div className="modal fade show d-flex align-items-center justify-content-center " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header" style={{ height: '50px' }}>
      <h5 className="modal-title text-center">Register Now</h5>
      <button type="button" className="close" style={{ fontSize: '25px', background: 'black', color: 'white' }} onClick={closeModal2} aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body bg-dark shadow-lg ">
        <form className='container mt-5 mb-5' onSubmit={handleSubmit}>
          <div className='card'>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="UserName">UserName <span className='text-danger'>*</span></label>
                    <input value={id} onChange={(e)=>setId(e.target.value)} required type="text" className='form-control' />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name">Fullname <span className='text-danger'>*</span></label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} required type="text" className='form-control' />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="Email">Email <span className='text-danger'>*</span></label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" className='form-control' />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="Pass">Password <span className='text-danger'>*</span></label>
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} required type="password" className='form-control' />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="Phone">Phone <span className='text-danger'>*</span></label>
                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} required type="text" className='form-control' />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="Country">Country <span className='text-danger'>*</span></label>
                    <select  value={country} onChange={(e)=>setCountry(e.target.value)} required className='form-control'>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="Address">Address <span className='text-danger'></span></label>
                    <textarea value={address} onChange={(e)=>setAddress(e.target.value)} type="number" className='form-control'></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
            <button type='submit' className='btn btn-danger' onClick={hanldeBack}> Back</button>
              <button type='submit' className='btn btn-primary' > Register</button>
            </div>
          </div>
        </form>
     
    </div>
  </div>
</div>
</div>





      
      )}
    </div>
  );
}

export default Register