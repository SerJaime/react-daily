import React from 'react';
import { Consumer } from '../../context/Consumer';
import styles from './styles.styl';
import { Link } from 'react-router-dom';
import LazyImage from "../lazyImage/lazy-image";

function Item(props) {
  return (
    <Link to={`/detail/${props.item.id}`} className={styles.item}>
      <div className={styles.itemTitle}>
        {props.item.title}
      </div>
      <div className={styles.itemImg}>
        <LazyImage
          src={`${props.context.URL_PICTURE}${props.item.images[0]}`}
        />
      </div>
    </Link>
  )
}

export default Consumer(Item);