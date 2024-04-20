import "./searchBar.scss";
import {useState} from 'react';
function SearchBar(){
    const types = ["rent house", "rent room"];
    const [query, setquery] = useState({
        type:"rent house",
        location:"",
        minPrice:0,
        maxPrice:0,
    })
    const switchType = (type)=>{
        setquery(prev=>({...prev,type}))
    }
    return(
        <div className="searchBar">
            <div className="type">
                {types.map(type=>
                    <button key={type}
                     className={query.type === type ? "active":""} 
                     onClick={()=>switchType(type)}>
                        {type}
                    </button>
                )}
                
            </div>
            <form>
                <input type="text" name="location" placeholder="city location" />
                <input type="number" name="minPrice"  min={0} max={1000000} placeholder="Min Price" />
                <input type="number" name="maxPrice"  min={0} max={1000000} placeholder="Max Price" />
                <button>
                    <img src="/search.png" alt="search" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;