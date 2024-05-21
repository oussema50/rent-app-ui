import { useState } from "react";
import "./reservation.scss";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import User from "../../components/user/User"
function ReservationList({rentappartements}){
    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    const DeleteAppartment = async (id) => {
        try {
          const response = await axios.delete(`https://poor-peaches-own.loca.lt/api/appartements/${id}/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          navigate('/userDashbord')
          console.log(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    return(
        <table>
            <tr>
                <th>Id</th>
                <th>appartement</th>
                <th>date_reservation</th>
                <th>date_retour</th>
                <th>Action</th>
            </tr>
            {rentappartements?rentappartements.map(appartment=>
                (<tr key={appartment.id}>
                    <td>{appartment.id}</td>
                    <td>{appartment.appartement}</td>
                    <td>{appartment.date_reservation}</td>
                    <td>{appartment.date_retour}</td>
                    <td>
                        <button className="update_btn" >
                          <Link to={`/update/reservation/${appartment.id}`}>
                            update
                          </Link>
                        </button>
                        <button className="delete_btn" onClick={()=>DeleteAppartment(appartment.id)}>delete</button>
                    </td>
                </tr>)
            ):'have no appartment'}
           
            
      </table>
    );
}

export default ReservationList;


