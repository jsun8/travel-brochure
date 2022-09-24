import React from 'react';
import Features from '../../containers/features/Features';
import './updates.css';

const Updates = () => (
        <div className="section-margin" id="study">
            <div className="features">
                <Features title="What is gpt3" text="This is"/>
            </div>
            <div className="what-heading">
                <h1 className="gradient-text">Possibilities are beyond!</h1>
                    <p>Explore places to travel here!</p> 
            </div>
            <div className="what-container">
                <Features title="Famous people" text="Learn about famous people"/>
                <Features title="Food" text="Find out more about food!"/>
                <Features title="Cities" text="What city is your favorite?"/>
            </div>
        </div>
    );


export default Updates;