import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import styles from './styles.styl';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
  }

  showMenu() {
    this.setState({
      show: true
    })
    this.bindEvent();
  }

  hideMenu() {
    this.setState({
      show: false
    })
    this.unbindEvent();
  }

  handleClick() {
    this.state.show ? this.hideMenu() : this.showMenu()
  }

  handleTouchStart(e) {
    const isMenu = e.path.some(item => item.className === styles.menu)
    if (this.state.show && !isMenu) {
      this.hideMenu();
    }
  }

  bindEvent() {
    document.addEventListener('touchstart', this.handleTouchStart);
  }

  unbindEvent() {
    document.removeEventListener('touchstart', this.handleTouchStart);
  }

  componentWillUnmount() {
    this.unbindEvent();
  }

  render() {
    const { show } = this.state;

    return (
      <div className={styles.menu}>
        <div className={styles.menuBtn} onClick={this.handleClick}>
          <i className="iconfont">&#xe682;</i>
        </div>
        {
          show ? 
          (
            <Fragment>
              <div id="menuList" className={styles.menuList}>
                <NavLink to="/" exact activeClassName={styles.active} className={styles.menuItem}>首页</NavLink>
                <NavLink to="/hot" activeClassName={styles.active} className={styles.menuItem}>热门文章</NavLink>
                <NavLink to="/sections" activeClassName={styles.active} className={styles.menuItem}>专栏</NavLink>
                <NavLink to="/history" activeClassName={styles.active} className={styles.menuItem}>历史记录</NavLink>
              </div>
            </Fragment>
          ) : null
        }
      </div>
    )
  }
}

Menu.propTypes = {
  
}

export default Menu;