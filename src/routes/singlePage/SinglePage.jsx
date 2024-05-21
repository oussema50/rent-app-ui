import "./singlePage.scss";
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import {Link} from "react-router-dom"

function SinglePage(){
    const {id} = useParams();
    const [appartement,setAppartement] = useState({})
    console.log(id)
    useEffect(()=>{
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
              const response = await axios.get(`https://poor-peaches-own.loca.lt/api/appartements/${id}/`, {
                headers: {
                  Authorization: `Token ${token}`,
                },
              });
              console.log(response);
              setAppartement(response.data)
              // Handle the response data
            } catch (error) {
              console.log('Failed to fetch data:', error);
              // Handle the error
            }
          };
          fetchData();
    },[])
    return(
      
      <div className="singlePage">
        <Card key={appartement.id} item={appartement} />
        <Link to={`/reserve/appartement/${appartement.id}`}>
          <button>reserver</button>
        </Link>
        
      </div>
    );
}

export default SinglePage;