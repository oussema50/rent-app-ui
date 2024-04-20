import "./singlePage.scss";
import {useParams} from "react-router-dom"
function SinglePage(){
    const {id} = useParams();
    return(
        <h1>SinglePage {id}</h1>
    );
}

export default SinglePage;