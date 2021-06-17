
import React from 'react';

const withClass = (className) => (Component) => (
  (props) => (
    <div className={className}>
      <Component {...props} />
    </div>
  )
);

export default withClass;
