import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="512875112315-n6u74m6sjl2uhj3ptd94p09pei4ja7s4.apps.googleusercontent.com"> 
      <App />
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
