import React from 'react';

const Pato = (props) => {
    return (
        <div className="card">
            <img src={props.img}/>
            <div className="details">
                <h3>{props.name}</h3>
                <h4>{props.price}</h4>
                <button>Book Now</button>
            </div>
        </div>
    );
};

export default Pato;