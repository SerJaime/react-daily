import React from 'react';
import { Consumer } from '../../context/Consumer';
import styles from './styles.styl';

function Item(props) {
  return (
    <div className={styles.itemList}>
      <div className={styles.item}>
        <div className={styles.itemTitle}>
          {props.item.title}
        </div>
        <div className={styles.itemImg}>
          <img src={`${props.context.PIC_URL}${props.item.images[0]}`} />
        </div>
      </div>
    </div>
  )
}

export default Consumer(Item);