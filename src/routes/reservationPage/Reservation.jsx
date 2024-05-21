import { useState,useEffect  } from "react";
import "./reservation.scss";
import axios from 'axios';
import { useNavigate ,Link } from "react-router-dom";
import { useAuth } from '../../components/AuthContext';
// import {API_URL} from '../../helpers/config'
import {useParams} from "react-router-dom"
function Reservation(){
    const navigate = useNavigate();
    const {id} = useParams();
    const token = localStorage.getItem('token');
    const [appartement,setAppartement] = useState({})
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://poor-peaches-own.loca.lt/api/appartements/${id}/`, {
                    headers: {
                      Authorization: `Token ${token}`,
                    },
                  });
              console.log(response.data);
              setAppartement(response.data)
              // Handle the response data
            } catch (error) {
              console.error('Failed to fetch data:', error);
              // Handle the error
            }
          };
          fetchData();
    },[])
    let [formData,setFormData] = useState({
        date_reservation:'',
        date_retour:'',
        client:user.id,
        appartement:appartement,
    });
    const handelInput = (e)=>{
        return setFormData({
            ...formData,
            [e.target.name]:e.target.value,
            appartement:appartement.id
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        
        axios.post( `https://poor-peaches-own.loca.lt/api/appartements/${id}/reserve`,formData,
        {
            headers: {
              Authorization: `Token ${token}`,
            },
          }).then(res=>{
            console.log(res)
            navigate('/userDashbord')
        }).catch(err=>console.log(err))
    }
    return(
        <div className="loginPage">
           <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="date" name="date_reservation"  placeholder="date reservation" onChange={handelInput}   />           
                    <input type="date" name="date_retour" placeholder="date retour" onChange={handelInput}/>
                    <button type="submit">Reserver</button>
                </form>
           </div>
        </div>
    );
}

export default Reservation;