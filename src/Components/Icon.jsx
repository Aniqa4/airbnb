import React from 'react'

function Icon({icon,name}) {
    return (
        <div className='grid text-gray-500'>
            <div className='text-3xl mx-auto'>{icon}</div>
            <h1 className=' text-sm'>{name}</h1>
        </div>
    )
}

export default Icon