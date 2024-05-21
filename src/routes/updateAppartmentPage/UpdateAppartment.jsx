import { useState,useEffect  } from "react";
import "./updateAppartment.scss";
import axios from 'axios';
import { useNavigate ,Link,useParams } from "react-router-dom";

function UpdateAppartment(){
    const navigate = useNavigate();
    const {id} = useParams()
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
    useEffect(()=>{
        const featchData = async()=>{
            try {
                const response = await axios.get(`https://wide-rice-battle.loca.lt/api/appartements/${id}/`, {
                  headers: {
                    Authorization: `Token ${token}`,
                  },
                });
                
                setFormData(response.data)
    
              } catch (error) {
                console.error('Failed to fetch data:', error);
                // Handle the error
              }
        }
        featchData();
    },[])
    const handelInput = (e)=>{
        return setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        
        axios.put( `https://wide-rice-battle.loca.lt/api/appartements/${id}/`,formData,
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
                    <input type="text" name="adresse"  placeholder="adresse" onChange={handelInput} value={formData.adresse} />           
                    <input type="number" name="prix"  placeholder="prix" onChange={handelInput} value={formData.prix} />           
                    <input type="number" name="places"  placeholder="places" onChange={handelInput} value={formData.places} />           
                    <input type="number" name="max_places"  placeholder="max places" onChange={handelInput} value={formData.max_places} />
                    <button type="submit">Submit</button>
                </form>
           </div>
        </div>
    );
}

export default UpdateAppartment;