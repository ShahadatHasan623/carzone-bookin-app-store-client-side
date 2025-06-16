import React from 'react';
import MyCarsTable from '../../components/MycarsTable/MyCarsTable';

const allCarsData =fetch('http://localhost:3000/cars').then(res=>res.json())
const MyCars = () => {
    
    return (
        <div>
            <MyCarsTable allCarsData={allCarsData}></MyCarsTable>
        </div>
    );
};

export default MyCars;