
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {withAviasalesService} from '../../components/hoc';
import {compose, getViewTickets} from '../../utils';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import NoTickets from '../../components/no-tickets';
import TicketList from '../../components/ticket-list';

import {
  loadingActionCreator,
  ticketsError,
  ticketsLoaded } from '../../actions';

class TicketListContainer extends Component {

  static defaultProps = {
    error: null
  };

  componentDidMount() {

    const {
      aviasalesService,
      loadingDispatch,
      ticketsLoadedDispatch,
      ticketsErrorDispatch} = this.props;

    aviasalesService
      .getAviasalesTickets()
      .then((data) => {
        loadingDispatch();
        ticketsLoadedDispatch(data);})
      .catch((error) => ticketsErrorDispatch(error))
  }

  render(){

    const {
      isCheckedFilters,
      error,
      loading,
      sortingMethod,
      tickets} = this.props;

    const viewTickets = getViewTickets(isCheckedFilters, sortingMethod, tickets);

    if(error) {return <ErrorIndicator />}
    if(loading) {return <Spinner />}
    if(!viewTickets.length) {return <NoTickets />}

    return <TicketList tickets={ viewTickets } />
  }
}

const mapStateToProps = ({
  isCheckedFilters,
  error,
  loading,
  sortingMethod,
  tickets
}) => ({
  isCheckedFilters,
  error,
  loading,
  sortingMethod,
  tickets
});

const mapDispatchToProps = {
  loadingDispatch: loadingActionCreator,
  ticketsErrorDispatch: ticketsError,
  ticketsLoadedDispatch: ticketsLoaded};

TicketListContainer.propTypes = {
  aviasalesService: PropTypes.objectOf(
    PropTypes.func.isRequired).isRequired,

  error: PropTypes.objectOf(
    PropTypes.string.isRequired),

  isCheckedFilters: PropTypes.objectOf(
    PropTypes.bool.isRequired).isRequired,

  tickets: PropTypes.arrayOf(
    PropTypes.object.isRequired).isRequired,

  loading: PropTypes.bool.isRequired,
  loadingDispatch: PropTypes.func.isRequired,
  sortingMethod: PropTypes.string.isRequired,
  ticketsErrorDispatch: PropTypes.func.isRequired,
  ticketsLoadedDispatch: PropTypes.func.isRequired,
};

export default compose(
  withAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TicketListContainer)
