import React, { useState } from 'react'
import logo from '../../../../assets/images/logo.png';
import login_pic from '../../../../assets/images/Graphic Side.svg';
import { useForm } from 'react-hook-form';
import { axiosInstance, USERS_URLS } from '../../../Services/urls';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ResetPass() {

  const navigate  = useNavigate();
  const [loading, setLoading] = useState(false);

  const {register ,formState :{errors} , handleSubmit , reset} = useForm();

  const onSubmit = async (data)=>{
    try{
        setLoading(true);
        const response = await axiosInstance.post(USERS_URLS.RESET_PASSWORD ,data);
        toast.success('Reset successfully!');
        reset();
        navigate('/login');
    }
    catch(err) {
      toast.error(err.response?.data?.message || 'Reset failed!');
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <>
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 align-items-center justify-content-between overflow-hidden shadow-lg rounded " style={{ maxWidth: '1140px' }}>

        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center px-5">
          <div className="mb-4 d-flex align-items-center gap-2">
            <img src={logo} alt="logo" height="40" />
            <h1 className="h2 fw-bold text-dark mb-0">Wendo</h1>
          </div>

          <div className='mb-4 d-flex flex-column justify-content-center align-items-center text-center' >
            <h2 className="h2 fw-semibold mb-2">Reset Password</h2>
            <p className="text-muted small mb-4 d-flex flex-column justify-content-center align-items-center text-center">
              Enter your email address and we’ll send you an email with<br />
               instructions to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-75">
            <div className='mb-4'>
              <label className="form-label" style={{ color: '#8A92A6', fontWeight: 400, fontSize: '16px', lineHeight: '175%' }}>Email</label>
              <input type="email" className="form-control" {...register('email', { required: 'Email is required' })} />
              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>

            <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#3A57E8' }} disabled={loading}>
              {loading ? <span><i className="fa fa-spinner fa-spin me-2"></i> Reset...</span> : 'Reset Password'}
            </button>
          </form>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={login_pic} alt="Illustration" className="img-fluid" style={{ width: '100%', maxWidth: '700px' }} />
        </div>

      </div>
    </div>
    </>
  )
}
