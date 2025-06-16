import React from 'react';
import Banner from './Banner';
import WhyChoos from './WhyChoos';
import RecentCar from './RecentCar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChoos></WhyChoos>
            <RecentCar></RecentCar>
        </div>
    );
};

export default Home;