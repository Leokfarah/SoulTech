import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputProps {
    label: string,
}

const Input: React.FC<InputProps> = ({label}) => {
    return(  
        
            <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
          id="filled-search"
          label={label}
          type="text"
          variant="filled"
        />


            </Box>
        
    )
}

export default Input