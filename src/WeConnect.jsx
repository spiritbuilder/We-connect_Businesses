import React, {useEffect, useState} from 'react';
import axios from "axios";

import Business from "./Business.jsx";

function WeConnect() {
const [businesses, setbusinesses] = useState([]);
useEffect(() => {
    
    const  fetchData =  async()=>{
        const api  = "https://weconnect-com.herokuapp.com/api/v1/businesses";
            const response = await axios.get(api);
            const data = response.data;
            setbusinesses(data);
            console.log(data);
            return data;
    }
    fetchData();
}, [])


    return (
        <div className="businesses">{businesses.map(business=>(<Business id={business.id} name={business.name} location={business.location} updatedAt={business.updatedAt}reviews={business.review} description={business.description} phone={business.phone} />))}</div>
    )
}

export default WeConnect;
