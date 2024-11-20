import React, { useRef } from "react";
import { motion, useScroll, useSpring } from 'framer-motion';

import Home_Styles from './Home.module.css';

import Carousel from "./components/carousel";
import ShortInfo from "../../Components/common/Info";
import Review from "./components/review";
import Footer from "../../Components/layout/footer";

function Home() {
    const scrollRef = useRef(null); // Referencia del contenedor scrollable
    const { scrollYProgress } = useScroll({ container: scrollRef }); // Sincroniza con el contenedor
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 30,
        restDelta: 0.1
    });

    return (
        <div
            ref={scrollRef}
            style={{
                height: "93vh", // Altura para hacer que el contenedor sea scrollable
                overflowY: "scroll", // Habilita el scroll
                overflowX:"hidden",
            }}
        >
            {/* Barra de progreso */}
            <motion.div
                style={{
                    scaleX, // Vincula con el progreso del scroll
                }}
                className={Home_Styles.scrollIndicator} 
            />
            <Carousel />

            {/* Contenido principal */}
            <ShortInfo 
                image='/Images/Home/components/huella-ecologica.jpg'
                mainTitle='Descubre tu Huella de carbono'
                information='Todos tenemos un impacto en este planeta. Qué mejor que saberlo y disminuirlo ¿Cierto?'
                linkButton='/carbon'
                buttonText='Conoce tu huella'
            />

            <ShortInfo 
                image='/Images/Home/components/buenaVoluntad.jpg'
                mainTitle='¿Tienes curiosidad?'
                information='Si es así, entonces conocenos y entiende por qué amamos lo que hacemos'
                linkButton='/About'
                buttonText='Conócenos'
            />

            <ShortInfo 
                image='/Images/Home/components/noticias.jpg'
                mainTitle='Descubre lo ultimo en noticias'
                information='Ve a nuestra sección de noticias y descrubre como está el mundo actualmente en el medio ambiente'
                linkButton='/About'
                buttonText='Descubrélas aquí'
            />

            <div className={Home_Styles['review-list']}>
                <Review
                    photo='/Images/Home/components/persona1.jpg'
                    review='Spring me permite ayudar al planeta de manera simple y efectiva. Participar en sus proyectos de reforestación y educación ambiental me hace sentir parte de un gran cambio. ¡Es inspirador!'
                />
                <Review
                    photo='/Images/Home/components/persona2.jpg'
                    review='Con Spring descubrí que pequeñas acciones colectivas logran un gran impacto. Su forma de conectar a las personas con causas ambientales es motivadora y fácil de seguir. ¡Me encanta!'
                />
                <Review
                    photo='/Images/Home/components/persona3.jpg'
                    review='Spring me enseñó que juntos podemos hacer la diferencia. Sus programas de reciclaje y eventos son prácticos y emocionantes. ¡Un servicio que realmente ayuda al planeta!'
                />
            </div>

            <Footer/>
        </div>
    );
}

export default Home;
