import React from 'react';
import xpic from './images/xpic.png';
import clpic from './images/clpic.png';
import Postad from './Postad';

import './Register.css';
function Register({ setregisterclose }) {
    const [Loginview, setloginview] = React.useState(false)


    return (

        <div className="modalcard11">
            {Loginview ? <Postad setLoginclose={setloginview} /> : null}

            <div className="modal11">


                <div className="modalcontainer11">


                    <div className="modalleft11">
                        <div className="login11">
                            <div className="login111" >
                                <h3 onClick={() => setloginview(true)}>Login</h3>
                            </div>
                            <div className="regist11">
                                <h3 >Registration</h3>
                            </div>
                        </div>

                        <div className="custom211">

                            <input type="name" placeholder="What's your name?"></input>
                        </div>
                        <div className="custom211">

                            <input type="email" placeholder="Email"></input>
                        </div>

                        <div className="forgetpwd11">
                            <p>Click the below button to get verification mail.</p>
                        </div>
                        <button class="buttonlast11">Continue</button>



                    </div>



                    <div className="modalright11">
                        <div className="rightxentice11">
                            <div className="rightx">
                                <img src={xpic} />
                            </div>
                            <div className="btncloseright">
                                <img src={clpic} onClick={() => setregisterclose(false)}></img>
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
export default Register;