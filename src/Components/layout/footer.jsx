import React from "react";
import styles from "./footer.module.css"; 

function Footer() {
     return (
          <footer className={styles.footer}> 
               <div className={styles.footerContent}> 
                    <p>© 2024 Spring</p>
                    <ul className={styles.footerLinks}>
                         <li><a href="#carreras">Carrera</a></li>
                         <li><a href="#contactenos">Contáctenos</a></li>
                         <li><a href="#privacidad">Privacidad</a></li>
                         <li><a href="#cookies">Aviso sobre cookies</a></li>
                         <li><a href="#terminos">Términos y condiciones</a></li>
                    </ul>
                    <div className={styles.footerIcons}> {/* styles.footerIcons */}
                         <a href="#linkedin" aria-label="LinkedIn" className={styles.iconLinkedin}></a>
                         <a href="#twitter" aria-label="X" className={styles.iconTwitter}></a>
                         <a href="#instagram" aria-label="Instagram" className={styles.iconInstagram}></a>
                         <a href="#youtube" aria-label="YouTube" className={styles.iconYoutube}></a>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;
