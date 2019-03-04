import React from 'react';
import { Consumer } from '../../context/Consumer';
import styles from './styles.styl';

function Item(props) {
  return (
    <div className={styles.itemList}>
      <div className={styles.item}>
        <div className={styles.itemTitle}>
          {props.item.get('title')}
        </div>
        <div className={styles.itemImg}>
          <img src={`${props.context.PIC_URL}${props.item.get('images').first()}`} />
        </div>
      </div>
    </div>
  )
}

export default Consumer(Item);