import React from 'react'

const Login = () => {
  return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header text-bg-danger text-center fw-bolder">Login to your account</div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control form  text-decoration-none" id="username"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <button type="submit" className="btn btn-danger my-3">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;