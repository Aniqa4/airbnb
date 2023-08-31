import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import { useLocation } from 'react-router-dom';

function Main() {
    const [data, setData] = useState([])
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const locationParam = queryParams.get('location');


    useEffect(() => {
        fetch('https://airbnb-server-rose.vercel.app/accommodations')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    
        const newData = data.filter(x => x?.Location === locationParam)
        console.log(newData);

    return (
        <div className=' py-5'>
            <div className='container mx-auto grid grid-cols-5 gap-5'>
                {
                    locationParam && newData?.map((x, index) =>
                        <Card key={index} photo={x.photo} hotelName={x.hotelName} location={x.Location}
                            price={x.price} beds={x.beds} bedrooms={x.bedrooms}
                        ></Card>)
                }
                {
                    !locationParam && data.map((x, index) =>
                        <Card key={index} photo={x.photo} hotelName={x.hotelName} location={x.Location}
                            price={x.price} beds={x.beds} bedrooms={x.bedrooms}
                        ></Card>)
                }
            </div>
        </div>
    )
}

export default Main