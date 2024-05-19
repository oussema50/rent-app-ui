import { useState  } from "react";
import isEmail from 'validator/lib/isEmail';
import "./loginPage.scss";
import axios from 'axios';
import { useNavigate ,Link } from "react-router-dom";
import { useAuth } from '../../components/AuthContext';
// import {API_URL} from '../../helpers/config'

function LoginPage(){
    const navigate = useNavigate();
    let [formData,setFormData] = useState({
        email:'',
        password:'',
    });
    const handelInput = (e)=>{
        return setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const {email,password} = formData
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post( 'https://slimy-foxes-lose.loca.lt/auth/login',{email,password}).then(res=>{
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            navigate('/userDashbord')
        }).catch(err=>console.log(err))
    }
    return(
        <div className="loginPage">
           <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email"  placeholder="email" onChange={handelInput}   />           
                    <input type="password" name="password" placeholder="password" onChange={handelInput}/>
                    <button type="submit">Login</button>
                    <p>don't have an account? <Link to="/signup">Register here</Link> </p>
                </form>
           </div>
        </div>
    );
}

export default LoginPage;