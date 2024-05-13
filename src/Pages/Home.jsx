import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Featured from '../components/Featured';
import Solulation from '../components/Solulation';
import Services from '../components/Services';

const Home = () => {
    useEffect(() => {
        document.title = "NourishNet | Home"
    }, [])

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