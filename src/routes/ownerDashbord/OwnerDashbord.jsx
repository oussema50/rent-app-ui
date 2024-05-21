import { useState,useEffect } from "react";
import isEmail from 'validator/lib/isEmail';
import "./userDashbord.scss";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import User from "../../components/user/User"
import AppartmentList from "../../components/appartmentList/AppartmentList"
function OwnerDashbord(){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id)
    const [yourappartements,setYourAppartements] = useState([])
    const [rentappartements,setRentAppartements] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
              const response = await axios.get(`https://small-tools-rest.loca.lt/api/appartements/ownerappartements/${user.id}/`, {
                headers: {
                  Authorization: `Token ${token}`,
                },
              });
              // const responseRentApp = await axios.get(`https://wide-rice-battle.loca.lt/api/yourrentappartements`, {
              //   params:user , 
              //   headers: {
              //     Authorization: `Token ${token}`,
              //   },
              // });
              // console.log(response.data);
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
              <div className="" style={{display:'flex',justifyContent: 'space-between',alignItems: 'center'}}>
                <h1 style={{marginBottom:'20px',marginTop:'20px'}}>Your Appartments</h1>
                <button style={{    backgroundColor: '#fece51',border: 'none',padding: '10px'}}>
                  <Link to='/create/appartement' style={{color:'#333',fontWeight:'bold'}}>Create Appartment</Link>
                </button>
              </div>
                <AppartmentList appartments={yourappartements} />
           </div>
           <div className="rentAppartment">
              <h1 style={{marginBottom:'20px',marginTop:'20px'}}>Rent Appartments</h1>
              <AppartmentList  />
           </div>
        </div>
    );
}

export default OwnerDashbord;