import React, { useContext, useState } from 'react'
import logo from '../../../../assets/images/logo.png';
import login_pic from '../../../../assets/images/Graphic Side.svg';
import Google from '../../../../assets/images/Socail Links.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../context/AuthContext';
import { axiosInstance, USERS_URLS } from '../../../Services/urls';
import { toast } from 'react-toastify';
import { MOBILE_VALIDATION, PASSWORD_VALIDTION } from '../../../Services/Validation';

export default function Login() {

const navigate = useNavigate();
const {saveLoginData} = useContext(AuthContext);
const [loading, setLoading] = useState(false);

const {register , formState: {errors}, handleSubmit , reset} =useForm ();


const onSubmit = async (data)=>
{

  try{
    setLoading(true);
    const response = await axiosInstance.post(USERS_URLS.LOGIN , data);
    toast.success('Login successful!');
    reset()
    navigate('/dashboard');

  }

  catch (err) {
  console.log('Login error:', err);

  if (err.response) {
    
    toast.error(err.response.data?.message || 'Login failed!');
  } else if (err.request) {
    
    toast.error('Cannot connect to the server. Please try again later.');
  } else {
    
    toast.error('Something went wrong. Please try again.');
  }
}

  finally
  {
    setLoading(false)
  }
}


  return (
    <>

<div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-white">
  <div className="row w-100 shadow-lg rounded overflow-hidden" style={{ maxWidth: '1140px' }}>
    
    <div className="col-md-6 p-5">
      <div className="mb-4 d-flex align-items-center gap-2">
        <img src={logo} alt="logo" height="40" />
        <h1 className="h4 fw-bold text-dark mb-0">Wendo</h1>
      </div>

      <h2 className="h5 fw-semibold mb-2">Sign In</h2>
      <p className="text-muted small mb-4">Sign in to stay connected.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 text-start">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="+201234567890"
            {...register('phoneNumber' , MOBILE_VALIDATION)}
          />
        </div>
              {errors.phoneNumber && (
              <small className="text-danger">{errors.phoneNumber.message}</small>
              )}      
        <div className="mb-3 text-start">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="********"
            {...register('password' ,PASSWORD_VALIDTION)}
          />
        </div>
        {errors.password && (
          <small className="text-danger">{errors.password.message}</small>
        )}

        <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#6768A7' }} disabled={loading}>
          {
            loading ? (
              <span>
                <i className="fa fa-spinner fa-spin me-2"></i> Sign in...
              </span>
            ): (
              'Sign in'
            )
          }
        </button>
      </form>

      <div className="text-center my-3 text-muted small">or sign in with other accounts?</div>

      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-outline-secondary rounded-circle p-2">
          <img src={Google} alt="Google" width="20" height="20" />
        </button>
      </div>

      <p className="text-center small text-muted">
        Don’t have an account?{" "}
        <Link to="/register" className="text-primary text-decoration-underline">
          Click here to sign up.
        </Link>
      </p>
    </div>

    <div className="d-none d-md-flex col-md-6 bg-light align-items-center justify-content-center">
      <img src={login_pic} alt="Illustration" className="img-fluid w-75" />
    </div>
  </div>
</div>

    </>
  )
}
