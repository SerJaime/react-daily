import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './styles.styl';

class Header extends Component {
  static defaultProps = {
    showHeader: true,
    title: ''
  }

  render() {
    const { title, showHeader } = this.props;
    return (
      <div className={`${styles.header} ${showHeader ? styles.transparent : null}`}>
        {title}
      </div>
    )
  }
}

Header.propTypes = {
  showHeader: PropTypes.bool,
  title: PropTypes.string
}

export default Header;