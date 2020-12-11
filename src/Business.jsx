import React, { useState } from 'react';
import "./WeConnect.css";
import pic from "./blueshark.png";


function Business({ id, name, location, updatedAt, reviews, description, phone }) {
    const [showreviews, setshowreviews] = useState(false);
    var toggleReview = () => {
        showreviews ? setshowreviews(false) : setshowreviews(true);
    }
    return (
        <div key={id} className="House">
            <div className="picture">
                <img className="displayphoto" src={pic} alt="Blue Shark Photo" />
            </div>
            <div className="description">
                <div className="head">
                    <div className="nameAddress">
                        <h2 className="name">{name}</h2>
                        <div className="address grey">{location}</div>
                    </div>
                    <div className="closeUp"><span className="grey smaller">Last Contacted: {updatedAt}</span>
                        <span className="bold small"></span></div>
                </div>
                <div>
                    <p>{description}</p>
                    <div className="reviewblock">
                        
                        <div>{showreviews && reviews.map(review => (<p>{review}</p>))}</div>
                    </div>
                </div>

                <div className="links">
                <div><button onClick={toggleReview} >See Reviews</button></div>
                    <div><a href={`tel:`}>Message</a></div>

                </div>
            </div>
        </div>)

}

export default Business;
