import React from 'react';
import Context from "./index";

export const Consumer = Component => {
  return props => (
    <Context.Consumer>
      {context => (
        <Component context={context} {...props} />
      )}
    </Context.Consumer>
  );
}