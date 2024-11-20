import React,{useRef} from "react";

import carbon_styles from './Carbon.module.css';
import Sliders from "./components/Slider";
import BasicSelect from "./components/Select_box";

import { motion, useScroll, useSpring } from 'framer-motion';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Carbon(){
  const scrollRef = useRef(null); // Referencia del contenedor scrollable
  const { scrollYProgress } = useScroll({ container: scrollRef }); // Sincroniza con el contenedor
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 300,
      damping: 30,
      restDelta: 0.1
  });
  return(
        <div
            ref={scrollRef}
            style={{
                height: "90vh", // Altura para hacer que el contenedor sea scrollable
                overflowY: "scroll", // Habilita el scroll
                overflowX:"hidden",
            }}
        >
            {/* Barra de progreso */}
            <motion.div
                style={{
                    scaleX, // Vincula con el progreso del scroll
                }}
                className={carbon_styles.scrollIndicator} 
            />

        {/*Transporte*/}
        <Accordion defaultExpanded>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
        >
            <Typography>Transporte</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>
                {/*Question 1*/}
                ¿Con qué frecuencia usas transporte público? del 1 al 10
                <Sliders/>

                {/*Question 2*/}
                ¿Qué tipo de vehiculo usas?
                <BasicSelect
                    title="Vehicle"
                    option1="Carro"
                    option2="Moto"
                    option3="Bicicleta"
                />
            </Typography>
            </AccordionDetails>
        </Accordion>

        {/*Consumo de energia*/}
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
        >
        <Typography>Consumo de Energía</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>
                {/*Question 1*/}
                ¿Usas energía renovable en casa?
                <BasicSelect
                    title="E. renovable"
                    option1="Si"
                    option2="Tal vez"
                    option3="No"
                />

                {/*Question 2*/}
                ¿Desconectas los aparatos eléctricos cuando no los utilizas?
                <BasicSelect
                    title="Desconectas dispostitivos"
                    option1="Si"
                    option2="A veces"
                    option3="No"
                />
            </Typography>
            </AccordionDetails>
        </Accordion>

        {/*Alimentacion*/}
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
        >
            <Typography>Alimentación</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>
                {/*Question 1*/}
                ¿Cuántas veces a la semana comes carne o productos lácteos?
                <BasicSelect
                    title="Productos"
                    option1="0 veces"
                    option2="1-3 veces"
                    option3="mas de 4 veces"
                />

                {/*Question 2*/}
                ¿Consumes productos locales y de temporada?
                <BasicSelect
                    title="Productos"
                    option1="Si"
                    option2="A veces"
                    option3="No"
                />
            </Typography>
            </AccordionDetails>
        </Accordion>

        {/*Consumo de bienes*/}
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
        >
            <Typography>Consumo de bienes</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>
                {/*Question 1*/}
                ¿Cuántos dispositivos electrónicos tienes en casa?
                <Sliders/>

                {/*Question 2*/}
                ¿Con qué frecuencia compras ropa nueva?
                <BasicSelect
                    title="Ropa Nueva"
                    option1="una vez"
                    option2="de 2 a 5 veces"
                    option3="mas de 6 veces"
                />
            </Typography>
            </AccordionDetails>
        </Accordion>

        <button>Calcular tu huella</button>
    </div>
    );
}


export default Carbon