import { useState } from "react";
import "./appartmentList.scss";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import User from "../../components/user/User"
function AppartmentList({item}){
    return(
        <table>
            <tr>
                <th>Id</th>
                <th>Adresse</th>
                <th>Prix</th>
                <th>Places</th>
                <th>Max Places</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            
      </table>
    );
}

export default AppartmentList;


