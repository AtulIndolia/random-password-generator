import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { checkbox } from "@material-tailwind/react";

function CheckBox(props) {
    const [state, setState] = useState(props.state)

    function handleChange(event) {
        const name = event.target.name;
        const isChecked = event.target.checked;
        props.handleState(name,isChecked);
        setState({...state,[name]:isChecked})
    }

    const labelStyle = {
        '& .MuiTypography-root': {
            color: "#707070",
            fontSize: "16px",
            fontWeight: "700"
        }
    };

    const checkboxStyle = {
        '& .MuiSvgIcon-root': {
            color: "#707070"
        }
    }

    return <div>
        <div className="Checkbox-div">
            <FormControlLabel
                sx={labelStyle}
                control={
                    <Checkbox
                        name="uppercase"
                        checked={state.uppercase}
                        onChange={handleChange}
                        sx={checkboxStyle}
                    />
                }
                label="Include Uppercase Letters" />
        </div>

        <div className="Checkbox-div">
            <FormControlLabel
                sx={labelStyle}
                control={
                    <Checkbox
                        name="lowercase"
                        checked={state.lowercase}
                        onChange={handleChange}
                        sx={checkboxStyle}
                    />
                }
                label="Include Lowercase Letters" />
        </div>

        <div className="Checkbox-div">
            <FormControlLabel
                sx={labelStyle}
                control={
                    <Checkbox
                        name="numbers"
                        checked={state.numbers}
                        onChange={handleChange}
                        sx={checkboxStyle}
                    />
                }
                label="Include Numbers" />
        </div>

        <div className="Checkbox-div">
            <FormControlLabel
                sx={labelStyle}
                control={
                    <Checkbox
                        name="symbols"
                        checked={state.symbols}
                        onChange={handleChange}
                        sx={checkboxStyle}
                    />
                }
                label="Include Symbols" />
        </div>
    </div>
}

export default CheckBox;