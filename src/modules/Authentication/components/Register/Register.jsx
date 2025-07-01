import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { axiosInstance, USERS_URLS } from '../../../Services/urls';
import logo from '../../../../assets/images/logo.png';
import login_pic from '../../../../assets/images/Graphic Side.svg';
import { useForm } from 'react-hook-form';

export default function Register() {

const navigate  = useNavigate();
const [loading, setLoading] = useState(false);

const {register , formState: {errors}, handleSubmit , reset} =useForm();

const onSubmit = async (data)=>{

  setLoading(true)
  try
  {
    const response = await axiosInstance.post(USERS_URLS.REGISTER_PASSENGER ,data);
    toast.success('Registered successfully!')
    navigate('/login')
  }

  catch(err)
  {
  toast.error(err.response?.data?.message || 'Registration failed!')
  }
  finally{
    setLoading(false)
  }

}
  return (
    <>
<div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-white">
  <div className="row w-100 shadow-lg rounded overflow-hidden" style={{ maxWidth: '1140px' }}>

    {/* Left: Illustration (moved from right) */}
    <div className="d-none d-md-flex col-md-6 bg-light align-items-center justify-content-center">
      <img src={login_pic} alt="Illustration" className="img-fluid w-75" />
    </div>

    {/* Right: Form Section */}
    <div className="col-md-6 p-5">
      <div className="mb-4 d-flex align-items-center gap-2">
        <img src={logo} alt="logo" height="40" />
        <h1 className="h4 fw-bold text-dark mb-0">Wendo</h1>
      </div>

      <h2 className="h5 fw-semibold mb-2">Sign Up</h2>
      <p className="text-muted small mb-4">Create an account to get started.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 mb-3 text-start">
            <h6 className="form-label" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '28px' }}>
              First Name
            </h6>
            <input type="text" className="form-control" {...register('firstName', { required: 'First Name is required' })} />
            {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
          </div>

          <div className="col-md-6 mb-3 text-start">
            <h6 className="form-label" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '28px' }}>
              Last Name
            </h6>
            <input type="text" className="form-control" {...register('lastName', { required: 'Last Name is required' })} />
            {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
          </div>

          <div className="col-md-6 mb-3 text-start">
            <h6 className="form-label" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '28px' }}>
              Email
            </h6>
            <input type="email" className="form-control" {...register('email', { required: 'Email is required' })} />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          <div className="col-md-6 mb-3 text-start">
            <h6 className="form-label" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '28px' }}>
              Phone Number
            </h6>
            <input type="text" className="form-control" {...register('phoneNumber', { required: 'Phone Number is required' })} />
            {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber.message}</small>}
          </div>

          <div className="col-md-6 mb-3 text-start">
            <h6 className="form-label" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '28px' }}>
              Password
            </h6>
            <input type="password" className="form-control" {...register('password', { required: 'Password is required' })} />
            {errors.password && <small className="text-danger">{errors.password.message}</small>}
          </div>

          <div className="col-md-6 mb-3 text-start">
            <h6 className="form-label" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '28px' }}>
              Confirm Password
            </h6>
            <input type="password" className="form-control" {...register('confirmPassword', { required: 'Confirm Password is required' })} />
            {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword.message}</small>}
          </div>
        </div>

        <div className="form-check mb-3 text-start">
          <input className="form-check-input" type="checkbox" id="terms" {...register('terms', { required: 'You must agree to the terms' })} />
          <label className="form-check-label small text-muted" htmlFor="terms" style={{ fontFamily: 'Inter' }}>
            I agree with the terms of use
          </label>
          {errors.terms && <small className="text-danger d-block">{errors.terms.message}</small>}
        </div>

        <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#6768A7' }} disabled={loading}>
          {loading ? <span><i className="fa fa-spinner fa-spin me-2"></i> Signing up...</span> : 'Sign Up'}
        </button>
      </form>

      <div className="text-center my-3">
        <span className="text-muted small">Or sign up using</span>
      </div>

      <div className="d-flex justify-content-center gap-3 mb-3">
        <a href="#" className="btn btn-outline-secondary rounded-circle p-2">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="btn btn-outline-secondary rounded-circle p-2">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="btn btn-outline-secondary rounded-circle p-2">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="btn btn-outline-secondary rounded-circle p-2">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      <p className="text-center small text-muted">
        Already have an account?{' '}
        <a href="#" className="text-primary text-decoration-underline">Sign in</a>
      </p>
    </div>
  </div>
</div>


    </>
  ) 
}
