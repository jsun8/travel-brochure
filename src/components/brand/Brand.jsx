import React from 'react';
import { Squares } from '../../components';
import { ul1, ul2, ul3, ul4, ul5 } from './imports';
import './brand.css';


const Brand = () => {
    return (
        <div className="brand section-padding" id="foods">
            <div className="brand-heading">
                <h1 className="gradient-text">Places in Canada 🍁</h1>
            </div>
            <div className="brand-container">
                <div className="brand-container-groupA">
                   <Squares imgUrl={ul1} date="Ontario" title="St. Catharines"/>
                </div>
                <div className="brand-container-groupB">
                    <Squares imgUrl={ul2} date="British Columbia" title="Vancouver"/>
                    <Squares imgUrl={ul3} date="Alberta" title="Calgary city"/>
                    <Squares imgUrl={ul4} date="Alberta" title="Banff town"/>
                    <Squares imgUrl={ul5} date="Newfoundland" title="St. Johns city"/>
                </div>
            </div>
        </div>
    )

}

export default Brand;

{/*import React from 'react';
import './brand.css';
import { city} from './imports';

const Brand = () => {
    return (
        <div className="brand-section-padding">
            <div>
                <img src={city} alt="city" />
            </div>
        </div>
    )

}

export default Brand; */ }

