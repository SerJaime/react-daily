import React, { Component, Fragment } from 'react';

class Hot extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return (
      <Fragment>
        <div>热门文章</div>
      </Fragment>
    )
  }
}

export default Hot;