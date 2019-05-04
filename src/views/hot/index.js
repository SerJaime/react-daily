import React, { Component, Fragment } from 'react';
import Header from '../../common/header';

class Hot extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return (
      <Fragment>
        <Header title="热门文章" menu />
      </Fragment>
    )
  }
}

export default Hot;