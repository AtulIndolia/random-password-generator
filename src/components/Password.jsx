import React,{useState} from "react";
import ContentCopyIcon from '@mui/icons-material/CopyAll';
import IconButton from '@mui/material/IconButton';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Password(props) {
    const [password, setPassword] = useState(props.password)
    const [copyState, setCopyState] = useState(false)

    return <div className="password">
        <p className="display-inline">{password}</p>
        <CopyToClipboard
            text={password}
            onCopy={() => setCopyState(true)}>
            <IconButton className="right-float color-white padding-zero" aria-label="add" size="large">
                <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
        </CopyToClipboard>
    </div>
}

export default Password;