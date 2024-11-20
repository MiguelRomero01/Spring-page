import React, { useRef } from "react";
import news_style from './News.module.css';
import MediaCard from './components/Article';
import Footer from '../../Components/layout/footer'

import { motion, useScroll, useSpring } from 'framer-motion';

function News() {
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
                    className={news_style.scrollIndicator} 
               />
               <div className={news_style['article-list']}>
                    <MediaCard
                    image='/Images/News/components/Reforestacion.jpg'
                    title='Proyectos de Reforestación en Todo el Mundo'
                    text='Iniciativas globales de reforestación buscan restaurar grandes áreas de bosques perdidos, ayudando a absorber dióxido de carbono y contribuyendo a la biodiversidad de muchos ecosistemas.'
                    link='https://tree-nation.com/es/proyectos-de-siembra-de-arboles'
                    />

                    <MediaCard
                    image='/Images/News/components/ciudadVerde.jpg'
                    title='Ciudades del Futuro: Integrando la Naturaleza en el Diseño Urbano'
                    text='Las ciudades están adoptando soluciones innovadoras para integrar la naturaleza en sus estructuras, como techos verdes, parques urbanos y soluciones basadas en la naturaleza, para mejorar la calidad del aire y reducir la huella de carbono.'
                    link='https://blogs.iadb.org/sostenibilidad/es/lo-que-pasa-con-la-naturaleza-es-determinante-para-las-ciudades/'
                    />

                    <MediaCard
                    image='/Images/News/components/reciclaje.jpg'
                    title='La Economía Circular: Cómo el Reciclaje Está Impulsando el Desarrollo Sostenible'
                    text='Con el crecimiento de la economía circular, las empresas están adoptando modelos de producción que promueven el reciclaje y la reutilización de materiales, minimizando el desperdicio y reduciendo la presión sobre los recursos naturales.'
                    link='https://ecolec.es/informacion-y-recursos/economia-circular/#:~:text=La%20Econom%C3%ADa%20Circular%20aporta%20beneficios,y%20apostar%20por%20el%20reciclaje'
                    />
               </div>

               <div className={news_style['article-list']}>
                    <MediaCard
                    image='/Images/News/components/Agua.webp'
                    title='El Desafío Global del Acceso al Agua Potable'
                    text='Más de 2 mil millones de personas en todo el mundo carecen de acceso a agua potable segura. Iniciativas de desarrollo sostenible están trabajando para mejorar la infraestructura de agua en regiones vulnerables.'
                    link='https://www.un.org/es/global-issues/water#:~:text=Los%20desaf%C3%ADos%20del%20agua&text=Todav%C3%ADa%20hay%20alrededor%20de%202.000,potable%20(Banco%20Mundial%202023).'
                    />

                    <MediaCard
                    image='/Images/News/components/agricultura sostenible.jpeg'
                    title='Agricultura Sostenible: El Futuro de la Alimentación Global'
                    text='La agricultura sostenible está transformando la producción de alimentos al enfocarse en prácticas que protegen el medio ambiente, mejoran la salud del suelo y ayudan a mitigar el cambio climático.'
                    link='https://fao.org/global-perspectives-studies/resources/detail/es/c/1169749/'
                    />

                    <MediaCard
                    image='/Images/News/components/CambioClimatico oceanos.jpg'
                    title='Los Efectos del Cambio Climático en los Océanos'
                    text='Un nuevo estudio revela cómo el cambio climático está afectando a los océanos, alterando ecosistemas marinos y poniendo en peligro especies marinas vitales para el equilibrio ecológico.'
                    link='https://www.un.org/es/climatechange/science/climate-issues/ocean-impacts#:~:text=A%20medida%20que%20un%20exceso,marinas%20y%20acidificaci%C3%B3n%20del%20oc%C3%A9ano.'
                    />
               </div>

               <Footer/>
          </div>
     );
}

export default News;
