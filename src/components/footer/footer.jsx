import React from 'react';

import styles from './footer.module.scss';

const {
  footer,
  footerText,
} = styles;

function Footer() {
  return (
    <button className={footer} type="button" >
      <span className={footerText}>Показать еще 5 билетов!</span>
    </button>
  );
}

export default Footer;
