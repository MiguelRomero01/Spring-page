import React from "react";
import styles from "./footer.module.css"; 
import { Link } from 'react-router-dom';  //Routers to pages

//Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
     return (
          <footer className={styles.footer}> 
               <div className={styles.footerContent}> 
                    <p>© 2024 Spring</p>
                    <ul className={styles.footerLinks}>
                         <li><Link to='/contact'>Contáctenos</Link></li>
                         <li><Link to=''>Privacidad</Link></li>
                         <li><Link to=''>Términos y condiciones</Link></li>
                    </ul>
                    <div className={styles.footerIcons}>
                         <a href="#linkedin" aria-label="LinkedIn" className={styles.iconLinkedin}><LinkedInIcon/></a>
                         <a href="#twitter" aria-label="X" className={styles.iconTwitter}><XIcon/></a>
                         <a href="#instagram" aria-label="Instagram" className={styles.iconInstagram}><InstagramIcon/></a>
                         <a href="#youtube" aria-label="Youtube" className={styles.iconYoutube}><YouTubeIcon/></a>
                         <a href="https://discord.gg/TbSCNph5" aria-label="Discord"className={styles.iconDiscord}><img src="/Images/Home/components/LogoDiscord.png" alt="discord"/></a>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;
