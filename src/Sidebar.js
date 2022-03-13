import React from 'react';
import clpic from './images/clpic.png';
import './Sidebar.css';
import { Sidebardata } from './Sidebardata';
// import { btnclose } from './images/btnclose.png';


function Sidebar({ setsidebarclose }) {
    return (

        <div className="ss">
        <div className="Sidebar">
            <ul className="Sidebarlist">
            <img src={clpic} alt="img" onClick={() => setsidebarclose(false)}></img>
                {/* <button className="tngd" onClick={() => setsidebarclose(false)}>{btnclose}</button> */}
                {Sidebardata.map((value, key) => {
                    return (
                       
                            <li key={key}
                                className="row"
                                onClick={() => { window.location.pathname = value.link }}
                            >
                                <div className="sidebartitle1">{value.title1}</div>
                                <div className="fr">
                                <div className="sidebaricons">{value.icon}</div>
                                <div className="sidebartitle">{value.title}</div>
                                <div className="sidebariconss">{value.icon1}</div>
                                </div>




                            </li>
                        
                            )


                })}





            </ul>
        </div>
        </div>

    );
}

export default Sidebar;