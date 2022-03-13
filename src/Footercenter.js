import React from 'react';
// import { ModalFooter } from 'react-bootstrap';
// import { ImNewspaper } from "react-icons/im";
import './Footercenter.css';
import google from './images/google.png';
import apple from './images/apple.png';

function Footercenter() {
    return (
        <div className="f-header">
            <div className="Footer2">
                <div className="dis">
                    <div className="dis1"><h2>Disclaimer</h2></div>
                    <div className="dis2">
                        <p>Please do not share your xentice password, Credit/Debit card pin, other confidential<br /> information with anyone even if he/she claims to be from xentice.
                            We advise our customers to<br /> completely ignore such communications &amp; report to us at support@xentice.com.</p>
                    </div>
                </div>
                <div className="footimage">
                    <img src={google} alt="play-store"></img>
                    <img src={apple} alt="play-store"></img>
                </div>
            </div>
        </div>
        
    );
}

export default Footercenter;