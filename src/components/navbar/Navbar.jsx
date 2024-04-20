import {useState} from 'react';
import "./navbar.scss";

import {Link} from "react-router-dom";
function Navbar(){
    const [open,setOpen] = useState(false);
    console.log(open)
    return(
        <nav>
            <div className="left" >
                <Link to='/' className="logo">
                    <img src="/logo.png" title="logo" />
                    <span>Rent App</span>
                </Link>
                <Link to='/'>Home</Link>
                <Link to="/list">Rent</Link>
                <a href='#'>About</a>
                <a href='#'>contact</a>
            </div>
            <div className="right">
                <a href='#'>sign in</a>
                <a href='#' className="register">sing up</a>
                
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