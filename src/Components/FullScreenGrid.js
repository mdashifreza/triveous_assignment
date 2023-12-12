import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const FullScreenGrid = (props) => {
    const location = useLocation();
    const { state } = location || {};
    const item = state?.item;
    
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favNewsData);

    // console.log('favorite from redux:', favorites)

    const toggleFavorite = (itemAuthor) => {
        if(itemAuthor !== null){
            if (favorites.includes(itemAuthor)) {
                dispatch({ type: 'REMOVE_FAVORITE', payload: itemAuthor });
            } else {
                dispatch({ type: 'FAV_NEWS_DATA', payload: itemAuthor });
            }
        }
    };

    const [showMore, setShowMore] = useState(false);

    const displayContent = showMore ? item?.content : (item?.content ? item?.content.slice(0, 1000) : ''); // Adjust the slice length as neede

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-4">
                <div className="">
                    <div className="p-4 border-2 border-gray-300 rounded">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold mb-2 bg-teal-100 p-1 items-center">{item?.title}</h2>
                            <button className="items-center bg-red-200 rounded-md p-1 text-red-500 font-bold"
                                onClick={() => toggleFavorite(item?.title)}
                            >favorite</button>
                        </div>
                        <p className="text-gray-500 text-sm">{displayContent}
                        {item?.content && item?.content.length > 100 && (
                            <button onClick={() => setShowMore(!showMore)} className="text-sm p-0.5 rounded-sm mb-2 bg-teal-400 text-white cursor-pointer">
                                {showMore ? "Read Less" : "Read More"}
                            </button>
                        )}
                        </p>
                        <img src={item?.image_url} alt="" className="w-full"/>
                        <p>Source:<a href={item?.link} className="text-red-500">{item?.link}</a></p>
                        <p className="text-sm">{item?.text}</p>
                        <p>{item?.pubDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FullScreenGrid;
