import {useState} from 'react';
import "./navbar.scss";
import {useAuth} from '../AuthContext'
import { useNavigate ,Link } from "react-router-dom";
import axios from 'axios';
function Navbar(){
    const [open,setOpen] = useState(false);
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const logout = async()=>{
           const response =  await axios.post('https://poor-peaches-own.loca.lt/auth/logout',token,{
                headers: {
                  Authorization: `Token ${token}`,
                },
              })
              // Assume you have a key called 'userToken' in localStorage
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/')
    }
    return(
        <nav>
            <div className="left" >
                <Link to='/' className="logo">
                    <img src="/logo.png" title="logo" />
                    <span>Rent App</span>
                </Link>
                {user&& user.role == "owner"?<Link to='/ownerDashbord'>dashbord</Link>:''}
                {user && user.role=="user"?<Link to='/userDashbord'>dashbord</Link>:''}
                <Link to='/'>Home</Link>
                <Link to="/list">Rent</Link>
                <a href='#'>About</a>
                <a href='#'>contact</a>

            </div>
            <div className="right">
                {token?<button onClick={()=>logout()}>logout</button>:
                    <>
                        <Link to='/signin'>sign in</Link>
                        <Link to='/signup' className="register">sing up</Link> 
                    </>
                }              
                
                <div className="menuicon">
                    <img src="/menu.png" title="menu" onClick={()=>setOpen(prev=>!prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href='#'>Home</a>
                    <a href='#'>Rent</a>
                    <a href='#'>About</a>
                    <a href='#'>contact</a>
                    <a href='#'>sign in</a>
                    <a href='#'>sing up</a>
                </div>
                

            </div>
        </nav>
    );
}

export default Navbar