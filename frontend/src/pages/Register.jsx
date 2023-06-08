import {UseState, useEffect} from 'react';
import './Login.css';
import RegisterForm from '../Components/RegisterForm.jsx';

const Register = () => {
    return (
        <div style={{width: 600, margin:"auto", marginTop: 40 }}>
            <h3>Register</h3>
            <RegisterForm/>
        </div>
    )   
};
export default Register;