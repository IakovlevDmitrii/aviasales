
import React from 'react';
import {withClass} from '../hoc';

import logoSource from './logo.png';
import styles from './logo.module.scss';

const {logo, logoImage} = styles;

const Logo = () => (
  <img
    className={logoImage}
    src={logoSource}
    alt="aviasales logo"
  />
);

export default withClass(logo)(Logo);
