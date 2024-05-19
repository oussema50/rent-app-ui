import { useState,useEffect } from "react";
import isEmail from 'validator/lib/isEmail';
import "./userDashbord.scss";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import User from "../../components/user/User"
import AppartmentList from "../../components/appartmentList/AppartmentList"
function UserDashbord(){
    const user = JSON.parse(localStorage.getItem('user'));
    const [yourappartements,setYourAppartements] = useState([])
    const [rentappartements,setRentAppartements] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
              const response = await axios.get('https://slimy-foxes-lose.loca.lt/api/appartements/', {
                headers: {
                  Authorization: `Token ${token}`,
                },
              });
            //   const responseRentApp = await axios.get('https://slimy-foxes-lose.loca.lt/api/appartements/', {
            //     headers: {
            //       Authorization: `Token ${token}`,
            //     },
            //   });
              console.log(response.data);
              setYourAppartements(response.data)
            //   setRentAppartements(responseRentApp.data)
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
           <div className="yourAppartment">
                <h1 style={{marginBottom:'20px',marginTop:'20px'}}>Your Appartments</h1>
                <AppartmentList />
           </div>
           <div className="rentAppartment">
                <h1 style={{marginBottom:'20px',marginTop:'20px'}}>Rent Appartments</h1>
                <AppartmentList  />
           </div>
        </div>
    );
}

export default UserDashbord;