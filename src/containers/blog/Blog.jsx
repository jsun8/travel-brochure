import React from 'react';
import './blog.css';
import posImage from '../../assets/rawImage.jpg'; 


const Blog = () => {
    return (
        <div className="section-padding" id="possibility">
            <div className="possibility-image">
                <img src={posImage} alt="possibility" /> 
            </div>
            <div className="possibility-content">
            <h4>Hockey and other teams</h4>
            <h1 className="gradient-text">Learn about Toronto sports</h1>
                
                <p>text here ! </p>
                <h4>To learn more !</h4>
            </div>
        </div>
    );
}

export default Blog;