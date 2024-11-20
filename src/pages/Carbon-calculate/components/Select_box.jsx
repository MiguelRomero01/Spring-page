import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ title, option1, option2, option3 }) {
  // Estado para manejar el valor seleccionado
  const [value, setValue] = React.useState('');

  // Función para manejar el cambio
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Box sx={{ width: 200, marginTop: 2}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{title}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value} // Vincula el valor al estado
            label={title}
            onChange={handleChange} // Maneja los cambios
          >
            <MenuItem value={10}>{option1}</MenuItem>
            <MenuItem value={20}>{option2}</MenuItem>
            <MenuItem value={30}>{option3}</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* Muestra el valor seleccionado */}
      <p>Valor seleccionado: {value}</p>
    </div>
  );
}
