import React, { useRef, useState } from "react";
import carbon_styles from './Carbon.module.css';

import Sliders from "./components/Slider";
import BasicSelect from "./components/Select_box";
import { motion, useScroll, useSpring } from 'framer-motion';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalculateButton from "./components/Calculate";
import Footer from "../../Components/layout/footer";

function Carbon() {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 30,
        restDelta: 0.1,
    });

    // Estado para almacenar los valores seleccionados
    const [selectedValues, setSelectedValues] = useState({});
    const [submittedValues, setSubmittedValues] = useState(null); // Para enviar los valores a Calculate


    // Función para manejar los cambios
    const handleValueChange = (question, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [question]: value,
        }));
    };

    // Función que se ejecuta al hacer clic en el botón
    const handleSubmit = () => {
        setSubmittedValues(selectedValues); // Actualiza los valores a enviar
    };

    return (
        <div
            ref={scrollRef}
            style={{
                height: "90vh",
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            <motion.div
                style={{ scaleX }}
                className={carbon_styles.scrollIndicator}
            />

            {/*Transporte*/}
        <Accordion defaultExpanded>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={carbon_styles['Accordion-Elements']}
        >
            <Typography className={carbon_styles['Element-title']}>Transporte</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>
                {/*Question 1*/}
                ¿Con qué frecuencia usas transporte público? del 1 al 10
                <Sliders
                    onValueChange={(value) => handleValueChange("Transp.publico", value)}
                />

                {/*Question 2*/}
                ¿Qué tipo de vehiculo usas?
                <BasicSelect
                    title="Vehiculo"
                    option1="Bicicleta"
                    option2="Moto"
                    option3="Carro"
                    onValueChange={(value) => handleValueChange("Transporte", value)}
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
            className={carbon_styles['Accordion-Elements']}
        >
        <Typography className={carbon_styles['Element-title']}>Consumo de Energía</Typography>
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
                    onValueChange={(value) => handleValueChange("EnergiaRenovable", value)}
                />

                {/*Question 2*/}
                ¿Desconectas los aparatos eléctricos cuando no los utilizas?
                <BasicSelect
                    title="Desconectas dispostitivos"
                    option1="Si"
                    option2="A veces"
                    option3="No"
                    onValueChange={(value) => handleValueChange("DeconectaAparatos", value)}
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
            className={carbon_styles['Accordion-Elements']}
        >
            <Typography className={carbon_styles['Element-title']}>Alimentación</Typography>
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
                    onValueChange={(value) => handleValueChange("Carne", value)}
                />

                {/*Question 2*/}
                ¿Consumes productos locales y de temporada?
                <BasicSelect
                    title="Productos"
                    option1="Si"
                    option2="A veces"
                    option3="No"
                    onValueChange={(value) => handleValueChange("ProdTemporada", value)}
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
            className={carbon_styles['Accordion-Elements']}
        >
            <Typography className={carbon_styles['Element-title']}>Consumo de bienes</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>
                {/*Question 1*/}
                ¿Cuántos dispositivos electrónicos tienes en casa?
                <Sliders
                    onValueChange={(value) => handleValueChange("Disp.Electronicos", value)}
                />

                {/*Question 2*/}
                ¿Con qué frecuencia compras ropa nueva?
                <BasicSelect
                    title="Ropa Nueva"
                    option1="una vez"
                    option2="de 2 a 5 veces"
                    option3="mas de 6 veces"
                    onValueChange={(value) => handleValueChange("RopaNueva", value)}
                />
            </Typography>
            </AccordionDetails>
        </Accordion>
            
            {/* Botón para enviar los valores */}
            <button className={carbon_styles['Calculate-btn']} onClick={handleSubmit}>Calcular tu Huella</button>

            {/* Muestra los valores enviados en el componente Calculate */}
            {submittedValues && <CalculateButton value={submittedValues} />}

<Footer/>

        </div>
    );
}

export default Carbon;
