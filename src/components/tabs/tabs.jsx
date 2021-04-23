import React from 'react';

import './tabs.css';

const Tabs = () => {
  const tabList = [
    {tab: 'cheapest', label: 'Самый дешевый'},
    {tab: 'fastest', label: 'Самый быстрый'},
    {tab: 'optimal', label: 'Оптимальный'},
  ];

  return (
    <div className='tabs'>
      <button type='button'>{tabList[0].label}</button>
      <button type='button'>Самый дешевый</button>
      <button type='button'>Самый дешевый</button>
    </div>
  )
};

export default Tabs;