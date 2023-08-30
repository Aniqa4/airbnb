import React, { useEffect, useState } from 'react'

function Main() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://airbnb-server-rose.vercel.app/accommodations')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    })
    return (
        <div>
            <div className='container mx-auto grid grid-cols-5 gap-5'>
                {
                    data.map(x =>
                        <div>
                            <img src={x.photo} />
                        </div>)
                }
            </div>
        </div>
    )
}

export default Main