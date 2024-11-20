import React from "react";
import login_styles from './Login.module.css'
import { useAuth0 } from "@auth0/auth0-react"; 
import LoginIcon from '@mui/icons-material/Login';

export const LoginButoon = () => {
     const  {loginWithRedirect}= useAuth0();

     return(
          <button className={login_styles.loginBtn}
          onClick={() => loginWithRedirect()}
          ><LoginIcon/></button>
     );
}