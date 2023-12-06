import React from "react";
import NewsItem from "./NewsItem";
import { useNavigate } from "react-router-dom";

const NewsList = ({ data, gridView }) => {
    const navigate = useNavigate();

    const handleNewsButton = (item) => {
        navigate(`/grid-news`, { state: { item } });
    };

    return (
        <div className={`container mx-auto p-4 ${gridView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : ""}`}>
            {data?.map((item, index) => (
                <button key={index} onClick={() => handleNewsButton(item)}>
                    <NewsItem item={item} gridView={gridView} />
                </button>
            ))}
        </div>
    );
};

export default NewsList;
