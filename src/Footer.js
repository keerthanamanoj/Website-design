import React from 'react';
// import { ModalFooter } from 'react-bootstrap';
// import { ImNewspaper } from "react-icons/im";
import './Footer.css';


function Footer() {
    return (
        <div className='footheader'>
            <div className='footer1'>
                <div className='footer1-content'>
                   <div className="footercontentheader"><h1>ABOUT</h1></div> 
                   <div className="footpara">
                       <p>How xentice work</p>
                       <p>Founders Letter</p>
                       <p>Newsroom</p>
                       <p>Investors</p>
                       <p>Xentice Gold</p>
                       <p>Xentice Platinum</p>
                       <p>Startup Support</p>
                       <p>Careers</p>
                   </div>
                </div>
                <div className='footer2-content'>
                <div className="footercontentheader"><h1>EXPLORE</h1></div> 
                   <div className="footpara">
                       <p>Diversity &amp; Discrimination</p>
                       <p>Accessibility</p>
                       <p>Xentice associates</p>
                       <p>Xentice Team</p>
                       <p>Xentice Mall</p>
                       <p>Xstudio</p>
                       <p>Xmoney</p>
                       <p>Xentice spaces</p>
                   </div>
                    
                </div>
                <div className='footer3-content'>
                <div className="footercontentheader"><h1>SERVICES</h1></div> 
                   <div className="footpara">
                       <p>Buttons &amp; Badges</p>
                       <p>Mobile Apps</p>
                       <p>For Companies</p>
                       <p>Mobile Apps</p>
                       <p>Review Professionals</p>
                       <p>Suggested Professionals</p>
                       <p>Resource Centre</p>
                       <p>Community Centre</p>
                   </div>
                </div>
                <div className='footer4-content'>
                <div className="footercontentheader"><h1>SUPPORT</h1></div> 
                   <div className="footpara">
                       <p>Our COVID-19 Response</p>
                       <p>Help Centre</p>
                       <p>Cancellation options</p>
                       <p>Neighbourhood Support</p>
                       <p>Corporate contact</p>
                       <p>Trust &amp; Safety</p>
                       <p>FAQ</p>
                       <p>Payment gateway</p>
                   </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;