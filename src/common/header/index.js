import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './styles.styl';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  static defaultProps = {
    showHeader: true,
    title: '',
    transparence: 1
  }

  componentDidMount() {
    this.headerElement.style.backgroundColor = `rgba(2, 143, 214, ${this.props.transparence})`;
  }

  render() {
    const { title, showHeader } = this.props;
    return (
      // <CSSTransition
      //   in={showHeader}
      //   timeout={300}
      //   classNames="transparent"
      // >
      //   <div className={`${styles.header} ${showHeader ? styles.transparent : null}`}>{title}</div>
      // </CSSTransition>
      <div ref={(el) => {this.headerElement = el}} className={styles.header}>
        {title}
      </div>
    )
  }
}

Header.propTypes = {
  showHeader: PropTypes.bool,
  title: PropTypes.string,
  transparence: PropTypes.number
}

export default Header;