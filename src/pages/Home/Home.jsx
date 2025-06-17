import React from 'react';
import Banner from './Banner';
import WhyChoos from './WhyChoos';
import RecentCar from './RecentCar';
import CarImageGallery from './CarImageGallery';
import SupportSection from './SupportSection';
import Customer from './Customer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChoos></WhyChoos>
            <RecentCar></RecentCar>
            <CarImageGallery></CarImageGallery>
            <Customer></Customer>
            <SupportSection></SupportSection>
        </div>
    );
};

export default Home;