import React from 'react';

import './app.css';
import Logo from '../logo';
import Filter from '../filter';
import Tabs from '../tabs';
import Tickets from '../tickets';

const App = () => {
  const hello = 'Hello World';

  return (
    <div className="app">
      <Logo />
      <Filter />
      <Tabs />
      <Tickets />
      <p>{hello}</p>
    </div>
  )
};

export default App;