import React from 'react';


const Card = ({ name, email, id }) => {

    console.log(id);
    return (


        <div className="container">
            <div>
                <img src={`https://robohash.org/${id}`} alt="google pic" width='200px' height="200px" />
                <div className="name" > {name}</div>
                <div className="email">{email}</div>
            </div>
        </div>



    )




}
export default Card;