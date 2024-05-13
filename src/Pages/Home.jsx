import React from 'react';
import Banner from '../components/Banner';
import Featured from '../components/Featured';

const Home = () => {
    return (
        <div className='mb-24'>
            <Banner></Banner>
            <Featured></Featured>
        </div>
    );
};

export default Home;