import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ title, option1, option2, option3, onValueChange }) {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (onValueChange) {
            onValueChange(newValue); // Llama a la función pasada por props
        }
    };

    return (
        <div>
            <Box sx={{ width: 200, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={title}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>{option1}</MenuItem>
                        <MenuItem value={5}>{option2}</MenuItem>
                        <MenuItem value={10}>{option3}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}
