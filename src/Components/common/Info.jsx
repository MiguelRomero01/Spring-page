import React from "react";

import info_styles from './info.module.css';
import { Link } from 'react-router-dom';

function ShortInfo({image, mainTitle, information, linkButton, buttonText}){
     return(
          <div className={info_styles['Section-Container']}>
          
               {/* Image on the left*/}
               <aside className={info_styles.MediaLeft}>
                    <img src={image} alt="ImageLeft" />
               </aside>

               {/* Text on the right side*/}
               <aside className={info_styles['Text-Container-right']}>
                    <div className={info_styles['mainText-container']}>
                         <h2>{mainTitle}</h2>
                         <p className={info_styles.Text}>
                              {information}
                         </p>

                         <Link to={linkButton}>
                              <button className={info_styles['info-Button']}>{buttonText}</button>
                         </Link>
                    </div>
               </aside>
          </div>
     );
}

export default ShortInfo;