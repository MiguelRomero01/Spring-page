import React from "react";
import calculate_styles from './Calculate.module.css';

function Calculate({JsonValues}){
     let Huella = 0
     const values = Object.values(JsonValues)

     values.forEach(currentValue => {
          Huella += currentValue
     });

     return Huella
}

function Evaluate_Footprint({footprint_value}){
     if (footprint_value === 8) {return "Tu consumo es impresionantemente bajo";}
     if (footprint_value >= 8 && footprint_value <= 20) {return "Tu consumo es bajo, pero aún hay áreas que podrías mejorar.";}
     if (footprint_value > 20 && footprint_value <= 40) {return "Tu consumo es moderado, considera tomar medidas más sostenibles.";}
     if (footprint_value > 40 && footprint_value <= 65) {return "Tu consumo es alto, se recomienda hacer cambios significativos en tu estilo de vida.";}
     if (footprint_value > 65 && footprint_value <= 75) {return "Tu consumo es muy alto, necesitas reducir drásticamente tu huella para ayudar al planeta.";}
     if (footprint_value > 75) {return "Tu consumo es tan alto que mejor muerete";}
     return "Llena todos los campos"
}

export default function CalculateButton({ value }) {
     const footprint = Calculate({ JsonValues: value }); // Calcular la huella
     const evaluation = Evaluate_Footprint({ footprint_value: footprint }); // Evaluar el resultado

     return (
          <div>
               <h3 className={calculate_styles['Result-title']}>TU RESULTADO:</h3>
               <p className={calculate_styles['Result-text']}>{evaluation}</p>
          </div>
     );
}
