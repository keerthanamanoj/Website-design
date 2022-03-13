import React from 'react';

import './Navbar.css';
import xentice_logo from './images/xentice_logo.png';
import navicon3 from './images/navicon3.png';

import { ImNewspaper } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { MdCastForEducation } from "react-icons/hi";
import { ImBook } from "react-icons/im";
import { ImLibrary } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { ImEqualizer } from "react-icons/im";
import { ImFilesEmpty } from "react-icons/im";

import { ImInsertTemplate } from "react-icons/im";
import { ImFloppyDisk } from "react-icons/im";


import { IoBagCheckOutline } from "react-icons/io5";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";


import Sidebar from './Sidebar';
import Postad from './Postad';



function Navbar() {
    const [Sidebarview, setsidebarview] = React.useState(false)
    const [Postadview, setpostadview] = React.useState(false)
    return (


        <div className='navbarmain'>


            {Sidebarview ? <Sidebar setsidebarclose={setsidebarview} /> : null}
            {Postadview ? <Postad setpostadclose={setpostadview} /> : null}

            {/* <div className='navbar_container'> */}
            <div className='logo-container'>
                <div className="join">
                    <div className="iconn">
                        <img src={navicon3} onClick={() => setsidebarview(true)} role="button" style={{ height: '45px', width: '65px' }}></img>
                    </div>
                    <div className="img1">
                        <img src={xentice_logo} style={{ height: '65px', width: '160px' }}></img>
                    </div>
                </div>
                <div className="logo-right">
                    <div class="logo3"><IoBagCheckOutline style={{ color: "" }} />
                        <span style={{ color: 'blue' }} ><a onClick={() => setpostadview(true)} role="button">Post Ad </a></span></div>
                    <div class="logo3"><IoBookmarksOutline style={{ color: "" }} />
                        <span style={{ color: 'blue' }}><a>Near Me</a></span></div>
                    <div class="logo3"><IoCheckboxOutline style={{ color: "" }} />
                        <span style={{ color: 'blue' }}><a>LogIn/Sign Up</a></span></div>
                </div>

            </div>
            {/* </div> */}



            <div className='Subheader'>
                <div className='SubheaderSlider'>
                    <div className='SubheaderSlider-content'>
                        <div class="Navbar1" style={{ display: "flex", margin: "auto" }}>
                            <div class="iconcard">

                                <div class="coloricon" id="one"><h1><ImNewspaper style={{ color: "whitesmoke" }} /></h1><label for="ImNewspaper">commercial shop</label></div>
                                <div class="coloricon"><h1> <ImBook style={{ color: "white" }} /></h1><label for="ImBook">Commercial office</label></div>
                                <div class="coloricon"><h1> <ImLibrary style={{ color: "white" }} /></h1><label for="ImLibrary">Commercial building</label></div>
                                <div class="coloricon"><h1> <ImCalendar style={{ color: "white" }} /></h1><label for="ImCalendar">Industrial building</label></div>
                                <div class="coloricon"><h1><ImEqualizer style={{ color: "white" }} /></h1><label for="ImEqualizer">Industrial land</label></div>
                                <div class="coloricon"><h1> <ImFilesEmpty style={{ color: "white" }} /></h1><label for="ImFilesEmpty">Co-working space</label></div>
                                <div class="coloricon"> <h1> <ImInsertTemplate style={{ color: "white" }} /></h1><label for="ImInsertTemplate">Private office</label></div>
                                <div class="coloricon"><h1> <ImFloppyDisk style={{ color: "white" }} /></h1><label for="ImFloppyDisk">Meeting room</label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>






    )
}

export default Navbar;