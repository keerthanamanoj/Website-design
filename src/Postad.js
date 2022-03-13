import React from 'react';
import xpic from './images/xpic.png';
import clpic from './images/clpic.png';
import gpic from './images/gpic.png';
import fpic from './images/fpic.png';
import Register from './Register';

import './Postad.css';
function Postad({setpostadclose }) {
    const [Registerview, setregisterview] = React.useState(false)
    return (

        <div className="modalcard">
            {Registerview ? <Register setregisterclose={setregisterview} /> : null}

            <div className="modal">
                <div className="modalcontainer">
                    <div className="modalleft">

                        <div className="login">
                            <div className="login1">
                                <h3>Login</h3>
                            </div>

                            <div className="regist">
                                <h3 onClick={() => setregisterview(true)}>Registration</h3>
                            </div>
                        </div>
                        <div className="custom2">
                            <p>Email</p>
                            <input type="email" placeholder="" />
                        </div>
                        <div className="custom2">
                            <p>Password</p>
                            <input type="password" placeholder="" />
                        </div>

                        <div className="forgetpwd">
                            <div className="showpwd">
                                <label class="container10"><p>Show password</p>
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <div className="forpwd">
                                <p>Forget password</p>

                            </div>
                        </div>
                        <button class="buttonlast">Login</button>

                        <div class="buttonpara"><p>or</p></div>


                        <div className="gpiclast">
                            <button class="buttonlast1">
                                <div className="gpic" ><img src={gpic} style={{ height: '28px', width: '28px' }} />
                                </div>
                                <p style={{ marginBlock: '-15px' }}>Continue with Google</p>
                            </button>
                        </div>
                        <button class="buttonlast2">
                            <div className="fpic"><img src={fpic} style={{ height: '28px', width: '28px' }} />
                            </div>
                            <p style={{ marginBlock: '-15px' }}>Continue with Facebook</p>
                        </button>


                    </div>




                    <div className="modalright">
                        <div className="rightxentice">
                            <div className="rightx">
                                <img src={xpic} />
                            </div>
                            <div className="btncloseright">
                                <img src={clpic} onClick={() => setpostadclose(false)}></img>
                            </div>
                        </div>
                        <div className="data" >
                            <h5>Login to your account to unlock these benefits</h5>
                        </div>
                        <div className="uldata">
                            <ul>
                                <li>Get latest updates about Properties and Projects.</li>
                                <li>Get latest updates about Properties and Projects.</li>
                                <li>Get latest updates about Properties and Projects.</li>
                                <li>Get latest updates about Properties and Projects.</li>
                            </ul>
                        </div>

                    </div>



                </div>
            </div>
        </div>


    );
}
export default Postad;