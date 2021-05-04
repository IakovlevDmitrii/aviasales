import React from 'react';

import Logo from '../logo';
import Filters from '../filters';
import Tabs from '../tabs';
import Tickets from '../tickets';
import Footer from '../footer';
import classes from './css/app.module.scss';

const { app, main, tickets } = classes;

function App() {
  return (
    <div className={app}>
      <Logo />
      <div className={main}>
        <Filters />
        <div className={tickets}>
          <Tabs />
          <Tickets />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
