import React from 'react';

import logoSource from './images/logo.png';
import classes from './logo.module.scss';

const { logo, logoImage } = classes;

function Logo() {
  return (
    <div className={logo}>
      <img className={logoImage} src={logoSource} alt="aviasales logo" />
    </div>
  );
}

export default Logo;
