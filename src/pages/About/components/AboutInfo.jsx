import React from "react";

import info_styles from './AboutInfo.module.css';

function AboutInfo({image, title, info, info2}){
     return(
          <div className={info_styles['about-container']}>   
               <h2>{title}</h2>
               <img src={image} alt="ImageHistory" className={info_styles['Img-about']}/>
               <p className={info_styles['Text-about']}>
                    {info}<br/><br/>
                    {info2}
               </p>
          </div>
     );
}

export default AboutInfo;