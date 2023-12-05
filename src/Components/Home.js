import React, { useEffect, useState } from 'react';
import ToggleButton from './News/ToggleButton';
import NewsList from './News/NewsList';

const Home = ({name, data}) => {
    useEffect(()=>{},[name]);

    const [gridView, setGridView] = useState(false);
    console.log("datain home compo::", data);

    const toggleView = () => {
        setGridView(!gridView);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-8">
                <h2 className="text-2xl font-semibold mb-6">Welcome to Indian News,{" "}{name}</h2>
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
