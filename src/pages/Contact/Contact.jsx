import React from "react";
import contact_styles from "./Contact.module.css";

function Contact() {
     return (
     <div className={contact_styles['contact-container']}>
          <div className={contact_styles['form-container']}>
          <h2>Contacto</h2>
          <form 
               action="https://formspree.io/f/xrbzklzp"
               method="POST"
          >
               <label htmlFor="nombre">Nombre *</label><br />
                    <input 
                         type="text" 
                         name="nombre" 
                         id="nombre" 
                         placeholder="Ingresa tu nombre" 
                         required 
                    />

               <label htmlFor="email">Correo Electrónico *</label><br />
                    <input 
                         type="email" 
                         name="correo" 
                         id="correo" 
                         placeholder="Ingresa tu Correo Electrónico" 
                         required 
                    />
               
               <label htmlFor="telefono">Teléfono *</label><br />
                    <input 
                         type="tel" 
                         name="telefono" 
                         id="telefono" 
                         placeholder="Ingresa tu teléfono" 
                         required 
                    />

               <label htmlFor="mensaje">Mensaje *</label><br />
                    <textarea 
                         name="mensaje" 
                         id="mensaje" 
                         rows="4" 
                         placeholder="Ingresa tu mensaje" 
                         required
                    ></textarea>
                    <input 
                         type="submit" 
                         value="Enviar Mensaje" 
                         className="btn-enviar"
                    />

                    <input 
                         type="text" 
                         name="_honey" 
                         style={{ display: 'none' }}
                    />
               </form>
          </div>

          <div className={contact_styles['image-container']}></div>
     </div>
     );
}

export default Contact;
