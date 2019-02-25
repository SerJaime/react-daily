import React, { Component, Fragment } from 'react';

class Comments extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return (
      <Fragment>
        <div>文章评论</div>
      </Fragment>
    )
  }
}

export default Comments;