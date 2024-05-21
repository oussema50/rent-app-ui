import "./registerPage.scss";

import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;
// const client = axios.create({
//     baseURL:"https://3b52-34-78-141-127.ngrok-free.app",
// })
function RegisterPage(){
    let [formData,setFormData] = useState({
        first_name:'',
        last_name:'',
        username:'',
        role:'user',
        email:'',
        phone:'',
        password:'',
        password_confirmation:'',

    });
    const navigate = useNavigate();
    const handelInput = (e)=>{
        return setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://poor-peaches-own.loca.lt/auth/register',{user:formData}).then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err))
    }
    let {first_name,last_name,username,email,phone,password}=formData;
    console.log(formData)
    return(
        <div className="RegisterPage">
            {/* {loading && showLoading()}
            {erroMsg && showErrMessage(erroMsg)}  
            {successMsg && showSuccessMessage(successMsg)} */}
            <div className="form">
                <form onSubmit={handleSubmit}>
                
                    <input type="text" placeholder="firstName" name="first_name" onChange={handelInput} />
                    <input type="text" placeholder="last_name" name="last_name" onChange={handelInput} />
                    <input type="text" placeholder="username" name="username" onChange={handelInput} />
                    <select defaultValue="user" onChange={handelInput} name="role" >
                        <option value="user">user</option>
                        <option  value="owner">owner</option>
                    </select>
                    <input type="email" name="email"  placeholder="email" onChange={handelInput}   />           
                    <input type="phone" name="phone"  placeholder="phone" onChange={handelInput}   />           
                    <input type="password" name="password" placeholder="password1" onChange={handelInput}/>
                    <input type="password" name="password_confirmation" placeholder="password2" onChange={handelInput}/>
                    <button type="submit">Register</button>
                    <p style={{textAlign:'center'}}> Have an account? <Link to="/signin">sign In</Link> </p>
                </form>
           </div>
        </div>
    );
}

export default RegisterPage;