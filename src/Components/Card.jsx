import React from 'react'

function Card({photo,location,hotelName,price}) {
    return (
        <div>
            <img src={photo} className='h-60 rounded-xl' />
            <div>
                <h1>{location}</h1>
                <h1>{hotelName}</h1>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Card