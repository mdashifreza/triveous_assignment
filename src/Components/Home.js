import React, { useEffect, useState } from 'react';
import ToggleButton from './News/ToggleButton';
import NewsList from './News/NewsList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = ({name, data}) => {
    const navigate = useNavigate();

    const favorites = useSelector((state) => state.favNewsData);
    console.log("favorate see your fav testing;;", favorites, data)
    const [filteredFav, setfilteredFav] = useState([]);

    const handleFavBtnSee = ()=>{
        const filt = data.filter((item, index)=>item.author == favorites[index]);
        setfilteredFav(filt);
        navigate("/Fav", filteredFav);
    }

    useEffect(()=>{},[name]);

    const [gridView, setGridView] = useState(false);
    console.log("detail home compo::", data);

    const toggleView = () => {
        setGridView(!gridView);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-8">
                <div className='flex justify-between items-center'>
                <h2 className="text-2xl font-semibold mb-6">Welcome to Indian News,{" "}{name}</h2>
                {name && <button className='bg-teal-500 font-bold text-white p-2 rounded-md'
                onClick={handleFavBtnSee}>See Your Favorite</button>}
                </div>
                    <ToggleButton onClick={toggleView} gridView={gridView}/>
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
