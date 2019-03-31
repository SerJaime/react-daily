import React from 'react';
import styles from '../styles.styl';
import { Link } from 'react-router-dom';

function Bottom(props) {
  return (
    <div className={styles.bottom}>
      <Link to={`/detail/${props.id}`} className={styles.btn}>
        <i className={`iconfont`}>&#xe61e;</i>
      </Link>
    </div>
  )
}

export default Bottom;