import React, { useState } from "react";
import Password from "./Password.jsx";
import CharacterLength from "./CharacterLength.jsx";
import Checkbox from "./CheckBox.jsx";
import Strength from "./Strength.jsx";
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/CopyAll';
import IconButton from '@mui/material/IconButton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PasswordStrengthBar from 'react-password-strength-bar';

function App() {

    const [passwordLength, setPasswordLength] = useState(8);
    const [password, setPassword] = useState("");
    const [copyState, setCopyState] = useState(false)

    const [state, setState] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false
    })

    function handlePasswordLength(length) {
        setPasswordLength(length);
    }

    function handleState(name, isChecked) {
        setState({ ...state, [name]: isChecked })
    }

    function generatePassword() {
        let password = "";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789"
        const symbols = "!@#$%^&*()"

        const everything = lowerCase + upperCase + numbers + symbols;
        let remainingLength = passwordLength;

        if (passwordLength > 0) {
            if (state.uppercase && remainingLength) {
                const randomIndex = Math.floor(Math.random() * lowerCase.length);
                password += upperCase[randomIndex];
                remainingLength--;
            }
            if (state.lowercase && remainingLength) {
                const randomIndex = Math.floor(Math.random() * upperCase.length);
                password += lowerCase[randomIndex];
                remainingLength--;
            }
            if (state.numbers && remainingLength) {
                const randomIndex = Math.floor(Math.random() * numbers.length);
                password += numbers[randomIndex];
                remainingLength--;
            }
            if (state.symbols && remainingLength) {
                const randomIndex = Math.floor(Math.random() * symbols.length);
                password += symbols[randomIndex];
                remainingLength--;
            }

            for (let i = 0; i < remainingLength; i++) {
                const randomIndex = Math.floor(Math.random() * everything.length);
                password += everything[randomIndex];
            }
        }
        var shuffledPassword = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
        console.log(shuffledPassword)
        setPassword(shuffledPassword);
    }

    return <div className="main-div">
        <div className="password">
            <p className="display-inline">{password}</p>
            <CopyToClipboard
                text={password}
                onCopy={() => setCopyState(true)}>
                <IconButton className="right-float color-white padding-zero" aria-label="add" size="large">
                    <ContentCopyIcon></ContentCopyIcon>
                </IconButton>
            </CopyToClipboard>
        </div>
        <CharacterLength passwordLength={passwordLength} handlePasswordLength={handlePasswordLength}></CharacterLength>
        <Checkbox state={state} handleState={handleState}></Checkbox>
        <div className="strength-div">
            <p className="display-inline strength">STRENGTH</p>
            <div className="right-float strength-bar">
                <PasswordStrengthBar password={password} />
            </div>
        </div>
        <Button onClick={generatePassword} className="generate-button" variant="contained">Generate</Button>
    </div >
}

export default App;