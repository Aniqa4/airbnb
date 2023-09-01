import { useEffect, useState } from "react";

function AllAccommodations() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://airbnb-server-rose.vercel.app/accommodations')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data);
            setLoading(false)
          });
      }, []);

  return [data, setData, loading]
}

export default AllAccommodations