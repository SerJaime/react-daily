import React, { Component, Fragment } from 'react';

class Section extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return (
      <Fragment>
        <div>专栏</div>
      </Fragment>
    )
  }
}

export default Section;