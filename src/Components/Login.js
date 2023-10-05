import React, { useContext } from 'react';
import { DataContext } from '../Context.js/DataContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const { username, usernameupdate, password, passwordupdate, ProceedLogin, closeModal, showModal, handleNewUser } = useContext(DataContext);

  return (
    <div className='container'>
      {showModal && (

        <div
          className="modal fade show d-flex align-items-center justify-content-center "
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ height: '50px' }}>
                <h5 className="modal-title text-center">Login Now</h5>
                <button
                  type="button"
                  className="close"
                  style={{ fontSize: '25px', background: 'black', color: 'white' }}
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body bg-dark shadow-lg">
                    <form onSubmit={ProceedLogin} className="container">
                      <div className="card">
                        <div className="card-header">
                          <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                          <div className="form-group">
                            <label>User Name <span className="text-danger">*</span></label>
                            <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                          </div>
                          <div className="form-group">
                            <label>Password <span className="text-danger">*</span></label>
                            <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                          </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                          <Link className="btn btn-success" onClick={handleNewUser}>New User</Link>
                          <button type="submit" className="btn btn-primary" >Login</button>
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
};

export default Login;
