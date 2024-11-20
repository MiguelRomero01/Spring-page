import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
     {
          value: 1,
          label: 'Nada',
     },
     {
          value: 5,
          label: 'Más o menos',
     },
     {
          value: 10,
          label: 'Demasiado',
     },
];

function valuetext(value) {
     return `${value}`;
}

function Sliders({onValueChange}) {
     // Estado para almacenar el valor del slider
     const [sliderValue, setSliderValue] = useState(5);

     // Manejar el cambio del slider
     const handleSliderChange = (event, newValue) => {
          setSliderValue(newValue);
          
          if (onValueChange) {
              onValueChange(newValue); // Llama a la función pasada por props
          }
     };

     return (
          <div>
               <Box sx={{ width: 300, padding:5}}>
                    <Slider 
                         aria-label="Custom marks" 
                         defaultValue={5} 
                         getAriaValueText={valuetext}
                         valueLabelDisplay="auto" 
                         step={1}
                         min={1}
                         max={10}
                         marks={marks}
                         value={sliderValue} // Vincular al estado
                         onChange={handleSliderChange} // Manejar el cambio
                         style={{color:'#93D94E'}}
                    />
               </Box>
          </div>
     );
}

export default Sliders;
