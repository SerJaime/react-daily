import React, { Component, Fragment } from 'react';

class History extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return (
      <Fragment>
        <div>历史记录</div>
      </Fragment>
    )
  }
}

export default History;