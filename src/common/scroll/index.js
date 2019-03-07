import React, { Component } from "react";
import PropTypes from "prop-types";
import BScroll from "better-scroll";
import styles from "./scroll.styl";

class Scroll extends Component {
  
  componentDidMount() {
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollView, {
        pullUpLoad: true,
        // 实时派发scroll事件
        probeType: 1,
      });

      if (this.props.onPullingUp) {
        this.bScroll.on("pullingUp", (scroll) => {
          this.props.onPullingUp(scroll);
        });
      }

      if (this.props.onScroll) {
        this.bScroll.on("scroll", (scroll) => {
          this.props.onScroll(scroll);
        });
      }
    }
  }
  componentWillUnmount() {
    this.bScroll.destroy();
  }
  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh();
      this.bScroll.finishPullUp();
      console.log('fresh')
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

Scroll.propTypes = {
  onPullingUp: PropTypes.func,
  pullUpLoad: PropTypes.bool,
  onScroll: PropTypes.func
};

Scroll.defaultProps = {
  onPullingUp: null,
  pullUpLoad: true,
  onScroll: null
};

export default Scroll
