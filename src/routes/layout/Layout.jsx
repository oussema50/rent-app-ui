import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import HomePage from "../homePage/HomePage";
import {Outlet} from "react-router-dom";

function Layout(){
    return (
        <div className="layout">
            <div className="navBar">
                <Navbar />  
            </div>  
            <div className="content">
            
                 <Outlet />
               
            </div>
            
        </div>
    );
}

export default Layout;