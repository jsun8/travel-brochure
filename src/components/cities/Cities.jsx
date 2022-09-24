import React from 'react';
import { Story } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';
import './cities.css';


const Cities = () => {
    return (
        <div className="cities section-padding" id="foods">
            <div className="cities-heading">
                <h1 className="gradient-text">New foods:</h1>
            </div>
            <div className="cities-container">
                <div className="cities-container-groupA">
                   <Story imgUrl={blog1} date="August 28, 2022" title="Pancake"/>
                </div>
                <div className="cities-container-groupB">
                    <Story imgUrl={blog2} date="August 28, 2022" title="Ramen"/>
                    <Story imgUrl={blog3} date="August 28, 2022" title="Globe"/>
                    <Story imgUrl={blog4} date="August 28, 2022" title="Views"/>
                    <Story imgUrl={blog5} date="August 28, 2022" title="City"/>
                </div>
            </div>
        </div>
    )

}

export default Cities;