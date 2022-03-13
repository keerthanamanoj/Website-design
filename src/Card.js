
import React from 'react';

import './Card.css';
import centerbgimg from './images/centerbgimg.jpg';
// import centerbgimg from './images/c'
function Card() {
    return (
        <div>
            <div className="content" >
                <div className="contentpic">
                    <div className="box" ><img src={centerbgimg} alt="fullimage" style={{
                        backgroundImage: "url(/centerbgimg.jpg)",
                        position: "relative", backgroundRepeat: "no-repeat", backgroundImage: "cover", zIndex: "-1"
                    }}></img></div>
                    <div className="card">

                        <div className="container">
                            <h2><b>Choose from 25,00+<br />Spaces for your<br />Business</b></h2>
                            <p>Get inspired and find your perfect place.</p>

                            <div class="custom-select">
                                <option value="0">Looking For</option>
                            </div>

                            <div class="custom-select">
                                <option value="0">Select City</option>
                            </div>
                            <button class="button">Search</button>
                        </div>
                    </div>

                </div>
            </div>




        </div>

    );
}

export default Card;