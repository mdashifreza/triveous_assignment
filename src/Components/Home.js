import React, { useState } from 'react';
import ToggleButton from './News/ToggleButton';
import NewsList from './News/NewsList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Home = ({ name, data }) => {
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.favNewsData);

    const dispatch = useDispatch();

    const handleFavBtnSee = () => {
        const filteredArray = data?.filter(item => {
            return favorites.includes(item?.title);
        });

        dispatch({ type: 'USER_FAV_NEWS', payload: filteredArray });
        // Store filteredArray in local storage
        localStorage.setItem('filteredArray', JSON.stringify(filteredArray));

        navigate(`/favorite`, {state : {data}});
    };

    const [gridView, setGridView] = useState(false);

    const toggleView = () => {
        setGridView(!gridView);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-8">
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-semibold mb-6">Welcome to Indian News,{" "}<span className={name ? `bg-teal-900 text-white p-1 rounded-md font-semibold` : ``}>{name}</span></h2>
                    {name && <button className='bg-teal-500 font-bold text-white p-2 rounded-md'
                        onClick={handleFavBtnSee}>See Your Favorite</button>}
                </div>
                <ToggleButton onClick={toggleView} gridView={gridView} />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="col-span-3 bg-white p-4 rounded shadow-md">
                        <NewsList data={data} gridView={gridView} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
