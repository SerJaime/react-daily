import React, { Component, Fragment } from 'react';
import Header from '../../common/header';
import styles from './styles.styl';

class Comments extends Component {
  componentDidMount() {
    const newsId = this.props.match.params.newsId;
    this.props.getLongComments(newsId);
  }

  render() {
     
    return (
      <Fragment>
        <Header title={`${26} 条点评`} />>
      </Fragment>
    )
  }
}

export default Comments;