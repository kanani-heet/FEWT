import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Wel from './Wel';
import User from './User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Wel name="samay akho hali niklyo ne toy tame to tya j rahya"/>
    <User />
  </>
);
