import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/header';
import Banner from './components/banner';
import Item from '../../common/item';
import Scroll from '../../common/scroll';
import styles from './styles.styl';
import { formatDate, throttle, getStyle } from '../../util';

class Index extends Component {
  constructor(props) {
    super(props);

    this.isChanging = false;
    this.PAGEWIDTH = 0

    this.handlePullingUp = this.handlePullingUp.bind(this);
    this.handleScroll = throttle(this.handleScroll, 16).bind(this);
    this.getPageWidth = this.getPageWidth.bind(this);
  }

  setIsChanging(value){
    this.isChanging = value;
  }

  getIsChanging() {
    return this.isChanging;
  }

  setHeaderBackground(transparence) {
    this.header.headerElement.style.backgroundColor = `rgba(2, 143, 214, ${transparence})`;
  }

  getPageWidth() {
    this.PAGEWIDTH = parseInt(getStyle(this.header.headerElement, 'width'))
  }
  
  componentDidMount() {
    this.props.changeIndexData();
    this.getPageWidth();
    window.addEventListener('resize', this.getPageWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getPageWidth);
  }

  componentDidUpdate(preProps) {
    if (preProps.beforeNewsList.size !== this.props.beforeNewsList.size) {
      const { changeIsPullUpLoad, changeUpdatedDay, beforeNewsList } = this.props;
      changeIsPullUpLoad(false);
      changeUpdatedDay(beforeNewsList.last().date);
      this.scroll.refresh();
    }
  }

  handlePullingUp() {
    const { changeIsPullUpLoad, loadMoreNews, updatedDate } = this.props;
    loadMoreNews(updatedDate);
  }

  handleScroll(scroll) {
    const HEIGHT = this.PAGEWIDTH * 0.586667;
    const STARTCHANGEY = HEIGHT * 0.22727;
    const scrollY = scroll.y >= 0 ? 0 : -scroll.y;
    const changing = scrollY >= STARTCHANGEY && scrollY <= HEIGHT;
    const transparence = changing ?  (scrollY - STARTCHANGEY) / (HEIGHT - STARTCHANGEY) : scrollY < STARTCHANGEY ? 0 : 1;
    if (changing) {
      this.setHeaderBackground(transparence);
      this.setIsChanging(true);
    } else {
      if (this.getIsChanging()) {
        this.setHeaderBackground(transparence);
      }
      this.setIsChanging(false);
    }
    
  }

  render() {
    const { showHeader, banners, todayNews, isPullUpLoad, beforeNewsList } = this.props;
    const oneDayList = listWithDate => (
      <div key={listWithDate.date}>
        <div id={listWithDate.date} className={styles.dateBar}>{formatDate(listWithDate.date)}</div>
        {listWithDate.stories.map(item => (<Item key={item.news_id} item={item} />))}
      </div>
    )
    
    return (
      <Fragment>
        <Header title="今日热闻" menu transparence={0} ref={(el) => {this.header = el;}} />
        <Scroll onPullingUp={this.handlePullingUp} onScroll={this.handleScroll} ref={(el) => { this.scroll = el; }}>
          <div style={{minHeight: '101%'}}>
            {banners.size === 0 ? null : <Banner banners={banners} />}
            {todayNews.map((item) => (<Item key={item.get('news_id')} item={item.toJS()} />))}
            {beforeNewsList.map(listWithDate => oneDayList(listWithDate))}
            <div className={styles.loadMoreTxt}>上拉加载更多</div>
          </div>
        </Scroll>
      </Fragment>
    )
  }
}

Index.propsTypes = {
  banners: PropTypes.array,
  showHeader: PropTypes.bool,
  todayNews: PropTypes.array,
  updatedDate: PropTypes.string,
  beforeNewsList: PropTypes.array
}

export default Index;