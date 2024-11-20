import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain='dev-0coi7v0rvmttmsn2.us.auth0.com' 
      clientId='gxxLPP2b8RXzTK4VNGa7rY2b5CDMpChK' 
      redirectUri={window.location.origin}>
      <App/>
    </Auth0Provider>
  </React.StrictMode>
);
reportWebVitals();
