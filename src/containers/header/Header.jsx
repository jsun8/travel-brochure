import React from 'react';
import people from '../../assets/people.png';
import city from '../../assets/city.png';
import './header.css';


const Header = () => {
    return (
        <div className="head-section-padding" id="home">
            <div className="header-content">
                <h1 className="gradient-text">Learn all about Toronto!</h1>
                <p>Studying vocab</p>

                <div className="header-content-input">
                    <input type="email" placeholder="Enter your email address"/>
                    <button type="button">Let's get started!</button>
                </div>

                <div className="header-content-people">
                  <img src= {people} alt="people" />
                    <p>City view</p>

                    </div>
                    </div>
                  <div className="header-image">
                   <img src= {city} alt="city"/> 
                  </div>
        </div>
    )

}

export default Header;