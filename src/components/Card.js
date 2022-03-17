import React from "react";
import './Card.css'


function Card(props) {

    return (
        <div className="card-container">
            <img src={"https://www.kayak.com" + props.data.logoURL} className='logo-airline' alt=''></img>
            <div className="card-title">
                {props.data.name}
                <div className="details">
                    <div className="alliance">
                        {props.data.alliance}
                    </div>
                    <div className="phone">
                        {props.data.phone}
                    </div>
                    <div className="site">
                        {props.data.site}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;