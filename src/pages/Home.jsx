import React from "react";
import '../Styles/sections/Home.css';

import Navbar from '../Components/general/navbar';
import Carousel from "../Components/carousel";

function Home(){
     return(
          <div>
               <Navbar/>
               <Carousel/>
          </div>
     )
}

export default Home;