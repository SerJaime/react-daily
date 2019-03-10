import React, { Component } from 'react';
import styles from '../styles.styl';
import { Link } from 'react-router-dom';

function Bar(props) {
  const { newsId, comments } = props;

  return (
    <div className={styles.bottomBar}>
      <Link to='/' className={styles.btn}>
        <i className={`iconfont`}>&#xe61e;</i>
      </Link>
      <Link to={`/comments/${newsId}`} className={styles.btn}>
        <i className={`iconfont`}>&#xe626;</i>
        <span className={styles.commentTip}>{comments}</span>
      </Link>
    </div>
  )
}

export default Bar;