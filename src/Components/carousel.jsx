import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel_Style from "../Styles/components/Carousel.module.css";

function Caarousel() {
     const settings = {
          dots: true,
          fade: true,
          infinite: true,
          speed: 800,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          waitForAnimate: false,
     };

     return (
     <div className={Carousel_Style.sliderContainer}>
          <Slider {...settings}>
          <div className={Carousel_Style.Slider}>
               <div className={Carousel_Style.textOverlay}>
               <h2>Cuidemos el planeta</h2>
               <p>Juntos podemos hacer la diferencia.</p>
               </div>
               <img src={"/Images/Cuidar-el-planeta.jpg"} alt="Imagen 1" />
          </div>

          <div className={Carousel_Style.Slider}>
               <div className={Carousel_Style.textOverlay}>
               <h2>Plantas para un futuro verde</h2>
               <p>Cultiva vida, cultiva esperanza.</p>
               </div>
               <img src={"/Images/plantas.jpg"} alt="Imagen 2" />
          </div>

          <div className={Carousel_Style.Slider}>
               <div className={Carousel_Style.textOverlay}>
               <h2>Unidos por el cambio</h2>
               <p>Pequeñas acciones, grandes resultados.</p>
               </div>
               <img src={"/Images/grupo-voluntarios-recogiendo-basura.jpg"} alt="Imagen 3" />
          </div>
          </Slider>
     </div>
     );
}

export default Caarousel;
