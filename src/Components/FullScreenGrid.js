import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const FullScreenGrid = (props) => {
    const location = useLocation();
    const { state } = location || {};
    const item = state?.item;
    
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favNewsData);

    console.log('favorite from redux:', favorites)

    const toggleFavorite = (itemAuthor) => {
        if(itemAuthor !== null){
            if (favorites.includes(itemAuthor)) {
                dispatch({ type: 'REMOVE_FAVORITE', payload: itemAuthor });
            } else {
                dispatch({ type: 'FAV_NEWS_DATA', payload: itemAuthor });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-4">
                <div className="">
                    <div className="p-4 border-2 border-gray-300 rounded">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold mb-2 bg-teal-100 p-1 items-center">{item?.title}</h2>
                            <button className="items-center bg-red-200 rounded-md p-1 text-red-500 font-bold"
                                onClick={() => toggleFavorite(item?.author)}
                            >favorite</button>
                        </div>
                        <p>{item?.content}</p>
                        <p className="text-sm">{item?.description}</p>
                        <p>Source:<a href={item?.url} className="text-red-500">{item?.url}</a></p>
                        <img src={item?.urlToImage} alt="" />
                        <p className="text-sm">{item?.content}</p>
                        <p>{item?.author}</p>
                        <p>{item?.publishedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FullScreenGrid;
