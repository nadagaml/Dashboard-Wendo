import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosInstance, USERS_URLS } from '../../../Services/urls';
import logo from '../../../../assets/images/logo.png';
import login_pic from '../../../../assets/images/Graphic Side.svg';
import Google from '../../../../assets/images/Socail Links.png';
import facebook from '../../../../assets/images/Facebook.png'
import insta from '../../../../assets/images/Instagram.png'
import Linkedin from '../../../../assets/images/Linkedin.png'
import { useForm } from 'react-hook-form';
import { MOBILE_VALIDATION, PASSWORD_VALIDTION } from '../../../Services/Validation';

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(USERS_URLS.REGISTER_PASSENGER, data);
      toast.success('Registered successfully!');
      reset();
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center bg-white" style={{ minHeight: '85vh' }}>
      <div className="row w-100 shadow-lg rounded overflow-hidden" style={{ maxWidth: '1320px' }}>
        <div className="d-none d-md-flex col-md-6 bg-light align-items-center justify-content-center">
          <img src={login_pic} alt="Illustration" className="img-fluid w-75" />
        </div>

        <div className="col-md-6 p-5">
          <div className="mb-4 d-flex align-items-center gap-2">
            <img src={logo} alt="logo" height="40" />
            <h1 className="h4 fw-bold text-dark mb-0">Wendo</h1>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="h5 fw-semibold mb-2">Sign Up</h2>
            <p className="text-muted small mb-4" style={{color : '#8A92A6'}}>Create an account to get started.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 mb-3 text-start">
                <label className="form-label" style={{ color: '#8A92A6',  fontWeight: 400, fontSize: '16px', lineHeight: '175%' }}>First Name</label>
                <input type="text" className="form-control" {...register('firstName', { required: 'First Name is required' })} />
                {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
              </div>

              <div className="col-md-6 mb-3 text-start">
                <label className="form-label" style={{ color: '#8A92A6',  fontWeight: 400, fontSize: '16px', lineHeight: '175%' }}>Last Name</label>
                <input type="text" className="form-control" {...register('lastName', { required: 'Last Name is required' })} />
                {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
              </div>

              <div className="col-md-6 mb-3 text-start">
                <label className="form-label" style={{ color: '#8A92A6',  fontWeight: 400, fontSize: '16px', lineHeight: '175%' }}>Email</label>
                <input type="email" className="form-control" {...register('email', { required: 'Email is required' })} />
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
              </div>

              <div className="col-md-6 mb-3 text-start">
                <label className="form-label" style={{ color: '#8A92A6',  fontWeight: 400, fontSize: '16px', lineHeight: '175%' }}>Phone Number</label>
                <input type="text" className="form-control" {...register('phoneNumber', MOBILE_VALIDATION)} />
                {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber.message}</small>}
              </div>

              <div className="col-md-6 mb-3 text-start">
                <label className="form-label" style={{ color: '#8A92A6',  fontWeight: 400, fontSize: '16px', lineHeight: '175%' }}>Password</label>
                <input type="password" className="form-control" {...register('password', PASSWORD_VALIDTION)} />
                {errors.password && <small className="text-danger">{errors.password.message}</small>}
              </div>

              <div className="col-md-6 mb-3 text-start">
                <label className="form-label" style={{ color: '#8A92A6',  fontWeight: 400, fontSize: '16px', lineHeight: '175%' }}>Confirm Password</label>
                <input type="password" className="form-control" {...register('confirmPassword', { required: 'Confirm Password is required' })} />
                {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword.message}</small>}
              </div>
            </div>

            <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#3A57E8' }} disabled={loading}>
              {loading ? <span><i className="fa fa-spinner fa-spin me-2"></i> Signing up...</span> : 'Sign Up'}
            </button>
          </form>

          <div className="text-center my-3 text-muted small">or sign up with other accounts?</div>

          <div className="d-flex justify-content-center mb-3">
            <button className="btn  rounded-circle me-2 p-0">
              <img src={Google} alt="Google" width="20" height="20" />
            </button>

            <button className="btn  rounded-circle me-2 p-0">
              <img src={facebook} alt="facebook" width="20" height="20" />
            </button>

            <button className="btn  rounded-circle me-2 p-0">
              <img src={insta} alt="instgram" width="20" height="20" />
            </button>

            <button className="btn  rounded-circle me-2 p-0">
              <img src={Linkedin} alt="Linkedin" width="20" height="20" />
            </button>
          </div>

          <p className="text-center small text-muted">
            Already have an account?{' '}
            <Link to="/login" className="text-primary text-decoration-none">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
