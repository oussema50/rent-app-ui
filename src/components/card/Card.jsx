import "./card.scss";
import {Link} from "react-router-dom"
function Card({item}){
    console.log(item)
    return(
        <div  className="card">
            <Link to={`/rent/${item.id}`} className="imgcontainer">
                <img src={item.img} alt="" />
            </Link>
            <div className="textcontainer">
                <Link to={`/rent/${item.id}`}>
                    <h2 className="title">{item.title}</h2>
                
                </Link>
                <p className="address">
                    <img src="/pin.png" alt="address" />
                    <span>{item.address}</span>
                </p>
                <p className="price">$ {item.price} </p>

                <div className="bottom"> 
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" alt="bed" />
                            <span> {item.bedroom} bedroom </span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt="bed" />
                            <span> {item.bathroom} bathroom </span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.png" alt="" />
                        </div>
                        <div className="icon">
                            <img src="/chat.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>            
        </div>
    );
}

export default Card