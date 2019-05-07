import React, { Component } from 'react';
import styles from '../styles.styl';
import { Link } from 'react-router-dom';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.goBack();
  }

  render() {
    const { newsId, comments } = this.props;

    return (
      <div className={styles.bottomBar}>
        <a onClick={this.handleClick} className={styles.btn}>
          <i className={`iconfont`}>&#xe61e;</i>
        </a>
        <Link to={`/comments/${newsId}`} replace className={styles.btn}>
          <i className={`iconfont`}>&#xe626;</i>
          <span className={styles.commentTip}>{comments}</span>
        </Link>
      </div>
    )
  }
}

export default Bar;