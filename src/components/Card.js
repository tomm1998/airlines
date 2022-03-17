import React from "react";
import './Card.css'


function Card({data}) {

    return (
        <div className="card-container">
            <img src={"https://www.kayak.com" + data.logoURL} className='logo-airline' alt=''></img>
            <div className="card-title">
                {data.name}
                <div className="details">
                    <div className="alliance">
                        {data.alliance}
                    </div>
                    <div className="phone">
                        {data.phone}
                    </div>
                    <div className="site">
                        {data.site}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;