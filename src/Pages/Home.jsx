import React from 'react';
import Banner from '../components/Banner';
import Featured from '../components/Featured';
import Solulation from '../components/Solulation';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className='mb-24'>
            <Banner></Banner>
            <Featured></Featured>
            <Solulation></Solulation>
            <Services></Services>
        </div>
    );
};

export default Home;