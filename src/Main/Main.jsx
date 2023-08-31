import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

function Main() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://airbnb-server-rose.vercel.app/accommodations')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    },[])
    return (
        <div className=' py-5'>
            <div className='container mx-auto grid grid-cols-5 gap-5'>
                {
                    data.map((x,index) =>
                    <Card key={index} photo={x.photo} hotelName={x.hotelName} location={x.Location} 
                    price={x.price} beds={x.beds} bedrooms={x.bedrooms}></Card>)
                }
            </div>
        </div>
    )
}

export default Main