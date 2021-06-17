
import React from 'react';
import {withClass} from '../hoc';

import Logo from '../logo';
import Filters from '../filters';
import Sorters from '../sorters';
import TicketListContainer from '../../containers/ticket-list-container';

import styles from './styles/app.module.scss';

const {app, main, ticketsSection} = styles;

const App = () => (
  <>
    <Logo />
    <main className={main}>
      <Filters />
      <section className={ticketsSection}>
        <Sorters />
        <TicketListContainer />
      </section>
    </main>
  </>
);

export default withClass(app)(App)
