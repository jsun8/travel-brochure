import React from 'react';
import { Features }from '../../containers';
import './featureone.css';

const featureoneData = [
    {
        title: 'Tokyo Yakult Swallows',
        text: 'Baseball'
    },
    {
        title: 'Saitama Seibu Lions',
        text: 'Baseball!'
    },
    {
        title: 'Hiroshima Toyo Carps',
        text: 'Baseball team'
    },
]

const Featureone = () => {
    return (
        <div className="features section-padding">
            <div className="features-heading">
                <h1 className="gradient-text">Sports teams</h1>
                <p>Have you heard of these teams?</p>
            </div>
            <div className="features-container">
                {featureoneData.map((item, index) => 
                <Features title={item.title} text={item.text} key={item.title + index}/>
                )}
            </div>
        </div>
    )
}

export default Featureone;