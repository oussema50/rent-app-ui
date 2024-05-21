import { useState,useEffect } from "react";
import isEmail from 'validator/lib/isEmail';
import "./userDashbord.scss";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import User from "../../components/user/User"
import AppartmentList from "../../components/reservationList/ReservationList"
function UserDashbord(){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id)
    const [rentappartements,setRentAppartements] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
              
              const responseRentApp = await axios.get(`https://poor-peaches-own.loca.lt/reservations/${user.id}/`, {
                headers: {
                  Authorization: `Token ${token}`,
                },
              });
              console.log(responseRentApp.data);
              setRentAppartements(responseRentApp.data)
              // Handle the response data
            } catch (error) {
              console.error('Failed to fetch data:', error);
              // Handle the error
            }
          };
         
          fetchData();
    },[])
    return(
        <div className="dashbord">
           <h1 style={{marginBottom:'20px'}}>Dashbord</h1>
           <User item={user} />
           <div className="rentAppartment">
                <h1 style={{marginBottom:'20px',marginTop:'20px'}}>Rent Appartments</h1>
                <AppartmentList rentappartements={rentappartements} />
             
           </div>

        </div>
    );
}

export default UserDashbord;