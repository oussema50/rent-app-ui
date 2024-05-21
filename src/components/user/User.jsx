import "./user.scss";
import {Link} from "react-router-dom"
function User({item}){
    return(
        <div  className="card">
            <Link to={`/rent/${item.id}`} className="imgcontainer">
                <img src="/user.png" alt="" style={{width:"200px", height:"200px"}}/>
            </Link>
            <div className="textcontainer">
                 
                <h2 className="title">
                   Name: 
                    <span>  {item.first_name} </span>
                    <span>{item.last_name}</span>
                </h2>
                <h2 className="title">Email:  {item.email}</h2>
                <h3 className="title">Role:  {item.role}</h3>
                
            </div>            
        </div>
    );
}

export default User