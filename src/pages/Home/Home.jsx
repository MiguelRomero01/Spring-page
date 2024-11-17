import React, { useRef } from "react";
import { motion, useScroll, useSpring } from 'framer-motion';

import Home_Styles from './Home.module.css';
import review_styles from '../../Components/common/review.module.css';

import Carousel from "./components/carousel";
import ShortInfo from "../../Components/common/Info";
import Review from "../../Components/common/review";

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
                height: "100vh", // Altura para hacer que el contenedor sea scrollable
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
            <div className={review_styles['review-list']}>
                <Review
                    photo='/Images/Home/components/huella-ecologica.jpg'
                    review='Todos tenemos un impacto en este planeta. Qué mejor que saberlo y disminuirlo ¿Cierto?'
                />
                <Review
                    photo='/Images/Home/components/huella-ecologica.jpg'
                    review='Todos tenemos un impacto en este planeta. Qué mejor que saberlo y disminuirlo ¿Cierto?'
                />
                <Review
                    photo='/Images/Home/components/huella-ecologica.jpg'
                    review='Todos tenemos un impacto en este planeta. Qué mejor que saberlo y disminuirlo ¿Cierto?'
                />
            </div>
        </div>
    );
}

export default Home;
