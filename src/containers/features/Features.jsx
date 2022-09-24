import React from 'react';
import './features.css'

const Features = ({title, text}) => {
    return (
        <div className="features-container-feature" id="vocab">
            <div className="features-container-feature-title">
                <div/>
                <h1>{title}</h1>
            </div>
            <div className="features-container-feature-text">
                <p>{text}</p>
            </div>
        </div>
    )

}

export default Features;