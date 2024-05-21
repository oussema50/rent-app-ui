import {listData} from "../../lib/data";
import { useState, useEffect,useContext } from "react";
import axios from 'axios';
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
function ListPage(){
    const [appartements,setAppartements] = useState([])
    
    useEffect(()=>{
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
              const response = await axios.get('https://poor-peaches-own.loca.lt/api/appartements/', {
                headers: {
                  Authorization: `Token ${token}`,
                },
              });
              console.log(response.data);
              setAppartements(response.data)
              // Handle the response data
            } catch (error) {
              console.error('Failed to fetch data:', error);
              // Handle the error
            }
          };
          fetchData();
    },[])
    return(
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                      {appartements.map(item=><Card key={item.id} item={item} />)}
                </div>
            </div>
            <div className="mapContainer">
                <Map />
            </div>
        </div>
    );
}

export default ListPage;