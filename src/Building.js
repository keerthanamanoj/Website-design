import React from 'react';
import { ImNewspaper } from "react-icons/im";
import './Building.css';
import b1 from './images/b1.jpg';
import b2 from './images/b2.jpg';
import b3 from './images/b3.jpg';
import b4 from './images/b4.jpg';
import b5 from './images/b5.jpg';
import { IoCheckboxOutline } from "react-icons/io5";
import arrowleft from './images/arrowleft.png';
// import arrowright from './images/arrow.png';

function Building() {
    return (
        <div>
            <div className="Container-ad">
                <div className="Container-admain">
                    <div className='content-boxmain'>
                        <div className="boxmain">
                            <div className="leftpart">
                                <h1><ImNewspaper style={{ color: "black" }} /></h1>
                                <span style={{ color: 'black' }}>Commercial Building</span>
                            </div>
                            <div className="rightpart">
                                <a href="">Explore more</a>
                            </div>

                        </div>

                        <div class="fivecard">
                            <div className="arrow"><img src={arrowleft}/></div>
                        <div className="card5">
                            <img src={b1} alt="building" />
                            <div class ="container5">
                            <h5>Shop</h5>
                            <div class="logo5"><a><IoCheckboxOutline style={{ color: "" }} /></a><span style={{ color: 'black' }}><a>Kochi</a></span></div>
                            <div class="para5"><p>Rs 9000/Month</p> </div>
                            <h6>Explore now</h6>
                            
                            </div>
                        </div>
                        <div className="card5">
                            <img src={b2} alt="building" />
                            <div class ="container5">
                            <h5>Property</h5>
                            <div class="logo5"><a><IoCheckboxOutline style={{ color: "" }} /></a><span style={{ color: 'black' }}><a>Chennai</a></span></div>
                            <div class="para5"><p>Rs 9000/Month</p> </div>
                            <h6>Explore now</h6>
                          
                            </div>
                        </div>
                        <div className="card5">
                            <img src={b3} alt="building" />
                            <div class ="container5">
                            <h5>Commercial Store</h5>
                            <div class="logo5"><a><IoCheckboxOutline style={{ color: "" }} /></a><span style={{ color: 'black' }}><a>Bangalore</a></span></div>
                            <div class="para5"><p>Rs 9000/Month</p> </div>
                            <h6>Explore now</h6>
                            </div>
                        </div>
                        <div className="card5">
                            <img src={b4} alt="building" />
                            <div class ="container5">
                            <h5>Outlet</h5>
                            <div class="logo5"><a><IoCheckboxOutline style={{ color: "" }} /></a><span style={{ color: 'black' }}><a>Hyderabad</a></span></div>
                            <div class="para5"><p>Rs 9000/Month</p> </div>
                            <a>Explore now</a>
                            </div>
                        </div>
                        <div className="card5">
                            <img src={b5} alt="building" />
                            <div class ="container5">
                            <h5>Store</h5>
                            <div class="logo5"><a><IoCheckboxOutline style={{ color: "" }} /></a><span style={{ color: 'black' }}><a>Noida</a></span></div>
                            <div class="para5"><p>Rs 9000/Month</p> </div>
                            <h6>Explore now</h6>
                            
                            </div>
                        </div>


                    </div>
                    

                    </div>

                </div>

            </div>
        </div>


    );
}

export default Building;