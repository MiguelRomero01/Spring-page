import React,{useRef} from "react";
import about_styles from './About.module.css';

import { motion, useScroll, useSpring } from 'framer-motion';

import AboutInfo from "./components/AboutInfo";
import Footer from "../../Components/layout/footer";

function About(){
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
                    className={about_styles.scrollIndicator} 
               />
               
               <AboutInfo
                    image="/Images/About/components/Vision.jpg"
                    title="Nuestra vision"
                    info="En Spring soñamos con un mundo donde el progreso humano y la naturaleza coexistan en perfecta armonía. Nuestra visión es ser reconocidos globalmente como referentes en la creación de soluciones sostenibles que combinen el cuidado del medio ambiente con el desarrollo social y económico."
                    info2="Aspiramos a regenerar ecosistemas, reducir huellas ecológicas y empoderar a comunidades para que adopten estilos de vida sostenibles. Queremos ser catalizadores de un cambio global que inspire a gobiernos, empresas y personas a replantear cómo interactúan con el planeta, asegurando un legado positivo para generaciones futuras."
               />

               <AboutInfo
                    image="/Images/About/components/Mision.jpg"
                    title="Nuestra Mision"
                    info="Nuestra misión es regenerar y proteger el medio ambiente mientras promovemos el desarrollo sostenible en todas sus formas. Lo hacemos impulsando tecnologías limpias que reduzcan el impacto ambiental, formando a las personas para que tomen decisiones conscientes y estableciendo alianzas estratégicas que multiplican nuestro alcance. Trabajamos para garantizar un equilibrio entre progreso y naturaleza, fomentando prácticas responsables que beneficien a todos los sectores de la sociedad."
               />

               <AboutInfo
                    image="/Images/About/components/Porque lo hacemos.jpg"
                    title="¿Por qué lo hacemos?"
                    info="Lo hacemos porque el planeta está en crisis, y cada acción que tomemos ahora es crucial para revertir los daños. Vivimos en un momento en el que el cambio climático, la contaminación y la sobreexplotación de recursos no solo afectan a la biodiversidad, sino también a las economías y comunidades."
                    info2=" Creemos que no tiene que ser así, que es posible construir un modelo donde el desarrollo y el medio ambiente sean aliados y no enemigos. Nos mueve la convicción de que cada pequeño paso puede generar un gran impacto y de que juntos podemos crear un futuro más verde, equitativo y sostenible."
               />

               <AboutInfo
                    image="/Images/About/components/Historia.jpg"
                    title="Nuestra historia"
                    info="Spring nació de la visión compartida de un grupo de personas preocupadas por la creciente crisis ambiental y la falta de soluciones concretas. Nos dimos cuenta de que muchos de los problemas del mundo no son insuperables, sino que requieren un enfoque nuevo y colaborativo. "
                    info2="Comenzamos con proyectos comunitarios para restaurar ecosistemas locales y educar a las personas sobre prácticas sostenibles, pero nuestra pasión nos llevó a crecer, desarrollar tecnologías innovadoras y asociarnos con actores clave para amplificar nuestro impacto. Hoy, somos un movimiento que no solo propone, sino que actúa, siempre guiado por la esperanza de un planeta más sano y equilibrado."
               />

               <AboutInfo
                    image="/Images/About/components/Necesitamos.jpg"
                    title="Te necesitamos"
                    info="Te necesitamos porque el cambio no ocurre solo; requiere de manos, mentes y corazones unidos por una misma causa. En Spring sabemos que cada persona tiene algo único que aportar, ya sea sumándose a nuestras iniciativas, adoptando prácticas sostenibles o simplemente compartiendo nuestro mensaje. "
                    info2="Contigo podemos llevar nuestras soluciones más lejos, inspirar a más personas y generar un impacto aún mayor. Este es un desafío colectivo, y con tu apoyo podemos demostrar que un futuro donde el desarrollo y la sostenibilidad convivan es posible. ¡El cambio empieza contigo!"
               />

               <Footer/>
          </div>
     );
}

export default About;