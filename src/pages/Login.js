import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { getColors } from '../utils/Colors';

const Login = () => {
  const [isChecked, setIsChecked] = useState(true);
  let color = getColors();

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <Form>
              <div className="form-outline mb-4">
                <input 
                  type="email" 
                  placeholder='Email address' 
                  className="form-control form-control-lg" 
                  style={{ border:`1px solid ${color.smoke}` }}
                />
              </div>

              <div className="form-outline mb-4">
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="form-control form-control-lg" 
                  style={{ border:`1px solid ${color.smoke}` }}
                />
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" defaultChecked={isChecked} />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                </div>
                <a href="#!" style={{textDecoration:'none'}}>Forgot password?</a>
              </div>

              {/* <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign in</button> */}
              <a href='/dashboard' className='btn btn-primary btn-lg btn-block w-100'>Sign in</a>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a className="btn btn-primary btn-lg btn-block w-100 mb-2" style={{backgroundColor:'#3b5998'}} href="#!" role="button">
                <FontAwesomeIcon icon={faFacebook} /> &nbsp; Continue with Facebook
              </a>

              <a className="btn btn-primary btn-lg btn-block w-100" style={{backgroundColor:'#55acee'}} href="#!" role="button">
                <FontAwesomeIcon icon={faTwitter} /> &nbsp; Continue with Twitter
              </a>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Login;