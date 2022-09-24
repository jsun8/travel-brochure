import React from 'react';
import './squares.css';

const Squares = ({imgUrl, date, title }) => {
    return (
        <div className="blog-container-squares">
            <div className="blog-container-squares-image"> 
            <img src={imgUrl} alt="blog"/>
            </div>
            <div className="blog-container-squares-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                    <p>Find out more</p>
            </div>
        </div>
    )

}

export default Squares;