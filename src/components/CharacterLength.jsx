import React,{useState} from "react";
import Slider from '@mui/material/Slider';

function CharacterLength(props) {

    const [charLength,setCharLength]=useState(props.passwordLength);

    function handleChange(event){
        props.handlePasswordLength(event.target.value)
        setCharLength(event.target.value)
    }

    return <div className="character-length">
        <p className="display-inline">Character Length<p className="right-float color-white letter-padding">{charLength}</p></p>
        <div className="w-full">
            <Slider
                defaultValue={charLength}
                value={charLength}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChange}
                sx={{
                    color: '#2A8B8B',
                    height: "7px",
                    '& .MuiSlider-thumb': {
                        color: "white",
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: "black",
                    },
                }} />
        </div>
    </div>
}

export default CharacterLength;