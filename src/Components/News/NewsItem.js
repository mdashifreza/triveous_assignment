import React from "react";

const NewsItem = ({ item, gridView }) => {
    return (
        <div
            className={
                "p-4 border rounded " + (gridView ? "mb-4" : "mb-8")
            }
        > 
            <h3 className="text-lg font-semibold bg-teal-100 rounded-sm">{item?.title}</h3>
            <p className="text-gray-600 text-sm">{item?.description}</p>
        </div>
    );
};

export default NewsItem;
