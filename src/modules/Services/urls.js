import axios from "axios";

const baseURL =  "http://31.97.185.117:8080/api/";

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
  },
  withCredentials: false, 
});



// ****************** USERS **********************

export const USERS_URLS = {
    LOGIN : `/auth/login`,
    REGISTER_DRIVER : `/auth/register/driver`,
    REGISTER_PASSENGER : `/auth/register/passenger`,
    RESET_PASSWORD : `/auth/reset`
    

} 
