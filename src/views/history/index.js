import React, { Component, Fragment } from 'react';
import Header from '../../common/header';

class History extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return (
      <Fragment>
        <Header title="历史记录" menu />
      </Fragment>
    )
  }
}

export default History;