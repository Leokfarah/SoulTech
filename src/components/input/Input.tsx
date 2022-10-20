import * as React from 'react';
import TextField from '@mui/material/TextField';

interface InputProps {
    id: string,
    label: string,
    type: string,
}

const Input: React.FC<InputProps> = ({id, label, type}) => {
    return(  
        <>
        
        <TextField
            id={id}
            label={label}
            type={type}
        /> 

     </>   
    )
}

export default Input