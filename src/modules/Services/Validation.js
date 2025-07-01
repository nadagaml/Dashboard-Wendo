export const EMAIL_VALIDTION = {
    required: 'email is require',
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Email not vailed, please enter email valied'
    }
}

export const PASSWORD_VALIDTION  ={

        require : "Password is required" , 
        pattern :{
            value :  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
            message : 'The password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character '
        }
}


export const MOBILE_VALIDATION ={
    require : "Mobile is required",
    pattern : {
       value: /^(\+20)?(010|011|012|015)\d{8}$/,
       message: "Please enter a valid Egyptian mobile number"
    }
}

