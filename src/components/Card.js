import React from "react";
import './Card.css'


function Card(props){
const data = props.data;


let alliance = 'none';
if(data.alliance==='OW')
    alliance='Oneworld';
else if(data.alliance==='ST')
    alliance='Sky Team';
else if(data.alliance==='SA')
    alliance='Star Alliance';

    return (
        <div className="card-container">
               <img src={"https://www.kayak.com" + data.logoURL} className='logo-airline' alt=''></img>
               <div className="card-title">
               {data.name}
                    <div className="details">
                        <div className="alliance">
                            {alliance!=='none' && alliance}
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