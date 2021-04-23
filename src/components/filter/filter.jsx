import React, { Component } from 'react';

import './filter.css';

export default class Filter extends Component {
  state = {
    allTransfers: false,
    withoutTransfers: true,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  };

  render() {
    const {
      allTransfers,
      withoutTransfers,
      oneTransfer,
      twoTransfers,
      threeTransfers,
    } = this.state;

    return (
      <div className='filter-box'>
        <h3>Количество пересадок</h3>
        <div className='filter'>
          <input
            type="checkbox"
            id="allTransfers"
            name="allTransfers"
            checked={allTransfers}
            onChange={() => console.log('allTransfers')}
          />
          <label htmlFor="allTransfers">Все</label>
        </div>
        <div className='filter'>
          <input
            type="checkbox"
            id="withoutTransfers"
            name="withoutTransfers"
            checked={withoutTransfers}
            onChange={() => console.log('allTransfers')}
          />
          <label htmlFor="withoutTransfers">Без пересадок</label>
        </div>
        <div className='filter'>
          <input
            type="checkbox"
            id="oneTransfer"
            name="oneTransfer"
            checked={oneTransfer}
            onChange={() => console.log('allTransfers')}
          />
          <label htmlFor="oneTransfer">1 пересадка</label>
        </div>
        <div className='filter'>
          <input
            type="checkbox"
            id="twoTransfers"
            name="twoTransfers"
            checked={twoTransfers}
            onChange={() => console.log('allTransfers')}
          />
          <label htmlFor="twoTransfers">2 пересадки</label>
        </div>
        <div className='filter'>
          <input
            type="checkbox"
            id="threeTransfers"
            name="threeTransfers"
            checked={threeTransfers}
            onChange={() => console.log('allTransfers')}
          />
          <label htmlFor="threeTransfers">3 пересадки</label>
        </div>
      </div>
    )
  }
}