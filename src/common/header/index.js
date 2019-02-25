import React, { Component } from 'react'
import styles from './styles.styl';

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.header}>
        {title}
      </div>
    )
  }
}

export default Header;