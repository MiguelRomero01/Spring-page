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
                linkButton='/About'
                buttonText='Conoce tu huella'
            />

            <ShortInfo 
                image='/Images/Home/components/buenaVoluntad.jpg'
                mainTitle='¿Tienes curiosidad?'
                information='Si es así, entonces conocenos y entiende por qué amamos lo que hacemos'
                linkButton='/About'
                buttonText='Conócenos'
            />

            <div className={Home_Styles['review-list']}>
                <Review
                    photo='/Images/Home/components/persona1.jpg'
                    review='Todos tenemos un impacto en este planeta. Qué mejor que saberlo y disminuirlo ¿Cierto?'
                />
                <Review
                    photo='/Images/Home/components/persona2.jpg'
                    review='Todos tenemos un impacto en este planeta. Qué mejor que saberlo y disminuirlo ¿Cierto?'
                />
                <Review
                    photo='/Images/Home/components/persona3.jpg'
                    review='Todos tenemos un impacto en este planeta. Qué mejor que saberlo y disminuirlo ¿Cierto?'
                />
            </div>

            <Footer/>
        </div>
    );
}

export default Home;
