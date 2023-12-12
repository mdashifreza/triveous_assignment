import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Fav() {
    const userFavNews = useSelector((state) => state.userFavNews);

    const cachedData = localStorage.getItem('filteredArray');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!cachedData) {
            setData(userFavNews);
        } else {
            setData(JSON.parse(cachedData));
        }
    }, [userFavNews, cachedData]);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-4">
                {data?.map((item, index) => (
                    <div key={index} className='p-4 border rounded mb-5'>
                        <h3 className="text-lg font-semibold bg-teal-100 rounded-sm p-2">{item.title}</h3>
                        <img src={item?.image_url} alt="" className="w-full"/>
                        <p>Source:<a href={item?.link} className="text-red-500">{item?.link}</a></p>
                        <p className="text-sm">{item?.text}</p>
                        <p>{item?.pubDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
