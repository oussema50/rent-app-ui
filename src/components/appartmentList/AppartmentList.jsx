import { useState } from "react";
import "./appartmentList.scss";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import User from "../../components/user/User"
function AppartmentList({appartments}){
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
                <th>Adresse</th>
                <th>Prix</th>
                <th>Places</th>
                <th>Max Places</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {appartments?appartments.map(appartment=>
                (<tr key={appartment.id}>
                    <td>{appartment.id}</td>
                    <td>{appartment.adresse}</td>
                    <td>{appartment.prix}</td>
                    <td>{appartment.places}</td>
                    <td>{appartment.max_places}</td>
                    <td>{appartment.status?'not Available':'Available'}</td>
                    <td>
                        <button className="update_btn" >
                          <Link to={`/update/appartement/${appartment.id}`}>
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

export default AppartmentList;


