import React from 'react';
import Card from '../Components/Card';
import { useLocation } from 'react-router-dom';
import AllAccommodations from '../Hooks/AllAccommodations';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { PiParkFill, PiWarehouseDuotone, PiSwimmingPoolThin } from 'react-icons/pi';
import { TbBeach } from 'react-icons/tb';
import { HiTrendingUp } from 'react-icons/hi';
import Icon from '../Components/Icon';

function Main() {
  const [data, setData, loading] = AllAccommodations()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationParam = queryParams.get('location');


  // Convert the search parameter to lowercase
  const lowercaseLocationParam = locationParam
    ? locationParam.toLowerCase()
    : '';

  const newData = data.filter((x) =>
    x.Location.toLowerCase().includes(lowercaseLocationParam)
  );

  console.log(newData);

  return (
    <div className='container mx-auto py-5'>
      <div className='flex pb-5 gap-10'>
        <Icon name={'Rooms'} icon={<MdOutlineBedroomParent />}></Icon>
        <Icon name={'Lake'} icon={<PiParkFill />}></Icon>
        <Icon name={'Beach Fronts'} icon={<TbBeach />}></Icon>
        <Icon name={'Tiny House'} icon={<PiWarehouseDuotone />}></Icon>
        <Icon name={'Trendings'} icon={<HiTrendingUp />}></Icon>
        <Icon name={'Amazing Pools'} icon={<PiSwimmingPoolThin />}></Icon>
      </div>
      <div className='grid grid-cols-5 gap-5'>
        {locationParam &&
          newData?.map((x, index) => (
            <Card
              key={index}
              photo={x.photo}
              hotelName={x.hotelName}
              location={x.Location}
              price={x.price}
              beds={x.beds}
              bedrooms={x.bedrooms}
            ></Card>
          ))}
        {!locationParam &&
          data.map((x, index) => (
            <Card
              key={index}
              photo={x.photo}
              hotelName={x.hotelName}
              location={x.Location}
              price={x.price}
              beds={x.beds}
              bedrooms={x.bedrooms}
            ></Card>
          ))}
      </div>
    </div>
  );
}

export default Main;
