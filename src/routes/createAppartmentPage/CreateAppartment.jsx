import { useState,useEffect  } from "react";
import "./createAppartment.scss";
import axios from 'axios';
import { useNavigate ,Link } from "react-router-dom";

function CreateAppartment(){
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
   
    const user = JSON.parse(localStorage.getItem('user'))
   
    let [formData,setFormData] = useState({
        proprietaire:user.id,
        adresse:'',
        prix:0,
        places:1,
        max_places:1,
        status:false
    });
    const handelInput = (e)=>{
        return setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        
        axios.post( `https://slimy-foxes-lose.loca.lt/api/appartements/`,formData,
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
                    <input type="text" name="adresse"  placeholder="adresse" onChange={handelInput}   />           
                    <input type="number" name="prix"  placeholder="prix" onChange={handelInput}   />           
                    <input type="number" name="places"  placeholder="places" onChange={handelInput}   />           
                    <input type="number" name="max_places"  placeholder="max places" onChange={handelInput}   />
                    <button type="submit">Reserver</button>
                </form>
           </div>
        </div>
    );
}

export default CreateAppartment;