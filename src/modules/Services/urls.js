import axios from "axios";

const baseURL =  "http://165.232.127.150:8080/api";

export const axiosInstance = axios.create({
    baseURL , 
    headers: {Authorization :localStorage.getItem('token')}
});


// ****************** USERS **********************

export const USERS_URLS = {
    LOGIN : `/auth/login`,
    REGISTER_DRIVER : `/auth/register/driver`,
    REGISTER_PASSENGER : `/auth/register/passenger`,
    

}
