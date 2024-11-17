import React from "react";
//Liberies 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//main style
import Carousel_Style from "./Carousel.module.css";

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
          {/*Slider 1*/}
          <div className={Carousel_Style.Slider}>
               <div className={Carousel_Style.textOverlay}>
               <h2>Cuidemos el planeta</h2>
               <p>Gracias a tí podemos hacer la <b className={Carousel_Style.important}>diferencia</b>.</p>
               </div>
               <img src={"/Images/Home/components/Cuidar-el-planeta.jpg"} alt="Imagen 1" />
          </div>

          {/*Slider 2*/}
          <div className={Carousel_Style.Slider}>
               <div className={Carousel_Style.textOverlay}>
               <h2>Plantas para un futuro verde</h2>
               <p>Hemos plantado mas de <b className={Carousel_Style.important}>10 millones</b> de árboles</p>
               </div>
               <img src={"/Images/Home/components/plantas.jpg"} alt="Imagen 2" />
          </div>

          {/*Slider 3*/}
          <div className={Carousel_Style.Slider}>
               <div className={Carousel_Style.textOverlay}>
               <h2>Unidos por el cambio</h2>
               <p>Hemos recogido mas de <b className={Carousel_Style.important}>50 Toneladas</b> de basura</p>
               </div>
               <img src={"/Images/Home/components/grupo-voluntarios-recogiendo-basura.jpg"} alt="Imagen 3" />
          </div>
          </Slider>
     </div>
     );
}

export default Caarousel;
