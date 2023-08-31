import React, { useState } from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaUserCircle, FaAirbnb, FaSearch } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

function Navbar() {
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(true)
    }

    return (
        <div className={expand === true ? 'flex justify-between items-center border py-5 px-20 shadow-2xl' : 'flex justify-between items-center border py-5 px-20'}>
            <div className='flex gap-1 items-center'>
                <p className=' text-red-600 text-4xl'><FaAirbnb /></p>
                <h1 className=' text-red-500 text-2xl font-bold'>airbnb</h1>
            </div>
            <div onClick={() => handleExpand()}>
                {
                    expand === true ?
                        <div className='grid gap-5 justify-center'>
                            <div className='flex gap-5 text-xl items-center text-gray-700 mx-auto'>
                                <p className=' font-semibold'>Stays</p>
                                <p>Experiences</p>
                                <p>Online Experiences</p>
                            </div>
                            <form className='flex mx-auto border rounded-full px-5 py-2'>
                                <div className='grid'>
                                    <label>Where</label>
                                    <input type="text" name="location" placeholder='search destinations' />
                                </div>
                                <div className='grid'>
                                    <label>Check In</label>
                                    <input type="datetime" name="checkIn" placeholder='Add dates' />
                                </div>
                                <div className='grid'>
                                    <label>Check Out</label>
                                    <input type="datetime" name="checkOut" placeholder='Add dates' />
                                </div>
                                <div className='grid'>
                                    <label>Who</label>
                                    <input type="text" name="Who" placeholder='Add guests' />
                                </div>
                                <div className='flex items-center gap-2 text-white bg-pink-600 rounded-full px-5'>
                                    <span><FaSearch /></span>
                                    <input type="submit" value="Search" />
                                </div>
                            </form>
                        </div>
                        :
                        <div className='flex gap-5 items-center text-sm text-gray-700 font-semibold rounded-full shadow p-2 border'>
                            <p className=' border-e px-3'>Anywhere</p>
                            <p className=' border-e pe-3'>Any week</p>
                            <p className=' font-light flex items-center gap-3'>Add guests
                                <span className=' bg-rose-500 text-white rounded-full p-2'><FaSearch /></span>
                            </p>
                        </div>
                }
            </div>
            <div className='flex gap-5 items-center text-gray-700'>
                <h1 className=' text-sm font-semibold'>Airbnb your home</h1>
                <p className=' text-xl'><HiOutlineGlobeAlt /></p>
                <div className='flex rounded-full border gap-2 px-2 py-2 text-2xl'>
                    <p><IoIosMenu /></p>
                    <p className=' text-gray-500'><FaUserCircle /></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar