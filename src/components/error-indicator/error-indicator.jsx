
import React from 'react';
import styles from './error-indicator.module.scss';

const ErrorIndicator = () => (
  <div className={styles.errorIndicator}>
    Ошибка при получении данных с сервера
  </div>
);

export default ErrorIndicator;
