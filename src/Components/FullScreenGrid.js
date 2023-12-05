import React from "react";
import { useLocation } from "react-router-dom";
import useFavorites from "./useFavorites";

const FullScreenGrid = (props) => {
    const location = useLocation();
    const { state } = location || {};
    const item = state?.item;

    const { user } = props; // Pass the user object from the App component
    // const { isFavorite, toggleFavorite, loading, error } = useFavorites(user, item);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-4">
                <div className="">
                    <div className="p-4 border-2 border-gray-300 rounded">
                        <h2 className="text-xl font-bold mb-2 bg-teal-100 p-1">{item?.title}</h2>
                        <p>{item.dcontent}</p>
                        <p className="text-sm">{item.description}</p>
                        <p>Source:<a href={item.url} className="text-red-500">{item.url}</a></p>
                        <img src={item.urlToImage} alt="" />
                        <p className="text-sm">{item.content}</p>
                        <p>{item.author}</p>
                        <p>{item.publishedAt}</p>
                        {/* <button onClick={toggleFavorite}>
                            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FullScreenGrid;
