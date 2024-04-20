import "./filter.scss";
function Filter(){
    return(
        <div className="filter">
            <h2>search for <b>Rent</b></h2>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id="city" name="city" placeholder="city location" />
                </div>

            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">type</label>
                    <select name="type" id="type">
                        <option value="rent house">Rent House</option>
                        <option value="rent room">Rent Room</option>
                    </select>
                </div>
                
                <div className="item">
                    <label htmlFor="minprice">Minprice</label>
                    <input type="number" id="minprice" name="minprice" min={0} max={1000000} placeholder="minprice" />
                </div>
                <div className="item">
                    <label htmlFor="maxprice">Maxprice</label>
                    <input type="number" id="maxprice" name="maxprice" min={0} max={1000000} placeholder="Maxprice" />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom </label>
                    <input type="number" id="bedroom" name="bedroom" min={0} max={5} placeholder="nbr bedroom" />
                </div>
                <button>
                    <img src="/search.png" alt="search" />
                </button>
            </div>
        </div>
    );
}

export default Filter