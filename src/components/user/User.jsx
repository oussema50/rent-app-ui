import "./user.scss";
import {Link} from "react-router-dom"
function User({item}){
    return(
        <div  className="card">
            <Link to={`/rent/${item.id}`} className="imgcontainer">
                <img src="/user.png" alt="" style={{width:"200px", height:"200px"}}/>
            </Link>
            <div className="textcontainer">
                <Link to={`/rent/${item.id}`}>
                    <h2 className="title">{item.id}</h2>
                    
                </Link>
                <h2 className="title">
                    <span>{item.first_name} </span>
                    <span>{item.last_name}</span>
                </h2>
                <h2 className="title">{item.email}</h2>
                <span>{item.role}</span>
                <div className="icons">
                    <div className="icon">
                        <button>update profile</button>
                    </div>
                    
                </div>
            </div>            
        </div>
    );
}

export default User