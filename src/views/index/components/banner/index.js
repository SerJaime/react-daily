import React, { Component } from 'react';
import { Consumer } from '../../../../context/Consumer';
import Swiper from 'swiper/dist/js/swiper.js';
import "swiper/dist/css/swiper.css";
import styles from '../../styles.styl';
import { Link } from 'react-router-dom';

class Banner extends Component {
  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay:{ //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
        delay: 5000,
        disableOnInteraction: false, //户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // 允许点击跳转
      }
    });
  }

  componentWillUnmount() {
    if (this.swiper) { // 销毁swiper
      this.swiper.destroy()
    }
  }

  render() {
    const { banners } = this.props;
    const { URL_PICTURE } = this.props.context;
    const bannerElements = banners.map((banner) => (
      <div className="swiper-slide" key={banner.get('news_id')}>
        <Link to={`/detail/${banner.get('news_id')}`}>
          <div className={styles.imgWrapper}>
            <h2>{banner.get('title')}</h2>
            <img src={`${URL_PICTURE}${banner.get('thumbnail')}`} width="100%" height="100%" />
          </div>
        </Link>
      </div>
    ));

    return (
      <div className={styles.bannerSlider}>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {bannerElements}
          </div>
          <div className="swiper-pagination-wrapper">
            <div className="swiper-pagination clear" />
          </div>
        </div>
      </div>
    )
  }
}

export default Consumer(Banner);