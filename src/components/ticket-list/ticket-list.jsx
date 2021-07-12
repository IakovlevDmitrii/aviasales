import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import aviasalesService from '../../services';
import { getTicketsToShow } from '../../utils';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import NoTicketsToShow from '../no-tickets-to-show';
import TicketListItem from '../ticket-list-item';

import styles from './ticket-list.module.scss';

import {
  allTicketsLoadedActionCreator,
  ticketsError,
  ticketsSetLoaded } from '../../store/actions';

const TicketList = (
  {
    allTicketsLoaded,
    hasError,
    isCheckedFilters,
    sortingMethod,
    tickets,

    allTicketsLoadedDispatch,
    ticketsErrorDispatch,
    ticketsSetLoadedDispatch,
  }
) => {
  const loadTicketsSet = useCallback(() => {

    aviasalesService
      .getTicketsSet()
      .then(({ ticketsSet, stop }) => {
        ticketsSetLoadedDispatch(ticketsSet);

        if (stop) {
          allTicketsLoadedDispatch(true);
        } else {
          loadTicketsSet();
        }
      })
      .catch(() =>
        ticketsErrorDispatch(true)
      )
  }, [
    allTicketsLoadedDispatch,
    ticketsErrorDispatch,
    ticketsSetLoadedDispatch,
  ]);

  useEffect(() => loadTicketsSet(), [loadTicketsSet]);

  const ticketsToShow = getTicketsToShow(isCheckedFilters, sortingMethod, tickets);

  const allTickets = ticketsToShow.map((ticketData) => {
    const { id } = ticketData;

    return (
      <li key={id}>
        <TicketListItem ticketData={ticketData}/>
      </li>
    );
  });


  if (hasError) {
    return <ErrorIndicator />;
  }
  if (allTicketsLoaded && !ticketsToShow.length) {
    return <NoTicketsToShow />;
  }

  return (
    <>
      {!allTicketsLoaded && <Spinner />}
      <ul className={styles.ticketList}>
        {allTickets}
      </ul>
    </>
  );
};

const mapStateToProps = ({ allTicketsLoaded, hasError, isCheckedFilters, sortingMethod, tickets }) => ({
  allTicketsLoaded,
  isCheckedFilters,
  hasError,
  sortingMethod,
  tickets,
});

const mapDispatchToProps = {
  allTicketsLoadedDispatch: allTicketsLoadedActionCreator,
  ticketsErrorDispatch: ticketsError,
  ticketsSetLoadedDispatch: ticketsSetLoaded,
};

TicketList.propTypes = {
  allTicketsLoaded: PropTypes.bool.isRequired,
  allTicketsLoadedDispatch: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  isCheckedFilters: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  sortingMethod: PropTypes.string.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  ticketsErrorDispatch: PropTypes.func.isRequired,
  ticketsSetLoadedDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
