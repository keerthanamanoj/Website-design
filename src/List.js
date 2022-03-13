import React from 'react';

import './List.css';

import i1 from './images/i1.png';
import i2 from './images/i2.png';
import i3 from './images/i3.png';
import i4 from './images/i4.png';
import i5 from './images/i5.png';
import i6 from './images/i6.png';
import i7 from './images/i7.png';
import i8 from './images/i8.png';
import i9 from './images/i9.png';
import i10 from './images/i10.png';
import i11 from './images/i11.png';




function List() {
    return (
        <div>
            <div className="IconContainer">
                <div className="Iconbox">
                    <div className="Iconcontent">
                        <div class="colorsicon"><img src={i1} style={{ height: '40px', width: '65 px' }}></img><p>Builders</p></div>
                        <div class="colorsicon"><img src={i2} style={{ height: '40px', width: '65 px' }}></img><p>Architects</p></div>
                        <div class="colorsicon"><img src={i3} style={{ height: '40px', width: '65 px' }}></img><p>Banking</p></div>
                        
                        <div class="colorsicon"><img src={i4} style={{ height: '40px', width: '65 px' }}></img><p>IT Support</p></div>
                        <div class="colorsicon"><img src={i5} style={{ height: '40px', width: '65 px' }}></img><p>Labourers</p></div>
                        <div class="colorsicon"><img src={i6} style={{ height: '40px', width: '65 px' }}></img><p>Mentors</p></div>
                        <div class="colorsicon"><img src={i7} style={{ height: '40px', width: '65 px' }}></img><p>Advocates</p></div>
                        <div class="colorsicon"><img src={i8} style={{ height: '40px', width: '65 px' }}></img><p>Insurance</p></div>
                        <div class="colorsicon"><img src={i9} style={{ height: '40px', width: '65 px' }}></img><p>Lifestyle</p></div>
                        <div class="colorsicon"><img src={i10} style={{ height: '40px', width: '65 px' }}></img><p>Xentice Mart</p></div>
                        <div class="colorsicon"><img src={i11} style={{ height: '40px', width: '65 px' }}></img><p>Eco living</p></div>

                    </div>
                </div>
            </div >




        </div >
    );
}

export default List;