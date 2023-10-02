import React, { useContext, useState } from 'react'
import { DataContext } from '../Context.js/DataContext';

const AddItems = () => {

    const { closeModel, showModel, newName, setNewName, newEmail, setNewEmail, newPass, setNewPass , handleSubmit} = useContext(DataContext)
   
    const [show, setShow] = useState(false)
    const handlePass = () => {
      setShow(!show)
    };
    

    return (
        <div className='container mt-5 '>
            {showModel && (
                <div className="modal fade show d-flex align-items-center justify-content-center " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{ height: '50px' }}>
                                <h5 className="modal-title text-center">Add Items</h5>
                                <button type="button" style={{ fontSize: '25px', background: 'black', color: 'white' }} onClick={closeModel} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body bg-dark shadow-lg">
                                <div className="container mt-2 mb-2 border py-5 px-5 rounded-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3 shadow rounded-4">
                                            <input required value={newName} onChange={(e)=>setNewName(e.target.value)} className="form-control pr-5" type="text" name="name" placeholder="FullName" />
                                            <label htmlFor="username">Name</label>
                                        </div>
                                        <div className="form-floating mb-3 shadow rounded-4">
                                            <input required value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}  className="form-control pr-5" type="text" name="email" placeholder="Email" />
                                            <label htmlFor="username">Email</label>
                                        </div>
                                        <div className="d-flex form-floating shadow rounded-4">
                                            <input  required value={newPass} onChange={(e)=>setNewPass(e.target.value)}  className="form-control" style={{ paddingRight: '100px' }} type={show ? "text": "password"} name="pass" placeholder="Pass" />
                                            <label htmlFor="username">Password</label>
                                             <button type="button" className='btn btn-primary' onClick={handlePass}>  {!show ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</button>
                                        </div><br />
                                        <button className="form-control btn rounded-3 shadow btn-warning" type="submit" name="name"> ADD </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}



export default AddItems