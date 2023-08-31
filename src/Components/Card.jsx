import React from 'react'

function Card({photo,location,hotelName,price,beds,bedrooms}) {
    return (
        <div className='grid gap-3'>
            <img src={photo} className='h-60 rounded-xl' />
            <div className='grid gap-1 text-gray-600'>
                <h1 className=' font-semibold text-black'>{location}</h1>
                <h1>{hotelName}</h1>
                <p>Beds : {beds} <span> Bedrooms: {bedrooms}</span></p>
                <p><span className=' font-semibold text-black'>${price}</span> night</p>
            </div>
        </div>
    )
}

export default Card