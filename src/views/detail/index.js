import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Comments from './comments';

class Detail extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <div>文章详情</div>
        <Route path={`${match.url}/comments`} component={Comments} />
      </Fragment>
    )
  }
}

export default Detail;