import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider domain="dev-nchchhqx.us.auth0.com" clientId="p3EmQxS759E5TjmeIcrv2q2aZm12Syc6" redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>, document.getElementById('root'));
