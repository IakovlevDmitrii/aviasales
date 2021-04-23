import React from 'react';

import './logo.css';
import logoSource from './logo.png';

function Logo() {

  return (
    <div className="logo">
      <img className="logo__image" src={logoSource} alt='logo' />
    </div>
  )
}

export default Logo;