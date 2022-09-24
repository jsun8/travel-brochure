import React, { useState} from 'react';
import './bar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'; 

{ /* const Menu = () => (
    <>
    <p><a href="#home">About</a></p>
    <p><a href="#study"></a></p>
    <p><a href="#vocab">Vocab</a></p>
    <p><a href="#interesting">Facts</a></p>
    <p><a href="#architecture">Castles</a></p>
    </>
)
*/ }

const Bar = () => {
    const [MenuOne, setMenu]=useState(false);
    return (
        <div className="side_bar">
            <div classname="some_links">
                <div className="tourist_attractions">
                  { /*} <img src={logo} alt="Travel destinations" />  */ }
                </div>
                <div className="find-more">
                     { /*<Menu /> */ }
                    <p><a href="#home">What it's about</a></p>
                    <p><a href="#study">Tips for studying</a></p>
                    <p><a href="#vocab">Vocab by level</a></p>
                    <p><a href="#interesting">Facts</a></p>
                    <p><a href="#foods">Foods to try</a></p>
                </div>
            </div>
            <div className="sign">
                <button type="button">Sign in!</button>
                <button type="button">Don't have an account? Sign up here</button>
            </div>
            { /* <div className="menu-bar">
                { MenuOne
                ? <RiCloseLine color="#fff" size={27} onClick={()=>setMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={()=>setMenu(true)} />
                }
                { MenuOne (
                    <div className="menu-bar-container">
                        <div className="menu-bar-links">
                           { /* <Menu /> */ }
                      { /*}  </div> */ }
                    { /*</div> */ }
             { /*}   )}   */ }
          { /*} </div> */ }
        </div>
    )

}

export default Bar; 