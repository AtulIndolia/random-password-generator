import React from "react";
import PasswordStrengthBar from 'react-password-strength-bar';

function Strength(){

    return <div className="strength-div">
    <p className="display-inline strength">STRENGTH</p>
    <div className="right-float strength-bar">
        <PasswordStrengthBar password="p123456" />
    </div>
    </div>

}

export default Strength;