import React, { Component, Fragment } from 'react';
import Header from '../../common/header';

class Section extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return (
      <Fragment>
        <Header title="专栏" menu />
      </Fragment>
    )
  }
}

export default Section;