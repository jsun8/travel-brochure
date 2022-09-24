import React from 'react';
import './story.css';

const Story = ({imgUrl, date, title }) => {
    return (
        <div className="blog-container-story">
            <div className="blog-container-story-image"> 
            <img src={imgUrl} alt="blog"/>
            </div>
            <div className="blog-container-story-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                    <p>Find out more</p>
            </div>
        </div>
    )

}

export default Story;