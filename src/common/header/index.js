import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './styles.styl';
import { CSSTransition } from 'react-transition-group';
import Menu from '../menu';

class Header extends Component {
  static defaultProps = {
    title: '',
    transparence: 1,
    menu: false
  }

  componentDidMount() {
    this.headerElement.style.backgroundColor = `rgba(2, 143, 214, ${this.props.transparence})`;
  }

  render() {
    const { title, menu } = this.props;
    return (
      <div ref={(el) => {this.headerElement = el}} className={styles.header}>
        {menu ? <Menu /> : null}
        {title}
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  transparence: PropTypes.number,
  menu: PropTypes.bool
}

export default Header;