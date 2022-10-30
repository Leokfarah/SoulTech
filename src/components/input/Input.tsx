import * as React from 'react';
import TextField from '@mui/material/TextField';
import { InputProps } from '../../interfaces/Interfaces';


const Input: React.FC<InputProps> = ({ id, label, type, value, onChange }) => {

    return (
        <>
            <TextField
                id={id}
                label={label}
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default Input