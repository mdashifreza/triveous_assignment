import React from "react";

const NewsItem = ({ item, gridView }) => {
    const displayContent = item?.description ? item?.description.slice(0, 200) : '';

    return (
        <div
            className={
                "p-4 border rounded " + (gridView ? "mb-4" : "mb-8")
            }
        >
            <h3 className="text-lg font-semibold bg-teal-100 rounded-sm">{item?.title}</h3>
            <p className="text-gray-500 text-sm">
                {displayContent ? displayContent.slice(0, 100) : ''}
            </p>
            <p className=""><img src={item?.image_url} alt="" className="w-full"/></p>
        </div>
    );
};

export default NewsItem;
