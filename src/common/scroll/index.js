import React, { Component } from "react"
// import PropTypes from "prop-types"
import BScroll from "better-scroll"
import styles from "./scroll.styl"

class Scroll extends Component {
  componentDidUpdate() {
    // 组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh();
    }
  }
  componentDidMount() {
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollView);
    }
  }
  componentWillUnmount() {
    this.bScroll.off("scroll");
    this.bScroll.destroy();
    this.bScroll = null;
  }
  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh();
    }
  }
  render() {
    return (
      <div className={styles.scrollView} ref={ (el) => { this.scrollView = el; }}>
        {/* 获取子组件 */}
        {this.props.children}
      </div>
    );
  }
}

// Scroll.defaultProps = {
//   direction: "vertical",
//   click: true,
//   refresh: false,
//   onScroll: null
// };

// Scroll.propTypes = {
//   direction: PropTypes.oneOf(['vertical', 'horizontal']),
//   // 是否启用点击
//   click: PropTypes.bool,
//   // 是否刷新
//   refresh: PropTypes.bool,
//   onScroll: PropTypes.func
// };

export default Scroll
