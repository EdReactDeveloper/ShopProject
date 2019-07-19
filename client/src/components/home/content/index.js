import React from 'react';
import NewArrivals from './newArrivals';
import BestSales from './bestSales';
import './Content.scss'

const Content = () => {
        return (
            <div className="content">
            <div className="container">
                <NewArrivals />
                <BestSales />
            </div>
            </div>            
        );
    }

export default Content;