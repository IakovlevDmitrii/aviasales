
import React from 'react';
import {AviasalesServiceConsumer} from '../aviasales-service-context';

const withAviasalesService = () => (Wrapped) => (

  (props) => (
    <AviasalesServiceConsumer>
      {
        (aviasalesService) => (
          <Wrapped
            {...props}
            aviasalesService={aviasalesService}
          />
        )
      }
    </AviasalesServiceConsumer>
  )
);

export default withAviasalesService;
