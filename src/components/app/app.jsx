import React from 'react';

import Filters from '../filters';
import Sorters from '../sorters';
import TicketList from '../ticket-list';

import styles from './styles/app.module.scss';
import logoSource from './logo.png';

const { app, logo, logoImage, main, ticketsSection } = styles;

const App = () => (
  <div className={app}>
    <div className={logo}>
      <img className={logoImage} src={logoSource} alt="aviasales logo" />
    </div>
    <main className={main}>
      <Filters />
      <section className={ticketsSection}>
        <Sorters />
        <TicketList />
      </section>
    </main>
  </div>
);

export default App;
