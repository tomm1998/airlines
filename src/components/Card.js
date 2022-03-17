import React from "react";
import './Card.css'
import alliances from '../alliancesFilter'



function Card({data}) {

    const allianceName = alliances.find(alliance => alliance.code === data.alliance)?.name || data.alliance;
    return (
        <div className="card-container">
            <img src={"https://www.kayak.com" + data.logoURL} className='logo-airline' alt=''></img>
            <div className="card-title">
                {data.name}
                <div className="details">
                    <div className="alliance">
                        {allianceName}
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